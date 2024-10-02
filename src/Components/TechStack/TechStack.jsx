import React, { useEffect, useRef } from "react";

import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiPandas } from "react-icons/si";

const TechStack = () => {
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
    <div className="mx-auto w-10/12 xl:w-[1100px] mt-32 lg:mt-64 relative">
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Group 1 */}
        <Group1 spotlightRefs={spotlightRefs} />

        {/* Group 2 */}
        <Group2 spotlightRefs={spotlightRefs} />

        {/* Group 3 */}
        <Group3 spotlightRefs={spotlightRefs} />
      </div>
    </div>
  );
};

// Group 1
const Group1 = ({ spotlightRefs }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4">
      <GridCard
        icon={
          <BiLogoMongodb
            className={"text-[40px] md:text-[50px] lg:text-[50px]"}
          />
        }
        spotlightRefs={spotlightRefs}
        spotlightNo={1}
      />
      <GridCard
        icon={
          <SiExpress className={"text-[40px] md:text-[50px] lg:text-[50px]"} />
        }
        spotlightRefs={spotlightRefs}
        spotlightNo={2}
      />
      <GridCard
        icon={
          <FaReact className={"text-[40px] md:text-[50px] lg:text-[50px]"} />
        }
        spotlightRefs={spotlightRefs}
        spotlightNo={3}
      />
      <GridCard
        icon={
          <FaNodeJs className={"text-[40px] md:text-[50px] lg:text-[50px]"} />
        }
        spotlightRefs={spotlightRefs}
        spotlightNo={4}
      />
      <GridCard
        colSpan="2"
        icon={
          <RiTailwindCssFill
            className={"text-[40px] md:text-[50px] lg:text-[50px]"}
          />
        }
        spotlightRefs={spotlightRefs}
        spotlightNo={5}
      />
    </div>
  );
};

// Group 2
const Group2 = ({ spotlightRefs }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4">
      <GridCard
        icon={<IoLogoJavascript className={"text-[100px]"} />}
        colSpan="2"
        rowSpan="2"
        iconPosX="end"
        iconPosY="end"
        p="4"
        spotlightRefs={spotlightRefs}
        spotlightNo={6}
      />
      <GridCard
        icon={
          <FaFigma className={"text-[40px] md:text-[50px] lg:text-[50px]"} />
        }
        spotlightRefs={spotlightRefs}
        spotlightNo={7}
      />
      <GridCard
        icon={
          <SiTypescript
            className={"text-[40px] md:text-[50px] lg:text-[50px]"}
          />
        }
        spotlightRefs={spotlightRefs}
        spotlightNo={8}
      />
    </div>
  );
};

// Group 3
const Group3 = ({ spotlightRefs }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4">
      <GridCard
        icon={
          <FaPython className={"text-[40px] md:text-[50px] lg:text-[50px]"} />
        }
        colSpan="1"
        rowSpan="2"
        spotlightRefs={spotlightRefs}
        spotlightNo={9}
      />
      <GridCard
        icon={
          <SiScikitlearn
            className={"text-[40px] md:text-[50px] lg:text-[50px]"}
          />
        }
        spotlightRefs={spotlightRefs}
        spotlightNo={10}
      />
      <GridCard
        icon={
          <SiTensorflow
            className={"text-[40px] md:text-[50px] lg:text-[50px]"}
          />
        }
        rowSpan="2"
        spotlightRefs={spotlightRefs}
        spotlightNo={11}
      />
      <GridCard
        icon={
          <SiPandas className={"text-[40px] md:text-[50px] lg:text-[50px]"} />
        }
        spotlightRefs={spotlightRefs}
        spotlightNo={12}
      />
    </div>
  );
};

const GridCard = ({
  icon,
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
        className="spotlight  h-full p-[2px] bg-ter-dark relative rounded-md overflow-hidden cursor-pointer"
        ref={(el) => {
          if (el && spotlightNo !== undefined) {
            spotlightRefs.current[spotlightNo] = el;
          }
        }}
      >
        <div
          className={`spotlight-content bg-ter-dark h-full flex items-${iconPosY} justify-${iconPosX} p-${p} text-3xl text-white font-bold rounded-md relative`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
