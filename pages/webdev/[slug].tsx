import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import Layout from "../../components/Layout";
import BlogLayout from "../../layout/BlogLayout";
import { postFilePaths, postPath, getHeadings } from "../../lib/mdx";

interface WebdevProps {
	frontMatter: {
		title: string;
		description: string;
	};
	params: {
		slug: string;
	};
	source: MDXRemoteSerializeResult;
}

const WebdevPage: React.FC<WebdevProps> = ({ source, frontMatter }) => {
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
	let mdxSource, data, content;

	if (params) {
		const postFilePath = path.join(postPath, `${params.slug}.mdx`);
		const source = fs.readFileSync(postFilePath, "utf8");
		const headings = getHeadings(source);
		console.log(headings);
		const result = matter(source);
		data = result.data;
		content = result.content;

		mdxSource = await serialize(content, {
			scope: data,
		});
	}

	const source = mdxSource;
	// console.log(source);
	const frontMatter = data;
	// console.log(frontMatter);

	return {
		props: {
			source,
			frontMatter,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = postFilePaths
		// Remove file extensions for page paths
		.map((path) => path.replace(/\.mdx?$/, ""))
		// Map the path into the static paths object required by Next.js
		.map((slug) => ({ params: { slug } }));

	// console.log(paths);

	return {
		paths,
		fallback: false,
	};
};

export default WebdevPage;
