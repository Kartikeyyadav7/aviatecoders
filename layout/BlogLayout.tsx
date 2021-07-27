interface Props {
	frontMatter: {
		title: string;
		description: string;
	};
}

const BlogLayout: React.FC<Props> = ({ children, frontMatter }) => {
	return (
		<>
			<div className="text-center m-8 mt-32 mb-32 font-semibold text-3xl">
				{frontMatter.title}
			</div>
			<main className="max-w-screen-md m-auto leading-8 font-medium ">
				{children}
			</main>
		</>
	);
};

export default BlogLayout;
