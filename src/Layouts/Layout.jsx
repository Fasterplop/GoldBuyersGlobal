import React from "react";
import { Footer, Header, Navbar, Popup } from "@/components";

const Layout = (props) => {
  return (
    <>
      <Popup />
      <Header />
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
