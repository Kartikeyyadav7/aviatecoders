import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "../redux/store";
import { positions, Provider as ReactAlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }: AppProps) {
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
			<Provider store={store}>
				<ThemeProvider attribute="class">
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		</ReactAlertProvider>
	);
}
export default MyApp;
