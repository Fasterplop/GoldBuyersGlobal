import React from 'react'
import Image from 'next/image'
import { bannerImage } from '@/images'
import {ImLocation} from "react-icons/im"

const Banner = () => {
  return (
<div className=" gap-4 sm:gap-16 relative w-full bg-[#FCC601] h-[200px] items-center flex justify-center justify-items-center mx-auto">
<div className="w-[900px] absolute bg-[#FED032] h-[160px] rounded-full -z-0"/>
   <div className="flex justify-center z-20 min-w-[50px] max-w-[150px]">
    <Image
    src={bannerImage}
    width={150}
    height={150} 
    className="z-20 ml-2 rounded-full opacity-80 hidden sm:block"
    />
   </div>
    
    <h1 className=" z-20 leading-8 text-center text-[#873F07] min-w-[250px] max-w-[600px] text-[14px] sm:text-[26px] font-montserrat font-bold">

        Find Us At Midway Crossings <br/> {"(Known as Mall of The America)"}
        <br/> <span className='text-center text-black text-[12px] sm:text-[24px] font-bold'>In front of the DMV</span>
    </h1>
 
    <ImLocation className="z-20 text-9xl flex"/>
   

</div>
  )
}

export default Banner