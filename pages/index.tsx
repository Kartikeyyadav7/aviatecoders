import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import landingPage from "../public/landing-page-svg.png";
import BlogCard from "../components/BlogCard";
import InstaCard from "../components/InstaCard";
import Modal from "../components/Modal";
import { getPosts } from "../lib/mdx";
import { Instagram, Twitter, Linkedin } from "react-feather";

interface HomeProps {
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
	postList: {
		data: {
			id: string;
			permalink: string;
			media_url: string;
		}[];
	};
}

const Home: React.FC<HomeProps> = ({ posts, postList }) => {
	const publishedPosts = posts.filter((post) => post.data.isPublished === true);
	// const datePublish = publishedPosts.map((date) => date.data.publishedOn);
	const sortedPosts = publishedPosts
		.slice()
		.sort(
			(a, b) =>
				new Date(b.data.publishedOn).valueOf() -
				new Date(a.data.publishedOn).valueOf()
		);

	const getTopLatestPosts = sortedPosts.slice(0, 6);

	return (
		<Layout>
			<Head>
				<title>Aviate coders</title>
				<meta
					name="description"
					content="A site for developers to better understand code"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="grid md:grid-cols-2 lg:gap-8 md:items-center md:justify-center md:gap-1 pt-20  grid-cols-1">
				<div className="lg:mr-20 lg:font-semibold lg:text-5xl md:text-3xl md:font-medium  text-2xl font-medium ">
					<h1>Aviating Your Efficiency To Code</h1>
					<div className="flex items-center lg:mt-10 mt-5 ">
						<Modal />
						<div className="ml-5">
							<Link href="https://instagram.com/aviatecoders">
								<a>
									<Instagram />
								</a>
							</Link>
						</div>
						<div className="ml-5">
							<Link href="https://twitter.com/aviatecoders">
								<a>
									<Twitter />
								</a>
							</Link>
						</div>
						<div className="ml-5">
							<Link href="https://linkedin.com/in/aviatecoders">
								<a>
									<Linkedin />
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="lg:justify-self-center order-first w-full md:order-last">
					<Image
						src={landingPage}
						alt="landing page"
						width={600}
						height={500}
					/>
				</div>
			</div>
			<div className="ml-0.5 lg:font-semibold lg:text-3xl md:font-medium md:text-2xl mb-4 text-xl font-medium  mt-5 ">
				<h1>Our Latest Blogs</h1>
			</div>
			<div className="flex flex-wrap h-full justify-between">
				{getTopLatestPosts.map((post) => (
					<Link
						key={post.filePath}
						as={`/${post.data.category}/${post.filePath.replace(
							/\.mdx?$/,
							""
						)}`}
						href={`/${post.data.category}/${post.filePath.replace(
							/\.mdx?$/,
							""
						)}`}
					>
						<a>
							<div key={post.filePath} className=" ">
								<BlogCard
									key={post.filePath}
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
			{/* <div className="ml-0.5 lg:font-semibold lg:text-3xl md:font-medium md:text-2xl text-xl font-medium mb-4 mt-5 ">
				<h1>Instagram Feed</h1>
			</div> */}
			{/* <div className="flex flex-wrap h-full justify-between  ">
				{postList.data.slice(0, 6).map((post) => (
					<Link
						key={post.id}
						as={`${post.permalink}`}
						href={`${post.permalink}`}
					>
						<a>
							<div key={post.id} className="">
								<InstaCard media_url={post.media_url} />
							</div>
						</a>
					</Link>
				))}
			</div> */}
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const posts = getPosts();
	const res = await fetch(
		`https://graph.instagram.com/me/media?fields=id,permalink,media_url&access_token=${process.env.INSTAGRAM_ACCESS_KEY}`
	);

	const data = await res.json();
	const postList = data;

	return {
		props: {
			posts,
			postList,
		},
	};
};

export default Home;
