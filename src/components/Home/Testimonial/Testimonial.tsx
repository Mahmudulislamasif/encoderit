"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import img1 from "../../../../public/logo/trust.png";
import img2 from "../../../../public/profile/01.png";
import img3 from "../../../../public/profile/02.png";
import Image from "next/image";

const Testimonial = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testimonials = [
    {
      text: "“Awesome service, next day delivery, friendly staff that know their stuff. Reassured support is always available should it be needed. It was like dealing with someone you’ve known 20 years.”",
      name: "PAUL L",
      company: "beeda",
      img: img2,
    },
    {
      text: "“Awesome service, next day delivery, friendly staff that know their stuff. Reassured support is always available should it be needed. It was like dealing with someone you’ve known 20 years.”",
      name: "DAVID G",
      company: "beeda",
      img: img3,
    },
    {
      text: "“Awesome service, next day delivery, friendly staff that know their stuff. Reassured support is always available should it be needed. It was like dealing with someone you’ve known 20 years.”",
      name: "LEE W",
      company: "Cbeeda",
      img: img2,
    },
  ];

  return (
    <div className="bg-[#1D232D]">
      <div className="container mx-auto py-20 px-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-white md:text-[34px] text-2xl">
            THE LOVE FROM OUR <br /> CUSTOMERS
          </h3>
          <p className="text-xs md:text-base font-semibold text-[#737F96] flex gap-1 items-center">
            <span> See All Products</span>
            <IoIosArrowForward />
          </p>
        </div>
        {/* Tabs */}
        <div className="grid grid-cols-1 bg-[#1F2632] mt-10 relative ">
          <div className="md:p-10 p-4">
            <div className="flex justify-between">
              <div className="flex gap-1 md:gap-10 items-center">
                <div className="flex gap-3">
                  <p className="md:text-2xl text-sm text-[#737F96]">
                    Very good
                  </p>
                  <div className="flex text-yellow-400 items-center">
                    <FaStar className="text-xs md:text-xl" />
                    <FaStar className="text-xs md:text-xl" />
                    <FaStar className="text-xs md:text-xl" />
                    <FaStar className="text-xs md:text-xl" />
                    <FaStar className="text-xs md:text-xl" />
                  </div>
                </div>
                <div>
                  <Image src={img1} alt="Trust" width={82} height={20} />
                </div>
              </div>
              <div>
                <p className="md:text-base text-xs text-[#737F96]">
                  4 days ago
                </p>
              </div>
            </div>
            <div>
              <p className="italic text-white md:text-[23px] text-sm mt-[30px] leading-8">
                {testimonials[activeTab].text}
              </p>
            </div>
            <div
              className="w-[50px] h-[50px] bg-[#1F2632] absolute rotate-45 -bottom-6"
              style={{ left: `${activeTab * 33.33 + 4}%` }} // Adjust the percentage based on your layout
            ></div>
          </div>
        </div>
        {/* Profile */}
        <div className="md:grid md:grid-cols-3 grid-cols-2 mt-10  hidden ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex gap-4 items-center cursor-pointer transition-opacity duration-300 ${
                activeTab === index ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <Image
                src={testimonial.img}
                alt="Profile"
                width={84}
                height={84}
              />
              <div>
                <p className="text-white text-2xl font-bold">
                  {testimonial.name}
                </p>
                <p className="text-[#737F96] text-base">
                  Creative Director at{" "}
                </p>
                <p className="text-[#0099CC] text-base">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden mt-10 flex md:gap-4 px-2 overflow-x-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex gap-4 w-full items-center cursor-pointer transition-opacity duration-300 ${
                activeTab === index ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <Image
                src={testimonial.img}
                alt="Profile"
                width={64}
                height={64}
                className="flex-shrink-0 rounded-full"
              />
              <div className="flex flex-col flex-1 lg:w-[320px] md:w-[220px] w-[220px]">
                <p className="text-white text-sm font-bold">
                  {testimonial.name}
                </p>
                <p className="text-[#737F96] text-xs">Creative Director</p>
                <p className="text-[#0099CC] text-xs flex">
                  <span>at {testimonial.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
