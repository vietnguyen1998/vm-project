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
  function showFormCustomerInfo() {
    const formCus = document.querySelector("div.form-customer-info");
    formCus.classList.toggle("hidden")
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-12 mt-4 -ml-4">
        <div className="col-span-12 md:col-span-6 rounded ml-4">
          <div className="border p-4">
            <p className="text-xl font-medium">Việt Nguyễn</p>
            <p className="text-sm py-2">
              Địa chỉ: số 1, đường sáng tạo, KCX Tân Thuận (toà nhà ITD), Phường
              Tân Thuận Đông, Quận 7, Hồ Chí Minh Việt Nam
            </p>
            <p className="text-sm">Điện thoại: 0395736916</p>
            <div className="mt-4">
              <button className="bg-blue-400 text-white px-4 py-2 rounded">
                Giao đến địa chỉ này
              </button>
              <button className="bg-gray-400 text-white px-4 py-2 rounded ml-4">
                Sửa
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 rounded ml-4">
          <div className="border p-4">
            <p className="text-xl font-medium">Việt Nguyễn</p>
            <p className="text-sm py-2">
              Địa chỉ: số 1, đường sáng tạo, KCX Tân Thuận (toà nhà ITD), Phường
              Tân Thuận Đông, Quận 7, Hồ Chí Minh Việt Nam
            </p>
            <p className="text-sm">Điện thoại: 0395736916</p>
            <div className="mt-4">
              <button className="bg-blue-400 text-white px-4 py-2 rounded">
                Giao đến địa chỉ này
              </button>
              <button className="bg-gray-400 text-white px-4 py-2 rounded ml-4">
                Sửa
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12 ml-4 mt-4">
          Bạn muốn giao hàng đến địa chỉ khác?
          <button
            onClick={showFormCustomerInfo}
            className="bg-green-600 text-white px-4 py-2 rounded ml-4"
          >
            Thêm địa chỉ giao hàng mới
          </button>
        </div>
        <div className="form-customer-info hidden col-span-12 ml-4 mt-4 border py-4 mb-4">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4 flex items-left md:items-center flex-col md:flex-row">
              <label
                className="block text-sm font-bold mb-2 w-40 mr-4"
                htmlFor="username"
              >
                Họ tên:
              </label>
              <input
                className="w-80 appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4 flex  items-left md:items-center flex-col md:flex-row">
              <label
                className="block text-sm font-bold mb-2 w-40 mr-4"
                htmlFor="username"
              >
                Điện thoại di động:
              </label>
              <input
                className="w-80 appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4 flex  items-left md:items-center flex-col md:flex-row">
              <label
                className="block text-sm font-bold mb-2 w-40 mr-4"
                htmlFor="username"
              >
                Tỉnh/Thành phố:
              </label>
              <div className="inline-block relative w-80">
                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded border-gray-500 leading-tight focus:outline-none focus:shadow-outline">
                  <option>Really long option th</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-4 flex  items-left md:items-center flex-col md:flex-row">
              <label
                className="block text-sm font-bold mb-2 w-40 mr-4"
                htmlFor="username"
              >
                Quận/Huyện:
              </label>
              <div className="inline-block relative w-80">
                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded border-gray-500 leading-tight focus:outline-none focus:shadow-outline">
                  <option>Really long option th</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-4 flex items-left md:items-center flex-col md:flex-row">
              <label
                className="block text-sm font-bold mb-2 w-40 mr-4"
                htmlFor="username"
              >
                Phường/Xã:
              </label>
              <div className="inline-block relative w-80">
                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded border-gray-500 leading-tight focus:outline-none focus:shadow-outline">
                  <option>Really long option th</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-4 flex items-left md:items-center flex-col md:flex-row">
              <label
                className="block text-sm font-bold mb-2 w-40 mr-4"
                htmlFor="username"
              >
                Phường/Xã:
              </label>
              <div className="inline-block relative w-80">
                <textarea className="px-4 w-80 h-16 resize rounded border border-gray-500"></textarea>
              </div>
            </div>
            <div className="mb-2 flex items-left md:items-center flex-col md:flex-row">
              <label
                className="block text-sm font-bold mb-2 w-40 mr-4"
                htmlFor="username"
              ></label>
              <p className="text-sm w-80 text-gray-500">
                Để nhận hàng thuận tiện hơn, bạn vui lòng cho Tiki biết loại địa
                chỉ.
              </p>
            </div>
            <div className="mb-2 flex items-left md:items-center flex-col md:flex-row">
              <label
                className="block text-sm font-bold mb-2 w-40 mr-4"
                htmlFor="username"
              >
                Loại địa chỉ
              </label>
              <div className="text-sm w-80 text-gray-500">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="accountType"
                    value="personal"
                  />
                  <span className="ml-2">Nhà riêng / Chung cư</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    className="form-radio"
                    name="accountType"
                    value="personal"
                  />
                  <span className="ml-2">Cơ quan / Công ty</span>
                </label>
              </div>
            </div>
            <div className="mb-2 flex items-left md:items-center flex-col md:flex-row">
              <label
                className="block text-sm font-bold mb-2 w-40 mr-4"
                htmlFor="username"
              ></label>
              <div className="text-sm w-80 text-gray-500">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Sử dụng địa chỉ này làm mặc định.</span>
                </label>
              </div>
            </div>
            <div className="mb-2 flex items-left md:items-center flex-col md:flex-row">
              <label
                className="block text-sm font-bold mb-2 w-40 mr-4"
                htmlFor="username"
              ></label>
              <div className="text-sm w-80 text-gray-500">
                <label className="flex items-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded w-80 text-center mt-4">
                    Giao đến địa chỉ này
                  </button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
