"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import img1 from "../../../public/logo/mail.png";
import img2 from "../../../public/logo/fb.png";
import img3 from "../../../public/logo/twitter.png";
import img4 from "../../../public/logo/gram.png";
import img5 from "../../../public/logo/youtube.png";
import img6 from "../../../public/logo/mobile.png";
import img7 from "../../../public/logo/acc.png";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart, CiMenuBurger, CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon

export default function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string): boolean => pathname === path;

  return (
    <div className="">
      <header
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#253146] shadow-md py-1" : "bg-[#18202e]"
        }`}
      >
        <div className="flex md:hidden gap-2 items-center justify-between py-2 md:px-0 px-2">
          <div className="flex gap-2 pr-2">
            <Image src={img1} alt="" width={17} height={17} />
            <p className="text-sm font-normal text-[#CCCCCC]">
              contact@abc.com
            </p>
          </div>
          <div className="flex gap-2">
            <Image src={img2} alt="" width={14} height={14} />
            <Image src={img3} alt="" width={14} height={14} />
            <Image src={img4} alt="" width={14} height={14} />
            <Image src={img5} alt="" width={14} height={14} />
          </div>
        </div>
        <div className="md:hidden block items-center py-3 md:px-0 px-2">
          <div className="flex gap-2 items-center flex-1 justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setDrawerOpen(true)}
                className="text-gray-600 focus:outline-none"
              >
                <CiMenuBurger className="text-white text-2xl" />
              </button>
              <h1 className="text-[30px] text-white">Logo</h1>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setSearchOpen(!isSearchOpen)}>
                <CiSearch className="text-white text-xl" />
              </button>
              <MdOutlineShoppingCart className="text-white text-3xl rounded-lg p-1" />
              <div>
                <Image src={img7} alt="" width={20} height={20} />
              </div>
            </div>
          </div>
          {isSearchOpen && (
            <div className="p-2 md:hidden">
              <input
                type="text"
                placeholder="Search"
                className="w-full border-[1px] border-white rounded-[10px] outline-none pl-2 py-1 bg-[#253146] text-white"
              />
            </div>
          )}
        </div>

        <div
          className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ease-in-out ${
            isDrawerOpen ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"
          }`}
          onClick={() => setDrawerOpen(false)}
        ></div>

        <div
          className={`fixed inset-y-0 left-0 w-3/4 max-w-sm bg-[#253146] shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          
          <div className="flex items-start justify-between">
          <nav className="flex flex-col p-4 space-y-4">
            {menu.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-white text-sm hover:[#EA4C49] ${
                  isActive(item.path) && "text-red-500 font-bold"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex justify-end p-4">
            <button onClick={() => setDrawerOpen(false)}>
              <AiOutlineClose className="text-white text-2xl" />
            </button>
          </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between px-4 py-4">
          <nav className="flex">
            {menu.map((item, index) => (
              <div key={item.name} className="flex">
                <Link
                  href={item.path}
                  className={`text-white text-sm hover:text-[#EA4C49] px-4 ${
                    isActive(item.path) && "text-red-500 font-bold"
                  }`}
                >
                  {item.name}
                </Link>
                {index !== menu.length - 1 && (
                  <div className="w-[1px] bg-white h-[9px] mt-[6px]"></div>
                )}
              </div>
            ))}
          </nav>
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 border-r-[1px] border-[#737F96] pr-2">
              <Image src={img1} alt="" width={17} height={17} />
              <p className="text-sm font-normal text-[#CCCCCC]">
                contact@abc.com
              </p>
            </div>
            <div className="flex gap-2">
              <Image src={img2} alt="" width={14} height={14} />
              <Image src={img3} alt="" width={14} height={14} />
              <Image src={img4} alt="" width={14} height={14} />
              <Image src={img5} alt="" width={14} height={14} />
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white opacity-35"></div>
      </header>

      <div className="bg-[#1A1F28] pt-20 pl-10 md:block hidden px-3">
        <div>
          <div className="flex items-center justify-between pb-10">
            <h1 className="text-[40px] text-white">Logo</h1>
            <div className="flex space-x-8 items-center">
              <div className="relative bg-[#253146] rounded-xl">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-[1px] border-white rounded-[10px] outline-none pr-10 pl-2 py-2 w-full bg-[#253146] xl:w-[430px] text-white opacity-45"
                />
                <div className="absolute top-[10px] right-2">
                  <CiSearch className="text-white text-xl" />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Image src={img6} alt="" width={22} height={35} />
                <div>
                  <p className="text-sm font-normal text-[#737F96]">
                    Call us free
                  </p>
                  <p className="text-lg font-normal text-[#CCCCCC]">
                    +1 86.36.166
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Image src={img7} alt="" width={20} height={20} />
                <p className="text-[#CCCCCC] text-base font-normal md:block hidden">
                  Account
                </p>
                <MdOutlineShoppingCart className="text-white text-3xl rounded-lg p-1" />
                <CiHeart className="text-white text-3xl rounded-lg p-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1F242D] md:flex hidden">
        <div className="container mx-auto px-2 py-3">
          <div className="flex items-center justify-center gap-8">
            <p className="text-white text-[17px]">OBDeleven</p>
            <p className="text-white text-[17px]">Scanner Types</p>
            <p className="text-white text-[17px]">Car Makes</p>
            <p className="text-white text-[17px]">Service Reset Tools</p>
            <p className="text-white text-[17px]">Other Tools & Accessories</p>
          </div>
        </div>
      </div>
    </div>
  );
}
