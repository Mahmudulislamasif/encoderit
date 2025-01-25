import React from "react";
import Hero from "./Hero/Hero";
import Card from "./Card/Card";
import Cart from "./Cart/Cart";

const Content = () => {
  return (
    <section className="bg-[#1A1F28]">
      <div className="container mx-auto py-5 md:py-20 px-5">
        <Hero />
        <Card />
        <Cart />
      </div>
    </section>
  );
};

export default Content;
