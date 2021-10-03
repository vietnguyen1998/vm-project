import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCircle } from "@fortawesome/free-solid-svg-icons";
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
              src="/blog-food-1/bap-cai-cuon/bap-cai-cuon-chay.jpg"
              width={840}
              height={840}
            ></Image>
            <div className="px-4 md:px-0">
              <h6 className="text-center text-4xl font-medium py-4">
                {trans.bap_cai_cuon.title3}
              </h6>
              <p>
                {trans.bap_cai_cuon.title1}{" "}
                <span className="text-blue-500">Vegan Media</span>{" "}
                {trans.bap_cai_cuon.title2}
              </p>
              <div className="bg-gray-100 rounded p-4 mt-4">
                <h3 className="font-medium mb-2">
                  {trans.bap_cai_cuon.title3}
                </h3>
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
                    <span>{trans.bap_cai_cuon.title4}</span>
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
                    <span>{trans.bap_cai_cuon.title5}</span>
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
                    <span>{trans.bap_cai_cuon.title6}</span>
                  </a>
                </div>
              </div>
              <div id="menu-1">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 md:col-span-7">
                    <p className="text-xl font-medium mt-4 mb-2">
                      {trans.bap_cai_cuon.title3}
                    </p>
                    <Image
                      alt=""
                      className="w-full rounded"
                      src="/blog-food-1/bap-cai-cuon/bap-cai-cuon-3.jpg"
                      width={850}
                      height={479}
                    ></Image>
                  </div>
                  <div className="col-span-12 md:col-span-5 md:pl-4">
                    <p
                      id="nguyen-lieu"
                      className="font-medium text-lg mt-4 mb-2  md:pt-8"
                    >
                      {trans.bap_cai_cuon.title4}:
                    </p>
                    <p>{trans.bap_cai_cuon.title8}</p>
                    <p>{trans.bap_cai_cuon.title10}</p>
                    <p>{trans.bap_cai_cuon.title11}</p>
                    <p>{trans.bap_cai_cuon.title12}</p>
                    <p>{trans.bap_cai_cuon.title13}</p>
                    <p>{trans.bap_cai_cuon.title14}</p>
                    <p>{trans.bap_cai_cuon.title15}</p>
                    <p>{trans.bap_cai_cuon.title16}</p>
                    <p>{trans.bap_cai_cuon.title17}</p>
                  </div>
                </div>
                <p id="so-che" className="font-medium mt-4 text-lg pb-2">
                  {trans.bap_cai_cuon.title5}:
                </p>
                <p>{trans.bap_cai_cuon.title18}</p>
                <p>{trans.bap_cai_cuon.title19}</p>
                <p>{trans.bap_cai_cuon.title20}</p>
                <p>{trans.bap_cai_cuon.title21}</p>
                <p>{trans.bap_cai_cuon.title22}</p>
                <p>{trans.bap_cai_cuon.title23}</p>

                <p id="cach-lam" className="font-medium mt-4 text-lg pb-2">
                  {trans.bap_cai_cuon.title6}:
                </p>
                <p className="py-2">{trans.bap_cai_cuon.title24}</p>
                <p className="py-2">{trans.bap_cai_cuon.title25}</p>
                <p className="py-2">{trans.bap_cai_cuon.title26}</p>
                <p className="py-2">{trans.bap_cai_cuon.title27}</p>
                <p className="py-2">{trans.bap_cai_cuon.title28}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 hidden md:block">
          <div className="bg-gray-100 rounded p-4">
            <h3 className="font-medium mb-2">{trans.bap_cai_cuon.title3}</h3>
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
                <span>{trans.bap_cai_cuon.title4}</span>
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
                <span>{trans.bap_cai_cuon.title5}</span>
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
                <span>{trans.bap_cai_cuon.title6}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
