import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
export default function Products() {
  React.useEffect(() => {
    const productHeaders = document.querySelectorAll("div.product-header div");
    for (let i = 0; i < productHeaders.length; i++) {
      const element = productHeaders[i];
      element.addEventListener("click", function () {
        for (let j = 0; j < productHeaders.length; j++) {
          const e = productHeaders[j];
          e.classList.remove("border-gray-500");
          e.classList.add("border-white");
          e.classList.remove("bg-gray-100");
        }
        this.classList.remove("border-white");
        this.classList.add("border-gray-500");
        this.classList.add("bg-gray-100");
      });
    }
  });

  function clickButtonSort() {
    var e = document.querySelector("div.content-sort");
    e.classList.toggle("hidden");
  }

  function clickButtonSortItem(event, item) {
    event.preventDefault();
    var e = document.querySelector("div.content-sort");
    e.classList.add("hidden");
    var eText = document.querySelector("span.text-sort");
    eText.innerHTML = item;
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-12 mt-8">
        <div className="col-span-12">
          <nav className="container flex justify-between bg-gray-100 md:bg-white">
            <div className="flex ">
              <div className="bg-gray-100 border-l">
                <ol className="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
                  <li className="px-2">
                    <a href="#" className="no-underline text-indigo">
                      Home
                    </a>
                  </li>
                  <li>/</li>
                  <li className="px-2">
                    <a href="#" className="no-underline text-indigo">
                      Library
                    </a>
                  </li>
                  <li>/</li>
                  <li className="px-2">Data</li>
                </ol>
              </div>
              <div className="triangle-border-left hidden md:flex"></div>
            </div>

            <div className="">
              <div className="flex h-full items-center">
                <div className="product-header hidden md:flex items-center h-full justify-center">
                  <div className="px-2 ml-4 flex items-center h-full text-gray-500 font-normal border-b-4 hover:border-gray-500 border-gray-500 hover:bg-gray-100 bg-gray-100">
                    Bán chạy
                  </div>

                  <div className="px-2 ml-4 flex items-center h-full text-gray-500 font-normal border-b-4 border-white hover:border-gray-500 hover:bg-gray-100">
                    Phổ biến
                  </div>
                  <div className="px-2 ml-4 flex items-center h-full text-gray-500 font-normal border-b-4 border-white hover:border-gray-500 hover:bg-gray-100">
                    Hàng mới
                  </div>
                  <div className="px-2 ml-4 flex items-center h-full text-gray-500 font-normal border-b-4 border-white hover:border-gray-500 hover:bg-gray-100">
                    Giá thấp
                  </div>
                  <div className="px-2 ml-4 flex items-center h-full text-gray-500 font-normal border-b-4 border-white hover:border-gray-500 hover:bg-gray-100">
                    Giá cao
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <nav className="bg-gray-100 border-t md:border-0">
            <div className="mx-auto">
              <div className="flex border-b-2 border-gray-100">
                <div className="md:hidden flex items-center">
                  <div className="outline-none mobile-menu-button px-6 py-4 ">
                    Sâp xếp:
                  </div>
                  <div className="relative">
                    <button
                      onClick={clickButtonSort}
                      className="sortborder border-gray-300 py-1 px-2 rounded bg-green-600 text-white"
                    >
                      <span className="pr-2 text-sort">Bán chạy</span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        size="xs"
                      ></FontAwesomeIcon>
                    </button>
                    <div
                      className="content-sort origin-top-right absolute left-12 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="" role="none">
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm border-b bg-gray-100"
                          role="menuitem"
                          id="menu-item-0"
                          onClick={(e) => clickButtonSortItem(e, "Bán chạy")}
                        >
                          Bán chạy
                        </a>
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm border-b"
                          role="menuitem"
                          id="menu-item-0"
                          onClick={(e) => clickButtonSortItem(e, "Phổ biến")}
                        >
                          Phổ biến
                        </a>
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm border-b"
                          role="menuitem"
                          id="menu-item-1"
                          onClick={(e) => clickButtonSortItem(e, "Hàng mới")}
                        >
                          Hàng mới
                        </a>
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm border-b"
                          role="menuitem"
                          id="menu-item-2"
                          onClick={(e) => clickButtonSortItem(e, "Giá thấp")}
                        >
                          Giá thấp
                        </a>
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-2"
                          onClick={(e) => clickButtonSortItem(e, "Giá cao")}
                        >
                          Giá cao
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden">
              <ul className="">
                <li className="active">
                  <a
                    href="index.html"
                    className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-span-12 shadow">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
                <Link href="/detail" passHref={true}>
                  <article className="overflow-hidden hover:shadow-lg">
                    <div className="p-8 pb-4 pt-4">
                      <Image
                        alt="Placeholder"
                        className="block h-auto w-auto product-img-height"
                        src="/12.jpg"
                        layout='fill'
                      ></Image>
                    </div>

                    <header className="leading-tight p-8 pb-4 pt-0">
                      <p>
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          Áo thun nam trơn đủ màu Julido Store, thấm hút mồ hôi
                          mẫu siêu Top
                        </a>
                      </p>
                      <div className="text-lg font-medium">
                        209.000 ₫ <span className="text-sm font-light">-35%</span>
                      </div>
                    </header>
                  </article>
                </Link>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
                <Link href="/detail" passHref={true}>
                  <article className="overflow-hidden hover:shadow-lg">
                    <div className="p-8 pb-4 pt-4">
                      <Image
                        alt="Placeholder"
                        className="block h-auto w-auto product-img-height"
                        src="/12.jpg"
                        layout='fill'
                      ></Image>
                    </div>

                    <header className="leading-tight p-8 pb-4 pt-0">
                      <p>
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          Áo thun nam trơn đủ màu Julido Store, thấm hút mồ hôi
                          mẫu siêu Top
                        </a>
                      </p>
                      <div className="text-lg font-medium">
                        209.000 ₫ <span className="text-sm font-light">-35%</span>
                      </div>
                    </header>
                  </article>
                </Link>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
                <Link href="/detail" passHref={true}>
                  <article className="overflow-hidden hover:shadow-lg">
                    <div className="p-8 pb-4 pt-4">
                      <Image
                        alt="Placeholder"
                        className="block h-auto w-auto product-img-height"
                        src="/12.jpg"
                        layout='fill'
                      ></Image>
                    </div>

                    <header className="leading-tight p-8 pb-4 pt-0">
                      <p>
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          Áo thun nam trơn đủ màu Julido Store, thấm hút mồ hôi
                          mẫu siêu Top
                        </a>
                      </p>
                      <div className="text-lg font-medium">
                        209.000 ₫ <span className="text-sm font-light">-35%</span>
                      </div>
                    </header>
                  </article>
                </Link>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
                <Link href="/detail" passHref={true}>
                  <article className="overflow-hidden hover:shadow-lg">
                    <div className="p-8 pb-4 pt-4">
                      <Image
                        alt="Placeholder"
                        className="block h-auto w-auto product-img-height"
                        src="/12.jpg"
                        layout='fill'
                      ></Image>
                    </div>

                    <header className="leading-tight p-8 pb-4 pt-0">
                      <p>
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          Áo thun nam trơn đủ màu Julido Store, thấm hút mồ hôi
                          mẫu siêu Top
                        </a>
                      </p>
                      <div className="text-lg font-medium">
                        209.000 ₫ <span className="text-sm font-light">-35%</span>
                      </div>
                    </header>
                  </article>
                </Link>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
                <Link href="/detail" passHref={true}>
                  <article className="overflow-hidden hover:shadow-lg">
                    <div className="p-8 pb-4 pt-4">
                      <Image
                        alt="Placeholder"
                        className="block h-auto w-auto product-img-height"
                        src="/12.jpg"
                        layout='fill'
                      ></Image>
                    </div>

                    <header className="leading-tight p-8 pb-4 pt-0">
                      <p>
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          Áo thun nam trơn đủ màu Julido Store, thấm hút mồ hôi
                          mẫu siêu Top
                        </a>
                      </p>
                      <div className="text-lg font-medium">
                        209.000 ₫ <span className="text-sm font-light">-35%</span>
                      </div>
                    </header>
                  </article>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white px-4 py-3 flex items-center justify-between border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between mb-8">
              <div></div>
              <div>
                <nav
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    2
                  </a>

                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
