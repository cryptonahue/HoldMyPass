import React, { useState } from "react";
const Index = () => {
    const [show, setShow] = useState(true);

    return (
      
    <div>



    <div className="flex justify-between mb-5">
        <div><h2 className="font-bold text-3xl">All Items</h2></div>
        <div className="flex">
            <div><div className="relative  mr-5">
            <div className="bg-white  flex items-center justify-between border rounded border-gray-300  w-40 cursor-pointer" onClick={() => setShow(!show)}>
                <p className="pl-3 py-3 text-gray-600 dark:text-gray-4000 text-sm leading-3 tracking-normal font-normal">Short By Name</p>
                <div className="cursor-pointer text-gray-600 dark:text-gray-400 mr-3">
                    {show ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 15 12 9 18 15" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    )}
                </div>
            </div>
            {!show && (
                <ul className="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow rounded mt-2 pb-1 w-48 absolute">
                    <li className="cursor-pointer rounded-t text-sm flex flex-col font-bold leading-3 tracking-normal pt-4 pb-3 mb-1 bg-indigo-700 text-white px-3">
                        <span className="font-medium">Steven Johnson</span>
                        <span className="font-normal mt-2">stevedoe@gmail.com</span>
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Interface Settings</li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Color Theme</li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Wallpaper</li>
                    <li>
                        <hr className="border-gray-200 my-1" />
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Notifications</li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Alerts</li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Email</li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Push Notifications</li>
                </ul>
            )}
        </div></div>
            <div></div>
        <div className="relative">
            <div className="bg-white  flex items-center justify-between border rounded border-gray-300  w-40 cursor-pointer" onClick={() => setShow(!show)}>
                <p className="pl-3 py-3 text-gray-600 dark:text-gray-4000 text-sm leading-3 tracking-normal font-normal">Select Category</p>
                <div className="cursor-pointer text-gray-600 dark:text-gray-400 mr-3">
                    {show ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 15 12 9 18 15" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    )}
                </div>
            </div>
            {!show && (
                <ul className="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow rounded mt-2 pb-1 w-48 absolute">
                    <li className="cursor-pointer rounded-t text-sm flex flex-col font-bold leading-3 tracking-normal pt-4 pb-3 mb-1 bg-indigo-700 text-white px-3">
                        <span className="font-medium">Steven Johnson</span>
                        <span className="font-normal mt-2">stevedoe@gmail.com</span>
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Interface Settings</li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Color Theme</li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Wallpaper</li>
                    <li>
                        <hr className="border-gray-200 my-1" />
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Notifications</li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Alerts</li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Email</li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Push Notifications</li>
                </ul>
            )}
        </div>

        

</div>
    </div>
        
    <ul class=" divide-y divide-gray-200 ">
    <li class="sm:pb-4 shadow py-2 px-3 rounded-lg mb-4">
       <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
             <img class="w-8 h-8 rounded-full" src="/img/subsocial.png" />
          </div>
          <div class="flex-1 min-w-0">
             <p class="text-sm font-semibold text-gray-900  truncate ">
                Subsocial
             </p>
             <p class="text-sm text-gray-500 truncate ">
                HoldMyPass
             </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
          <img class="w-6 h-6 rounded-full cursor-pointer" src="/icons/vertical-dots.svg" />
          </div>
       </div>
    </li>

    <li class="sm:pb-4 shadow py-2 px-3 rounded-lg mb-4">
       <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
             <img class="w-8 h-8 rounded-full" src="/img/subsocial.png" />
          </div>
          <div class="flex-1 min-w-0">
             <p class="text-sm font-semibold text-gray-900  truncate ">
                Subsocial
             </p>
             <p class="text-sm text-gray-500 truncate ">
                HoldMyPass
             </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
          <img class="w-6 h-6 rounded-full cursor-pointer" src="/icons/vertical-dots.svg" />
          </div>
       </div>
    </li>
    <li class=" sm:pb-4 shadow py-2 px-3 rounded-lg mb-4">
       <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
             <img class="w-8 h-8 rounded-full" src="/img/subsocial.png" />
          </div>
          <div class="flex-1 min-w-0">
             <p class="text-sm font-semibold text-gray-900  truncate ">
                Subsocial
             </p>
             <p class="text-sm text-gray-500 truncate ">
                HoldMyPass
             </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
          
          <img class="w-6 h-6 rounded-full cursor-pointer" src="/icons/vertical-dots.svg" />


          </div>
       </div>
    </li>

 </ul>
 </div>
    
);
            };
export default Index;