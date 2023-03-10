import Layout from "@/Layouts/Layout";
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { galleryImages } from "@/constants/gallery";
import { HiPhoneIncoming } from "react-icons/hi";
import Link from "next/link";

const gallery = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (title) => {
    setTempImgSrc(title);
    setModel(true);
  };

  return (
    <>
      <Head>
        <title>Gallery - Gold Buyers Global</title>
        <meta
          name="description"
          content="Explore our stunning collection of jewelry in our online gallery. From engagement rings to fashion jewelry, we have a wide variety of styles and designs to choose from. View high-resolution images of our pieces and find the perfect one for you. Browse our collection today and find the perfect piece of jewelry for any occasion."
        />
        <meta name="author" content="Gold Buyers Global" />
      </Head>

      <Layout>
        <section id="Gallery" className="sm:px-16 px-6 text-justify py-6">
          <h1 className="text-center font-raleway font-bold text-[20px] sm:text-[28px] m-2 ">
            Gallery
          </h1>

          <div className={model ? "model open" : "model"}>
            <Image src={tempImgSrc} />
            <AiOutlineCloseCircle onClick={() => setModel(false)} />
          </div>

          {/* px-[30px] sm:px-16 md:px-40 */}
          <div className="gallery xl:mx-40">
            {galleryImages.map((item, index) => {
              return (
                <div
                  className="pics"
                  key={index}
                  onClick={() => getImg(item.title)}
                >
                  <Image
                    src={item.title}
                    alt={item.id}
                    className="w-[100%] h-auto sm:w-[300px] sm:h-[300px] hover:bg-gray-400  bg-gray-300 object-contain shadow-xl "
                  />
                </div>
              );
            })}
          </div>
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

export default gallery;
