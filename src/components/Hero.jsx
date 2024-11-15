import React from "react";
import Container from "./Container";
import Button from "./Button";
import Review from "./Review";
import Title from "./Title";

function Hero() {
  return (
    <Container className="flex flex-col md:flex-row justify-between items-center gap-y-8 px-4 md:px-10 lg:px-20 h-[60vh] pt-4 md:pt-0">
      <div className="w-full lg:w-1/2 lg:pr-4 md:py-20">
        <div className="space-y-4 lg:space-y-14">
          <div className="flex flex-col gap-4 lg:gap-8">
            <Title className="flex flex-col text-4xl lg:text-[56px] text-white md:leading-[40px] lg:leading-[70px]">
              <span>Purchase your</span>
              <span> shoes now.</span>
            </Title>
            <p className="text-[18px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
              morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies
              tortor ac.
            </p>
          </div>

          <div className="inline-flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:w-full">
            <Button
              type="button"
              className="bg-white text-[#A61473] px-4 py-2 md:px-12 md:py-5 hover:shadow-xl hover:bg-white/80 duration-300"
            >
              Shop Now
            </Button>
            <Review />
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 h-full m-auto">
        <div className="w-full relative">
          <img className="" src="./images/img_1.png" alt="image" />

          <div className="md:space-y-2.5 md:w-60 p-5 border-2 bg-white/25 border-white/30 rounded-[10px] absolute right-0 -bottom-10 md:-bottom-20">
            <p className="text-base font-semibold text-slate-900">
              Get Up to 30% Off
            </p>
            <p className="text-[12px] text-slate-900 hidden md:block">
              You can get 30% off this product if you are buying now
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
