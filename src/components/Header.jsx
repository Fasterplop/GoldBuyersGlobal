import React from "react";
import { header } from "@/images";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-center h-auto z-50">
      <Image src={header} alt="Logo" height={150} priority quality={100} />
    </div>
  );
};

export default Header;
