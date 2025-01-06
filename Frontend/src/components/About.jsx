import React from "react";
import MernStack from "./../assets/mernstack.png";
import Html from "./../assets/Html.png";
import Css from "./../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "./../assets/React.png";

import Tailwind from "./../assets/Tailwind Css.png";
import Bootstrap from "./../assets/Bootstrap.png";
import NodeLogo from "./../assets/NodeLogo.png";
import Mongodb from "./../assets/mongodb.svg";
import Express from "./../assets/Express.png";
import NextJs from "./../assets/NextJs.png";
const AboutPage = () => {
  return (
    <section className="px-4 py-16 bg-gray-50" id="About">
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <div className="text-center">
          <h2 className="text-red-500 font-bold text-lg uppercase">About Me</h2>
          <h1 className="text-4xl font-bold mt-2">Hi, I'm Naim Hossain</h1>
          <p className="mt-4 text-gray-700">
            A Full-Stack Developer with expertise in web development and the
            MERN stack.
          </p>
        </div>

        {/* Journey Section */}
        <div className="mt-12 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800">My Journey</h3>
            <p className="mt-4 text-gray-600">
              I started my journey in web development with a passion for
              creating intuitive and scalable applications. With proficiency in
              the MERN stack (MongoDB, Express.js, React, and Node.js), I have
              built projects such as a full-stack food ordering website, a job
              portal, and even a LinkedIn clone. My projects demonstrate my
              ability to integrate powerful backend solutions with sleek,
              user-friendly frontend designs.
            </p>
            <div className="flex gap-4 mt-6">
              <img src={MernStack} alt="MERN" className="h-12" />
            </div>
          </div>
          {/* Skills Section */}
          <div className="md:w-1/2 bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-500">
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                <img src={Html} alt="" className="w-10" />
                <span className="font-semibold">HTML</span>
              </div>
              <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                <img src={Css} alt="" className="w-8" />
                <span className="font-semibold">CSS</span>
              </div>
              <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                <img src={Javascript} alt="" className="w-10" />
                <span className="font-semibold">Javascript</span>
              </div>
              <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                <img src={ReactLogo} alt="" className="w-8 rounded-full" />
                <span className="font-semibold">React</span>
              </div>

              <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                <img src={Tailwind} alt="" className="w-8 rounded-full" />
                <span className="font-semibold">Tailwind Css</span>
              </div>
              <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                <img src={Bootstrap} alt="" className="w-10" />
                <span className="font-semibold">Bootstrap</span>
              </div>
              <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                <img src={NodeLogo} alt="" className="w-10" />
                <span className="font-semibold">Node Js</span>
              </div>
              <div className="border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                <img src={Mongodb} alt="" className="w-10" />
                <span className="font-semibold">Mongodb</span>
              </div>
              <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                <img src={Express} alt="" className="w-10" />
                <span className="font-semibold">Express Js</span>
              </div>
              <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                <img src={NextJs} alt="" className="w-9" />
                <span className="font-semibold">Next Js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 ">
                Education
              </h3>
              <h4 className="text-lg font-bold text-red-500">
                Bachelor of Science (BSc) in Information and Communication
                Technology (ICT)
              </h4>
              <p className="mt-2 text-gray-600">
                Jahangirnagar University, Bangladesh
              </p>
              <p className="mt-1 text-gray-500">2024 - Present</p>
              <p className="mt-4 text-gray-600">
                Relevant Coursework: Web Development, Data Structures,
                Algorithms, Machine Learning.
              </p>
            </div>
            {/* Add more educational entries here if needed */}
          </div>
        </div>

        {/* More About Me Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800">
            More About Me
          </h3>
          <p className="mt-4 text-gray-600">
            Apart from coding, I am passionate about learning new technologies
            and keeping myself up-to-date with the latest trends in web
            development. I also run a YouTube channel where I teach JavaScript,
            MERN Stack development, WordPress, and digital marketing, helping
            others dive deep into the world of programming and technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
