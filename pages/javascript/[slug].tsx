import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import Layout from "../../components/Layout";
import BlogLayout from "../../components/BlogLayout";
import { postFilePaths, postPath, getHeadings } from "../../lib/mdx";
// import dynamic from "next/dynamic";
// import CustomLink from "../../components/CustomLink";

interface JavascriptPageProps {
	frontMatter: {
		title: string;
		description: string;
	};
	params: {
		slug: string;
	};
	source: MDXRemoteSerializeResult;
}

// const components = {
// 	a: CustomLink,
// It also works with dynamically-imported components, which is especially
// useful for conditionally loading components for certain routes.
// 	TestComponent: dynamic(() => import("../../components/TestComponent")),
// 	Head,
// };

const JavascriptPage: React.FC<JavascriptPageProps> = ({
	source,
	frontMatter,
}) => {
	// console.log(source);
	return (
		<Layout>
			<Head>
				<title>{frontMatter.title} | Aviate Coders </title>
				<meta name="description" content={frontMatter.description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<BlogLayout frontMatter={frontMatter}>
				<MDXRemote {...source} />
			</BlogLayout>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postFilePath = path.join(postPath, `${params?.slug}.mdx`);
	// console.log(params);
	const source = fs.readFileSync(postFilePath);

	const { content, data } = matter(source);

	const mdxSource = await serialize(content, {
		// Optionally pass remark/rehype plugins
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = postFilePaths
		// Remove file extensions for page paths
		.map((path) => path.replace(/\.mdx?$/, ""))
		// Map the path into the static paths object required by Next.js
		.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};

export default JavascriptPage;
