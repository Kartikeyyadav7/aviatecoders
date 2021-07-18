// import Footer from '../components/footer'
import Meta from "../components/Meta";

interface Props {
	// any other props that come into the component, you don't have to explicitly define children.
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Meta />
			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
