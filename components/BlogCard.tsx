import React from 'react'
export default function BlogCard() {
    return (
     
 <div className="p-2 ">  

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">      <img className="w-full" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="hoisting"/>

        <div className="font-bold text-xl mb-2">Hoisting in javascript</div>
        <p className="text-gray-700 text-base">
        Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">7 minute read</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">April 7 2021</span>
      </div>
    </div>

    
  </div>

    )
}

