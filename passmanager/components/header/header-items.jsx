import React, { useState } from 'react';
import Image from 'next/image'

import Sidebar from '../sidebar/sidebar'
import MobileNavBar from '../nav-mobile/nav-mobile'
import Itemlist from '../item-list/item-list'
 


export default function IndexPage() {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);
    const [menu, setMenu] = useState(false);
    const [menu1, setMenu1] = useState(false);
    const [menu2, setMenu2] = useState(false);
    const [menu3, setMenu3] = useState(false);

    return (
        <>




            <div className="w-full h-screen bg-gray-100">
                <div className="flex flex-no-wrap">
                  
               <Sidebar/>
             

{/*Mobile responsive sidebar*/}
<div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"} id="mobile-nav">
  <div className="bg-black absolute h-full w-full lg:hidden" onClick={() => setShow(!show)} />
  <div className="absolute z-40 sm:relative w-full md:w-96 shadow pb-4  lg:hidden transition duration-150 ease-in-out h-full">
      <div className="flex flex-col justify-between h-full w-full">
          <div>
              <div className="flex items-center justify-between px-8">
                  <div className="h-16 w-full flex items-center">
                  <Image
        src="/img/logo-white.svg"
        alt="Logo"
        width={150}
        height={50}
        
      /> 
                  </div>
                  <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(!show)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                  </div>
              </div>
            {/*   <ul aria-orientation="vertical" className=" py-6">
                  <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 hover:font-semibold focus:outline-none">
                      <div className="flex items-center">
                          <div className="w-6 h-6 md:w-8 md:h-8">
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <rect x={4} y={4} width={6} height={6} rx={1} />
                                  <rect x={14} y={4} width={6} height={6} rx={1} />
                                  <rect x={4} y={14} width={6} height={6} rx={1} />
                                  <rect x={14} y={14} width={6} height={6} rx={1} />
                              </svg>
                          </div>
                          <span className="ml-2 xl:text-base md:text-2xl text-base">Dashboard</span>
                      </div>
                  </li>
               
                  <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal mb-4 py-2 hover:font-semibold  focus:outline-none">
                      <div className="flex items-center">
                          <div className="w-6 h-6 md:w-8 md:h-8">
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                  <circle cx={12} cy={12} r={9} />
                              </svg>
                          </div>
                          <span className="ml-2 xl:text-base md:text-2xl text-base">Explorer</span>
                      </div>
                  </li>
                 
              </ul> */}
          </div>
          <div className="w-full">
              <div className="flex justify-center mb-4 w-full px-6 ">
                  {/* <div className="relative w-full">
                      <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx={10} cy={10} r={7} />
                              <line x1={21} y1={21} x2={15} y2={15} />
                          </svg>
                      </div>
                      <input className="bg-gray-200 focus:outline-none border hover:border-2 hover:border-black rounded-none w-full text-sm text-gray-500  pl-10 py-2" type="text" placeholder="Search" />
                  </div> */}
                
              </div>
              <div className="border-t border-black">
                  <div className="w-full flex items-center justify-between px-6 pt-1">
                      <div className="flex items-center  ">
                     {/*  <Image className="w-10" width={30} height={30} src="/img/user.png" alt="avatar" /> */}
                          <p className="md:text-xl  text-gray-800 text-base leading-4 ml-2">CryptoNahue</p>
                         
                      </div>
                      <ul className="flex">
                          <li className="cursor-pointer text-white pt-5 pb-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                              </svg>
                          </li>
                          <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                              </svg>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
{/*Mobile responsive sidebar*/}





                    <div className="w-full">
                        {/* Navigation starts */}
                        <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between  relative z-10">
                            <div className="hidden lg:flex w-full pr-6 rounded-lg">
                                <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24 ">
                                  {/*   <div className="relative w-full">
                                        <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                        
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={10} cy={10} r={7} />
                                                <line x1={21} y1={21} x2={15} y2={15} />
                                            </svg>
                                        </div>
                                        <input className="border border-black focus:outline-none focus:border-black focus:border-2 rounded-none w-full text-sm text-gray-500 bg-greenLengs pl-12 py-2" type="text" placeholder="Search" />
                                    </div> */}
                                    <div className="relative w-full">
                                      {/*   <nav>
                                            <div  className="flex justify-between list-none"><li>
                                            <a className="text-black font-semibold">Home</a>
                                        </li>
                                    
                                        <li>
                                            <a className="text-black hover:font-semibold">How it works?</a>
                                        </li>
                                        <li>
                                            <a className="text-black hover:font-semibold">Features</a>
                                        </li>

                                      
                                        
                                        </div>
                                        
                                        </nav> */}
                                    </div>
                                   
                                </div>
                                <div className="w-1/2 hidden lg:flex">
                                    <div className="w-full flex items-center pl-8 justify-end">
                                     {/*  <div className="h-full w-20 flex items-center justify-center border-l border-black">
                                              <div  className="relative cursor-pointer text-gray-600 hover:text-black">
                                  
                                              <svg class="h-8 w-8 text-gray-600 hover:text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg> 
                                              </div>
                                         
                                          </div>
                                          <p className="text-gray-800  hover:text-black">CREATE</p> */}
                                          
                                        {/* <div className="h-full w-20 flex items-center justify-center border-r border-l border-black">
                                            <div  className="relative cursor-pointer text-gray-600 hover:text-black">
                                                <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                </svg>
                                                <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                                            </div>
                                        </div>
                                        <div className="h-full w-20 flex items-center justify-center border-r border-black mr-4 cursor-pointer hover:text-black text-gray-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                            </svg>
                                        </div> */}
                                        <div className="flex items-center relative cursor-pointer px-3 py-1  rounded-lg" onClick={() => setProfile(!profile)}>
                                            <div className="rounded-full">
                                                {profile ? (
                                                    <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-12">
                                                        <li className="flex w-full justify-between text-gray-600 hover:text-black cursor-pointer items-center ">
                                                            <div className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <circle cx={12} cy={7} r={4} />
                                                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                                </svg>
                                                                <span className="text-sm ml-2">My Profile</span>
                                                            </div>
                                                        </li>
                                                        <li className="flex w-full justify-between text-gray-600 hover:text-black cursor-pointer items-center mt-2 ">
                                                            <div className="flex items-center ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                                                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                                                </svg>
                                                                <span className="text-sm ml-2">Disconnect</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                ) : (
                                                    ""
                                                )}
                                                <div className="relative  py-1 m-0 ">
                                                   <img className=" rounded-full " width="30px" height="30px" src="/img/user.png" alt="avatar" /> 
                                                     <div className="w-2 h-2 rounded-full bg-green-400 absolute inset-0 mb-0 mr-0 m-auto" />  
                                                </div>
                                            </div>
                                            <p className="text-black text-sm mx-3 p-1 rounded-lg ">cryptonahue.eth</p>
                                     
                                             <div className="cursor-pointer text-gray-600">
                                                <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-600  visible lg:hidden relative" onClick={() => setShow(!show)}>
                            <div className="flex justify-between w-screen items-center">
                            <div className="ml-3">                 <Image
                              src="/img/logo.svg"
                              alt="Logo"
                              width={150}
                              height={50}
                              
                            /></div>
                            <div className="mr-3">{show ? (
                                    " "
                                ) : (
                                  
                                    <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                )} </div>
                            </div>
                           
                                
                                
                            </div>
                        </nav>
                        {/* Navigation ends */}
                        {/* Remove class [ h-64 ] when adding a card block */}
                        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6 ">
                            {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                    
                          {/*   <div className="flex justify-between items-center">
                                <div className="w-1/6 h-24 rounded border-dashed border-2 border-gray-300">
                                Pineados
                                </div>
                                <div className="w-1/6 rounded border-dashed border-2 border-gray-300">
                                Pineados
                                </div>
                                <div className=" w-1/6 rounded border-dashed border-2 border-gray-300">
                                Pineados
                                </div>
                                <div className=" w-1/6 rounded border-dashed border-2 border-gray-300">
                                Pineados
                                </div>
                                <div className="w-1/6 rounded border-dashed border-2 border-gray-300">
                                Pineados
                                </div>
                                <div className="w-1/6 rounded border-dashed border-2 border-gray-300">
                                Pineados
                                </div>
                            </div> */}
                   <div className="w-full h-auto">
                   
                   {/* Place your content here */}
                   <Itemlist/>
                 
                   </div>
                           
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
}



