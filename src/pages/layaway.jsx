import Layout from "@/Layouts/Layout";
import React from "react";
import Link from "next/link";

import Head from "next/head";
import { HiPhoneIncoming } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";

const layaway = () => {
  return (
    <>
      <Head>
        <title>Layaway - Gold Buyers Global</title>
        <meta
          name="description"
          content="Conveniently purchase your dream jewelry piece with our flexible layaway program. Make small payments over time with a small down payment. Our program is easy to use and tailored to meet your needs. Find out more about our layaway program and purchase the jewelry you've always wanted."
        />
        <meta name="author" content="Gold Buyers Global" />
      </Head>

      <Layout>
        <section id="Layaway" className="sm:px-16 px-6 text-justify py-6">
          <Fade triggerOnce="true" duration="2000">
            <div className="lg:w-[60%] mx-auto">
              <h1 className="text-center text-[20px] sm:text-[28px] font-raleway m-2 font-bold">
                Layaway
              </h1>
              <p className="text-[16px] sm:text-[20px] font-montserrat leading-8 text-[#444444]">
                At our store, we understand that purchasing jewelry can be a big
                investment. That's why we offer a convenient layaway program to
                help make buying your dream piece a reality. Our layaway program
                allows you to make payments over a period of time, with a small
                down payment. This way, you can secure the piece you want and
                pay for it over time without having to make a full payment
                upfront. Our layaway program is easy to use and flexible, with a
                payment schedule that can be tailored to meet your needs. With
                bargain prices and with extended time to pay, you can own the
                jewelry you desire.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center my-6 items-center">
              <Link href="tel:3059155896">
                <div className="mr-4 hover:scale-105  items-center my-2  pt-[4px]  text-[14px] sm:text-[16px] text-center font-raleway  w-[200px] h-[28px] sm:h-[36px] bg-[#fddc5c] text-black font-semibold rounded-xl">
                  Call Us
                </div>
              </Link>
              <Link href="/gallery">
                <div className="mr-4 hover:scale-105  items-center my-2  pt-[4px]  text-[14px] sm:text-[16px] text-center font-raleway  w-[200px] h-[28px] sm:h-[36px] border-2 border-[#fddc5c] text-[#444444] font-semibold rounded-xl">
                  View Gallery
                </div>
              </Link>
            </div>

            <div className="h-[99px]"></div>
            {/* <Image
              className="mx-auto"
              src={heroImage}
              width={600}
              height={200}
            /> */}
          </Fade>
        </section>

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
      </Layout>
    </>
  );
};

export default layaway;
