import Layout from "../components/Layout";


import React from 'react'

export default function ContactUs() {
    return (

        <Layout>
        <div>
    
<form className=" min-h-screen flex items-center justify-center  py-12 px-4 sm:px-3 lg:px-4">
    <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow-xl">
        <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Contact us !
        </div>
        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                    <input type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#1E2E46] focus:border-transparent" placeholder="First Name"/>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                        <input type="text" id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#1E2E46] focus:border-transparent" placeholder="Last Name"/>
                        </div>
                    </div>
                   <div >
                    <div className=" w-full ">
                        <input type="text" id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#1E2E46] focus:border-transparent" placeholder="Email"/>
                        </div>
                   </div>
                    <div className="col-span-2">
                        <label className="text-gray-700" for="name">
                            <textarea className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#1E2E46] focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                    <div className="col-span-2 text-right">
                        <button type="submit" className="py-2 px-4  bg-[#1E2E46] hover:bg-[#1E2E46]-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </form>


        </div>
    </Layout>
    )
}
