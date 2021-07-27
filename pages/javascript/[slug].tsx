import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import Layout from "../../components/Layout";
import { postFilePaths, postPath } from "../../lib/mdx";

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

export default JavascriptPage;
