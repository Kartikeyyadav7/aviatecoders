import { createContext } from "react";

type Context = {
	isSound: boolean;
};

const initialState = {
	isSound: true,
};

function SoundReducer(
	state: Context,
	action: { type: string; payload: string }
) {
	switch (action.type) {
		case "SET_SOUND":
			return {
				isSound: !state.isSound,
			};
		default:
			return state;
	}
}

const stateContext = createContext<{ state: Context; dispatch: Function }>({
	state: initialState,
	dispatch: () => 0,
});

export const Provider = stateContext.Provider;

export const reducer = SoundReducer;

export const context = stateContext;

export const defaultState = initialState;
