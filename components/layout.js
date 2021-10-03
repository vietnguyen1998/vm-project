import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import HeaderProgess from "./headerProgess";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Layout(props) {
  const { children } = props;
  const router = useRouter();

  function getPaths() {
    var paths = router.pathname.split("/");
    return paths.filter((e) => e);
  }

  function showHeaderProgess() {
    if (router.pathname == "/checkout/shipping") {
      return <HeaderProgess />;
    }
    return <Header />;
  }

  function showNavShort() {
    if (router.pathname == "/") {
      return;
    }
    return (
      <ol className="list-reset py-4 rounded flex bg-grey-light text-grey -ml-2">
        <li className="px-2">
          <Link href="/">
            <a className="no-underline text-blue-500 font-medium">Home</a>
          </Link>
        </li>
        {0 != getPaths().length ? <li>/</li> : <li></li>}
        {getPaths().map((e, index) => {
          return (
            <React.Fragment key={e}>
              <li className="px-2">
                <a href="#" className="no-underline text-blue-500 font-medium">
                  {e}
                </a>
              </li>
              {index != getPaths().length - 1 ? <li>/</li> : <li></li>}
            </React.Fragment>
          );
        })}
      </ol>
    );
  }
  return (
    <React.Fragment>
      {showHeaderProgess()}
      <div className="container mx-auto bg-white">
        {showNavShort()}

        {/* <HeaderProgess /> */}
        {children}
      </div>
      <div className="">
        {router.pathname == "/checkout/shipping" ? (
          <div></div>
        ) : (
          <div className="shadow-md h-1">
            <Footer />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
