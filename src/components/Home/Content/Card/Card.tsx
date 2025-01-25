import React from "react";
import Img1 from "../../../../../public/icon/01.png";
import Img2 from "../../../../../public/icon/02.png";
import Img3 from "../../../../../public/icon/03.png";
import Img4 from "../../../../../public/icon/04.png";
import Img5 from "../../../../../public/icon/05.png";
import Img6 from "../../../../../public/icon/06.png";
import Image from "next/image";

const cardData = [
  {
    mainImg: Img1,
    mainTitle: "Excellent customer service",
    subImg: Img4,
    description:
      "We genuinely believe the key to success is serving our customers. Being there for you before and after the sale. See our feedback to get a feel for how much we GENUINELY care about our customers.",
  },
  {
    mainImg: Img3,
    mainTitle: "Tools you can \ntrust",
    subImg: Img5,
    description:
      "We know the diagnostics industry can be a minefield, terms such as EOBD2, OBDII, CANBUS, UDS and with so many scanners to choose from it can be difficult to decide what to buy. We’ll talk you through the options and we’ll never up sell. We’ll advise what’s appropriate for you.",
  },
  {
    mainImg: Img2,
    mainTitle: "FREE next day \ndelivery",
    subImg: Img6,
    description:
      "We know when you order a scanner for your car, you may need it fast! All of our scanners are dispatched via Royal Mail first class the next working day, providing you order before our cut off time of 12pm.",
  },
];

const Card = () => {
  return (
    <div className="md:py-20 py-7">
      <h1 className="uppercase text-[29px] text-white md:text-left text-center md:text-[34px] font-bold">
        Why Choose Us?
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-3 md:mt-10">
        {cardData.map((card, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <Image
                src={card.mainImg}
                alt="Car Diagnostic"
                width={45}
                height={45}
              />
              <h3 className="text-white font-semibold md:text-[27px] text-[22px]">
                {card.mainTitle.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
            </div>
            <div className="flex gap-4 items-start">
              <Image
                src={card.subImg}
                alt="Car Diagnostic"
                width={25}
                height={35}
              />
              <p className="text-sm font-normal text-[#CCCCCC]">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
