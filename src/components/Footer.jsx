import React from 'react';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
    
        <div className="text-center">
          <p>Copyright &copy; {new Date().getFullYear()} Gold Buyers Global</p>
          
          <p className="text-gray-300 ">Website created by: <span className='underline'><Link href="https://wa.me/7866692775?text=Hola">Luis</Link> </span></p>
        </div>
    
    </footer>
  );
};

export default Footer;