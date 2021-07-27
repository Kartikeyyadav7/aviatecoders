import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
// import dynamic from 'next/dynamic'
import Head from "next/head";
import Link from "next/link";
import path from "path";
import Layout from "../../components/Layout";
import { postFilePaths, postPath } from "../../lib/mdx";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
// const components = {
//   a: CustomLink,
//   // It also works with dynamically-imported components, which is especially
//   // useful for conditionally loading components for certain routes.
//   // See the notes in README.md for more details.
//   TestComponent: dynamic(() => import('../../components/TestComponent')),
//   Head,
// }

interface JavascriptPageProps {
	// source: string;
	frontMatter: {
		title: string;
		description: string;
	};
	params: {
		slug: string;
	};
	source: MDXRemoteSerializeResult;
}

const JavascriptPage: React.FC<JavascriptPageProps> = ({
	source,
	frontMatter,
}) => {
	return (
		<Layout>
			<div>{frontMatter.title}</div>
			<main>
				<MDXRemote {...source} />
			</main>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	let mdxSource, data, content;

	if (params) {
		const postFilePath = path.join(postPath, `${params.slug}.mdx`);
		const source = fs.readFileSync(postFilePath, "utf8");

		// console.log(source);

		const result = matter(source);
		data = result.data;
		content = result.content;

		console.log("content", content);
		console.log("data", data);
		mdxSource = await serialize(content, {
			scope: data,
		});
	}

	// const source = JSON.parse(JSON.stringify(mdxSource));
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

export default JavascriptPage;
