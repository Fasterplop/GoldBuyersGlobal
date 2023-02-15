import React from "react";
import Layout from "@/Layouts/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Banner from "@/components/Banner";
import Testimonials from "@/components/Testimonials";
import { heroImage, ring, necklace, ring2, jeweler } from "@/images";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiPhoneIncoming } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";

const index = () => {
  return (
    <>
      <Head>
        <title>Gold Buyers Global</title>
        <meta
          name="description"
          content="GOLD BUYERS GLOBAL is a licensed, honest and high-paying buyer of gold, platinum and silver in the state of florida. Your GOLD is MONEY with us. Visit us at any of our locations and discover what your Gold is worth"
        />
        <meta name="author" content="Gold Buyers Global" />
      </Head>
      <Layout>
        <div className="overflow-hidden">
          <Hero />

          {/* Gallery Section (Not Page) */}
          <Fade direction="down" triggerOnce="true">
            <section className="relative flex justify-center w-screen h-[400px] mx-auto">
              <div className="absolute -top-[40px] flex max-w-5xl mx-auto gap-6 group">
                <Card
                  image={ring2}
                  productName="Diamond Ring"
                  productDesc="text description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit"
                  className=" hidden sm:block"
                />
                <Card
                  image={ring}
                  productName="Ring"
                  productDesc="text description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit"
                />
                <Card
                  image={necklace}
                  productName="Gold Necklace"
                  productDesc="text description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit"
                  className="hidden sm:block"
                />
              </div>

              <Link
                href="/gallery"
                className="hover:scale-105  items-center flex flex-row justify-center text-center font-raleway absolute bottom-[50px] w-[250px] h-[36px] bg-gradient-to-r from-[#8B4000] to-[#FFD700]  text-white font-semibold rounded-xl"
              >
                View More
                {<AiOutlineArrowRight className="text-2xl ml-6 items-center" />}
              </Link>
            </section>
          </Fade>

          {/* Repairs Section (Not Page) */}

          <Fade direction="left" duration="2000" triggerOnce="true">
            <section
              className=" flex justify-center w-screen min-h-[500px] max-h-[940px] bg-gradient-to-r from-[#522b15]
    via-[#906c56] to-[#d9c577] "
            >
              <div className="my-16 sm:px-0  flex lg:flex-row flex-col justify-center flex-wrap">
                <div className="lg:pr-16 px-6 text-white font-montserrat text-center mb-16 text-[18px] lg:text-start min-w-[350px] max-w-[500px]">
                  <div className="sm:block hidden  border-t-2 lg:w-[120px] w-full" />

                  <h1 className="pb-2 font-semibold text-[32px]">
                    Repair Services
                  </h1>
                  <p className="leading-[28px] text-[20px] text-[#e1e1e1b3]">
                    We have the ability to perform many repair services, bring
                    us your jewelry and watches and we will provide a{" "}
                    <strong>FREE</strong> estimate for any repairs necessary.
                    Wether the work is big or small we've got you covered.
                    {/* We can repair most of your treasured jewelry right in our
                    stores including rings, necklaces, earrings, bracelets and
                    watches. Whether your job is big or small, we've got you
                    covered. */}
                  </p>

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
                        src={jeweler}
                        width={400}
                        height={400}
                        className="bg-gradient-to-r from-[#3C3B3F] to-[#605C3C]"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Fade>

          {/* About Us Section (Not Page) */}

          <Fade direction="right" duration="2000" triggerOnce="true">
            <section className="flex justify-center w-screen min-h-[500px] max-h-[940px] ">
              <div className=" my-16 flex lg:flex-row-reverse flex-col justify-center">
                <div className=" lg:pl-20 px-6  pt-6 text-black font-montserrat text-center mb-16 lg:text-start min-w-[350px] max-w-[500px]">
                  <h1 className="pb-2 font-semibold text-[32px]">
                    Full-Service Jeweler
                  </h1>
                  <p className="leading-[28px] text-[20px] text-black mb-2 ">
                    Welcome to <strong>Gold Buyers Global</strong>, where we
                    specialize in buying, selling and repairing jewelry. Our
                    team is led by <strong>Jose Mejia</strong>, an experienced
                    jeweler who has been working in the industry for over 40
                    years. Wether you are looking to sell or buy jewelry you can
                    count on us to provide great service and value.
                  </p>
                  <Link href="/about" className=" underline font-bold ">
                    See all services
                  </Link>
                </div>
                <div className="relative ">
                  <div className="blur-sm absolute w-[400px] h-[400px] animate-pulse rounded-t-[100%] rounded-b-[100%] rounded-l-[110%] rounded-r-[115%] rotate-45 border-2 bg-gray-200" />
                  <Image
                    src={heroImage}
                    width={400}
                    height={400}
                    className=" mx-auto rotate-[-45deg] z-50"
                  />
                </div>
              </div>
            </section>
          </Fade>

          {/* Banner */}

          <Fade duration="2000" triggerOnce="true">
            <Banner />
          </Fade>

          {/* Testimonials */}

          <Fade direction="up" duration="1500" triggerOnce="true">
            <Testimonials />
          </Fade>

          {/* call us text */}
          <div className=" z-50 fixed bottom-10 sm:bottom-[130px] right-10 sm:right-[62px] animate-bounce sm:block hidden ">
            <h1 className="text-green-600 text-[18px] font-bold font-raleway">
              Call US
            </h1>
          </div>

          {/* call button */}
          <div className=" z-50 animate-bounce fixed bottom-10 sm:bottom-20 right-10 sm:right-20">
            <Link href="tel:3059155896">
              <HiPhoneIncoming className="text-lg sm:scale-[5] scale-[3] text-green-600" />
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default index;
