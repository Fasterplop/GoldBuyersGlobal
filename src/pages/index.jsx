import React from "react";
import Layout from "@/Layouts/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Banner from "@/components/Banner"
import Testimonials from "@/components/Testimonials";
import { heroImage } from "@/images";
import {AiOutlineArrowRight} from "react-icons/ai"




const index = () => {
  

  return (
  <div className="">
    <Head>
      <title>Gold Buyers Global</title>
      <meta
        name="description"
        content="Gold Buyers and sellers and Jewelry Repairs"
      />
      <meta name="author" content="Gold Buyers Global" />
    </Head>
    <Layout>

    <div className="overflow-hidden">

    <Hero />



        {/* Gallery Section (Not Page) */}
<div className="relative flex justify-center w-screen h-[400px] mx-auto">
<div className="absolute -top-[40px] flex max-w-5xl mx-auto gap-6 group">
    <Card image={heroImage} className="hidden sm:block"/>
    <Card image={heroImage}/>
    <Card image={heroImage} className="hidden sm:block"/> 
</div>  

  <Link href="/gallery" className="hover:scale-105  items-center flex flex-row justify-center text-center font-raleway absolute bottom-[50px] w-[250px] h-[36px] bg-gradient-to-r from-[#8B4000] to-[#FFD700]  text-white font-semibold rounded-xl">
  
      View More {<AiOutlineArrowRight className="text-2xl ml-6 items-center"/>}
  </Link>
</div>

          {/* Repairs Section (Not Page) */}

    <section id="Repairs" className="flex justify-center w-screen min-h-[500px] max-h-[940px] bg-gradient-to-r from-[#522b15]
    via-[#906c56] to-[#d9c577] ">


      <div className="my-16 flex lg:flex-row flex-col justify-center flex-wrap">

        
          <div className="lg:pr-16 text-[#FFF] font-montserrat text-center mb-16 text-[18px] lg:text-start min-w-[350px] max-w-[500px]">
              <div className=" border-t-2 lg:w-[120px] w-full" />

              <h1 className="pb-2 font-semibold text-[36px]">Repair Services </h1> 
              <p className="leading-[28px] text-[20px] text-[#e1e1e1b3]"> We can repair most of your treasured jewelry right 
              in our stores including rings, necklaces, earrings, bracelets,
              and watches. Whether your job is big or small, we've got you covered.</p>
        
            <div className="flex flex-col sm:flex-row mt-4 sm:items-start items-center">
              <Link href="/repairs">
              <div className="mr-4 hover:scale-105  items-center my-2  pt-[4px]  text-[14px] sm:text-[16px] text-center font-raleway  w-[200px] h-[28px] sm:h-[36px] bg-[#fddc5c] text-black font-semibold rounded-xl">
            Learn More
               </div>
              </Link>
              <Link href="tel:305-915-5896">
                <div className="mr-4 hover:scale-105  items-center my-2  pt-[4px]  text-[14px] sm:text-[16px] text-center font-raleway  w-[200px] h-[28px] sm:h-[36px] border-2 border-[#fddc5c] text-white font-semibold rounded-xl">
            Book an Appointment
               </div>
              </Link>
            </div>
         </div>


          <div>
            <div className=" pb-6 pl-6 border-b-4 border-l-4 border-[#FFD700]">

              <div className="w-[350px] sm:w-[400px]">
            <Image
            src={heroImage}
            width={400}
            height={400}
            className="bg-gradient-to-r from-[#3C3B3F] to-[#605C3C]">
            </Image>
             </div>

            </div>
          </div>
      </div>
    </section>


             {/* About Us Section (Not Page) */}

      <section id="About" className="flex justify-center w-screen min-h-[500px] max-h-[940px] ">
          <div className="px-16 my-16 flex lg:flex-row-reverse flex-col justify-center">
            <div className=" lg:pl-20  pt-6 text-black font-montserrat text-center mb-16 text-[18px] lg:text-start min-w-[350px] max-w-[500px]">
              <h1 className="pb-2 font-semibold text-[36px]">Full-Service Jewelrer</h1> 
              <p className="leading-[28px] text-[20px] text-black mb-2">
              Welcome to <strong>Gold Buyers Global</strong>, where we specialize in buying,
              selling, and repairing jewelry. Our team is led by <strong>
              Jose Mejia</strong>, a certified and experienced jewelrer who has been working
              in the industry for over 40 years.
              </p>
              <Link href="/about" className=" underline font-bold ">
                See all services
              </Link>
            
            </div>
            <div className="">
              <Image 
              src={heroImage}
              width={400}
              height={400}
              className=" mx-auto bg-gray-200"
              />
            </div>
          </div>
      </section>


          {/* Banner */}
      <Banner />

            {/* Testimonials */}

      <Testimonials />


    </div>
    </Layout>
  </div>
  )
};
export default index;
