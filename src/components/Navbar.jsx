import React, {useState} from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {

  const [isToggled, setIsToggled] = useState(false);

  const toggleFunction = () => {
    setIsToggled(!isToggled);
  }

  return(
    <nav className="bg-gray-200 sticky top-0 z-50">
      <div className=" max-w-6xl mx-auto ">
        
        {/* change to justify-between if secondary menu is added */}
        <div className="flex sm:justify-center justify-end">
  
          <div className="flex">
  
          {/* primary menu */}
            
               <ul className="hidden sm:flex items-center space-x-6">
                {navLinks.map((nav) =>(
                  
                  <li key={nav.id} className=" hover:font-semibold hover:bg-[#FFD700] active:ring-2 font-montserrat py-4 text-black text-[18px] transition duration-300">
                  <Link href={`${nav.id}`}><span className="py-4 px-3">{nav.title}</span></Link>
                  {/* <a href={`${nav.id}`}><span className="py-4 px-3">{nav.title}</span></a> */}
                  </li>
                ))}
                </ul>
    
            
          {/* secondary menu (optional) */}
            {/* <div className="pl-[150px] flex items-center space-x-1">
                  <a href="" className="px-3 py-4">FB</a>
                  <a href="" className="px-3 py-4">IG</a>
            </div> */}
  
  
  
            {/* mobile button */}
            <div className="sm:hidden flex items-center px-8">
              <button onClick={toggleFunction} className="my-2 text-4xl ">
                  {!isToggled ? <AiOutlineMenu /> : <AiOutlineClose />}
              </button>
            </div>
          </div>
        </div>
      </div>
  
            {/* mobile navbar */}
      <div className={`${isToggled ? "flex" : "hidden"} `}>
      <ul className="sm:hidden w-full">
                {navLinks.map((nav) =>(
                  <li key={nav.id} className="text-black font-montserrat text-center border-b-2 block py-2 px-4 hover:font-semibold hover:bg-[#FFD700] active:ring-2 text-md">
                  <Link href={`${nav.id}`}>{nav.title}</Link>
                  {/* <a href={`${nav.id}`}>{nav.title}</a> */}
                  </li>
                ))}
                </ul>
      </div>      
  
    </nav>)

}

export default Navbar;
