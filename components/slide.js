import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Slide() {
  React.useEffect(() => {
    const slides = document.querySelectorAll("div.slide-s ul li");
    const btns = document.querySelectorAll("div.button-slide ul li");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        for (var j = 0; j < btns.length; j++) {
          btns[j].classList.remove("active-button-color");
        }
        this.classList.add("active-button-color");
        var btnActive = this;
        var btnIndex = 0;
        for (
          btnIndex;
          (btnActive = btnActive.previousElementSibling);
          btnIndex++
        ) {}
        for (let i = 0; i < slides.length; i++) {
          const element = slides[i];
          element.classList.remove("hidden");
          element.classList.add("hidden");
        }
        slides[btnIndex].classList.remove("hidden");
        slides[btnIndex].classList.add("active");
      });
    }
  });

  function clickItemMenu(n) {
    var elements = document.querySelectorAll("div.sub-item");
    var element = elements[n];
    element.classList.toggle("hidden");
  }
  return (
    <React.Fragment>
      <div className="relative h-slider">
        <div className="absolute flex abs-slide z-10 ">
          <div className="md:mr-4 md:mb-4 shadow-md hidden md:block">
            <img src="/anh.jpg" />
          </div>
          <div className="md:ml-4 md:mb-4 shadow-md">
            <img src="/anh.jpg" />
          </div>
        </div>
        <div className="slide-s overflow-hidden h-full">
          <ul className="h-full hidden md:block">
            <li className="h-full">
              <div className="slide h-full relative ">
                <div
                  style={{
                    background: `url(/home_webdesign_slide3_bg.png)`,
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    backgroundSize: "contain",
                  }}
                ></div>
                <div className="absolute top-10">
                  <p className="text-black text-3xl font-medium mb-4 text-green-600">
                    Delivery Happiness
                  </p>
                  <p className="text-black text-6xl mb-4">Freeship</p>
                  <p className="text-black text-6xl">Với mọi đơn hàng</p>
                </div>
                <div className="absolute top-60 button-slide">
                  <ul className="flex items-center justify-center">
                    <li className="w-8 h-8 bg-gray-200 rounded-full cursor-pointer active-button-color"></li>
                    <li className="w-8 h-8 bg-gray-200 rounded-full m-4 hover:bg-gray-500 cursor-pointer"></li>
                    <li className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-500 cursor-pointer"></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
