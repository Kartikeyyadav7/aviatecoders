interface InstaCardProps {
	media_url: string;
}

const InstaCard: React.FC<InstaCardProps> = ({ media_url }) => {
	return (
		<>
			<div className="sm:w-80 m-2 lg:w-72  xl:w-96 hover:shadow-2xl transition duration-300 ease-in-out">
				<article className="overflow-hidden rounded-lg shadow-lg">
					<div className=" block h-auto w-full">
						<img src={media_url} alt="Instagram Post" />
					</div>
				</article>
			</div>
		</>
	);
};

export default InstaCard;
