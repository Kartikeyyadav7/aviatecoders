import { GetStaticProps } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postPath, postFilePaths } from "../../lib/mdx";

interface BlogProps {
	posts: {
		content: string;
		dataStringify: {
			title: string;
			description: string;
			seoTitle: string;
			isPublished: boolean;
			publishedOn: Date;
			author: string;
		};
		filePath: string;
	}[];
	title: string;
	path: string;
}

const index: React.FC<BlogProps> = ({ posts }) => {
	return (
		<div>
			<ul>
				{posts.map((post) => (
					<li key={post.filePath}>
						<Link as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`} href="/">
							<a>{post.dataStringify.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const posts = postFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(postPath, filePath));
		console.log("source", source);
		const { content, data } = matter(source);
		// console.log("content", content, "data", data);
		const dataStringify = JSON.parse(JSON.stringify(data));
		return {
			content,
			dataStringify,
			filePath,
		};
	});
	return {
		props: {
			posts,
		},
	};
};

export default index;
