import React from "react";

import { TbCode } from "react-icons/tb";
import { RiRobot2Line } from "react-icons/ri";
import { FaArrowDownLong } from "react-icons/fa6";

import SyedPortrait from "../../Assets/Site-Images/SyedPortrait.png";

const HeroSection = () => {
  return (
    <div className="mx-auto w-11/12 xl:w-[1100px] mt-24">
      {/* grid wrapper */}
      <div className="w-10/12   grid grid-cols-3 grid-rows-3 gap-8">
        {/* Innovation Card */}
        <div className="h-full">
          <div className="bg-sec-dark h-full flex items-center justify-center text-3xl text-white font-bold rounded-md">
            Innovation
          </div>
        </div>

        {/* Syed Portrait */}
        <div className="row-span-2">
          <img src={SyedPortrait} className="rounded-md " alt="SyedImage" />
        </div>

        {/* Syed Slogan */}
        <div>
          <p className="text-white text-4xl leading-[50px] ">
            <span className="font-bold">&lt; Syed Ahmed <br /></span>
            A Digital <br />
            Innovator & <br />
            Digital Artist /&gt;
          </p>
        </div>

        {/* Coding Icon Card */}
        <div className="h-full">
          <div className="bg-ter-dark h-full  flex items-center justify-center  text-white font-bold rounded-md">
            <TbCode size={"80px"} />
          </div>
        </div>

        {/* Smart Card */}
        <div className="h-full ">
          <div className="bg-ter-dark h-full  flex items-center justify-center text-3xl text-white font-bold rounded-md">
            Smart
          </div>
        </div>

        {/* AI ICON Card */}
        <div className="h-full col-start-2">
          <div className="bg-sec-dark h-full  flex items-center justify-center  text-white font-bold rounded-md">
            <RiRobot2Line size={"80px"} />
          </div>
        </div>

        {/* Arrow Card */}
        <div className="h-full ">
          <div className="flex items-center justify-center w-[60px] h-[60px] border-4 border-sec-dark  text-white rounded-full">
            <FaArrowDownLong size={"25px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
