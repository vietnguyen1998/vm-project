import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faCircle,
  faIdCard,
  faMinus,
  faMoneyBillAlt,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  React.useEffect(() => {});

  return (
    <React.Fragment>
      <div className="grid grid-cols-12 mt-4">
        <div className="col-span-12 md:col-span-8 rounded">
          <div className="bg-coolGray-50 text-coolGray-800 mb-4">
            <div className="pt-0 ">
              <ul className="border px-4 flex flex-col">
                <li className="bg-blue-100 lg:w-3/4 mt-4 p-2 rounded">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ fontSize: "6px", marginRight: 8 }}
                    ></FontAwesomeIcon>
                    <p>
                      Giao hàng trong nước từ 3-5 ngày, ngoài nước từ 7-10 ngày
                    </p>
                  </div>
                </li>
                <li className="flex flex-col py-4 sm:flex-row sm:justify-between border-b">
                  <div className="flex w-full space-x-2 sm:space-x-4">
                    <img
                      className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none"
                      src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                      alt="Polaroid camera"
                    />
                    <div className="flex flex-col justify-between w-full">
                      <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold leading-snug sm:pr-8 mr-8">
                            Polaroid camera (<span>39.000đ</span>
                            <span className="text-sm ml-2 line-through text-gray-700">
                              59.000đ
                            </span>
                            ). Size: XL
                          </h3>
                          <div className="flex custom-number-input mb-4">
                            <label
                              htmlFor="custom-input-number"
                              className="w-full text-gray-700 text-sm "
                            >
                              Số lượng: <span className="font-medium">X3</span>
                            </label>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">100.000đ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col py-4 sm:flex-row sm:justify-between">
                  <div className="flex w-full space-x-2 sm:space-x-4">
                    <img
                      className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none"
                      src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                      alt="Polaroid camera"
                    />
                    <div className="flex flex-col justify-between w-full">
                      <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold leading-snug sm:pr-8 mr-8">
                            Polaroid camera (<span>39.000đ</span>
                            <span className="text-sm ml-2 line-through text-gray-700">
                              59.000đ
                            </span>
                            ). Size: XL
                          </h3>
                          <div className="flex custom-number-input mb-4">
                            <label
                              htmlFor="custom-input-number"
                              className="w-full text-gray-700 text-sm "
                            >
                              Số lượng: <span className="font-medium">X3</span>
                            </label>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">100.000đ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col py-4 sm:flex-row sm:justify-between">
                  <div className="flex w-full space-x-2 sm:space-x-4">
                    <img
                      className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none"
                      src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                      alt="Polaroid camera"
                    />
                    <div className="flex flex-col justify-between w-full">
                      <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold leading-snug sm:pr-8 mr-8">
                            Polaroid camera (<span>39.000đ</span>
                            <span className="text-sm ml-2 line-through text-gray-700">
                              59.000đ
                            </span>
                            ). Size: XL
                          </h3>
                          <div className="flex custom-number-input mb-4">
                            <label
                              htmlFor="custom-input-number"
                              className="w-full text-gray-700 text-sm "
                            >
                              Số lượng: <span className="font-medium">X3</span>
                            </label>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">100.000đ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-coolGray-50 text-coolGray-800">
            <div className="p-4 pt-0 border">
              <div className="bg-blue-100 lg:w-3/4 mt-4 p-2 rounded">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ fontSize: "6px", marginRight: 8 }}
                  ></FontAwesomeIcon>
                  <p>Hình thức thanh toán</p>
                </div>
              </div>
              <div>
                <div className="flex items-center mt-4">
                  <input type="radio" className="form-radio" name="accountType" />
                  <FontAwesomeIcon
                    icon={faMoneyBillAlt}
                    size="2x"
                    className="text-gray-400 ml-8"
                  ></FontAwesomeIcon>
                  <span className="ml-2">Thanh toán khi nhận hàng</span>
                </div>
                <div className="flex items-center mt-4">
                  <input
                    type="radio"
                    className="form-radio"
                    name="accountType"
                    checked="checked"
                  />
                  <FontAwesomeIcon
                    icon={faIdCard}
                    size="2x"
                    className="text-gray-400 ml-8"
                  ></FontAwesomeIcon>
                  <span className="ml-2">Thanh toán chuyển khoản</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:pl-4 p-0 lg:p-4 pt-0 mt-4 lg:mt-0 lg:pr-0">
          <div className="border rounded bg-gray-100 p-4 mb-4">
            <div className="border-b pb-2 border-gray-300 flex justify-between">
              <p className="">Địa chỉ giao hàng</p>
              <a className="underline italic text-blue-400">Sửa</a>
            </div>
            <p className="text-lg font-medium">Việt Nguyễn</p>
            <p className="text-sm mt-2">
              số 1, đường sáng tạo, KCX Tân Thuận (toà nhà ITD), Phường Tân
              Thuận Đông, Quận 7, Hồ Chí Minh Việt Nam
            </p>
            <p className="text-sm mt-2">Điện thoại: 0395736916</p>
          </div>
          <div className="border rounded px-4 py-2 bg-gray-100">
            <div className="border-b pb-2 border-gray-300 flex justify-between">
              <p className="">Đơn hàng</p>
              <a className="underline italic text-blue-400">Sửa</a>
            </div>
            <div className="flex justify-between space-y-1 text-right py-2 rounded">
              <p className="text-gray-500">Tạm tính:</p>
              <p className="text-base text-black">39.000đ</p>
            </div>
            <div className="flex justify-between space-y-1 text-right py-2 rounded border-b">
              <p className="text-gray-500">Giảm giá:</p>
              <p className="text-base text-black">39.000đ</p>
            </div>
            <div className="flex justify-between space-y-1 text-right py-2 rounded pt-4">
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
            Thanh toán
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
