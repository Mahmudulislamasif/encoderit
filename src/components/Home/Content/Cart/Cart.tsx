"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

import { featureProduct } from "@/components/Constant/Constat";
import { FaStar } from "react-icons/fa6";

import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Cart = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Special", "Popular", "New/Used", "Certified"];

  return (
    <div className="container mx-auto mb-9 px-2">
      <div>
        <h1 className="uppercase text-2xl italic text-white md:text-left text-center md:text-[34px] font-bold md:pt-20 pt-10">Featured Products</h1>
        <div className="flex justify-between md:py-10 py-5">
          <div className=" flex gap-4 max-w-[1080px] overflow-x-auto hide-scrollbar items-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-base font-semibold ${
                  activeTab === tab ? "bg-red-500 text-white" : " text-white"
                }`}
              >
                {tab}
              </button>
            ))}
            <p className="text-xs md:text-base font-semibold text-[#737F96]  flex gap-1 items-center">
              <span> See All Products</span>
              <IoIosArrowForward />
            </p>
          </div>
          <div className="md:flex gap-2 hidden">
            <div className="button-prev-slide right-0 grid place-items-center text-white rounded-lg bg-[#253146] w-10 h-10">
              <IoIosArrowBack />
            </div>
            <div className="button-next-slide grid place-items-center text-white bg-[#253146] rounded-lg w-10 h-10">
              <IoIosArrowForward className="text-white" />
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          breakpoints={{
            280: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="relative"
        >
          {featureProduct.map((com) => (
            <SwiperSlide key={com.id} className="group">
              <div className="group-hover:border-b-red transition-all duration-500 ease-in-out rounded-2xl">
                <div className="relative">
                  <Image
                    className="w-full h-auto"
                    src={com.icon}
                    width={260}
                    height={300}
                    alt="Graphics Designer"
                  />
                  <CiHeart className="absolute text-white top-3 left-2 text-3xl bg-[#253146] rounded-lg p-1" />
                  <Image
                    className="absolute right-2 top-3"
                    src={com.image || "/path/to/default/image.jpg"}
                    width={56}
                    height={21}
                    alt="Graphics Designer"
                  />
                </div>

                <div className="border-b-[1px] border-[#253146] rounded-bl-3xl rounded-br-3xl border-r-[1px] border-l-[1px] p-6">
                  <div className="flex gap-1 border-b-[1px] border-[#253146] pb-4">
                    <p className="text-sm font-normal text-[#737F96]">
                      Ratings :
                    </p>
                    <div className="flex text-yellow-400 items-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-[#838896] py-4 border-b-[1px] border-[#253146]">
                    {com.description}
                  </h3>
                  <div className="py-3 flex gap-1">
                    <p className=" text-base md:text-[19px] font-semibold text-[#EA4C49]">
                      {com.price}
                    </p>
                    <p className="text-sm md:text-base font-normal text-[#737F96] line-through">
                      {com.discount}
                    </p>
                    <p className="text-xs md:text-sm font-normal text-[#CCCCCC]">
                      Inc. VAT
                    </p>
                  </div>
                  <button className="bg-[#282E3A] text-white w-full py-2 items-center justify-center rounded-3xl flex gap-2">
                    <MdOutlineShoppingCart />
                    <span className="text-base">Add to Cart</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="md:hidden gap-2 flex mt-5 items-center justify-center">
            <div className="button-prev-slide right-0 grid place-items-center text-white rounded-lg bg-[#253146] w-10 h-10">
              <IoIosArrowBack />
            </div>
            <div className="button-next-slide grid place-items-center text-white bg-[#253146] rounded-lg w-10 h-10">
              <IoIosArrowForward className="text-white" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Cart;
