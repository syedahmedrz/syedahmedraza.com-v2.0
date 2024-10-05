import React from "react";

const ClientSpotlights = () => {
  return (
    <div className="ClientSpotlights mt-32 lg:mt-64 w-full py-32 relative z-10">
      {/* <div className="absolute top-0 left-0 text-[20vw] z-20">Client Spotlights</div> */}
      <div className="relative mx-auto w-11/12 xl:w-[1100px] z-50 grid lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
        <ClientSpotlighCard
          feedBack="Syed was a huge help in setting up my website and integration. He is very knowledgeable and was always quick to respond to any communication and changes. Will contact Syed again in the future for any changes and updates required for my website. He was also able to over-deliver and set up everything I needed to get my site online."
          clientName="Henry Hill"
          clientLocation="A Client From USA"
        />
        <ClientSpotlighCard
          feedBack="Work done by syed is really good . He understand what I exactly need and provide me with that. In future I will rehire him for my another projects and this was the nice experience to work with him."
          clientName="Mateusz Kielbasa"
          clientLocation="A Client From POLAND"
        />
        <ClientSpotlighCard
          feedBack="Really good work, communicative. Went above and beyond to deliver a good quality website. Did even more than what I initially asked for, consulted me on improvements I haven't thought about. Would recommend and definitely will be back for more!"
          clientName="Prajwal Jaswal"
          clientLocation="A Client From INDIA"
        />
      </div>
    </div>
  );
};

const ClientSpotlighCard = ({ feedBack, clientName, clientLocation }) => {
  return (
    <div className="bg-sec-dark rounded-md p-4 lg:p-8 text-white text-xs text-justify lg:text-base flex flex-col justify-between h-[300px] lg:min-h-[500px] border-ter-dark border-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <div className="opacity-90 hover:opacity-100 transition-opacity duration-300">
        {feedBack}
      </div>
      <div className="opacity-75 hover:opacity-100 transition-opacity duration-300">
        <p className="font-bold mb-1">~ {clientName}</p>
        <p>{clientLocation}</p>
      </div>
    </div>
  );
};

export default ClientSpotlights;
