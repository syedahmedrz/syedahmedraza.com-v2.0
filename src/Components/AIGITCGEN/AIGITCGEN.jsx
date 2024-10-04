import React, { useEffect, useRef } from "react";

import { FiExternalLink } from "react-icons/fi";

import AIGITCGENIMG from "../../Assets/Site-Images/AIGITCGEN.png";

const AIGITCGEN = () => {
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
        {/* IMG & SLogan */}
        <div className="flex flex-col  gap-4 lg:gap-8">
          <div className="w-full">
            <img className="w-full" src={AIGITCGENIMG} alt="" />
          </div>
          <div
            className="spotlight p-[2px] bg-ter-dark relative rounded-md overflow-hidden cursor-pointer"
            ref={(el) => (spotlightRefs.current[1] = el)}
          >
            <div className="relative spotlight-content bg-ter-dark rounded-md p-4 lg:p-8 text-white grid gap-2 text-xs text-justify lg:text-base">
              Flexible and adaptive tool for generating professional Git commit
              messages in Markdown format.
            </div>
          </div>
          <div>
            <button className="bg-pri hover:opacity-80 text-white flex items-center justify-center gap-2 rounded-lg shadow-lg transition-colors duration-300 disabled:bg-ter-dark w-[130px] h-10">
              <FiExternalLink /> Try Now
            </button>
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col  gap-4 lg:gap-8">
          <div className="bg-sec-dark rounded-md p-4 lg:p-8 text-white grid gap-2 text-xs text-justify lg:text-lg font-bold">
            AI-Enhanced Git Commit Message Generator
          </div>
          <div
            className="spotlight p-[2px] bg-ter-dark relative rounded-md overflow-hidden cursor-pointer"
            ref={(el) => (spotlightRefs.current[0] = el)}
          >
            <div className="relative spotlight-content bg-ter-dark rounded-md p-4 lg:p-8 text-white grid gap-2 text-xs text-justify lg:text-base">
              Introducing the "AI-Enhanced Git Commit Message Generator" – a
              cutting-edge tool designed to simplify your development workflow
              by generating professional Git commit messages in Markdown format.
              Created by Syed Ahmed, this flexible and adaptive solution
              harnesses the power of artificial intelligence to help you
              maintain clear and consistent communication in your version
              control commits.
            </div>
          </div>
          <FeatureCardCon spotlightRefs={spotlightRefs} />
        </div>
      </div>
    </div>
  );
};

// Group 1
const FeatureCardCon = ({ spotlightRefs }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:gap-8">
      <GridCard
        title={"Fixed bug in the login process, using Flask."}
        spotlightRefs={spotlightRefs}
        spotlightNo={2}
      />
      <GridCard
        title={"Optimized SQL query performance in PostgreSQL."}
        spotlightRefs={spotlightRefs}
        spotlightNo={3}
      />
      <GridCard
        title={"Added new feature to the dashboard using React."}
        spotlightRefs={spotlightRefs}
        spotlightNo={4}
      />
      <GridCard
        title={"Fixed bug in the login process, using Flask."}
        spotlightRefs={spotlightRefs}
        spotlightNo={5}
      />
    </div>
  );
};

const GridCard = ({
  title,
  colSpan = "1",
  rowSpan = "1",
  iconPosX = "center",
  iconPosY = "center",
  p = "0",
  spotlightRefs,
  spotlightNo,
}) => {
  return (
    <div
      className={`min-h-32 h-auto grid-start col-span-${colSpan} row-span-${rowSpan} `}
    >
      <div
        className="spotlight  h-full p-[2px] bg-sec-dark relative rounded-md overflow-hidden cursor-pointer"
        ref={(el) => {
          if (el && spotlightNo !== undefined) {
            spotlightRefs.current[spotlightNo] = el;
          }
        }}
      >
        <div
          className={`spotlight-content relative bg-sec-dark rounded-md p-4 lg:p-8 text-white grid gap-2 text-xs  lg:text-lg h-full`}
        >
          {" "}
          {title}{" "}
        </div>
      </div>
    </div>
  );
};

export default AIGITCGEN;
