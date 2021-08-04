import Image from "next/image";

interface InstaCardProps {
	media_url: string;
}

const InstaCard: React.FC<InstaCardProps> = ({ media_url }) => {
	return (
		<>
			<div className="sm:w-80 m-2 lg:w-72 h-full xl:w-96">
				<article className="overflow-hidden rounded-lg shadow-lg">
					<div className=" block h-auto w-full">
						<Image
							width={500}
							height={500}
							src={media_url}
							alt="Instagram Post"
						/>
					</div>
				</article>
			</div>
		</>
	);
};

export default InstaCard;
