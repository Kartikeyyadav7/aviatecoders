interface Props {
	frontMatter: {
		title: string;
		description: string;
		author: string;
		category: string;
	};
}

const BlogLayout: React.FC<Props> = ({ children, frontMatter }) => {
	return (
		<>
			<div className="text-center m-8 mt-32 mb-32 pt-20 font-semibold text-3xl">
				{frontMatter.title}
			</div>
			<main className="max-w-prose m-auto dark:prose-dark prose  leading-8 font-medium ">
				<div>By {frontMatter.author}</div>
				<span className="inline-block border-2 border-black border-opacity-50 dark:border-2 dark:border-white dark:border-opacity-50  rounded-full px-3  text-sm font-semibold  mr-2  ">
					{frontMatter.category}
				</span>
				{children}
			</main>
		</>
	);
};

export default BlogLayout;
