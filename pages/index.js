import React from "react";
import Slide from "../components/slide";
import Products from "../components/products";
import Link from "next/link";

export default function Home() {
  React.useEffect(() => {});
  return (
    <div className="h-full">
      <Slide></Slide>
      <Products></Products>
    </div>
  );
}
