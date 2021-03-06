import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import useTrans from "../../hook/useTrans";
import PageView from "components/PageView";
import { useRouter } from "next/router";

export default function Slug(props) {
  const trans = useTrans();
  const { locale } = useRouter();

  function onClickSCrollIntoViewbyId(id) {
    let elementId = document.getElementById(id);
    if (elementId) {
      elementId.scrollIntoView();
    }
  }

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:pr-4 md:col-span-8">
          <div className="rounded">
            <Image
              alt=""
              className="w-full rounded-t"
              src="/blog-food-1/nem-nuong/nem-nuong-chay-2.jpg"
              width={1200}
              height={630}
            ></Image>
            <PageView date={locale == "vi" ? "31 Tháng 10, 2021" : "October 31, 2021"} />
            <div className="px-4 md:px-0">
              <h6 className="text-center text-4xl font-medium py-4">
                {trans.nem_nuong.t1}
              </h6>
              <p>
              {trans.nem_nuong.t29}{" "}
                <span className="text-blue-500">Vegan Media</span>. {trans.nem_nuong.t30}
              </p>
              <div className="bg-gray-100 rounded p-4 mt-4">
                <h3 className="font-medium mb-2">{trans.nem_nuong.t1}</h3>
                <div className="">
                  <a
                    onClick={() => onClickSCrollIntoViewbyId("nguyen-lieu")}
                    className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="mr-4"
                      style={{ fontSize: 6 }}
                    ></FontAwesomeIcon>
                    <span>{trans.nem_nuong.t2}</span>
                  </a>
                  <a
                    onClick={() => onClickSCrollIntoViewbyId("so-che")}
                    className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="mr-4"
                      style={{ fontSize: 6 }}
                    ></FontAwesomeIcon>
                    <span>{trans.nem_nuong.t3}</span>
                  </a>
                  <a
                    onClick={() => onClickSCrollIntoViewbyId("cach-lam")}
                    className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="mr-4"
                      style={{ fontSize: 6 }}
                    ></FontAwesomeIcon>
                    <span>{trans.nem_nuong.t4}</span>
                  </a>
                </div>
              </div>
              <div id="menu-1">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 md:col-span-7">
                    <p className="text-xl font-medium mt-4 mb-2">{trans.nem_nuong.t1}</p>
                    <Image
                      alt=""
                      className="w-full rounded"
                      src="/blog-food-1/nem-nuong/cach-lam-nem-nuong-chay-4.jpg"
                      width={500}
                      height={336}
                    ></Image>
                  </div>
                  <div className="col-span-12 md:col-span-5 md:pl-4">
                    <p
                      id="nguyen-lieu"
                      className="font-medium text-lg mt-4 mb-2  md:pt-8"
                    >
                      {trans.nem_nuong.t2}:
                    </p>
                    <p>{trans.nem_nuong.t5}</p>
                    <p>{trans.nem_nuong.t6}</p>
                    <p>{trans.nem_nuong.t7}</p>
                    <p>{trans.nem_nuong.t8}</p>
                    <p>{trans.nem_nuong.t9}</p>
                    <p>{trans.nem_nuong.t10}</p>
                    <p>{trans.nem_nuong.t11}</p>
                    <p>{trans.nem_nuong.t12}</p>
                    <p>{trans.nem_nuong.t13}</p>
                    <p>{trans.nem_nuong.t14}</p>
                    <p>{trans.nem_nuong.t15}</p>
                    <p>{trans.nem_nuong.t16}</p>
                    <p>{trans.nem_nuong.t17}</p>
                    <p>{trans.nem_nuong.t18}</p>
                    <p>{trans.nem_nuong.t19}</p>
                    <p>{trans.nem_nuong.t20}</p>
                  </div>
                </div>
                <p id="so-che" className="font-medium mt-4 text-lg pb-2">
                  {trans.nem_nuong.t3}:
                </p>
                <p>{trans.nem_nuong.t21}</p>
                <p>{trans.nem_nuong.t22}</p>
                <p>{trans.nem_nuong.t23}</p>
                <p>{trans.nem_nuong.t24}</p>
                <p>{trans.nem_nuong.t25}</p>
                <p id="cach-lam" className="font-medium mt-4 text-lg pb-2">
                  {trans.nem_nuong.t4}:
                </p>
                <p className="py-2">{trans.nem_nuong.t26}</p>
                <p className="py-2">{trans.nem_nuong.t27}</p>
                <p className="py-2">{trans.nem_nuong.t28}</p>
                <p className="py-2">{trans.nem_nuong.t29}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 hidden md:block">
          <div className="bg-gray-100 rounded p-4">
            <h3 className="font-medium mb-2">{trans.nem_nuong.t1}</h3>
            <div>
              <a
                onClick={() => onClickSCrollIntoViewbyId("nguyen-lieu")}
                className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
              >
                <FontAwesomeIcon
                  icon={faCircle}
                  className="mr-4"
                  style={{ fontSize: 6 }}
                ></FontAwesomeIcon>
                <span>{trans.nem_nuong.t2}</span>
              </a>
              <a
                onClick={() => onClickSCrollIntoViewbyId("so-che")}
                className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
              >
                <FontAwesomeIcon
                  icon={faCircle}
                  className="mr-4"
                  style={{ fontSize: 6 }}
                ></FontAwesomeIcon>
                <span>{trans.nem_nuong.t3}</span>
              </a>
              <a
                onClick={() => onClickSCrollIntoViewbyId("cach-lam")}
                className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
              >
                <FontAwesomeIcon
                  icon={faCircle}
                  className="mr-4"
                  style={{ fontSize: 6 }}
                ></FontAwesomeIcon>
                <span>{trans.nem_nuong.t4}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
