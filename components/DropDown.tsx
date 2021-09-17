import React, { useContext } from "react";
import { ChevronDown } from "react-feather";
import Link from "next/link";
import useSound from "use-sound";
import { context } from "../state";
const Pop = require("../public/audio/pop.mp3");

interface DropDownProps {}

const DropDown: React.FC<DropDownProps> = () => {
	const { state } = useContext(context);
	const [playbackRate, setPlaybackRate] = React.useState(0.75);

	const [play] = useSound(Pop, {
		playbackRate,
		interrupt: true,
	});

	const handleSound = () => {
		if (state.isSound === true) {
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
				<div className="absolute hidden backdrop-filter backdrop-blur-lg bg-opacity-90 bg-white dark:bg-black dark:bg-opacity-0 firefox:bg-opacity-90 z-auto rounded-md  pt-1 group-hover:block">
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
							<a className="rounded-t hover:bg-gray-100  dark:hover:bg-gray-700 hover:text-black dark:hover:text-white hover:font-medium py-2 px-4 block whitespace-no-wrap">
								React Native
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

// const mapStateToProps = (state: any) => ({
// 	sound: state.sound,
// });

// export default connect(mapStateToProps)(DropDown);

export default DropDown;
