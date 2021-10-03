import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Image from "next/image";
import Link from "next/link";
export default function Slide() {
  React.useEffect(() => {
    const slides = document.querySelectorAll("div.slide-s ul li");
    const btns = document.querySelectorAll("div.button-slide ul li");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        for (var j = 0; j < btns.length; j++) {
          btns[j].classList.remove("active-button-color");
        }
        this.classList.add("active-button-color");
        var btnActive = this;
        var btnIndex = 0;
        for (
          btnIndex;
          (btnActive = btnActive.previousElementSibling);
          btnIndex++
        ) {}
        for (let i = 0; i < slides.length; i++) {
          const element = slides[i];
          element.classList.remove("hidden");
          element.classList.add("hidden");
        }
        slides[btnIndex].classList.remove("hidden");
        slides[btnIndex].classList.add("active");
      });
    }
  });

  function clickItemMenu(n) {
    var elements = document.querySelectorAll("div.sub-item");
    var element = elements[n];
    element.classList.toggle("hidden");
  }
  return (
    <React.Fragment>
      <div className="">
        <div className="flex border-b py-6 mb-8 mx-4 md:mx-0">
          <p className="text-3xl font-bold">Today’s Top Stories</p>
          <div className="ml-4">
            <Image src="/vegan.png" alt="" width={30} height={30} />
          </div>
        </div>
        <div>
          <div className="container">
            <div className="grid grid-cols-12 mx-4 md:mx-0">
              <div className="col-span-12 md:col-span-6 pr-4">
                <p className="text-sm font-bold text-red-500">CELEBRITIES</p>
                <p className="text-2xl md:text-5xl font-bold text-gray-700 mb-0 md:mb-4 leading-tight">
                  PETA Calls On Kate Moss To Stop Wearing ‘Cruel’ And ‘Outdated’
                  Fur
                </p>
                <p className="text-lg md:text-2xl text-gray-800 italic">
                  The supermodel wore a fox fur coat for a Yves Saint Laurent
                  campaign earlier this year
                </p>
              </div>
              <div className="col-span-12 md:col-span-6">
                <Image
                  src="/plant-based-news-fur-coat.jpg"
                  alt=""
                  width={1200}
                  height={900}
                />
                <p className="text-xs">
                  Activists say the fur industry’s treatment of animals is
                  ‘horrific’.
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-12">
            <div className="grid grid-cols-12 mx-4 md:mx-0">
              <div className="col-span-12 md:col-span-8 md:pr-8">
                <p className="border-b-2 font-medium text-lg mb-4">
                  FOODS
                </p>
                <div className="grid grid-cols-12 -ml-8">
                  <div className="col-span-6 md:col-span-4 pl-8 mb-2">
                    <Link href="/blog/bap-cai-cuon" passHref={true}>
                      <article className="overflow-hidden hover:shadow-lg">
                        <div>
                          <Image
                            alt=""
                            className="w-full rounded-t"
                            src="/blog-food-1/bap-cai-cuon/bap-cai-cuon-chay.jpg"
                            width={255}
                            height={255}
                          ></Image>
                        </div>

                        <header className="leading-tight pb-4 pt-0">
                          <a
                            className="uppercase no-underline hover:underline text-black font-medium"
                            href="#"
                          >
                            Bắp cải cuộn chay thanh đạm ngày rằm
                          </a>
                        </header>
                      </article>
                    </Link>
                  </div>
                  <div className="col-span-6 md:col-span-4 pl-8">
                    <Link href="/blog/canh-bi-do" passHref={true}>
                      <article className="overflow-hidden hover:shadow-lg">
                        <div>
                          <Image
                            alt=""
                            className="w-full rounded-t"
                            src="/blog-food-1/canh-bi-do/photo.jpg"
                            width={255}
                            height={255}
                          ></Image>
                        </div>

                        <header className="leading-tight pb-4 pt-0">
                          <a
                            className="uppercase  no-underline hover:underline text-black font-medium"
                            href="#"
                          >
                            CÁCH NẤU CANH BÍ ĐỎ CHAY SIÊU THƠM NGON CHO CẢ NHÀ
                          </a>
                        </header>
                      </article>
                    </Link>
                  </div>
                  <div className="col-span-6 md:col-span-4 pl-8">
                    <Link href="/blog/cac-mon-chay-ngon" passHref={true}>
                      <article className="overflow-hidden hover:shadow-lg">
                        <div>
                          <Image
                            alt=""
                            className="w-full rounded-t"
                            src="/blog-food-1/salad-chay-9.jpg"
                            width={255}
                            height={255}
                          ></Image>
                        </div>

                        <header className="leading-tight pb-4 pt-0">
                          <a
                            className="no-underline hover:underline text-black font-medium"
                            href="#"
                          >
                            TỔNG HỢP NHỮNG MÓN CHAY NGON DỄ LÀM HÀNG NGÀY
                          </a>
                        </header>
                      </article>
                    </Link>
                  </div>
                  <div className="col-span-6 md:col-span-4 pl-8">
                    <Link href="/blog/kho-quet" passHref={true}>
                      <article className="overflow-hidden hover:shadow-lg">
                        <div>
                          <Image
                            alt=""
                            className="w-full rounded-t"
                            src="/blog-food-1/kho-quet/1567310029-5058-Le20Gia20Kho20quet20chay.jpg"
                            width={255}
                            height={255}
                          ></Image>
                        </div>

                        <header className="leading-tight pb-4 pt-0">
                          <a
                            className="no-underline hover:underline text-black font-medium"
                            href="#"
                          >
                            CÁCH LÀM MÓN KHO QUẸT CHAY NGON HẤP DẪN
                          </a>
                        </header>
                      </article>
                    </Link>
                  </div>
                  <div className="col-span-6 md:col-span-4 pl-8">
                    <Link href="/blog/nem-nuong" passHref={true}>
                      <article className="overflow-hidden hover:shadow-lg">
                        <div>
                          <Image
                            alt=""
                            className="w-full rounded-t"
                            src="/blog-food-1/nem-nuong/nem-nuong-chay-2.jpg"
                            width={255}
                            height={255}
                          ></Image>
                        </div>

                        <header className="leading-tight pb-4 pt-0">
                          <a
                            className="uppercase no-underline hover:underline text-black font-medium"
                            href="#"
                          >
                            Cách làm nem nướng chay thơm ngon, đơn giản đổi vị
                            bữa cơm chay gia đình
                          </a>
                        </header>
                      </article>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <p className="border-b-2 font-medium text-lg mb-4">
                  EDITORS PICKS
                </p>
                <div className="flex">
                  <div className="mr-4 mb-4">
                    <Image
                      alt="Placeholder"
                      className="block h-auto w-auto product-img-height"
                      src="/AdobeStock_279167691-1.jpg"
                      width={70}
                      height={50}
                    ></Image>
                  </div>
                  <p>Is A Vegan World Even Possible?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute flex abs-slide z-10 ">
          <div className="md:mr-4 md:mb-4 shadow-md hidden md:block">
            <Image src="/anh.jpg" alt="" layout='fill'/>
          </div>
          <div className="md:ml-4 md:mb-4 shadow-md">
            <Image src="/anh.jpg"  alt="" layout='fill'/>
          </div>
        </div> */}
        {/* <div className="slide-s overflow-hidden h-full">
          <ul className="h-full hidden md:block">
            <li className="h-full">
              <div className="slide h-full relative ">
                <div
                  style={{
                    background: `url(/home_webdesign_slide3_bg.png)`,
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    backgroundSize: "contain",
                  }}
                ></div>
                <div className="absolute top-10">
                  <p className="text-black text-3xl font-medium mb-4 text-green-600">
                    Delivery Happiness
                  </p>
                  <p className="text-black text-6xl mb-4">Freeship</p>
                  <p className="text-black text-6xl">Với mọi đơn hàng</p>
                </div>
                <div className="absolute top-60 button-slide">
                  <ul className="flex items-center justify-center">
                    <li className="w-8 h-8 bg-gray-200 rounded-full cursor-pointer active-button-color"></li>
                    <li className="w-8 h-8 bg-gray-200 rounded-full m-4 hover:bg-gray-500 cursor-pointer"></li>
                    <li className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-500 cursor-pointer"></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
    </React.Fragment>
  );
}
