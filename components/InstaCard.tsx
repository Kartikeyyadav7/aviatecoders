import Image from "next/image";

interface InstaCardProps {
	id: string;
	permalink: string;
	media_url: string;
}

const InstaCard: React.FC<InstaCardProps> = ({ id, permalink, media_url }) => {
	return (
		<div className="p-2  h-full">
			<div className="h-full max-w-sm dark:bg-[#1E2837] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 ease-in-out border-2 border-solid border-opacity-5 border-black">
				<div className="px-6 py-4">
					<div className="rounded-lg">
						<Image
							width={500}
							height={500}
							src={media_url}
							alt="Instagram Post"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InstaCard;
