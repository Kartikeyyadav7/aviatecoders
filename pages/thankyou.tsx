import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";

function ThankYou() {
	return (
		<Layout>
			<Head>
				<title>Thank You</title>
				<meta
					name="description"
					content="Thank you page for contact submission"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="w-full max-w-screen-sm flex justify-center items-center  m-auto mt-20 pt-14  rounded-lg shadow-x">
				<div className="rounded overflow-hidden shadow-lg">
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">
							Thank You For Contacting Us
						</div>
					</div>
					<Link href="/">
						<a className="block py-2.5 px-4 rounded transition duration-200">
							Home
						</a>
					</Link>
				</div>
			</div>
		</Layout>
	);
}

export default ThankYou;
