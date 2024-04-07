import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Trang Huỳnh",
      age: 26,
      image: "/assets/people-3.png",
      city: "Hà nội",
      country: "VN",
      rating: "4.5",
      career: "Ngành du lịch",
      testimoni:
        "Luôn luôn đưa ra những địa điểm cùng với giá vé hấp dẫn để khách hàng lựa chọn. Đặt vé dễ dàng trên Autic.vn",
    },
    {
      name: "Huyền Phan",
      age: 28,
      image: "/assets/people-3.png",
      city: "Nghệ An",
      country: "VN",
      rating: "4.5",
      career: "Nhân viên văn phòng",
      testimoni:
        "Dịch vụ uy tín, chất lượng, giá rẻ, nhân viên nhiệt tình, thân thiện và rất chuyên nghiệp.",
    },
    {
      name: "Trần Thị Trà Mi",
      age: 23,
      image: "/assets/people-3.png",
      city: "Hà Tĩnh",
      country: "VN",
      rating: "4.5",
      career: "Kinh doanh tự do",
      testimoni:
        "Đến với Autic, đây thực sự là môi trường năng động và phù hợp với các bạn trẻ có đam mê kinh doanh online vé máy bay.",
    },
    {
      name: "Phan Thị Hiền",
      age: 23,
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "HCM",
      rating: "4.5",
      career: "Khách hàng",
      testimoni:
        "Tuyệt quá, lần đầu book vé tại đây, chất lượng quá tuyệt, nhân viên chu đáo, quan tâm khách hàng. Lần sau mình sẽ ủng hộ tiếp ạ.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.career}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
