import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faFacebook,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import Image from "next/image";
export default function Footer() {
  React.useEffect(() => {});

  return (
    <React.Fragment>
      <footer className="footer-1 bg-gray-100 pt-4 pb-2 px-4 md:px-0 mt-8">
        <div className="container mx-auto divide-y divide-gray-300">
          <div className="grid grid-cols-12 pt-4">
            <div className="col-span-12 md:col-span-6">
              <div className="mb-4 flex justify-center md:justify-start">
                <Image src="/logo.png" alt="" width={245} height={60}></Image>
              </div>
              <div className="text-sm">
                <span className="font-bold mr-1">A</span>
                <span>
                  74 đường số 6, P.Linh Trung, Q.Thủ Đức, Tp. Hồ Chí Minh
                </span>
              </div>
              <div className="text-sm">
                <span className="font-bold mr-1">T</span>
                <span>0388980943</span>
              </div>
              <div className="text-sm">
                <span className="font-bold mr-1">G</span>
                <span>veganmediavn@gmail.com</span>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 pt-2 pl-0 md:pl-2 text-sm">
              <p className="py-1">About Us</p>
              <p className="py-1">Submit an article</p>
              <p className="py-1">Corrections & Complaints</p>
              <p className="py-1">Advertise</p>
            </div>
            <div className="col-span-6 md:col-span-3 pt-2 pl-2 text-sm">
              <p className="py-1">Privacy Policy</p>
              <p className="py-1">Affiliate Policy</p>
              <p className="py-1">RSS Feed</p>
            </div>
          </div>
          <div className="grid grid-cols-12 text-xs mt-8 py-2">
            <div className="col-span-8 flex flex-col justify-center pr-2">
              <p className="font-medium">© 2021 - Bản quyền của Công Ty Cổ Phần Vegan Media - veganmedia.me</p>
              <p>
                Giấy chứng nhận Đăng ký Kinh doanh số 0316451577
              </p>
            </div>
            <div className="col-span-4 flex justify-end">
              <Image
                alt=""
                title=""
                src="/logoSaleNoti.png"
                width={145}
                height={55}
              />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
