import Layout from "@/Layouts/Layout";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { heroImage } from "@/images";
import {HiPhoneIncoming} from "react-icons/hi"

const repairs = () => {
  return <>

    <Head>
      <title>Repairs - Gold Buyers Global</title>
      <meta
        name="description"
        content="Keep your jewelry looking like new with our professional repair services. Our skilled jewelers can handle any repair job, from simple cleaning and polishing to complex repairs such as resizing and replacing missing stones. Trust us to restore your precious pieces to their original beauty."
      />
      <meta name="author" content="Gold Buyers Global" />
    </Head>
  
  
  <Layout>
    

  <section id="Repairs" className="flex flex-col text-center w-screen overflow-hidden ">
          <div className=" my-16 flex sm:flex-row-reverse flex-col justify-center">
            <div className=" lg:pl-20 px-6 font-montserrat text-justify mb-6 lg:text-start min-w-[350px] max-w-[740px]">
              <h1 className="pb-2 font-bold font-raleway text-[20px] text-center sm:text-[28px] text-black">Repair Services</h1> 
              <p className=" font-montserrat leading-8 text-[16px] sm:text-[20px] text-[#444444] mb-4">
              At <strong>GoldBuyersGlobal</strong>, we specialize in working with gold, platinum, and silver to repair 
              and restore your cherished jewelry pieces. We offer a wide range of repair services to help you keep your beloved 
              pieces in top condition. We have 40 years of experience and can handle everything from
              simple ring sizing to complex restoration work.
              </p>
              <ul className="font-montserrat mx-10 text-start list-disc text-[16px] sm:text-[20px] leading-8">
                <li>Ring resizing</li>
                <li>Stone Replacement</li>
                <li>Prong Repair</li>
                <li>Polishing and cleaning</li>
                <li>Chain, hinge and clasp repair</li>
                <li>Custom design</li>
                <li>and More...</li>
              </ul>
            
            </div>
          
        
              <Image 
              src={heroImage}
              width={350}
              height={350}
              className="min-w-[350px] max-w-[500px] min-h-[350px] max-h-[500px] mx-auto sm:mx-0"
              />
           </div>

          
      </section>






      {/* call us text */}
      <div className=" z-50 fixed bottom-10 sm:bottom-[130px] right-10 sm:right-[62px] animate-bounce sm:block hidden ">
        <h1 className="text-green-600 text-[18px] font-bold font-raleway">Call US</h1>
      </div>

          {/* call button */}
      <div className=" z-50 animate-bounce fixed bottom-10 sm:bottom-20 right-10 sm:right-20">

        <Link href="tel:786-498-9035" >
          <HiPhoneIncoming className="text-lg sm:scale-[5] scale-[3] text-green-600"/>
        </Link>
      </div>
  </Layout>
  </>
};

export default repairs;
