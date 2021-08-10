import React from "react";
import { ChevronDown } from "react-feather";
import Link from "next/link";
import useSound from "use-sound";
import { connect } from "react-redux";
const Pop = require("../public/audio/pop.mp3");

interface DropDownProps {
	sound: {
		isSound: boolean;
	};
}

const DropDown: React.FC<DropDownProps> = ({ sound }) => {
	const [playbackRate, setPlaybackRate] = React.useState(0.75);

	const [play] = useSound(Pop, {
		playbackRate,
		interrupt: true,
	});

	const handleSound = () => {
		if (sound.isSound === true) {
			setPlaybackRate(playbackRate + 0.1);
			play();
		}
	};
	return (
		<div>
			<div className="group  relative inline-block text-left">
				<button
					className="inline-flex justify-center w-full  px-4 py-2   font-normal   "
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					onMouseEnter={handleSound}
				>
					<Link href="/blog">Blog</Link>
					<ChevronDown />
				</button>
				<div className="absolute hidden bg-white rounded-md dark:bg-black pt-1 group-hover:block">
					<div>
						<Link href="/blog/javascript">
							<a className="rounded-t hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white hover:font-medium py-2 px-4 block whitespace-no-wrap">
								Javascript
							</a>
						</Link>
					</div>

					<div>
						<Link href="/blog/webdev">
							<a className="rounded-t hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white hover:font-medium py-2 px-4 block whitespace-no-wrap">
								Web Dev
							</a>
						</Link>
					</div>
					<div>
						<Link href="/blog/reactnative">
							<a className="rounded-t hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white hover:font-medium py-2 px-4 block whitespace-no-wrap">
								React Native
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	sound: state.sound,
});

export default connect(mapStateToProps)(DropDown);
