
import Image from 'next/image';
export default function BlogCard() {
    return (
     
 <div className="p-2 ">  

    <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-2xl transition duration-300 ease-in-out ">
      <div className="px-6 py-4">   
         < Image width={500 } height={400 } src="/blogg.jpg" alt="hoisting"/>
       
        <div className="font-bold text-2xl mb-0 padding-top={1.25 rem}">Hoisting in javascript</div>
       
      </div>
      <div className="px-6 pt-2 pb-1">
        <span className="inline-block bg-gray-200 rounded-full px-3  text-sm font-semibold text-gray-700 mr-2 mb-2">7 minute read</span>
        <span className="inline-block bg-gray-200 rounded-full px-3  text-sm font-semibold text-gray-700 mr-2 mb-2">April 7 2021</span>
      </div>
    </div>

    
  </div>

    )
}

