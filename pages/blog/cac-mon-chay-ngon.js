import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faFacebook,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import useTrans from "../../hook/useTrans";

export default function Slug(props) {
  React.useEffect(() => {
    console.log(props);
  }, [props]);
  const trans = useTrans();

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
              src="/blog-food-1/salad-chay-9.jpg"
              width={850}
              height={850}
            ></Image>
            <div className="px-4 md:px-0">
              <h6 className="text-center text-4xl font-medium py-4">
                {trans.cac_mon_an_chay.t0}
              </h6>
              <p>
                {trans.cac_mon_an_chay.t8}{" "}
                <span className="text-blue-500">Vegan Media</span>{" "}
                {trans.cac_mon_an_chay.t9}
              </p>
              <div className="bg-gray-100 rounded p-4 mt-4">
                <h3 className="font-medium mb-2">{trans.cac_mon_an_chay.t1}</h3>
                <div className="">
                  <a
                    onClick={() => onClickSCrollIntoViewbyId("menu-1")}
                    className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="mr-4"
                      style={{ fontSize: 6 }}
                    ></FontAwesomeIcon>
                    <span>Mayonnaise</span>
                  </a>
                  <a
                    onClick={() => onClickSCrollIntoViewbyId("food-1")}
                    className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="mr-4"
                      style={{ fontSize: 6 }}
                    ></FontAwesomeIcon>
                    <span>{trans.cac_mon_an_chay.t2}</span>
                  </a>
                  <a
                    onClick={() => onClickSCrollIntoViewbyId("food-2")}
                    className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="mr-4"
                      style={{ fontSize: 6 }}
                    ></FontAwesomeIcon>
                    <span>{trans.cac_mon_an_chay.t3}</span>
                  </a>
                  <a
                    onClick={() => onClickSCrollIntoViewbyId("food-3")}
                    className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="mr-4"
                      style={{ fontSize: 6 }}
                    ></FontAwesomeIcon>
                    <span>{trans.cac_mon_an_chay.t4}</span>
                  </a>
                  <a
                    onClick={() => onClickSCrollIntoViewbyId("food-4")}
                    className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="mr-4"
                      style={{ fontSize: 6 }}
                    ></FontAwesomeIcon>
                    <span>{trans.cac_mon_an_chay.t5}</span>
                  </a>
                  <a
                    onClick={() => onClickSCrollIntoViewbyId("food-5")}
                    className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="mr-4"
                      style={{ fontSize: 6 }}
                    ></FontAwesomeIcon>
                    <span>{trans.cac_mon_an_chay.t6}</span>
                  </a>
                  <a
                    onClick={() => onClickSCrollIntoViewbyId("food-6")}
                    className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="mr-4"
                      style={{ fontSize: 6 }}
                    ></FontAwesomeIcon>
                    <span>{trans.cac_mon_an_chay.t7}</span>
                  </a>
                </div>
              </div>
              <div id="menu-1">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 md:col-span-7">
                    <p className="text-xl font-medium mt-4 mb-2">Mayonnaise</p>
                    <Image
                      alt=""
                      className="w-full rounded"
                      src="/blog-food-1/mayonnaise.jpg"
                      width={850}
                      height={479}
                    ></Image>
                  </div>
                  <div className="col-span-12 md:col-span-5 md:pl-4">
                    <p className="font-medium text-lg mt-4 mb-2  md:pt-8">
                      {trans.cac_mon_an_chay.t10}:
                    </p>
                    <p>{trans.cac_mon_an_chay.t12}</p>
                    <p>{trans.cac_mon_an_chay.t13}</p>
                    <p>{trans.cac_mon_an_chay.t14}</p>
                    <p>{trans.cac_mon_an_chay.t15}</p>
                    <p>{trans.cac_mon_an_chay.t16}</p>
                    <p>{trans.cac_mon_an_chay.t17}</p>
                    <p>{trans.cac_mon_an_chay.t18}</p>
                  </div>
                </div>
                <p className="font-medium mt-4 text-lg pb-2">
                  {trans.cac_mon_an_chay.t11}:
                </p>
                <p>{trans.cac_mon_an_chay.t19}</p>
              </div>
              <div id="food-1">
                <p className="text-3xl font-medium mt-8 mb-4">
                  1. {trans.cac_mon_an_chay.t2}
                </p>
                <div className="grid grid-cols-12">
                  <div className="col-span-12 md:col-span-7">
                    <Image
                      alt=""
                      className="w-full rounded"
                      src="/salad-tron-giam.jpg"
                      width={850}
                      height={481}
                    ></Image>
                  </div>
                  <div className="col-span-12 md:col-span-5 md:pl-4">
                    <p className="font-medium text-lg mt-4 mb-2">
                      {trans.cac_mon_an_chay.t10}:
                    </p>
                    <p>{trans.cac_mon_an_chay.t20}</p>
                    <p>{trans.cac_mon_an_chay.t21}</p>
                    <p>{trans.cac_mon_an_chay.t22}</p>
                    <p>{trans.cac_mon_an_chay.t23}</p>
                    <p>{trans.cac_mon_an_chay.t24}</p>
                    <p>{trans.cac_mon_an_chay.t25}</p>
                    <p>{trans.cac_mon_an_chay.t26}</p>
                  </div>
                </div>
                <p className="font-medium mt-4 text-lg">
                  {trans.cac_mon_an_chay.t11}:
                </p>
                <p className="py-2">{trans.cac_mon_an_chay.t26}</p>
                <p className="py-2">{trans.cac_mon_an_chay.t27}</p>
                <p className="py-2">{trans.cac_mon_an_chay.t28}</p>
                <p className="py-2">{trans.cac_mon_an_chay.t29}</p>
                <p className="py-2">{trans.cac_mon_an_chay.t30}</p>
                <p className="py-2">{trans.cac_mon_an_chay.t31}</p>
              </div>
            </div>
            <div id="food-2" className="px-4">
              <p className="text-3xl font-medium mt-8 mb-4">
                2. {trans.cac_mon_an_chay.t3}
              </p>
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                  <Image
                    alt=""
                    className="w-full rounded"
                    src="/blog-food-1/salad-bo.jpg"
                    width={850}
                    height={566}
                  ></Image>
                </div>
                <div className="col-span-12 md:col-span-5 md:pl-4">
                  <p className="font-medium text-lg mb-2">
                    {trans.cac_mon_an_chay.t10}:
                  </p>
                  <p>{trans.cac_mon_an_chay.t32}</p>
                  <p>{trans.cac_mon_an_chay.t33}</p>
                  <p>{trans.cac_mon_an_chay.t34}</p>
                  <p>{trans.cac_mon_an_chay.t35}</p>
                  <p>{trans.cac_mon_an_chay.t36}</p>
                  <p>{trans.cac_mon_an_chay.t37}</p>
                  <p>{trans.cac_mon_an_chay.t38}</p>
                </div>
              </div>
              <p className="font-medium mt-4 text-lg">
                {trans.cac_mon_an_chay.t11}:
              </p>
              <p className="py-2">{trans.cac_mon_an_chay.t39}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t40}</p>
            </div>
            <div id="food-3" className="px-4">
              <p className="text-3xl font-medium mt-8 mb-4">
                3. {trans.cac_mon_an_chay.t4}
              </p>
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                  <Image
                    alt=""
                    className="w-full rounded"
                    src="/blog-food-1/cai-mam.jpg"
                    width={850}
                    height={446}
                  ></Image>
                </div>
                <div className="col-span-12 md:col-span-5 md:pl-4">
                  <p className="font-medium text-lg mb-2">
                    {trans.cac_mon_an_chay.t10}:
                  </p>
                  <p>{trans.cac_mon_an_chay.t41}</p>
                  <p>{trans.cac_mon_an_chay.t42}</p>
                  <p>{trans.cac_mon_an_chay.t43}</p>
                  <p>{trans.cac_mon_an_chay.t44}</p>
                  <p>{trans.cac_mon_an_chay.t45}</p>
                  <p>{trans.cac_mon_an_chay.t46}</p>
                  <p>{trans.cac_mon_an_chay.t47}</p>
                  <p>{trans.cac_mon_an_chay.t48}</p>
                  <p>{trans.cac_mon_an_chay.t49}</p>
                </div>
              </div>
              <p className="font-medium mt-4 text-lg">
                {trans.cac_mon_an_chay.t11}:
              </p>
              <p className="py-2">{trans.cac_mon_an_chay.t50}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t51}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t52}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t53}</p>
            </div>
            <div id="food-4" className="px-4">
              <p className="text-3xl font-medium mt-8 mb-4">
                4. {trans.cac_mon_an_chay.t5}{" "}
              </p>
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                  <Image
                    alt=""
                    className="w-full rounded"
                    src="/blog-food-1/goi-du-du-chay.jpg"
                    width={850}
                    height={569}
                  ></Image>
                </div>
                <div className="col-span-12 md:col-span-5 md:pl-4">
                  <p className="font-medium text-lg mb-2">
                    {trans.cac_mon_an_chay.t10}:
                  </p>
                  <p>{trans.cac_mon_an_chay.t54}</p>
                  <p>{trans.cac_mon_an_chay.t55}</p>
                  <p>{trans.cac_mon_an_chay.t56}</p>
                  <p>{trans.cac_mon_an_chay.t57}</p>
                  <p>{trans.cac_mon_an_chay.t58}</p>
                  <p>{trans.cac_mon_an_chay.t58}</p>
                  <p>{trans.cac_mon_an_chay.t60}</p>
                  <p>{trans.cac_mon_an_chay.t61}</p>
                </div>
              </div>
              <p className="font-medium mt-4 text-lg">
                {trans.cac_mon_an_chay.t11}:
              </p>
              <p className="py-2">{trans.cac_mon_an_chay.t62}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t63}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t64}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t65}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t66}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t67}</p>
            </div>
            <div id="food-5" className="px-4">
              <p className="text-3xl font-medium mt-8 mb-4">
                5. {trans.cac_mon_an_chay.t6}
              </p>
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                  <Image
                    alt=""
                    className="w-full rounded"
                    src="/blog-food-1/nom_bap_cai_chay.jpg"
                    width={850}
                    height={552}
                  ></Image>
                </div>
                <div className="col-span-12 md:col-span-5 md:pl-4">
                  <p className="font-medium text-lg mb-2">
                    {trans.cac_mon_an_chay.t10}:
                  </p>
                  <p>{trans.cac_mon_an_chay.t68}</p>
                  <p>{trans.cac_mon_an_chay.t69}</p>
                  <p>{trans.cac_mon_an_chay.t70}</p>
                  <p>{trans.cac_mon_an_chay.t71}</p>
                  <p>{trans.cac_mon_an_chay.t72}</p>
                  <p>{trans.cac_mon_an_chay.t73}</p>
                  <p>{trans.cac_mon_an_chay.t74}</p>
                  <p>{trans.cac_mon_an_chay.t75}</p>
                  <p>{trans.cac_mon_an_chay.t76}</p>
                </div>
              </div>
              <p className="font-medium mt-4 text-lg">
                {trans.cac_mon_an_chay.t11}:
              </p>
              <p className="py-2">{trans.cac_mon_an_chay.t77}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t78}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t79}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t80}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t81}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t82}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t77}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t77}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t77}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t77}</p>
            </div>
            <div id="food-6" className="px-4">
              <p className="text-3xl font-medium mt-8 mb-4">
                6. {trans.cac_mon_an_chay.t7}{" "}
              </p>
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-7 w-full">
                  <Image
                    alt=""
                    className="w-full rounded"
                    src="/blog-food-1/nom-hoa-chuoi-chua-chay-truyen-thong-thumbnail.jpg"
                    width={850}
                    height={481}
                  ></Image>
                </div>
                <div className="col-span-12 md:col-span-5 md:pl-4">
                  <p className="font-medium text-lg mb-2">
                    {trans.cac_mon_an_chay.t10}:
                  </p>
                  <p>{trans.cac_mon_an_chay.t83}</p>
                  <p>{trans.cac_mon_an_chay.t84}</p>
                  <p>{trans.cac_mon_an_chay.t85}</p>
                  <p>{trans.cac_mon_an_chay.t86}</p>
                  <p>{trans.cac_mon_an_chay.t87}</p>
                  <p>{trans.cac_mon_an_chay.t88}</p>
                  <p>{trans.cac_mon_an_chay.t89}</p>
                </div>
              </div>
              <p className="font-medium mt-4 text-lg">
                {trans.cac_mon_an_chay.t11}:
              </p>
              <p className="py-2">{trans.cac_mon_an_chay.t90}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t91}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t92}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t93}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t94}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t95}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t96}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t97}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t98}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t99}</p>
              <p className="py-2">{trans.cac_mon_an_chay.t100}</p>
            </div>
          </div>
        </div>
        <div className="col-span-4 hidden md:block">
          <div className="bg-gray-100 rounded p-4">
            <h3 className="font-medium mb-2">{trans.cac_mon_an_chay.t1}</h3>
            <div>
              <a
                onClick={() => onClickSCrollIntoViewbyId("menu-1")}
                className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
              >
                <FontAwesomeIcon
                  icon={faCircle}
                  className="mr-4"
                  style={{ fontSize: 6 }}
                ></FontAwesomeIcon>
                <span>Mayonnaise</span>
              </a>
              <a
                onClick={() => onClickSCrollIntoViewbyId("food-1")}
                className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
              >
                <FontAwesomeIcon
                  icon={faCircle}
                  className="mr-4"
                  style={{ fontSize: 6 }}
                ></FontAwesomeIcon>
                <span>{trans.cac_mon_an_chay.t2}</span>
              </a>
              <a
                onClick={() => onClickSCrollIntoViewbyId("food-2")}
                className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
              >
                <FontAwesomeIcon
                  icon={faCircle}
                  className="mr-4"
                  style={{ fontSize: 6 }}
                ></FontAwesomeIcon>
                <span>{trans.cac_mon_an_chay.t3}</span>
              </a>
              <a
                onClick={() => onClickSCrollIntoViewbyId("food-3")}
                className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
              >
                <FontAwesomeIcon
                  icon={faCircle}
                  className="mr-4"
                  style={{ fontSize: 6 }}
                ></FontAwesomeIcon>
                <span>{trans.cac_mon_an_chay.t4}</span>
              </a>
              <a
                onClick={() => onClickSCrollIntoViewbyId("food-4")}
                className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
              >
                <FontAwesomeIcon
                  icon={faCircle}
                  className="mr-4"
                  style={{ fontSize: 6 }}
                ></FontAwesomeIcon>
                <span>{trans.cac_mon_an_chay.t5}</span>
              </a>
              <a
                onClick={() => onClickSCrollIntoViewbyId("food-5")}
                className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
              >
                <FontAwesomeIcon
                  icon={faCircle}
                  className="mr-4"
                  style={{ fontSize: 6 }}
                ></FontAwesomeIcon>
                <span>{trans.cac_mon_an_chay.t6}</span>
              </a>
              <a
                onClick={() => onClickSCrollIntoViewbyId("food-6")}
                className="flex items-center leading-5 mb-2 cursor-pointer text-blue-500"
              >
                <FontAwesomeIcon
                  icon={faCircle}
                  className="mr-4"
                  style={{ fontSize: 6 }}
                ></FontAwesomeIcon>
                <span>{trans.cac_mon_an_chay.t7}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
