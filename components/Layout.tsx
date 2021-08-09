import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

interface Props {
	// any other props that come into the component, you don't have to explicitly define children.
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Meta />
			<Navbar />
			<div className="max-w-screen-xl m-8  mx-auto px-5">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
