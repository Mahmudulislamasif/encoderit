"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';
import Logo1 from "../../../../public/logo/vw-logo.png";
import Logo2 from "../../../../public/logo/audi-logo.png";
import Logo3 from "../../../../public/logo/bmw-logo.png";
import Logo4 from "../../../../public/logo/jaguar-logo.png";
import Logo5 from "../../../../public/logo/seat-logo.png";
import Logo6 from "../../../../public/logo/skoda-logo.png";
import Logo7 from "../../../../public/logo/range-rover-logo.png";
import Image from 'next/image';

const Logo = () => {
    return (
        <div className='bg-[#1D232D] py-10'>
            <div className='container mx-auto'>
                <Marquee gradient={false} speed={50}>
                    <div className='flex space-x-20'>
                        <Image src={Logo1} alt="VW Logo" width={70} height={70} />
                        <Image src={Logo2} alt="Audi Logo" width={70} height={70} />
                        <Image src={Logo3} alt="BMW Logo" width={70} height={70} />
                        <Image src={Logo4} alt="Jaguar Logo" width={70} height={70} />
                        <Image src={Logo5} alt="Seat Logo" width={70} height={70} />
                        <Image src={Logo6} alt="Skoda Logo" width={70} height={70} />
                        <Image src={Logo7} alt="Range Rover Logo" width={70} height={70} />
                        <Image src={Logo1} alt="VW Logo" width={70} height={70} />
                        <Image src={Logo2} alt="Audi Logo" width={70} height={70} />
                        <Image src={Logo3} alt="BMW Logo" width={70} height={70} />
                        <Image src={Logo4} alt="Jaguar Logo" width={70} height={70} />
                        <Image src={Logo5} alt="Seat Logo" width={70} height={70} />
                        <Image src={Logo6} alt="Skoda Logo" width={70} height={70} />
                        <Image src={Logo7} alt="Range Rover Logo" width={70} height={70} />
                        <Image src={Logo1} alt="VW Logo" width={70} height={70} />
                        <Image src={Logo2} alt="Audi Logo" width={70} height={70} />
                        <Image src={Logo3} alt="BMW Logo" width={70} height={70} />
                        <Image src={Logo4} alt="Jaguar Logo" width={70} height={70} />
                        <Image src={Logo5} alt="Seat Logo" width={70} height={70} />
                        <Image src={Logo6} alt="Skoda Logo" width={70} height={70} />
                        <Image src={Logo7} alt="Range Rover Logo" width={70} height={70} />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Logo;
