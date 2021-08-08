import React from 'react'
import Logo from "./Logo"
export default function Subscribe() {
    return (
        
        <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8 ">

		<div className="max-w-md w-full space-y-8 bg-gray-50  shadow-xl">
			<div>
            <div className="ml-44 items-center p-2">
				<Logo className=" justify-items-center mr-56  h-12 w-auto"/>
            </div>
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Subscribe us..
				</h2>
				
			</div>

			<div className="rounded p-5 bg-gray-50 max-w-md rounded overflow-hidden shadow-xl p-5">

				<form className="space-y-4" action="#" method="POST">
					<input type="hidden" name="remember" value="true"/>
					<div className="rounded-md shadow-sm -space-y-px">
						<div className="grid gap-6">
							<div className="col-span-12">
								<label for="first_name" className="block text-sm font-medium text-gray-700">First name</label>
								<input type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-lg text-lg sm:text-sm border-gray-300 rounded-md h-12 p-2"></input>
							</div>

							<div className="col-span-12">
								<label for="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
								<input type="text" name="email_address" id="email_address" autocomplete="email" className="mt-2 ring-gray-500 focus:ring-indigo-200 focus:border-indigo-200 block w-full text-lg shadow-lg sm:text-sm border-gray-300 h-12 p-2 rounded-md"></input>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-between">
					
					</div>


					<div>
						<button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1E2E46] mt-10 hover:bg-[#EFF0F2] hover:text-[#1E2E46] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							<span className="absolute left-0 inset-y-0 flex items-center pl-3">
								
		
							</span>
							Subscribe
						</button>
					</div>
				</form>
        </div>
    </div>
</div>


    
    )
}
