import React from "react";
import Image from "next/image";
import cover from "../public/audio/Modal.png";
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
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
          <div className="justify-center items-center rounded-2xl flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto rounded-t-lg my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="h-44 w-full flex  bg-[#7579D5]">
                <Image width={600} height={1200} src={cover}></Image>
              </div>
              <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                  <div className="grid max-w-xl grid-cols-1">
                    <div>
                      <h3 className="text-3xl  ml-48 font-semibold">
                        Subscribe{" "}
                      </h3>
                    </div>
                    <div className="mt-2">
                      {" "}
                      <p className="text-sm ml-12 text-gray-500 w-125 align-center">
                        Subscribe our newsletter and get up to dated with new
                        technologies and our tutorial
                      </p>
                    </div>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto p-6">
                  <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                      <input
                        type="text"
                        id="contact-form-name"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#1E2E46] focus:border-transparent"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-span-1 lg:col-span-1">
                    <div className=" relative ">
                      <input
                        type="text"
                        id="contact-form-email"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#1E2E46] focus:border-transparent"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" w-full ">
                      <input
                        type="text"
                        id="contact-form-email"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#1E2E46] focus:border-transparent"
                        placeholder="Email"
                      />
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
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
