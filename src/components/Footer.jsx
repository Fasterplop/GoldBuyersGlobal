import React from 'react';
import Link from 'next/link';
import { navLinks } from "@/constants";
import {FaWhatsapp} from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">

        <div className=" items-center flex flex-col justify-center">
        
        <ul className="flex justify-center sm:space-x-6 items-center flex-wrap flex-col sm:flex-row text-center underline">
                {navLinks.map((nav) =>(
                  
                  <li key={nav.id} className=" hover:font-semibold hover:text-[#FFD700] active:ring-2 font-montserrat text-white text-[16px] transition duration-300">
                  <Link href={`${nav.id}`}><span className="">{nav.title}</span></Link>
                  {/* <a href={`${nav.id}`}><span className="py-4 px-3">{nav.title}</span></a> */}
                  </li>
                ))}
                </ul>
                <Link href="tel:305-915-5896">
                <h1 className=' text-white text-[16px] font-montserrat hover:text-[#FFD700] hover:font-semibold active:ring-2'> Phone number: <span className='underline'>(305) 915-5896</span></h1>
                </Link>
        </div>

        <div className="border-[1px] border-[#444444] w-[70%] my-2 text-[16px] mx-auto"/>
    
        <div className="text-center">
          <p>Copyright &copy; {new Date().getFullYear()} Gold Buyers Global</p>
          <Link href="https://wa.me/7866692775?text=">
          <p className="text-gray-300 flex flex-row justify-center">Website created by:<span className='underline ml-2'>Luis Lozada</span> <FaWhatsapp className='items-center text-2xl text-green-600 ' /> </p>
          </Link> 
        </div>
    
    </footer>
  );
};

export default Footer;