import React from "react";
import Layout from "@/Layouts/Layout";
import Image from "next/image";
import { heroImage } from "@/images";
import Head from "next/head";
import { HiPhoneIncoming } from "react-icons/hi";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const about = () => {
  return (
    <>
      <Head>
        <title>About Us - Gold Buyers Global</title>
        <meta
          name="description"
          content="Learn more about our jewelry store and the high-quality products and services we offer. From engagement rings to fashion jewelry and expert repairs, we have something for everyone. Trust our experienced and knowledgeable staff to help you find the perfect piece. Shop with us today!"
        />
        <meta name="author" content="Gold Buyers Global" />
      </Head>

      <Layout>
        <section id="About" className="sm:px-16 px-6 text-justify py-6">
          <Fade triggerOnce="true" duration="2000">
            <div className="lg:w-[60%] mx-auto">
              <h1 className="text-center text-[20px] sm:text-[28px] font-raleway m-2 font-bold">
                About Us
              </h1>
              <p className="text-[16px] sm:text-[20px] font-montserrat leading-8 text-[#444444]">
                In recent years the gold market has provided a unique
                opportunity for people to cash in on their unwanted jewelry. So
                in 2011 we decided to take our 30 plus years of experience in
                the jewelry industry and establish a company that is personal,
                private and honest.
                <span className="font-semibold">
                  {" "}
                  A company that is easy to do business with.{" "}
                </span>
                No gimmicks!
              </p>

              <p className=" my-2 text-[16px] sm:text-[20px] font-montserrat leading-16 text-[#444444]">
                This drive to make people comfortable when dealing with us comes
                from learning a long time ago that the number one asset a
                company can have is the client. Providing the best possible
                value and service is top priority for us and we are committed to
                doing so.
              </p>

              <Image
                className="mx-auto my-6"
                src={heroImage}
                width={600}
                height={200}
              />
            </div>
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

export default about;
