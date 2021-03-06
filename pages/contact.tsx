import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { useFormspark } from "@formspark/use-formspark";
import { useRouter } from "next/router";

const FORMSPARK_FORM_ID =
	process.env.NEXT_PUBLIC_FORM_SUBMISSION ?? "I don't think this is defined";

export default function ContactUs() {
	const [submit, submitting] = useFormspark({
		formId: FORMSPARK_FORM_ID,
	});
	const router = useRouter();

	const initialState = {
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	};

	const [message, setMessage] = useState(initialState);

	const onSubmit = async (e) => {
		e.preventDefault();
		await submit({ message });
		router.push("/thankyou");
	};

	const handleInput = (e) => {
		const inputName = e.currentTarget.name;
		const value = e.currentTarget.value;

		setMessage((prev) => ({ ...prev, [inputName]: value }));
	};

	return (
		<Layout>
			<Head>
				<title>Contact | Aviate coders</title>
				<meta name="description" content="Contact form for Aviate Coders" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<form
				onSubmit={onSubmit}
				className=" flex items-center justify-center  py-12 px-4 sm:px-3 lg:px-4"
			>
				<div className="w-full max-w-2xl px-5 py-10 m-auto mt-10  rounded-lg shadow-xl">
					<div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
						Contact us !
					</div>
					<div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
						<div className="col-span-2 lg:col-span-1">
							<div className=" relative ">
								<label htmlFor="firstName">First Name</label>
								<input
									type="firstName"
									id="firstName"
									name="firstName"
									className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#1E2E46] focus:border-transparent"
									placeholder="First Name"
									value={message.firstName}
									onChange={handleInput}
								/>
							</div>
						</div>
						<div className="col-span-2 lg:col-span-1">
							<div className=" relative ">
								<label htmlFor="lastName">Last Name</label>
								<input
									type="lastName"
									id="lastName"
									name="lastName"
									className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#1E2E46] focus:border-transparent"
									placeholder="Last Name"
									value={message.lastName}
									onChange={handleInput}
								/>
							</div>
						</div>
						<div>
							<div className=" w-full ">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#1E2E46] focus:border-transparent"
									placeholder="Email"
									value={message.email}
									onChange={handleInput}
								/>
							</div>
						</div>
						<div className="col-span-2">
							<label className="text-gray-700">
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									name="message"
									className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#1E2E46] focus:border-transparent"
									placeholder="Message"
									value={message.message}
									onChange={handleInput}
								></textarea>
							</label>
						</div>

						<div className="col-span-2 text-right">
							<button
								type="submit"
								disabled={submitting}
								className="py-2 px-4  bg-[#1E2E46] hover:bg-[#1E2E46]-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
							>
								Send
							</button>
						</div>
					</div>
				</div>
			</form>
		</Layout>
	);
}
