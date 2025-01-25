import React from "react";
import Img1 from "../../../../../public/images/img1.png";
import Image from "next/image";
import { MdCurrencyPound } from "react-icons/md";
import Divider from "@/components/UI/Divider";
const Hero = () => {
  return (
    <div>
      <div className="md:pb-20 pb-5">
        <h3 className="md:text-2xl text-sm text-[#CCCCCC] text-center font-light">
          Car Diagnostic
        </h3>
        <h2 className="text-white md:text-[34px] text-2xl text-center font-bold">
          Tools and Scanners
        </h2>
      </div>
      <div className="flex justify-center md:pb-20 pb-5">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex justify-center">
            <Image src={Img1} alt="Car Diagnostic" width={600} height={350} />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="flex items-center gap-4">
              <MdCurrencyPound className="text-[#737F96] text-3xl" />
              <h3 className="text-[19px] md:text-[27px] text-white font-semibold">
                Save money and diagnose faults
              </h3>
            </div>
            <p className="md:text-lg text-sm text-[#737F96] font-normal">
              A car diagnostic scan from your local dealership could cost up to
              £100 + VAT. Why not buy a scanner and do it yourself? They are
              easy to use. The scanner will pay for itself. You can then present
              the findings to your local mechanic who won’t have to run a
              diagnostics scan, thus saving time and money.
            </p>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Hero;
