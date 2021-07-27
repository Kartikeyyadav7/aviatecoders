import { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import BlogCard from "../../components/BlogCard";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
const readingTime = require("reading-time");
import { postPath, postFilePaths } from "../../lib/mdx";
import { Link as IconLink } from "react-feather";

interface BlogProps {
	posts: {
		content: string;
		data: {
			title: string;
			description: string;
			seoTitle: string;
			isPublished: boolean;
			publishedOn: Date;
			author: string;
			coverImage: string;
			category: string;
		};
		filePath: string;
		timeForReading: string;
	}[];
}

const Index: React.FC<BlogProps> = ({ posts }) => {
	const WebDev = posts.filter((post) => post.data.category === "webdev");
	const Javascript = posts.filter(
		(post) => post.data.category === "javascript"
	);
	const ReactNative = posts.filter(
		(post) => post.data.category === "reactnative"
	);
	return (
		<Layout>
			<Head>
				<title>Blog | Aviate Coder</title>
				<meta name="description" content="Blog page of Aviate Coders" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="mr-20 font-semibold text-2xl mb-5 flex items-center">
				<div className="opacity-0 hover:opacity-100 hover:transition hover:duration-300 hover:ease-in-out">
					<IconLink />
				</div>
				<div className="ml-2">
					<Link href="/blog/webdev">
						<a>
							<h1>Web Development</h1>
						</a>
					</Link>
				</div>
			</div>
			<div className="flex flex-wrap ml-5  ">
				{WebDev.map((post) => (
					<Link
						as={`/webdev/${post.filePath.replace(/\.mdx?$/, "")}`}
						href={`/webdev/${post.filePath.replace(/\.mdx?$/, "")}`}
					>
						<a>
							<div key={post.filePath}>
								<BlogCard
									title={post.data.title}
									publishedOn={post.data.publishedOn}
									coverImage={post.data.coverImage}
									timeForReading={post.timeForReading}
								/>
							</div>
						</a>
					</Link>
				))}
			</div>
			<div className="mr-20 font-semibold text-2xl mt-8 mb-5 flex items-center">
				<div className="opacity-0 hover:opacity-100 hover:transition hover:duration-300 hover:ease-in-out">
					<IconLink />
				</div>
				<div className="ml-2">
					<Link href="/blog/javascript">
						<a>
							<h1>Javascript</h1>
						</a>
					</Link>
				</div>
			</div>
			<div className="flex flex-wrap ml-5 ">
				{Javascript.map((post) => (
					<Link
						as={`/javascript/${post.filePath.replace(/\.mdx?$/, "")}`}
						href={`/javascript/${post.filePath.replace(/\.mdx?$/, "")}`}
					>
						<a>
							<div key={post.filePath}>
								<BlogCard
									title={post.data.title}
									publishedOn={post.data.publishedOn}
									coverImage={post.data.coverImage}
									timeForReading={post.timeForReading}
								/>
							</div>
						</a>
					</Link>
				))}
			</div>
			<div className="mr-20 font-semibold text-2xl mt-8 mb-5 flex items-center">
				<div className="opacity-0 hover:opacity-100 hover:transition hover:duration-300 hover:ease-in-out">
					<IconLink />
				</div>
				<div className="ml-2">
					<Link href="/blog/reactnative">
						<a>
							<h1>React Native</h1>
						</a>
					</Link>
				</div>
			</div>
			<div className="flex flex-wrap ml-5 ">
				{ReactNative.map((post) => (
					<Link
						as={`/reactnative/${post.filePath.replace(/\.mdx?$/, "")}`}
						href={`/reactnative/${post.filePath.replace(/\.mdx?$/, "")}`}
					>
						<a>
							<div key={post.filePath}>
								<BlogCard
									title={post.data.title}
									publishedOn={post.data.publishedOn}
									coverImage={post.data.coverImage}
									timeForReading={post.timeForReading}
								/>
							</div>
						</a>
					</Link>
				))}
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const posts = postFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(postPath, filePath), "utf8");
		const { content, data } = matter(source);
		const stats = readingTime(content);
		const timeForReading = stats.text;
		return {
			content,
			data,
			filePath,
			timeForReading,
		};
	});
	return {
		props: {
			posts,
		},
	};
};

export default Index;
