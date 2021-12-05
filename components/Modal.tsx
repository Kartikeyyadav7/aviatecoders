import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = process.env.NEXT_PUBLIC_FORM_SUBMISSION;

export default function Modal() {
	const [showModal, setShowModal] = React.useState(false);
	const [submit, submitting] = useFormspark({
		formId: FORMSPARK_FORM_ID,
	});

	const initialState = {
		firstName: "",
		lastName: "",
		email: "",
	};

	const [message, setMessage] = useState(initialState);

	const alert = useAlert();
	const onSubmit = async (e) => {
		e.preventDefault();
		await submit({ message });
		setShowModal(false);
		alert.success("Welcome, Aviator");
	};

	const handleInput = (e) => {
		const inputName = e.currentTarget.name;
		const value = e.currentTarget.value;

		setMessage((prev) => ({ ...prev, [inputName]: value }));
	};

	// const submitButton = () => {
	// 	setShowModal(false);
	// 	alert.success("Welcome, Aviator");
	// };
	// if (state.succeeded) {
	// 	return <></>;
	// }
	return (
		<>
			<button
				className="bg-[#1E2E46] text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
				onClick={() => setShowModal(true)}
			>
				Subscribe
			</button>

			{showModal ? (
				<>
					<div className="justify-center items-center rounded-xl flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto rounded-t-lg my-6 mx-auto max-w-lg">
							{/*content*/}

							<div className="  bg-[#ffffff]">
								<img src="/modal.png" alt="modal image" />
							</div>
							<div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
									<div className="grid max-w-xl grid-cols-1">
										<div>
											<h3 className="text-xl md:text-3xl  text-[#1E2E46] text-center font-semibold">
												Subscribe
											</h3>
										</div>
										<div className="mt-2">
											<p className="text-sm text-gray-500 w-125 text-center">
												Subscribe our newsletter and get up to dated with new
												technologies and get notified for our tutorials
											</p>
										</div>
									</div>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-black text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}

								<form onSubmit={onSubmit}>
									<div className="grid max-w-xl grid-cols-2 gap-4 m-auto p-2">
										<div className="col-span-2 lg:col-span-1">
											<div className=" relative ">
												<label htmlFor="firstName" className="text-sm"></label>
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
										<input
											type="hidden"
											name="_email.subject"
											value="Someone subscribed to your mail list"
										/>
										<input
											type="hidden"
											name="_email.template.title"
											value="Someone subscribed to your mailing list"
										/>
										<div className="col-span-2 lg:col-span-1">
											<div className=" relative ">
												<label htmlFor="lastName"></label>
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
										<div className="w-full grid col-span-2 lg:col-span-2  md:col-span-2 sm:col-span-2">
											<div className=" w-full grid col-span-2 lg:col-span-2  md:col-span-2 sm:col-span-2">
												<label htmlFor="email"></label>
												<input
													type="email"
													id="email"
													name="email"
													className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#1E2E46] focus:border-transparent"
													placeholder="Email"
													value={message.email}
													onChange={handleInput}
												/>
												{/* <ValidationError
													prefix="Email"
													field="email"
													errors={state.errors}
												/> */}
											</div>
										</div>
									</div>

									{/*footer*/}
									<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
										<button
											className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
											type="button"
											onClick={() => setShowModal(false)}
										>
											Close
										</button>
										<button
											className="bg-[#1E2E46]  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
											// type="button"
											type="submit"
											// disabled={state.submitting}
											disabled={submitting}
											// onClick={submitButton}
										>
											Subscribe
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
