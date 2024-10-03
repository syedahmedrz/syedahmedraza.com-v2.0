import React, { useEffect, useRef } from "react";

import RiooxLogo from "../../Assets/Site-Images/RiooxLogo.png";

const MyNextBigMovesSection = () => {
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
    <div className="mx-auto w-10/12 xl:w-[1100px] mt-32 lg:mt-64">
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
        {/* My Next Big Moves */}
        <div className="flex flex-col  gap-4 lg:gap-8">
          <div className="bg-sec-dark rounded-md p-4 lg:p-8 text-white grid gap-2 text-xs text-justify lg:text-lg font-bold">
            My Next Big Moves
          </div>
          <div
            className="spotlight p-[2px] bg-ter-dark relative rounded-md overflow-hidden cursor-pointer"
            ref={(el) => (spotlightRefs.current[0] = el)}
          >
            <div className="relative spotlight-content bg-ter-dark rounded-md p-4 lg:p-8 text-white grid gap-2 text-xs text-justify lg:text-base">
              I'm looking beyond technology to explore exciting opportunities in
              different industries. My plans include starting a unique coffee
              brand, launching a high-end clothing line, and creating
              cutting-edge tech firms. Each project aims to transform its
              sector, setting new standards for innovation and style. I'm
              committed to leading and inspiring change, making a lasting impact
              in various fields with initiatives that are much more than just
              businesses—they're new beginnings.
            </div>
          </div>
        </div>

        {/* Planned Brands and Ventures: */}
        <div className="flex flex-col  gap-4 lg:gap-8">
          <div className="bg-sec-dark rounded-md p-4 lg:p-8 text-white grid gap-2 text-xs text-justify lg:text-lg font-bold">
            Planned Brands and Ventures:
          </div>
          <div
            className="spotlight p-[2px] bg-[#554133] relative rounded-md overflow-hidden cursor-pointer"
            ref={(el) => (spotlightRefs.current[1] = el)}
          >
            <div className="relative spotlight-content bg-[#554133] rounded-md p-4 lg:p-8 text-white grid gap-2 text-xs text-justify lg:text-base">
              Coffee Brand: Inspired by giants like Starbucks, Dunkin', and
              Costa, I aim to create a coffee brand that stands for quality and
              innovation, offering a unique blend of traditional and modern
              flavors to coffee aficionados worldwide.
            </div>
          </div>
          <div
            className="spotlight p-[2px] bg-[#333A55] relative rounded-md overflow-hidden cursor-pointer"
            ref={(el) => (spotlightRefs.current[2] = el)}
          >
            <div className="relative spotlight-content bg-[#333A55] rounded-md p-4 lg:p-8 text-white grid gap-2 text-xs text-justify lg:text-base">
              Clothing Line: Drawing inspiration from renowned labels such as
              Fendi, Prada, and Gucci, my clothing brand will focus on luxury
              and exclusivity, blending high fashion with contemporary trends to
              redefine style statements.
            </div>
          </div>
          <div
            className="spotlight p-[2px] bg-[#375533] relative rounded-md overflow-hidden cursor-pointer"
            ref={(el) => (spotlightRefs.current[3] = el)}
          >
            <div className="relative spotlight-content bg-[#375533] rounded-md p-4 lg:p-8 text-white grid gap-2 text-xs text-justify lg:text-base">
              Tech Companies: With aspirations to mirror the influence of tech
              leaders like Google and Microsoft, I plan to establish tech
              companies that pioneer advanced solutions in AI, software
              development, and beyond, setting new benchmarks in technology and
              usability.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNextBigMovesSection;
