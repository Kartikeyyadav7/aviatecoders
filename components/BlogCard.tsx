import Image from "next/image";
import blogImg from "../public/blogImg.jpg";

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
		<div className="p-2 ">
			<div className="max-w-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 ease-in-out border-2 border-solid border-opacity-5 border-black">
				<div className="px-6 py-4">
					<div className="rounded-lg">
						<Image width={500} height={300} src={coverImage} alt={title} />
					</div>

					<div className="font-bold text-xl mb-0 padding-top={1.25 rem}">
						{title}
					</div>
				</div>
				<div className="px-6 pb-1">
					<span className="inline-block bg-gray-200 rounded-full px-3  text-sm font-semibold text-gray-700 mr-2 mb-2">
						{timeForReading}
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3  text-sm font-semibold text-gray-700 mr-2 mb-2">
						{date.toDateString()}
					</span>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
