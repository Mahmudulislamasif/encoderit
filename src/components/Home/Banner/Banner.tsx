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

const Banner = () => {
  return (
    <div className="banner">
      <div className="container mx-auto relative">
        <div>
          <Image
            className=""
            src={img1}
            width={32}
            height={26}
            alt="Graphics Designer"
          />
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".button-next-slide-two",
            prevEl: ".button-prev-slide-two",
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="relative group"
        >
          <SwiperSlide>
            <div className="min-h-screen flex items-center justify-center">
              <div className="flex items-center">
                <div className=" mr-4">
                  <h3 className="uppercase text-sm md:text-[32px] font-semibold text-white">
                    TOPDON Phoenix Elite
                  </h3>
                  <p className="text-white mt-4 md:text-base text-[10px]">
                  TOPDON Phoenix Elite, dealer-level diagnostics at a fraction of <br /> the cost. If you don’t need the online programming capabilities, <br /> you may want to consider the PHOENIX LITE 2 which offers <br /> excellent value for money.
                  </p>
                </div>
                <Image
                  src={img2}
                  width={492}
                  height={492}
                  alt="Additional Image"
                />
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide>
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex items-center">
      <div className="mr-4">
        <h3 className="uppercase text-sm md:text-[32px] font-semibold text-white">
          Another Slide Title
        </h3>
        <p className="text-white mt-4">
          Additional content for the second slide.
        </p>
      </div>
      <div className="w-full max-w-[492px]">
        <Image
          src={img2}
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

        </Swiper>
        <div className="md:block hidden">
        <div className="button-next-slide-two top-[50%] absolute z-10 left-0 w-[40px] h-[40px] bg-[#fba111f5] grid place-items-center text-white rounded-full mx-10">
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className="button-prev-slide-two top-[50%] absolute z-10 w-[40px] h-[40px] right-0 text-white grid place-items-center bg-[#fba111f5] rounded-full mx-10">
          <MdOutlineKeyboardArrowRight />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
