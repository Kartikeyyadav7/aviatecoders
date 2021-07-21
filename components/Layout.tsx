// import Footer from '../components/footer'
import Meta from "./Meta";
import Header from "./Header";

interface Props {
	// any other props that come into the component, you don't have to explicitly define children.
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Meta />
			<Header />
			<div className="max-w-screen-lg">
				<main>{children}</main>
			</div>
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
