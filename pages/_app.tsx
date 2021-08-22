import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import { positions, Provider as ReactAlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import * as ga from "../lib/ga";
import { defaultState, reducer, Provider } from "../state";

function MyApp({ Component, pageProps }: AppProps) {
	const [state, dispatch] = useReducer(reducer, defaultState);
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on("routeChangeComplete", handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	const options = {
		timeout: 5000,
		position: positions.BOTTOM_CENTER,
	};

	return (
		<ReactAlertProvider template={AlertTemplate} {...options}>
			<Provider value={{ state, dispatch }}>
				<ThemeProvider attribute="class">
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		</ReactAlertProvider>
	);
}
export default MyApp;
