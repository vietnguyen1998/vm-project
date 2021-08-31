import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import HeaderProgess from "./headerProgess";
import { useRouter } from "next/router";
export default function Layout(props) {
  const { children } = props;
  const router = useRouter();

  return (
    <React.Fragment>
      <div className="bg-white shadow-md mb-4">
        <div className="container mx-auto">
          {router.pathname == "/checkout/shipping" ? (
            <HeaderProgess />
          ) : (
            <Header />
          )}
        </div>
      </div>

      <div className="container mx-auto bg-white">
        {/* <HeaderProgess /> */}
        {children}
      </div>
      <div className="">
        
        {router.pathname == "/checkout/shipping" ? <div></div> : 
        
        <div className="shadow-md h-1"><Footer /></div>}
      </div>
    </React.Fragment>
  );
}
