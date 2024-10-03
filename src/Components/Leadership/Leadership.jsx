import React from "react";

import RiooxLogo from "../../Assets/Site-Images/RiooxLogo.png";

const Leadership = () => {
  return (
    <div className="mx-auto w-10/12 xl:w-[1100px] mt-32 lg:mt-64">
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">

        {/* FOUNDER & CEO */}
        <div className="flex flex-col  gap-4 lg:gap-8">
          <div className="bg-sec-dark rounded-md p-4 lg:p-8 text-white grid gap-2 text-xs text-justify lg:text-lg font-bold">
            Pioneering Leadership at Rioox
          </div>
          <div>
            <div className="bg-ter-dark rounded-md p-4 lg:p-8 text-white grid gap-2 text-xs text-justify lg:text-base">
              As the Founder and CEO of Rioox, I am committed to steering the
              company towards groundbreaking innovations in digital technology.
              My role centers around fostering a culture of creativity and
              forward-thinking, where every challenge is seen as an opportunity
              for growth and innovation. Through visionary leadership, I ensure
              that Rioox remains at the cutting edge, continually advancing our
              capabilities to meet the ever-evolving needs of the digital
              landscape.
            </div>
          </div>
        </div>

        {/* ABOUT RIOOX */}
        <div className="flex flex-col  gap-4 lg:gap-8">
          <div className="">
            <img src={RiooxLogo} className="animate-pulse" alt="" />
          </div>
          <div>
            <div className="bg-ter-dark rounded-md p-4 lg:p-8 text-white grid gap-2 text-xs text-justify lg:text-base">
              Rioox is not just a web development company; it is a hub of
              innovation where we craft digital experiences that resonate and
              engage. Our mission is to empower businesses with solutions that
              are not only functional but transformative. By integrating the
              latest technologies with unique strategic insights, we help our
              clients to not just compete but lead in their respective
              industries. At Rioox, we are dedicated to creating digital
              solutions that elevate and inspire, reflecting our commitment to
              excellence and innovation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
