import React, { useState } from "react";
const Index = () => {
    const [show, setShow] = useState(true);

    return (
      
    <div>

    <div className="flex justify-between mb-5">
        <div><h2 className="font-bold text-3xl text-black">All Items</h2></div>
        <div className="flex">
                                    <div><div className="relative  mr-5">
                                    <div className="form-control">
                        <div className="input-group  ">
                            <select className="select select-bordered bg-white">
                            <option disabled selected>Pick category</option>
                            <option>Notes</option>
                            <option>Contacts</option>
                            <option>Emails</option>
                            <option>Social Media</option>
                            <option>SSH Key</option>
                            <option>Games</option>
                            <option>Crypto</option>
                            <option>Services</option>
                            <option>Dev Keys</option>
                            <option>Software Licence</option>
                            </select>
                            <button className="btn bg-black">Go</button>
                        </div>
                        </div>

                                                 
          
        </div></div>
            <div>
            <select className="select select-ghost w-full max-w-xs">
                            <option disabled selected>Short by Name</option>
                            <option>Name (A-Z)</option>
                            <option>Newest</option>                  
                            </select>
          
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
             <p class="text-sm text-purple-500  truncate ">
                Social Media
             </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
          <div className="dropdown dropdown-end">
  <label tabIndex={0} className="">   
  <img class="w-6 h-6 rounded-full cursor-pointer" src="/icons/vertical-dots.svg" />
</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white  text-black rounded-box w-52">
    <li ><a className="active:bg-black">View on MoonScan</a></li>
    <li><a className="active:bg-black">Favorite</a></li>
  </ul>
</div>
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
             <p class="text-sm text-purple-500 truncate ">
                Social Media
             </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
          <div className="dropdown dropdown-end">
  <label tabIndex={0} className="">   
  <img class="w-6 h-6 rounded-full cursor-pointer" src="/icons/vertical-dots.svg" />
</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white  text-black rounded-box w-52">
    <li ><a className="active:bg-black">View on MoonScan</a></li>
    <li><a className="active:bg-black">Favorite</a></li>
  </ul>
</div>
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
             <p class="text-sm text-purple-500  truncate ">
                Social Media
             </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
          
          <div className="dropdown dropdown-end">
  <label tabIndex={0} className="">   
  <img class="w-6 h-6 rounded-full cursor-pointer" src="/icons/vertical-dots.svg" />
</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white  text-black rounded-box w-52">
    <li ><a className="active:bg-black">View on MoonScan</a></li>
    <li><a className="active:bg-black">Favorite</a></li>
  </ul>
</div>
       
          </div>
       </div>
    </li>

 </ul>
 </div>
    
);
            };
export default Index;