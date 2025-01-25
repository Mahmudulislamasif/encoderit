import Image from "next/image";
import React from "react";
// import { logo } from "../../../public/assets/logo/page";
// import Divider from "../units/Divider";
import Card1 from "../../../public/card/card-1.png";
import Card2 from "../../../public/card/card-2.png";
import Card3 from "../../../public/card/card-3.png";
import Card4 from "../../../public/card/card-4.png";
import Card5 from "../../../public/card/card-5.png";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { CiYoutube } from "react-icons/ci";
import Divider from "../UI/Divider";
const Footer = () => {
  return (
    <>
      {/* // Footer 1 */}
      <div className="w-full flex justify-center items-center bg-cover bg-no-repeat relative footer-bg">
        <div>
          <div >
            <div className="container mx-auto px-4">
            <div className="py-5 md:py-10">
              {/* <Image
              src={logo}
              width={117}
              height={36}
              alt=""
              className="mx-auto"
            /> */}
            </div>
            <div className="grid grid-cols-12 text-white gap-0 md:gap-6 pb-10 ">
              <div className="col-span-12 md:col-span-6 lg:col-span-3 md:place-items-start">
                <h2 className="text-[20px] mt-14 mb-3 font-semibold">
                  LOGO
                </h2>
                {/* <Divider /> */}
                <div className="text-[15px]">
                  <p className="mt-8">
                    When you need the best auto parts for your ride, turn to
                    Autovio. Limited time offer for only new customer also get
                    free shipping on orders.
                  </p>
                </div>
                <div className="text-white flex gap-8 mt-10">
                  <Link href="#">
                    <FaFacebookF />
                  </Link>
                  <Link href="#">
                    <FaXTwitter />
                  </Link>
                  <Link href="#">
                    <FaInstagram />
                  </Link>
                  <Link href={"#"}>
                    <CiYoutube />
                  </Link>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <h2 className="text-[21px] mt-14 mb-3 font-semibold  uppercase">
                  Our company
                </h2>
                {/* <Divider /> */}
                <div className="text-[16px] flex flex-col gap-4">
                  <div className="flex items-center mt-4 gap-2">
                    <p>
                      <Link href="#">Delivery</Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>
                      <Link href="#">Legal Notice</Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>
                      <Link href="#">Secure payment</Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>
                      <Link href="#">Contact us</Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>
                      <Link href="#">About Us</Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>
                      <Link href="#">Stores</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3">
                <h2 className="text-[21px] mt-14 mb-3 font-semibold uppercase">
                  Our Services
                </h2>
                {/* <Divider /> */}
                <div className="text-[16px] flex flex-col gap-4">
                  <div className="flex items-center mt-4 gap-2">
                    <p>
                      <Link href="#">Car Diagnostic Tools</Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>
                      <Link href="#">Hand-held Scanners</Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>
                      <Link href="#">Universal Car Diagnostic</Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>
                      <Link href="#">Audi Diagnostic</Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>
                      <Link href="#">ABS Brake Bleeding</Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>
                      <Link href="#">Adaptive Front Lighting System</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-3 col-span-12">
                <h2 className="text-[21px] mt-14 mb-3 font-semibold uppercase">
                  contact us
                </h2>
                {/* <Divider /> */}
                <div className="text-[16px] flex flex-col gap-4">
                  <div className="flex items-center mt-4 gap-2">
                    <p className="text-[#EA4C49]">
                      <Link href="#">
                        Address:{" "}
                        <span className="text-white">
                          126 Horton Grange Road, Bradford, West Yorkshire, BD7
                          2DW
                        </span>
                      </Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#EA4C49]">
                      <Link href="#">
                        Phone : <span className="text-white">+1 86.36.166</span>
                      </Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#EA4C49]">
                      <Link href="#">
                        Fax : <span className="text-white">12345</span>
                      </Link>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#EA4C49]">
                      <Link href="#">
                        Mail :
                        <span className="text-white">  contact@abc.co.uk</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <Divider/>
            <div className="container mx-auto px-4">
            <div className="py-10">
              <div className="flex flex-wrap justify-center md:justify-between gap-4">
                <p className="text-[12px] text-white">
                  Copyright © 2024 <span className="text-[#EA4C49]">abc </span>{" "}
                  - All Rights Reserved.
                </p>
                <div className="text-white flex gap-4">
                  <Link href="#">
                    <Image
                      src={Card1}
                      width={42}
                      height={25}
                      alt=""
                      className="mx-auto"
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src={Card2}
                      width={42}
                      height={25}
                      alt=""
                      className="mx-auto"
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src={Card3}
                      width={42}
                      height={25}
                      alt=""
                      className="mx-auto"
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src={Card4}
                      width={42}
                      height={25}
                      alt=""
                      className="mx-auto"
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src={Card5}
                      width={42}
                      height={25}
                      alt=""
                      className="mx-auto"
                    />
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
