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
import PageView from "components/PageView";
import { useRouter } from "next/router";

export default function Slug(props) {
  React.useEffect(() => {
    console.log(props);
  }, [props]);
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
              src="/blog-food-1/canh-bi-do/photo.jpg"
              width={1200}
              height={630}
            ></Image>
            <PageView date={locale == "vi" ? "31 Tháng 10, 2021" : "October 31, 2021"} />
            <div className="px-4 md:px-0">
              <h6 className="text-center text-4xl font-medium py-4">
                {trans.canh_bi_do.t1}
              </h6>
              <p>
                {trans.canh_bi_do.t4}{" "}
                <span className="text-blue-500">Vegan Media</span>{" "}
                {trans.canh_bi_do.t5}
              </p>
              <div className="bg-gray-100 rounded p-4 mt-4">
                <h3 className="font-medium mb-2">{trans.canh_bi_do.t1}</h3>
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
                    <span>{trans.canh_bi_do.t2}</span>
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
                    <span>{trans.canh_bi_do.t3}</span>
                  </a>
                </div>
              </div>
              <div id="menu-1">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 md:col-span-7">
                    <p className="text-xl font-medium mt-4 mb-2">
                      {trans.canh_bi_do.t1}
                    </p>
                    <Image
                      alt=""
                      className="w-full rounded"
                      src="/blog-food-1/canh-bi-do/20200516_075746_243987_bi-do-1.max-1800x1800.jpg"
                      width={850}
                      height={479}
                    ></Image>
                  </div>
                  <div className="col-span-12 md:col-span-5 md:pl-4">
                    <p
                      id="nguyen-lieu"
                      className="font-medium text-lg mt-4 mb-2  md:pt-8"
                    >
                      {trans.canh_bi_do.t2}:
                    </p>
                    <p>{trans.canh_bi_do.t6}</p>
                    <p>{trans.canh_bi_do.t7}</p>
                    <p>{trans.canh_bi_do.t8}</p>
                    <p>{trans.canh_bi_do.t9}</p>
                    <p>{trans.canh_bi_do.t10}</p>
                  </div>
                </div>
                <p id="cach-lam" className="font-medium mt-4 text-lg pb-2">
                  {trans.canh_bi_do.t3}:
                </p>
                <p className="py-2">{trans.canh_bi_do.t11}</p>
                <p className="py-2">{trans.canh_bi_do.t12}</p>
                <p className="py-2">{trans.canh_bi_do.t13}</p>
                <p className="py-2">{trans.canh_bi_do.t14}</p>
                <p className="py-2">{trans.canh_bi_do.t15}</p>
                <p className="py-2">{trans.canh_bi_do.t16}</p>
                <p className="py-2">{trans.canh_bi_do.t17}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 hidden md:block">
          <div className="bg-gray-100 rounded p-4">
            <h3 className="font-medium mb-2">{trans.canh_bi_do.t1}</h3>
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
                <span>{trans.canh_bi_do.t2}</span>
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
                <span>{trans.canh_bi_do.t3}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
