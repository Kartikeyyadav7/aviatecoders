import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import Layout from "../../components/Layout";
import BlogLayout from "../../components/BlogLayout";
import { postPath, getHeadings, paths } from "../../lib/mdx";

interface ReactNativePageProps {
	frontMatter: {
		title: string;
		description: string;
	};
	params: {
		slug: string;
	};
	source: MDXRemoteSerializeResult;
}

const ReactNativePage: React.FC<ReactNativePageProps> = ({
	source,
	frontMatter,
}) => {
	return (
		<Layout>
			<Head>
				<title>{frontMatter.title} | Aviate Coders</title>
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
	const source = fs.readFileSync(postFilePath, "utf8");

	const headings = getHeadings(source);
	// console.log(headings);

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
	return {
		paths,
		fallback: false,
	};
};

export default ReactNativePage;
