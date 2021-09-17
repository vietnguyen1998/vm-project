import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faFacebook,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle, faDotCircle } from "@fortawesome/free-solid-svg-icons";
export default function Slug(props) {
  React.useEffect(() => {
    console.log(props);
  }, [props]);

  function onClickSCrollIntoViewbyId(id) {
    let elementId = document.getElementById(id);
    if (elementId) {
      elementId.scrollIntoView();
    }
  }
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <ol className="list-reset rounded font-medium flex bg-grey-light text-grey mb-2">
            <li className="mr-2">
              <a href="#" className="no-underline text-indigo">
                Blog
              </a>
            </li>
            <li>/</li>
            <li className="px-2">
              <a href="#" className="no-underline text-indigo">
                Cac Mon An Chay
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 pr-4 md:col-span-8">
          <div className="rounded">
            <img
              className="w-full rounded-t"
              src="/blog-food-1/salad-chay-9.jpg"
            ></img>
            <div className="px-4">
              <h6 className="text-center text-4xl font-medium py-4">
                Các món ăn chay
              </h6>
              <p>
                Cùng với chuyên mục Mẹo vào bếp của{" "}
                <span className="text-blue-500">Vegan Media</span> xem ngay bài
                viết tổng hợp các cách làm món salad đơn giản dễ làm đậm đà
                hương vị. Đa phần Salad không thể thiếu sốt mayonnaise. Sau đây
                là cách làm mayonnaise chay tiện lợi cho bạn khi làm salad:
              </p>
              <div className="bg-gray-100 rounded p-4 mt-4">
                <h3 className="font-medium mb-2">MỤC LỤC</h3>
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
                    <span>Salad dầu giấm</span>
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
                    <span>Salad Bơ</span>
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
                    <span>Salad cải mầm</span>
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
                    <span>Gỏi đu đủ</span>
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
                    <span>Gỏi bắp cải</span>
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
                    <span>Gỏi bắp chuối (bông chuối)</span>
                  </a>
                </div>
              </div>
              <div id="menu-1">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 md:col-span-7">
                    <p className="text-xl font-medium mt-4 mb-2">Mayonnaise</p>
                    <img
                      className="w-full rounded"
                      src="/blog-food-1/mayonnaise.jpg"
                    ></img>
                  </div>
                  <div className="col-span-12 md:col-span-5 md:pl-4">
                    <p className="font-medium text-lg mt-4 mb-2  md:pt-8">
                      Nguyên liệu:
                    </p>
                    <p>- Sữa đậu nành không đường: 50 ml </p>
                    <p>- Nước đậu gà: 4 muỗng canh </p>
                    <p>- Sốt mù tạt: 2 muỗng cà phê </p>
                    <p>- Muối: 1/2 muỗng cà phê </p>
                    <p>- Nước cốt chanh: 2/3 muỗng cà phê </p>
                    <p>- Dầu ăn: 300 ml </p>
                    <p>- Tiêu: 1 ít</p>
                  </div>
                </div>
                <p className="font-medium mt-4 text-lg pb-2">Cách làm:</p>
                <p>
                  - Cho toàn bộ nguyên liệu (trừ dầu ăn) vào máy xay sinh tố,
                  xay nhuyễn. Sau đó từ từ đổ dầu ăn vào và xay cùng cho tới khi
                  hỗn hợp tan đều và sánh mịn là đã hoàn thành. Cách bảo quản:
                  bạn có thể cho vào lọ thủy tinh có nắp và để vào ngăn mát tủ
                  lạnh.{" "}
                </p>
              </div>
              <div id="food-1">
                <p className="text-3xl font-medium mt-8 mb-4">
                  1. Salad dầu giấm
                </p>
                <div className="grid grid-cols-12">
                  <div className="col-span-12 md:col-span-7">
                    <img
                      className="w-full rounded"
                      src="/salad-tron-giam.jpg"
                    ></img>
                  </div>
                  <div className="col-span-12 md:col-span-5 md:pl-4">
                    <p className="font-medium text-lg mt-4 mb-2">
                      Nguyên liệu:
                    </p>
                    <p>- 400gr dưa chuột</p>
                    <p>- 50gr xà lách</p>
                    <p>- 200gr cà chua (quả to)</p>
                    <p>- 50gr cà chua bi</p>
                    <p>- 50gr hành tây</p>
                    <p>- 1/2 rau thơm  </p>
                    <p>- Tỏi, ớt, giấm, đường, dầu oliu, muối tinh</p>
                  </div>
                </div>
                <p className="font-medium mt-4 text-lg">Cách làm:</p>
                <p className="py-2">
                  - Đầu tiên rau xà lách các bạn hãy nhặt và rửa rau sạch. Cà
                  chua, dưa chuột, hành tây đem rửa sạch
                </p>
                <p className="py-2">
                  - Hành tây thái thành những lát mỏng ngâm trong nước lạnh có
                  pha chút giấm và đường trước đó. Dưa chuột bổ dọc làm đôi, bỏ
                  phần ruột bên trong, thái lát. Cà chua thái lát mỏng vừa. Tỏi,
                  ớt băm nhỏ.
                </p>
                <p className="py-2">
                  - Làm nước sốt dầu giấm: pha theo tỷ lệ như sau: 6 giấm : 4
                  đường : 1 dầu oliu :  tỏi ớt băm nhỏ: 1 chút muối tinh trộn
                  đều, để riêng ra 1 bát.
                </p>
                <p className="py-2">
                  - Cho tất cả các nguyên liệu đã sơ chế trước đó vào 1 cái tô
                  rồi từ từ đổ nước dầu giấm đã pha chế vào tô trộn thật đều để
                  ngâm khoảng 10 phút rồi trộn lại thêm một lần nữa. Khi các
                  nguyên liệu được ngấm đều các gia vị thì bạn chỉ cần cho ra
                  đĩa và thưởng thức.
                </p>
                <p className="py-2">
                  - Món này ăn kèm với các món chiên, rán, nướng rất hợp.
                </p>
              </div>
            </div>
            <div id="food-2" className="px-4">
              <p className="text-3xl font-medium mt-8 mb-4">2. Salad Bơ</p>
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                  <img
                    className="w-full rounded"
                    src="/blog-food-1/salad-bo.jpg"
                  ></img>
                </div>
                <div className="col-span-12 md:col-span-5 md:pl-4">
                  <p className="font-medium text-lg mb-2">Nguyên liệu:</p>
                  <p>- Bơ : 1 quả (250g)</p>
                  <p>- Cà chua: 100g </p>
                  <p>- Xà-lách xoăn: 1 cây </p>
                  <p>- Hành tây: 1 củ nhỏ </p>
                  <p>- Dưa chuột: 1 quả </p>
                  <p>- Hạt dẻ cười: 10 hạt. </p>
                  <p>
                    - Nước sốt trộn: Dầu olive: 1/2 thìa súp; Nước cốt chanh:
                    1/2 thìa súp; Muối: 1/4 thìa cà-phê muối; Tiêu sọ xay, rau
                    mùi thái nhỏ: vừa đủ.
                  </p>
                </div>
              </div>
              <p className="font-medium mt-4 text-lg">Cách làm:</p>
              <p className="py-2">
                – Bổ đôi quả bơ theo chiều dọc. Một nửa thái hạt lựu to. Một nửa
                thái lát dọc để trang trí. Cà chua bổ đôi theo chiều ngang, bỏ
                hạt, thái khối vừa ăn. Xà-lách thái sợi, bản to khoảng 0,5cm.
                Hành tây bóc vỏ, thái khoanh mỏng. Dưa chuột thái lát mỏng. Hạt
                dẻ tách vỏ, giã nhỏ.
              </p>
              <p className="py-2">
                – Làm sốt trộn: Cho tất cả các nguyên liệu vào bát, trộn đều.
                Lần lượt cho xà-lách xoăn, bơ hạt lựu, dưa chuột, cà chua, hành
                tây vào tô, xếp bơ thái lát lên. Khi ăn mới rưới sốt, trộn lên
                và rắc hạt dẻ đã giã nhỏ.
              </p>
            </div>
            <div id="food-3" className="px-4">
              <p className="text-3xl font-medium mt-8 mb-4">3. Salad cải mầm</p>
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                  <img
                    className="w-full rounded"
                    src="/blog-food-1/cai-mam.jpg"
                  ></img>
                </div>
                <div className="col-span-12 md:col-span-5 md:pl-4">
                  <p className="font-medium text-lg mb-2">Nguyên liệu:</p>
                  <p>- 150gr rau cải mầm mù tạt</p>
                  <p>- 100gr bắp cải tím </p>
                  <p>- 50gr cà rốt </p>
                  <p>- 5-6 quả cà chua bi </p>
                  <p>- 4-5 quả nho </p>
                  <p>- ¼ lát đậu hũ. </p>
                  <p>- 100gr nấm rơm </p>
                  <p>- Mayonnaise chay, Dầu Olive, Giấm Táo </p>
                  <p>- Tiêu, ớt, tỏi (hoặc thay bằng boaro)</p>
                </div>
              </div>
              <p className="font-medium mt-4 text-lg">Cách làm:</p>
              <p className="py-2">
                - Rửa sạch và cắt nhỏ vừa ăn tất cả những nguyên liệu. Đậu khuôn
                cắt mỏng rồi chiên sơ qua cho ráo dầu.
              </p>
              <p className="py-2">
                - Bắc chảo lên xào đậu hũ, nấm rơm và nêm nếm vừa ăn.{" "}
              </p>
              <p className="py-2">
                - Làm nước sốt: phi tỏi rồi pha sốt với 2 muỗng cà phê
                mayonnaise chay, 1 muỗng cà phê đường, 1 muỗng cà phê giấm táo,
                ⅔ muỗng cà phê dầu tỏi ớt phi và ⅕ muỗng cà phê tiêu và đánh đều
                lên.
              </p>
              <p className="py-2">
                - Cho rau củ và phần đã xào (đậu hũ, nấm rơm) vào trộn chung với
                nước sốt là được.{" "}
              </p>
            </div>
            <div id="food-4" className="px-4">
              <p className="text-3xl font-medium mt-8 mb-4">4. Gỏi đu đủ </p>
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                  <img
                    className="w-full rounded"
                    src="/blog-food-1/goi-du-du-chay.jpg"
                  ></img>
                </div>
                <div className="col-span-12 md:col-span-5 md:pl-4">
                  <p className="font-medium text-lg mb-2">Nguyên liệu:</p>
                  <p>- Đu đủ xanh: 300gram</p>
                  <p>- Đậu hũ: 3 miếng </p>
                  <p>- Dưa leo: 3 trái </p>
                  <p>- Rau răm</p>
                  <p>- Đậu phộng </p>
                  <p>- Chanh: 2 quả </p>
                  <p>- Đường, muối, bột ngọt, Tỏi, Ớt </p>
                  <p>- Tương ớt</p>
                </div>
              </div>
              <p className="font-medium mt-4 text-lg">Cách làm:</p>
              <p className="py-2">
                - Đậu hũ thái lát mỏng 3mm, chiên vàng, để nguội, xắt sợi Đu đủ
                bào vỏ, rửa sạch, bào sợi rồi rửa lại với nước muối loãng cho
                sạch. Vắt ráo
              </p>
              <p className="py-2">
                - Cà rốt bào vỏ, rửa sạch, thái sợi. Dưa leo bổ dọc, loại bỏ
                ruột, xắt sợi.{" "}
              </p>
              <p className="py-2">
                - Tỏi đập dập, xắt nhuyễn (nếu bạn ăn được tỏi){" "}
              </p>
              <p className="py-2">
                - Trộn đều tất cả với tỏi, đường, chanh, muối, ớt cho thấm. Cho
                ít tương ớt vào tiếp tục trộn đều. Nêm vừa ăn theo ý thích (
                chua, ngọt, cay)
              </p>
              <p className="py-2">
                - Xắt rau răm, ớt và tiếp tục trộn cho tới khi gia vị thấm hoàn
                toàn
              </p>
              <p className="py-2">
                - Trang trí ra dĩa, rắc đậu phộng lên trên và thưởng thức.
              </p>
            </div>
            <div id="food-5" className="px-4">
              <p className="text-3xl font-medium mt-8 mb-4">5. Gỏi bắp cải</p>
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                  <img
                    className="w-full rounded"
                    src="/blog-food-1/nom_bap_cai_chay.jpg"
                  ></img>
                </div>
                <div className="col-span-12 md:col-span-5 md:pl-4">
                  <p className="font-medium text-lg mb-2">Nguyên liệu:</p>
                  <p>- bắp cải: 200gram</p>
                  <p>- Dấm: 100ml</p>
                  <p>- Quả ớt: 1 quả </p>
                  <p>- Đường: 30g </p>
                  <p>- Dầu ăn : 50ml </p>
                  <p>- Muối : 1 chút </p>
                  <p>- Đậu phụ : 2 miếng</p>
                  <p>- Cà rốt: 1 củ </p>
                  <p>- Rau thơm: </p>
                </div>
              </div>
              <p className="font-medium mt-4 text-lg">Cách làm:</p>
              <p className="py-2">
                - Bắp cải thái nhỏ, rửa sạch, ngâm trong nước muối loãng khoảng
                5 phút. Sau đó vớt ra để ráo nước. .
              </p>
              <p className="py-2">
                - Ớt bỏ hạt băm nhỏ, cà rốt gọt vỏ, bào sợi
              </p>
              <p className="py-2">- Rau thơm rửa sạch, cắt nhỏ. </p>
              <p className="py-2">
                - Đậu phụ rán vàng đều 2 mặt sau đó cắt sợi.
              </p>
              <p className="py-2">
                - Cho đường, giấm ăn, dầu ăn, 1/2 thìa muối vào trong máy xay
                sinh tố xay cho tan ta sẽ thu được 1 hỗn hợp có màu trắng kết
                dính với nhau.
              </p>
              <p className="py-2">
                – Cho cải bắp và đậu phụ vào 1 chiếc bát to. Rưới hỗn hợp nước
                sốt trên vào, trộn đều tất cả các nguyên liệu sau đó để trong
                vòng 15 phút để rau được thấm đều.
              </p>
            </div>
            <div id="food-6" className="px-4">
              <p className="text-3xl font-medium mt-8 mb-4">
                6. Gỏi bắp chuối (bông chuối){" "}
              </p>
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                  <img
                    className="w-full rounded"
                    src="/blog-food-1/salad-bo.jpg"
                  ></img>
                </div>
                <div className="col-span-12 md:col-span-5 md:pl-4">
                  <p className="font-medium text-lg mb-2">Nguyên liệu:</p>
                  <p>- Hoa chuối tây 1 cái</p>
                  <p>- Giá đỗ: 100gr </p>
                  <p>- Cà rốt: 1 củ </p>
                  <p>- Đậu phộng rang giã thô: 100gr </p>
                  <p>- Chanh, tỏi, ớt </p>
                  <p>- Ngò rí, húng lủi, hành lá </p>
                  <p>- Gia vị: muối, đường, giấm ăn.</p>
                </div>
              </div>
              <p className="font-medium mt-4 text-lg">Cách làm:</p>
              <p className="py-2">
                - Chuẩn bị một chiếc thau sạch và cho một lượng nước sạch vừa đủ
                vào hòa chung với một chút muối và giấm ăn.
              </p>
              <p className="py-2">
                - Tiếp theo dùng dao sắc và mỏng để thái hoa chuối thật mỏng và
                thành từng lát ngâm vào chậu nước đã pha sẵn đã chuẩn bị.
              </p>
              <p className="py-2">
                - Vớt hoa chuối ra khi nhìn nó đã ra hết nhựa và rửa lại với
                nước rồi vớt ra để ráo. Có thể nếm thử xem sợi hoa chuối có vị
                đắng, chát hay không và nhìn xem chúng có bị thâm không, nếu bị
                thâm là do bạn ngâm chưa đủ thời gian hoặc cho ít muối quá.
              </p>
              <p className="py-2">
                - Cà rốt rửa sạch, bào vỏ, thái sợi. Giá đỗ phải rửa sạch. Rau
                thơm nhặt lấy cọng non, rửa sạch, để ráo rồi đem thái nhỏ. Băm
                nhuyễn tỏi với ớt cho vào bát con sạch.
              </p>
              <p className="py-2">- Hành lá xắt 5cm.</p>
              <p className="py-2">- Ngò rí xắt 3cm</p>
              <p className="py-2">
                - Tất cả: bắp chuối, cà rốt, giá cho vào 1 cái thau. Sau đó cho
                đường, chanh vào trộn đều trước rồi mới cho muối vào nêm vừa ăn
              </p>
              <p className="py-2">
                - Cho ngò rí, hành lá, ớt, tỏi đã xắt vào hỗn hợp rồi trộn đều
                lần nữa.
              </p>
              <p className="py-2">
                - Bạn nếm thử thấy hoa chuối đã ngấm gia vị và không còn chát
                nữa là được.
              </p>
              <p className="py-2">
                - Tách từng lá húng lủi rồi cho lên trên, trộn đều
              </p>
              <p className="py-2">
                - Cho ra dĩa và rắc đậu phộng lên trên và thưởng thức.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4 hidden md:block">
          <div className="bg-gray-100 rounded p-4">
            <h3 className="font-medium mb-2">MỤC LỤC</h3>
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
                <span>Salad dầu giấm</span>
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
                <span>Salad Bơ</span>
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
                <span>Salad cải mầm</span>
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
                <span>Gỏi đu đủ</span>
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
                <span>Gỏi bắp cải</span>
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
                <span>Gỏi bắp chuối (bông chuối)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
