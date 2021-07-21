import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import landingPage from "../public/landingPage.png";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Aviate coders</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="grid grid-cols-2 gap-8 items-center justify-center">
				<div className="mr-20 font-semibold text-5xl">
					<h1>Aviating Your Efficiency To Code</h1>
					<button className="bg-[#1E2E46] mt-10 hover:bg-[#EFF0F2] hover:text-[#1E2E46] text-white font-bold py-2 px-4 rounded text-lg">
						Subscribe
					</button>
				</div>
				<div className="justify-self-center">
					<Image
						src={landingPage}
						alt="landing page"
						width={600}
						height={500}
					/>
				</div>
			</div>
		</Layout>
	);
}

// my-32 mx-0 mr-20
