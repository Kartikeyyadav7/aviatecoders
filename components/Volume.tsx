import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { connect } from "react-redux";
import { checkSound } from "../redux/actions/soundAction";
import useSound from "use-sound";
const Volumes = require("../public/audio/pop.mp3");

interface VolumeProps {
	checkSound: any;
	sound: any;
}

const Volume: React.FC<VolumeProps> = ({ checkSound, sound }) => {
	const [playbackRate, setPlaybackRate] = useState(0.95);

	const [play] = useSound(Volumes, {
		playbackRate,
		interrupt: true,
	});

	const handleClick = () => {
		setPlaybackRate(playbackRate + 0.1);
		play();
	};

	const properties = {
		Sun: {
			cx: 12,
			cy: 4,
			opacity: 0,
			transform: "rotate(0deg)",
			r: 0,
		},
		Moon: {
			cx: 30,
			cy: 0,
			opacity: 1,
			transform: "rotate(0deg)",
			r: 0,
		},
	};

	const { transform } = properties[sound.isSound ? "Sun" : "Moon"];

	const svgContainerProps = useSpring({ transform });

	return (
		<div>
			{sound.isSound ? (
				<animated.svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-volume-2"
					onClick={(event) => {
						checkSound();
						handleClick();
					}}
					style={{
						cursor: "pointer",
						...svgContainerProps,
					}}
				>
					<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>

					<animated.path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></animated.path>
				</animated.svg>
			) : (
				<animated.svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-volume-2"
					onClick={function (event) {
						checkSound();
						handleClick();
					}}
					style={{
						cursor: "pointer",
						...svgContainerProps,
					}}
				>
					<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
				</animated.svg>
			)}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	sound: state.sound,
});

export default connect(mapStateToProps, { checkSound })(Volume);
