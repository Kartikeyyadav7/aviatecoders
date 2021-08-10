interface Props {
	frontMatter: {
		title: string;
		description: string;
		author:string;
		category:string;
	};
}

const BlogLayout: React.FC<Props> = ({ children, frontMatter }) => {
	return (
		<>
			<div className="text-center m-8 mt-32 mb-32 font-semibold text-3xl">
			
				{frontMatter.title}
			</div>
			
			<main className="max-w-prose m-auto prose prose-green leading-8 font-medium ">
			<div >
			    By {frontMatter.author}
			</div>
			<span className="inline-block bg-gray-200 rounded-full px-3  text-sm font-semibold text-gray-700 mr-2 mb-2">
						{frontMatter.category}
					</span>
				{children}
			</main>
		</>
	);
};

export default BlogLayout;
