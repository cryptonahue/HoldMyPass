import React from "react";
import Head from "next/head";

function Index() {
    return (
        <>
            <div id="popup"  className="z-50 fixed w-full flex justify-center inset-0">
                <div onclick="popuphandler(false)" className="w-full h-full  z-0 absolute inset-0" />
                <div className="mx-auto container">
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
                            <div className="bg-black rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                                <p className="text-base font-semibold text-white">Add Item</p>
                                <button onclick="popuphandler(false)" className="focus:outline-none">
                                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 7L7 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 7L21 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                         

                            <div className="px-4 md:px-10 pt-6 md:pt-6 md:pb-4 pb-7">
                               
                                <form className="">

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-gray-500">Category </span>
                                    </label>
                                    <select className="select select-bordered bg-white text-black">
                                        <option disabled selected>Select category</option>
                                        <option>General</option>
                                        <option>Notes</option>
                                        <option>Contacts</option>
                                        <option>Emails</option>
                                        <option>Social Media</option>
                                        <option>SSH Key</option>
                                        <option>Games</option>
                                        <option>Crypto</option>
                                        <option>Services</option>
                                        <option>Dev Keys</option>
                                        <option>Sofware Licence</option>
                                    </select>
                                   
                                    </div>
                                    

                                    <label className="label">
                                        <span className="label-text text-gray-500">Name </span>
                                    </label>
                                    <div className="flex items-center space-x-9">
                                        
                                    <input type="text" placeholder="Type your item name" className="text-black input w-full max-w-xs bg-white input-bordered" />
                                    </div>

                                    <label className="label">
                                        <span className="label-text text-gray-500">Username </span>
                                    </label>
                                    <div className="flex items-center space-x-9">
                                        
                                    <input type="text" placeholder="Type your username" className="text-black input w-full max-w-xs bg-white input-bordered" />
                                    </div>

                                    <label className="label">
                                        <span className="label-text text-gray-500">Password </span>
                                    </label>
                                    <div className="flex items-center space-x-9">
                                        
                                    <input type="password" placeholder="Type your password" className="text-black input w-full max-w-xs bg-white input-bordered" />
                                    </div>

                                    <label className="label">
                                        <span className="label-text text-gray-500">URL </span>
                                    </label>
                                    <div className="flex items-center space-x-9">
                                        
                                    <input type="text" placeholder="Type URL" className="text-black input w-full max-w-xs bg-white input-bordered" />
                                    </div>

                                    <label className="label">
                                        <span className="label-text text-gray-500">Description </span>
                                    </label>
                                    <div className="">
                                        <textarea placeholder="Description" className="py-3 pl-3 overflow-y-auto bg-white text-black h-24 border rounded border-gray-200 w-full resize-none focus:outline-none" defaultValue={""} />
                                    </div>
                                </form>
                                <div className="flex items-center justify-between ">
                                   
                                    <div className="modal-action flex justify-between">
                                    <label onclick="my-modal" htmlFor="my-modal"  className="btn">
                                        Cancel
                                    </label>
                                    <label htmlFor="my-modal" className="btn">Encrypt</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    );
}

export default Index;