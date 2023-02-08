import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  return (
    <div className={`${props.className} text-center`}>
      <Link href="/gallery">
        <div className=" font-raleway bg-gray-200 duration-500 group-hover:blur-sm group-hover:scale-[0.85] hover:!scale-100 hover:!blur-none cursor-pointer p-3 rounded-xl min-w-[230px] w-[230px] max-w-[250px]">
          <Image
            className=" w-[185px] object-cover  h-[150px] mx-auto p-4 bg-gray-400 rounded-xl"
            src={props.image}
            alt="product"
            priority
          />

          <h4 className="uppercase text-[16px] font-bold my-3">
            {props.productName}
          </h4>
          <p className="text-sm leading-6 my-3 font-light opacity-80">
            {props.productDesc}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
