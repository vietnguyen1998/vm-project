import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons"; //
import Image from 'next/image'
export default function About() {
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

  React.useEffect(() => {});
  return (
    <div className="grid grid-cols-12 mt-4">
      <div className="col-span-12 md:col-span-8 rounded">
        <div className="bg-coolGray-50 text-coolGray-800">
          <div className="p-4 pt-0 ">
            <h2 className="text-xl font-semibold mb-4">GIỎ HÀNG</h2>
            <ul className="border px-4 flex flex-col divide-y divide-coolGray-300">
              <li className="flex flex-col py-4 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <Image
                    className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32"
                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                    alt="Polaroid camera"
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8 mr-8">
                          Polaroid camera (<span>39.000đ</span>
                          <span className="text-sm ml-2 line-through text-gray-700">59.000đ</span>
                          ). Size: XL
                        </h3>
                        <div className="flex custom-number-input mb-4">
                          <label
                            htmlFor="custom-input-number"
                            className="w-full text-gray-700 text-sm w-16"
                          >
                            Số lượng:
                          </label>
                          <div className="w-32 flex flex-row h-8 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                              data-action="decrement"
                              onClick={decrement}
                              className="border text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                            >
                              <FontAwesomeIcon
                                icon={faMinus}
                                size="xs"
                              ></FontAwesomeIcon>
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
                              <FontAwesomeIcon
                                icon={faPlus}
                                size="xs"
                              ></FontAwesomeIcon>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">100.000đ</p>
                      </div>
                    </div>
                    <div className="flex text-sm divide-x">
                      <button className="flex items-center px-2 py-1 pl-0 space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                          <rect width="32" height="200" x="168" y="216"></rect>
                          <rect width="32" height="200" x="240" y="216"></rect>
                          <rect width="32" height="200" x="312" y="216"></rect>
                          <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex flex-col py-4 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <Image
                    className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32"
                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                    alt="Polaroid camera"
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8 mr-8">
                          Polaroid camera (<span>39.000đ</span>
                          <span className="text-sm ml-2 line-through text-gray-700">59.000đ</span>
                          ). Size: XL
                        </h3>
                        <div className="flex custom-number-input mb-4">
                          <label
                            htmlFor="custom-input-number"
                            className="w-full text-gray-700 text-sm w-16"
                          >
                            Số lượng:
                          </label>
                          <div className="w-32 flex flex-row h-8 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                              data-action="decrement"
                              onClick={decrement}
                              className="border text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                            >
                              <FontAwesomeIcon
                                icon={faMinus}
                                size="xs"
                              ></FontAwesomeIcon>
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
                              <FontAwesomeIcon
                                icon={faPlus}
                                size="xs"
                              ></FontAwesomeIcon>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">100.000đ</p>
                      </div>
                    </div>
                    <div className="flex text-sm divide-x">
                      <button className="flex items-center px-2 py-1 pl-0 space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                          <rect width="32" height="200" x="168" y="216"></rect>
                          <rect width="32" height="200" x="240" y="216"></rect>
                          <rect width="32" height="200" x="312" y="216"></rect>
                          <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex flex-col py-4 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <Image
                    className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32"
                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                    alt="Polaroid camera"
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8 mr-8">
                          Polaroid camera (<span>39.000đ</span>
                          <span className="text-sm ml-2 line-through text-gray-700">59.000đ</span>
                          ). Size: XL
                        </h3>
                        <div className="flex custom-number-input mb-4">
                          <label
                            htmlFor="custom-input-number"
                            className="w-full text-gray-700 text-sm w-16"
                          >
                            Số lượng:
                          </label>
                          <div className="w-32 flex flex-row h-8 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                              data-action="decrement"
                              onClick={decrement}
                              className="border text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                            >
                              <FontAwesomeIcon
                                icon={faMinus}
                                size="xs"
                              ></FontAwesomeIcon>
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
                              <FontAwesomeIcon
                                icon={faPlus}
                                size="xs"
                              ></FontAwesomeIcon>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">100.000đ</p>
                      </div>
                    </div>
                    <div className="flex text-sm divide-x">
                      <button className="flex items-center px-2 py-1 pl-0 space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                          <rect width="32" height="200" x="168" y="216"></rect>
                          <rect width="32" height="200" x="240" y="216"></rect>
                          <rect width="32" height="200" x="312" y="216"></rect>
                          <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 md:pl-4 mt-8 p-4">
        <div className="border">
          <div className="flex justify-between space-y-1 text-right bg-gray-100 px-4 py-2 rounded">
            <p className="text-gray-500">Tạm tính:</p>
            <p className="text-base text-black">39.000đ</p>
          </div>
          <div className="flex justify-between space-y-1 text-right bg-gray-100 px-4 py-2 rounded border-b">
            <p className="text-gray-500">Giảm giá:</p>
            <p className="text-base text-black">39.000đ</p>
          </div>
          <div className="flex justify-between space-y-1 text-right bg-gray-100 px-4 py-2 rounded pt-4">
            <p className="text-gray-500">Tổng cộng:</p>
            <div>
              <p className="text-2xl text-red-700">39.000đ</p>
              <p className="text-gray-500 text-sm">(Đã bao gồm VAT nếu có)</p>
            </div>
          </div>
        </div>
        <div className="space-y-1 bg-gray-100 p-4 rounded mt-4 border">
          <p>Khuyến mãi:</p>
          <div className="flex">
            <input className="px-2 w-full border"></input>
            <button className="text-white bg-gray-700 p-2 rounded w-40 ml-4">
              Áp dụng
            </button>
          </div>
        </div>
        <button className="text-white bg-green-500 w-full p-4 rounded mt-4">
          Mua hàng
        </button>
      </div>
    </div>
  );
}
