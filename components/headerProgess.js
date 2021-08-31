import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

export default function HeaderProgess(props) {
  React.useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <React.Fragment>
      <div className="flex justify-between">
        <div className="hidden lg:block">
          <Link href="/">
            <a
              href="#"
              className="flex items-center py-3 text-gray-700 hover:text-gray-900"
            >
              <img className="w-56" src="/logo.png"></img>
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-center m-auto h-20">
          <div className="flex flex-auto flex-col items-center relative">
            <p className="hidden lg:block absolute text-sm font-base w-48 -top-5 -left-4">
              Đăng nhập
            </p>
            <div className="flex w-10 h-10 bg-green-500 rounded-full text-lg text-white items-center justify-center">
              1
            </div>
          </div>
          <div className="w-44 align-center items-center align-middle content-center flex">
            <div className="w-full bg-green-500 rounded items-center align-middle align-center flex-1">
              <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded "></div>
            </div>
          </div>
          <div className="flex flex-auto flex-col items-center relative">
            <p className="hidden lg:block absolute text-sm font-base w-48 -top-5 -left-8">
              Địa chỉ giao hàng
            </p>
            <div className="flex w-10 h-10 bg-green-500 rounded-full text-lg text-white items-center justify-center">
              2
            </div>
          </div>
          <div className="w-44 align-center items-center align-middle content-center flex">
            <div className="w-full bg-green-500 rounded items-center align-middle align-center flex-1">
              <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded "></div>
            </div>
          </div>
          <div className="flex flex-auto flex-col items-center relative">
            <p className="hidden lg:block absolute text-sm font-base w-48 -top-5 -left-12">
              Thanh toán & Đặt mua
            </p>
            <div className="flex w-10 h-10 bg-green-500 rounded-full text-lg text-white items-center justify-center">
              3
            </div>
          </div>
        </div>
        <div className="items-center hidden lg:flex">
          <div className="flex border rounded-full p-1 pr-4">
            <div className="border w-12 h-12 rounded-full text-white bg-blue-400 flex items-center justify-center">
              <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl font-medium text-green-700">039-5736916</p>
              <p className="text-sm font-medium text-gray-500">
                24/7, cả T7 & Chủ Nhật
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
