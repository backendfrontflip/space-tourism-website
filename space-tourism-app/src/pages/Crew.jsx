import React, { useState } from "react";
import { crew } from "../starter-code/data.json";
import { BsCircle } from "react-icons/bs";

const Crew = () => {
  const [people] = useState(crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = people[value];

  return (
    <>
      <section className="home crew px-5 min-h-screen flex flex-col justify-between">
        {/* Title */}
        <h1 className="pt-20 lg:pt-40 lg:max-w-7xl lg:mx-auto text-white text-4xl uppercase mb-10 text-center lg:text-left">
          02 Meet Your Crew
        </h1>

        {/* Main Content */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-5 items-center lg:max-w-7xl lg:mx-auto w-full">
          {/* Text Content */}
          <article className="text-center lg:text-left w-full px-5">
            <h4 className="uppercase text-gray-400 mb-5 text-2xl">{role}</h4>
            <h2 className="text-5xl font-bold text-white mb-5 uppercase tracking-widest">
              {name}
            </h2>
            <p className="text-gray-400 pb-5 mt-5 leading-relaxed">{bio}</p>

            {/* Navigation Dots */}
            <div className="flex justify-center lg:justify-start gap-4 mt-5">
              {people.map((item, index) => (
                <button 
                  key={index} 
                  onClick={() => setValue(index)} 
                  className={`h-5 w-5 rounded-full transition-all duration-300 ${
                    index === value ? "bg-white scale-110" : "bg-gray-500"
                  }`}
                >
                  <BsCircle className="h-5 w-5 text-transparent"/>
                </button>
              ))}
            </div>
          </article>

          {/* Crew Image */}
          <article className="flex justify-center items-center w-full max-h-screen overflow-hidden">
            <img 
              src={images.png} 
              alt={name} 
              title={name} 
              className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl object-cover mx-auto"
            />
          </article>
        </div>
      </section>
    </>
  );
};

export default Crew;
