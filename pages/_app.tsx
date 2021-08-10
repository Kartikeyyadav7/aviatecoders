import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "../redux/store";
import { positions, Provider as ReactAlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function MyApp({ Component, pageProps }: AppProps) {
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
