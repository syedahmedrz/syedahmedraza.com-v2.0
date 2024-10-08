import React, { useEffect, useRef } from "react";

import { TbCode } from "react-icons/tb";
import { RiRobot2Line } from "react-icons/ri";
import { FaArrowDownLong } from "react-icons/fa6";

import SyedPortrait from "../../Assets/Site-Images/SyedPortrait.png";

const HeroSection = () => {
  const spotlightRefs = useRef([]);

  //   spotlight
  useEffect(() => {
    const handleMouseMove =
      ("mousemove",
      (event) => {
        const { clientX: x, clientY: y } = event;
        spotlightRefs.current.forEach((card) => {
          card.style.setProperty("--x", `${x}px`);
          card.style.setProperty("--y", `${y}px`);
        });
      });
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="mx-auto w-11/12 xl:w-[1100px] mt-24">
      {/* grid wrapper */}
      <div className="   grid grid-cols-3 grid-rows-3 gap-3 md:gap-4 lg:gap-8 h-fit">
        {/* Innovation Card */}
        <div className="m-h-[80px]">
          <div
            className="spotlight h-full p-[2px] bg-sec-dark relative rounded-md overflow-hidden cursor-pointer"
            ref={(el) => (spotlightRefs.current[0] = el)}
          >
            <div className="spotlight-content bg-sec-dark h-full flex items-center justify-center text-xs md:text-lg lg:text-3xl text-white font-bold rounded-md relative">
              Innovation
            </div>
          </div>
        </div>

        {/* Syed Portrait */}
        <div className="row-span-2 min-h-[160px]">
          <div
            className="spotlight h-full p-[2px] bg-transparent relative rounded-md overflow-hidden cursor-pointer"
            ref={(el) => (spotlightRefs.current[1] = el)}
          >
            <div className="relative z-50 h-full spotlight-content">
              <img
                alt="Syed Image"
                src={SyedPortrait} // Use imported image here
                className=" rounded-md object-cover min-h-full"
              />
            </div>
          </div>
        </div>

        {/* Syed Slogan */}
        <div className="m-h-[80px]">
          <p className="text-white text-xs md:text-2xl lg:text-4xl lg:leading-[50px] ">
            <span className="font-bold">
              &lt; Syed Ahmed <br />
            </span>
            A Digital <br />
            Innovator & <br />
            Digital Artist /&gt;
          </p>
        </div>

        {/* Coding Icon Card */}
        <div className="m-h-[80px]">
          <div
            className="spotlight h-full p-[2px] bg-ter-dark relative rounded-md overflow-hidden cursor-pointer"
            ref={(el) => (spotlightRefs.current[2] = el)}
          >
            <div className="spotlight-content bg-ter-dark h-full flex items-center justify-center text-3xl text-white font-bold rounded-md relative">
              <TbCode className={"text-[40px] md:text-[60px] lg:text-[80px]"} />
            </div>
          </div>
        </div>

        {/* Smart Card */}
        <div className="m-h-[80px] ">
          <div
            className="spotlight h-full p-[2px] bg-ter-dark relative rounded-md overflow-hidden cursor-pointer"
            ref={(el) => (spotlightRefs.current[3] = el)}
          >
            <div className="spotlight-content bg-ter-dark h-full flex items-center justify-center text-xs md:text-lg lg:text-3xl text-white font-bold rounded-md relative">
              Smart
            </div>
          </div>
        </div>

        {/* AI ICON Card */}
        <div className="m-h-[80px] col-start-2">
          <div
            className="spotlight h-full p-[2px] bg-sec-dark relative rounded-md overflow-hidden cursor-pointer"
            ref={(el) => (spotlightRefs.current[4] = el)}
          >
            <div className="spotlight-content bg-sec-dark h-full flex items-center justify-center text-3xl text-white font-bold rounded-md relative">
              <RiRobot2Line
                className={"text-[40px] md:text-[60px] lg:text-[80px]"}
              />
            </div>
          </div>
        </div>

        {/* Arrow Card */}
        <div className="m-h-[80px] ">
          <div className="flex items-center justify-center w-[60px] h-[60px] border-4 border-sec-dark  text-white rounded-full animate-pulse lg:animate-bounce">
            <FaArrowDownLong size={"25px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
