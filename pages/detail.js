import React from "react";
import "../styles/Detail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Image from 'next/image'
export default function About() {
  React.useEffect(() => {});

  function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    if (value == 1) {
      return;
    }
    value--;
    target.value = value;
  }

  function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }

  function changeSizeBox(index) {
    const boxs = document.querySelectorAll("button.size-box");
    console.log(boxs)
    if(boxs.length > 0){
        for (let i = 0; i < boxs.length; i++) {
            const element = boxs[i];
            element.classList.remove("border-2")
            element.classList.remove("border-green-500")
        }
        boxs[index].classList.add("border-2")
        boxs[index].classList.add("border-green-500")
    }
  }
  return (
    <React.Fragment>
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container pb-5 mx-auto">
          <ol className="list-reset rounded font-medium flex bg-grey-light text-grey mb-2">
            <li className="mr-2">
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
          <div className="mx-auto flex flex-wrap">
            <Image 
              alt="ecommerce"
              className="lg:w-1/2 lg:h-1/2 w-full object-cover object-center rounded border border-gray-200"
              src="/12.jpg"
            />
            <div className="lg:w-1/2 w-full px-4 lg:pl-10 lg:pr-0 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>

              <div className="bg-gray-100 px-4 py-2 rounded">
                <span className="text-3xl font-medium mr-4">99.000 ₫</span>
                <span className="line-through mr-2">₫239.000₫</span>
                <span className="">-59%</span>
                <p className="text-sm mt-2">
                  Miễn phía vận chuyển cho đơn hàng từ 500K
                </p>
              </div>
              <div className="flex mt-6 items-center pb-5 border-b border-gray-200 mb-5">
                <div className="">
                  <p className="mr-3 font-base font-medium">Size:</p>
                  <div className="">
                    <button onClick={() => changeSizeBox(0)} className="size-box border bg-gray-100 rounded px-4 h-12 mr-2 mb-2 text-sm border-green-500 border-2">
                      2XL (75-85kg)
                    </button>
                    <button onClick={() => changeSizeBox(1)} className="size-box border bg-gray-100 rounded px-4 h-12 mr-2 mb-2 text-sm">
                      2XL (75-85kg)
                    </button>
                    <button onClick={() => changeSizeBox(2)} className="size-box border bg-gray-100 rounded px-4 h-12 mr-2 mb-2 text-sm">
                      2XL (75-85kg)
                    </button>
                    <button onClick={() => changeSizeBox(3)} className="size-box border bg-gray-100 rounded px-4 h-12 mr-2 mb-2 text-sm">
                      2XL (75-85kg)
                    </button>
                    <button onClick={() => changeSizeBox(4)} className="size-box border bg-gray-100 rounded px-4 h-12 mr-2 mb-2 text-sm">
                      2XL (75-85kg)
                    </button>
                  </div>
                </div>
              </div>
              <div className="custom-number-input w-32 mb-4">
                <label
                  htmlFor="custom-input-number"
                  className="w-full text-gray-700 font-base font-medium"
                >
                  Số lượng
                </label>
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                  <button
                    data-action="decrement"
                    onClick={decrement}
                    className="border text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <FontAwesomeIcon icon={faMinus} size="xs"></FontAwesomeIcon>
                  </button>
                  <input
                    type="number"
                    className="outline-none focus:outline-none text-center w-full border border-l-0 border-r-0 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                    name="custom-input-number"
                    value="1"
                  ></input>
                  <button
                    onClick={increment}
                    data-action="increment"
                    className="border text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer text-base"
                  >
                    <FontAwesomeIcon icon={faPlus} size="xs"></FontAwesomeIcon>
                  </button>
                </div>
              </div>
              <div className="flex">
                <button className="text-white w-full bg-green-700 border-0 py-4 px-6 focus:outline-none hover:bg-green-600 rounded">
                  <div>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    <span className="ml-2">Mua ngay</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
