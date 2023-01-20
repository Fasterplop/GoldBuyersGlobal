import React from 'react'
import { showcase, heroImage } from '@/images'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (<section id='Home' className="lg:py-0 relative w-screen h-[70vh] min-h-[540px] max-h-[940px]">
      <Image 
      className=" object-fit absolute z-[-1]" 
      src={showcase} 
      alt="Background" 
      fill
      priority
      >
      </Image>

      <div className=" flex lg:flex-row flex-col justify-center items-center h-[70vh] min-h-[700px] max-h-[940px]">

        <div className=" mx-16 text-center  ">
          <h2 className="leading-6 text-[#FFD700] font-raleway font-bold text-[18px] sm:text-[28px]">Revive, Renew and Rejoice</h2>
          <h1 className="leading-8 text-white py-4 font-raleway font-bold text-[26px] sm:text-[36px]">Expert Jewelry and Gold Services</h1>
          <h2 className="leading-6 text-gray-300 font-raleway font-bold text-[12px] sm:text-[16px]">with more than 40 years of experience, <br />  get the best deals and value for your precious items </h2>
          
          <div className="flex justify-center">
          <Link href="tel:305-915-5896">
            <div className=" hover:scale-105  items-center my-2 mx-auto pt-[4px]  text-[14px] sm:text-[18px] text-center font-raleway  w-[200px] h-[28px] sm:h-[36px] bg-gradient-to-r from-[#8B4000] to-[#FFD700] text-white font-semibold rounded-xl">
            Call Us Now 
            </div>
          </Link>
          </div>
          
        </div>
  
        <Image 
      className=" w-[200px] md:w-[350px] lg:w-[500px] pb-16"
      src={heroImage}
      alt="Main Product"
      priority
      quality={100}
       />
      </div>

     
      

    </section>
    
    
  )
}

export default Hero