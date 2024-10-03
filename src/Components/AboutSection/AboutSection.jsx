import React from "react";

const AboutSection = () => {
  return (
    <div className="mt-32 lg:mt-64 bg-sec-dark w-full py-32">
      <div className="mx-auto w-10/12 xl:w-[1100px] grid lg:grid-cols-2 gap-4 lg:gap-8">
        <div className="">
          <h1 className="text-lg lg:text-3xl font-bold text-white">
            Hi, This is Syed.
          </h1>
          <p className="text-white mt-8 text-justify">
            I drive change and lead advancements in technology and business,
            aiming to make a significant impact and exploring new frontiers in
            tech and innovation. Dedicated to continual improvement, I quickly
            adapt to new technologies and consistently enhance my skills. My
            goal is to craft solutions that solve complex problems and redefine
            what success looks like.
          </p>
        </div>
        <div className="bg-ter-dark rounded-md p-4 lg:p-8 text-white grid gap-2 text-xs lg:text-base">
          <p>💻 Web developer</p>
          <p>🚀 Aiming for Billionaire</p>
          <p>📚 Always Learning & Growing</p>
          <p>💡 Exploring New Frontiers in Tech & Innovation</p>
          <p>⏩ L➿p</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
