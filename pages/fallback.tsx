import React from "react";
import Layout from "../components/Layout";

const Fallback = () => {
	return (
		<Layout>
			<div>Unable to fetch data, please laod in online mode</div>
		</Layout>
	);
};

export default Fallback;
