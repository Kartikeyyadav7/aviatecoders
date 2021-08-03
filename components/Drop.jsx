import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import Link from "next/link";
import useSound from "use-sound";
import Pop from "../public/audio/pop.mp3"

export default function Drop() {


   const [playbackRate, setPlaybackRate] = React.useState(1);

  const [play] = useSound(Pop, {
    playbackRate,
    interrupt: true,
  });

  const handleClick = () => {
    play();
  };

  return (
    <div className=" text-right  top-8" onClick={handleClick}>
      <Menu as="div" className="relative inline-block text-right"   >
        <div>
        
          <Menu.Button className="mt-1 inset-x-0 font-sans font-semibold ">
           
            Blog
            
          </Menu.Button>
        
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-100"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-out duration-95"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items  
          className="absolute left-0 w-56 mt-2 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
            
            
              <Menu.Item
              as="a" href="/blog/webdev"
              >
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-200 text-black font-semibold' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                   
                    Webdev
                  </button>
                )}
              </Menu.Item>
          
           
             
              <Menu.Item>
              
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-200 text-black font-semibold' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                   <Link href="/blog/javascript">
                   Javascript
                   </Link>
                  </button>
                )}
               
              </Menu.Item>
              <Link href="/blog/reactnative">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-200 text-black font-semibold' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                   
                    React Native
                  </button>
                )}
              </Menu.Item>
                </Link>
            </div>
            
          </Menu.Items>
        
        </Transition>
      </Menu>
    </div>
  )
}

