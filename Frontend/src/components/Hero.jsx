import React from "react";
import avatar from "./../assets/20241128_115410.jpg";
import ChangeText from "./ChangeText";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start p-6 md:p-20 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-2/4 md:pt-10">
        <h1 className="text-2xl md:text-5xl font-bold leading-snug md:leading-tight tracking-tighter">
          <ChangeText />
        </h1>
        <p className="text-sm md:text-xl tracking-tight mt-4 md:mt-6 text-gray-700">
          I am a passionate web developer with expertise in React, Next.js, and
          modern web technologies. I love creating beautiful and functional
          websites that solve real-world problems.
        </p>
        <div className="mt-6 md:mt-10">
          <button className="text-white py-2 px-6 text-sm md:text-lg md:py-3 md:px-8 hover:opacity-90 duration-300 hover:scale-105 font-semibold rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:shadow-xl">
            Download CV
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex justify-center items-center w-[250px] h-[250px] md:w-[350px] md:h-[350px] mt-10 md:mt-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-[5px]">
        <div className="w-full h-full rounded-full bg-white flex justify-center items-center">
          <img
            className="w-[90%] h-[90%] rounded-full object-cover"
            src={avatar}
            alt="Avatar of Naim"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
