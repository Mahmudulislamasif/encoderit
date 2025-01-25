"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Image from "next/image";
import img1 from "../../../../public/logo/delivery.png";
import img2 from "../../../../public/images/img2.png";
import img3 from "../../../../public/logo/clock.png";
import img4 from "../../../../public/logo/tik.png";
import { FaStar } from "react-icons/fa6";

// Array of slide data
const slidesData = [
  {
    title: "TOPDON Phoenix Elite",
    description:
      "TOPDON Phoenix Elite, dealer-level diagnostics at a fraction of the cost. If you don’t need the online programming capabilities, you may want to consider the PHOENIX LITE 2 which offers excellent value for money.",
    image: img2,
  },
  {
    title: "TOPDON Phoenix Elite",
    description:
      "TOPDON Phoenix Elite, dealer-level diagnostics at a fraction of the cost. If you don’t need the online programming capabilities, you may want to consider the PHOENIX LITE 2 which offers excellent value for money.",
    image: img2,
  },
];

const Banner = () => {
  return (
    <div className="banner">
      <div className="relative">
        {/* Delivery Section */}
        <div className="md:flex hidden mb-4 container mx-auto  ">
          <div className="flex items-center  justify-between flex-1 gap-10">
            <div className="flex items-center pt-5">
              <Image
                src={img1}
                width={32}
                height={26}
                alt="Graphics Designer"
              />
              <p className="text-sm text-white ml-2">Free Delivery</p>
            </div>
            <p className="text-sm text-white ml-2">
              iCarsoft UK Authorised Dealer
            </p>
            <div className="flex gap-4">
              <div className="flex text-yellow-400 items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-sm text-white ml-2">Rated Excellent</p>
            </div>
            <div className="flex items-center">
              <Image
                src={img3}
                width={20}
                height={20}
                alt="Graphics Designer"
              />
              <p className="text-sm text-white ml-2">Buy Now, Pay Later</p>
            </div>
            <div className="flex items-center">
              <Image
                src={img4}
                width={20}
                height={20}
                alt="Graphics Designer"
              />
              <p className="text-sm text-white ml-2">Found it Cheaper?</p>
            </div>
          </div>
        </div>
        {/* Delivery section end */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".swiper-pagination-custom",
            clickable: true,
          }}
          navigation={{
            nextEl: ".button-next-slide-two",
            prevEl: ".button-prev-slide-two",
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="relative group"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="pt-32 md:pt-10 flex items-center justify-center container mx-auto px-4 md:px-2">
                <div className="flex items-center w-full">
                  <div className="mr-4 w-1/2">
                    <h3 className="uppercase text-sm md:text-[32px] font-semibold text-white md:mb-10">
                      {slide.title}
                    </h3>
                    <p className="text-white mt-4 md:text-base text-[10px] mb-5 md:mb-12">
                      {slide.description}
                    </p>
                    <button className="bg-[#EA4C49] text-xs md:text-sm px-4 py-2 text-white rounded-lg">
                      LEARN MORE
                    </button>
                  </div>
                  <div className="w-1/2 max-w-full flex">
                    <Image
                      src={slide.image}
                      layout="responsive"
                      width={492}
                      height={492}
                      alt="Additional Image"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-custom flex justify-center gap-2 pb-5"></div>
        <div className="md:block hidden">
          <div className="button-next-slide-two top-[50%] absolute z-10 left-0 w-[40px] h-[40px] border-[1px] border-white grid place-items-center text-white rounded-full mx-2 pointer-cursor">
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div className="button-prev-slide-two top-[50%] absolute z-10 w-[40px] h-[40px] right-0 text-white grid place-items-center border-[1px] border-white rounded-full mx-2 pointer-cursor">
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
