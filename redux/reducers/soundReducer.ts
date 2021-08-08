import { SET_SOUND } from "../type";

const initialState = {
	isSound: true,
};

export default function SoundReducer(state = initialState, action: any) {
	switch (action.type) {
		case SET_SOUND:
			return {
				isSound: !state.isSound,
			};
		default:
			return state;
	}
}
