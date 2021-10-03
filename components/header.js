import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faChevronDown,
  faTshirt,
  faUserSecret,
  faUserCircle,
  faShoppingBag,
  faUser,
  faWindowClose,
  faClosedCaptioning,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import Link from "next/link";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function Header() {
  React.useEffect(() => {});

  function closeLogin() {
    const closeModal = document.querySelectorAll("button.close-modal");
    const modal = document.querySelector(".modal");
    closeModal.forEach((close) => {
      close.addEventListener("click", function () {
        modal.classList.add("hidden");
      });
    });
  }

  function enterLogin() {
    const modal = document.querySelector("div.modal");
    const modalContents = document.querySelectorAll("div.model-content");
    const loginContent = document.querySelector("div.login-form");
    for (let i = 0; i < modalContents.length; i++) {
      const element = modalContents[i];
      element.classList.add("hidden");
    }
    loginContent.classList.remove("hidden");
    modal.classList.remove("hidden");
  }

  function clickItemMenu(n) {
    var elements = document.querySelectorAll("div.sub-item");
    var element = elements[n];
    element.classList.toggle("hidden");
  }

  function showMenuContent() {
    var menu = document.querySelector("div.mobile-menu");
    menu.classList.toggle("hidden");
  }

  function addOrRemoveHidden(isAdd, formName) {
    var obj = document.querySelector(`div.${formName}`);
    if (obj) {
      if (isAdd) {
        obj.classList.add("hidden");
      } else {
        obj.classList.remove("hidden");
      }
    }
  }

  function forgotPassword() {
    addOrRemoveHidden(true, "login-form");
    addOrRemoveHidden(false, "forgot-pass-form");
  }

  function enterCode() {
    addOrRemoveHidden(true, "forgot-pass-form");
    addOrRemoveHidden(true, "register-form");
    addOrRemoveHidden(false, "enter-code-form");
  }

  function enterNewPass() {
    addOrRemoveHidden(true, "enter-code-form");
    addOrRemoveHidden(false, "enter-new-pass-form");
  }

  function enterLoginForm() {
    addOrRemoveHidden(true, "login-now-form");
    addOrRemoveHidden(true, "enter-code-form");
    addOrRemoveHidden(false, "login-form");
  }

  function enterRegister() {
    addOrRemoveHidden(true, "login-form");
    addOrRemoveHidden(false, "register-form");
  }

  function loginNow() {
    addOrRemoveHidden(true, "enter-new-pass-form");
    addOrRemoveHidden(false, "login-now-form");
  }

  return (
    <React.Fragment>
      <div className="bg-white shadow mb-1 md:shadow-none md:mb-0">
        <div className="container mx-auto py-4">
          <div className="grid grid-cols-12">
            <div className="col-span-3 flex items-center ">
              <div className="hidden md:flex">
                <Link href="https://www.facebook.com/groups/3802339539871895">
                  <a target="_blank">
                    {" "}
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                </Link>

                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  className="mx-4"
                />
                <FontAwesomeIcon icon={faTwitter} size="lg" />
                <FontAwesomeIcon icon={faYoutube} size="lg" className="mx-4" />
              </div>

              <div className="md:hidden flex items-center">
                <button onClick={showMenuContent} className="ml-4">
                  <svg
                    className="w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="2x"
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className="col-span-6">
              <Link href="/" passHref={true}>
                <a
                  href="#"
                  className="flex items-center py-3 text-gray-700 hover:text-gray-900 justify-center"
                >
                  <Image src="/logo.png" alt="" width={245} height={60}></Image>
                </a>
              </Link>
            </div>
            <div className="col-span-3 flex justify-end">
              <div className="flex items-center md:hidden mr-4">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  size="2x"
                ></FontAwesomeIcon>
              </div>

              <div className="hidden md:flex">
                <div className="flex items-center justify-end">
                  <div
                    className="show-modal text-center text-bold text-gray-700"
                    onClick={enterLogin}
                  >
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      size="2x"
                    ></FontAwesomeIcon>
                    <p className="font-medium text-gray-700 text-sm">
                      Đăng nhập
                    </p>
                  </div>
                </div>

                <div className="flex items-center ml-8">
                  <Link
                    href={{
                      pathname: "/cart",
                    }}
                    passHref={true}
                  >
                    <div className="text-white bg-green-700 transition duration-300 p-3 rounded">
                      <FontAwesomeIcon
                        icon={faShoppingBag}
                        size="2x"
                      ></FontAwesomeIcon>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <nav className="">
                {/* <nav className="bg-gray-100"> */}
                <div className="mx-auto">
                  <div className="flex justify-center">
                    <div className="flex space-x-4">
                      {/* <!-- primary nav --> */}
                      <div className="hidden md:flex items-center space-x-1">
                        {/* menu feature
                         */}
                        <a
                          href="#"
                          className="py-2 px-3 text-gray-800 hover:text-gray-800 text-base font-bold"
                        >
                          ALL
                        </a>
                        <a
                          href="#"
                          className="py-2 px-3 text-gray-800 hover:text-gray-800 text-base font-bold"
                        >
                          YOUTUBE
                        </a>
                        <a
                          href="#"
                          className="py-2 px-3 text-gray-800 hover:text-gray-800 text-base font-bold"
                        >
                          SHOPPING
                        </a>
                        <a
                          href="#"
                          className="py-2 px-3 text-gray-800 hover:text-gray-800 text-base font-bold"
                        >
                          BLOG
                        </a>
                        <a
                          href="#"
                          className="py-2 px-3 text-gray-800 hover:text-gray-800 text-base font-bold"
                        >
                          CULTURE
                        </a>
                        <a
                          href="#"
                          className="py-2 px-3 text-gray-800 hover:text-gray-800 text-base font-bold"
                        >
                          ABOUT US
                        </a>
                        <div className="relative inline-block px-3">
                          <div className="mydropdown">
                            <a
                              href="#"
                              className="items-center py-2 px-5 pl-0 text-gray-800 hover:text-gray-900 font-bold"
                            >
                              <span className="mr-1 text-base">ÁO</span>
                              <FontAwesomeIcon
                                icon={faChevronDown}
                                size="xs"
                              ></FontAwesomeIcon>
                            </a>
                            <div
                              className="z-10 dropdown-menu hidden absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="menu-button"
                              style={{ marginTop: "-11px" }}
                            >
                              <div className="py-1" role="none">
                                <a
                                  href="#"
                                  className="text-gray-700 block px-4 py-2 text-sm flex items-center"
                                  role="menuitem"
                                  id="menu-item-1"
                                >
                                  <div className="w-12">
                                    <FontAwesomeIcon
                                      icon={faTshirt}
                                      size="3x"
                                    ></FontAwesomeIcon>
                                  </div>
                                  <div className="text-base ml-10">Áo thun</div>
                                </a>
                              </div>
                              <div className="py-1" role="none">
                                <a
                                  href="#"
                                  className="text-gray-700 block px-4 py-2 text-sm flex items-center"
                                  role="menuitem"
                                  id="menu-item-3"
                                >
                                  <div className="w-12 pl-2">
                                    <FontAwesomeIcon
                                      icon={faUserSecret}
                                      size="3x"
                                    ></FontAwesomeIcon>
                                  </div>
                                  <div className="text-base ml-10">
                                    Áo khoác
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden z-30 modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
          <div className="px-4 py-2 flex justify-between items-center">
            <div></div>
            <button
              className="text-black close-modal float-right"
              onClick={closeLogin}
            >
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
          </div>
          <div className="p-3 pt-0">
            <div className="flex items-center bg-white dark:bg-gray-900">
              {/* login */}
              <div className="container mx-auto">
                <div className="login-form max-w-md mx-auto model-content">
                  <div className="text-center">
                    <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                      Đăng nhập
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      Đăng nhập để truy cập vào tài khoản của bạn
                    </p>
                  </div>
                  <div className="m-7">
                    <form action="">
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Số điện thoại hoặc email
                        </label>
                        <input
                          name="email"
                          id="email"
                          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                      </div>
                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <label
                            htmlFor="password"
                            className="text-sm text-gray-600 dark:text-gray-400"
                          >
                            Password
                          </label>
                          <a
                            href="#!"
                            onClick={forgotPassword}
                            className="text-sm focus:outline-none focus:text-indigo-500 text-indigo-500"
                          >
                            Quên mật khẩu?
                          </a>
                        </div>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Your Password"
                          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                      </div>
                      <div className="mb-6">
                        <button
                          type="button"
                          className="w-full px-3 py-4 text-white bg-green-500 rounded-md"
                        >
                          Đăng nhập
                        </button>
                      </div>
                      <p className="text-sm text-center text-gray-400">
                        Chưa có tài khoản?{" "}
                        <a
                          onClick={enterRegister}
                          href="#!"
                          className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                        >
                          Đăng ký ngay
                        </a>
                        .
                      </p>
                    </form>
                  </div>
                </div>

                {/* forgot pass */}
                <div className="forgot-pass-form max-w-md mx-auto hidden model-content">
                  <div className="text-center">
                    <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                      Quên mật khẩu
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      Nhập số điện thoại hoặc email của bạn để khôi phục
                    </p>
                  </div>
                  <div className="m-7">
                    <form action="">
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Số điện thoại hoặc email
                        </label>
                        <input
                          name="email"
                          id="email"
                          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                      </div>

                      <div className="mb-6">
                        <button
                          type="button"
                          onClick={enterCode}
                          className="w-full px-3 py-4 text-white bg-green-500 rounded-md"
                        >
                          Tiếp tục
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* enter code*/}
                <div className="enter-code-form max-w-md mx-auto hidden model-content">
                  <div className="text-center">
                    <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                      Nhập mã xác minh
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      Nhập mã xác minh để khôi phục mật khẩu
                    </p>
                  </div>
                  <div className="m-7">
                    <form action="">
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Mã xác minh
                        </label>
                        <input
                          name="email"
                          id="email"
                          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                      </div>

                      <div className="mb-6">
                        <button
                          type="button"
                          onClick={enterLoginForm}
                          className="w-full px-3 py-4 text-white bg-green-500 rounded-md"
                        >
                          Tiếp tục
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/*new pass*/}
                <div className="enter-new-pass-form max-w-md mx-auto hidden model-content">
                  <div className="text-center">
                    <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                      Nhập mật khẩu mới
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400"></p>
                  </div>
                  <div className="m-7">
                    <form action="">
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Mật khẩu
                        </label>
                        <input
                          name="email"
                          id="email"
                          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Nhập lại mật khẩu
                        </label>
                        <input
                          name="email"
                          id="email"
                          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                      </div>
                      <div className="mb-6">
                        <button
                          type="button"
                          onClick={loginNow}
                          className="w-full px-3 py-4 text-white bg-green-500 rounded-md"
                        >
                          Tiếp tục
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/*login now*/}
                <div className="login-now-form max-w-md mx-auto hidden model-content">
                  <div className="m-7">
                    <form action="">
                      <div className="mb-6">
                        <button
                          type="button"
                          onClick={enterLoginForm}
                          className="w-full px-3 py-4 text-white bg-green-500 rounded-md"
                        >
                          Đăng nhập ngay!
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* register */}
                <div className="register-form max-w-md mx-auto hidden model-content">
                  <div className="text-center">
                    <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                      Đăng ký
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      Điền thông tin vào form bên dưới để tiếp tục
                    </p>
                  </div>
                  <div className="m-7">
                    <form action="">
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Họ và tên
                        </label>
                        <input
                          name="email"
                          id="email"
                          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Số điện thoại hoặc email
                        </label>
                        <input
                          name="email"
                          id="email"
                          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Mật khẩu
                        </label>
                        <input
                          name="email"
                          id="email"
                          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Nhập lại mật khẩu
                        </label>
                        <input
                          name="email"
                          id="email"
                          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                      </div>
                      <div className="mb-6">
                        <button
                          type="button"
                          onClick={enterCode}
                          className="w-full px-3 py-4 text-white bg-green-500 rounded-md"
                        >
                          Tiếp tục
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>{" "}
              {/* login */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- mobile menu --> */}
      <div className="z-auto mobile-menu hidden">
        <div className="absolute w-full bg-gray-100 z-20">
          <a
            href="#"
            className="text-base block py-2 px-4 text-sm bg-gray-200 border-b border-gray-300"
            onClick={() => clickItemMenu(0)}
          >
            <span className="mr-1"> ÁO</span>
            <FontAwesomeIcon icon={faChevronDown} size="xs"></FontAwesomeIcon>
          </a>
          <div className="sub-item ml-8">
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm flex items-center border-b"
                role="menuitem"
                id="menu-item-1"
              >
                <div className="w-12">
                  <FontAwesomeIcon icon={faTshirt} size="3x"></FontAwesomeIcon>
                </div>
                <div className="text-base ml-10">Áo thun</div>
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm flex items-center"
                role="menuitem"
                id="menu-item-3"
              >
                <div className="w-12 pl-2">
                  <FontAwesomeIcon
                    icon={faUserSecret}
                    size="3x"
                  ></FontAwesomeIcon>
                </div>
                <div className="text-base ml-10">Áo khoác</div>
              </a>
            </div>
          </div>
          <a
            href="#"
            className="text-base block py-2 px-4 text-sm bg-gray-200 border-b border-gray-300"
          >
            NÓN
          </a>
          <a
            href="#"
            className="text-base block py-2 px-4 text-sm bg-gray-200 border-b border-gray-300"
          >
            LY
          </a>

          <a
            href="#"
            className="text-base block py-2 px-4 text-sm bg-gray-200 border-b border-gray-300"
          >
            KHÁC
          </a>
        </div>
        <div className="bg-gray-200"></div>
      </div>
    </React.Fragment>
  );
}
