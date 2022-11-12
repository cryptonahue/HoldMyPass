import Image from 'next/image'

const Index = () => (
    <div>
             



       
{/* Sidebar starts */}
 <div className="absolute lg:relative w-64 h-screen bg-gray-100  hidden lg:block">
 <div className="h-16 w-full flex items-center px-8 bg-greenLengs">
                         <Image
       src="/img/logo.svg"
       alt="Logo"
       width={150}
       height={50}
       
     />
 </div>
  <ul aria-orientation="vertical" className=" py-6">
     <li className="pl-6 cursor-pointer  text-sm leading-3 tracking-normal pb-4 pt-5 text-black hover:font-semibold focus:font-semibold focus:outline-none">
         <div className="flex items-center">
             <div>
                 <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" />
                     <rect x={4} y={4} width={6} height={6} rx={1} />
                     <rect x={14} y={4} width={6} height={6} rx={1} />
                     <rect x={4} y={14} width={6} height={6} rx={1} />
                     <rect x={14} y={14} width={6} height={6} rx={1} />
                 </svg>
             </div>
             <span className="ml-2">Dashboard</span>
         </div>
     </li>
     <li className="pl-6 cursor-pointer  text-sm leading-3 tracking-normal pb-4 pt-5 text-black hover:font-semibold focus:font-semibold focus:outline-none">
        <div className="flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" />
                 <polyline points="8 16 10 10 16 8 14 14 8 16" />
                 <circle cx={12} cy={12} r={9} />
             </svg>
             <span className="ml-2">Explorer</span>
         </div>
     </li>
    
 </ul> 
</div>





    </div>
);
export default Index;


