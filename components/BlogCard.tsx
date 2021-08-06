import Image from "next/image";

interface BlogCardProps {
	title: string;
	publishedOn: Date;
	coverImage: string;
	timeForReading: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
	title,
	publishedOn,
	coverImage,
	timeForReading,
}) => {
	const date: Date = new Date(publishedOn);
	return (
		<>
			<div className="sm:w-80 m-2 lg:w-72 h-full xl:w-96 hover:shadow-2xl transition duration-300 ease-in-out">
				<article className="overflow-hidden rounded-lg shadow-lg">
					<div className=" block h-auto w-full">
						<Image width={500} height={300} src={coverImage} alt={title} />
					</div>
					<header className="flex items-center justify-between leading-tight p-2 md:p-4">
						<h1 className="text-lg">
							<h1 className="no-underline hover:underline ">{title}</h1>
						</h1>
					</header>
					<footer className="flex items-center justify-between leading-none p-2 md:p-4 ">
						<span className="inline-block border-2 border-black border-opacity-50 dark:border-2 dark:border-white dark:border-opacity-50  rounded-full px-3  text-sm font-semibold  mr-2 mb-2">
							{timeForReading}
						</span>
						<span className="inline-block border-2 border-black border-opacity-50 dark:border-2 dark:border-white dark:border-opacity-50  rounded-full px-3  text-sm font-semibold  mr-2 mb-2">
							{date.toDateString()}
						</span>
					</footer>
				</article>
			</div>
		</>
	);
};

export default BlogCard;
