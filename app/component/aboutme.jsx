import { Divider } from "antd";
import React from "react";

function AboutMe() {
  return (
    <div
      id="about-me"
      className="lg:pt-[5.5rem] sm:p-3 w-full mx-auto  flex flex-col "
    >
      {/* title */}
      <div className="flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center ">
          <Divider style={{ borderColor: "#a5c0bf" }} className="flex-grow" />
          <span className="mx-4 text-2xl  font-Ovo">Introduction</span>
          <Divider style={{ borderColor: "#a5c0bf" }} className="flex-grow" />
        </div>
      </div>
      {/* content */}
      <div className=" w-full flex flex-col lg:flex-row max-w-6xl mx-auto gap-6">
        {/* right */}
        <div className="sm:w-8/12 lg:w-6/12 text-justify p-6 mt-1 bg-gradient-to-tl from-white to-blue-50  rounded-xl shadow-md backdrop-blur-xl  ">
          <h3 className="text-xl font-semibold text-gray-800 font-Ovo">
            About Me
          </h3>
          <div className="mt-2 space-y-2">
            <p className="font-Ovo text-gray-600 leading-relaxed">
              I’m Nguyen Le Duy Minh, a Bachelor of Information Technology
              graduate from HCMC University of Foreign Languages and Information
              Technology (HUFLIT) and a passionate Frontend Developer dedicated
              to crafting high-performance, user-friendly web applications. With
              expertise in React, ASP.NET, and modern technologies, I focus on
              creating seamless digital experiences that blend aesthetics,
              functionality, and efficiency.
            </p>
            <p className="mt-2 font-Ovo text-gray-600 leading-relaxed">
              I thrive on problem-solving, innovation, and continuous learning,
              constantly pushing myself to improve and adapt in the
              ever-evolving world of technology. My passion lies in transforming
              ideas into intuitive digital solutions, ensuring that every
              project I contribute to enhances user interaction and engagement.
              I believe that success in tech comes from dedication, persistence,
              and an unyielding drive to learn and grow.
            </p>
            <p className="mt-2 font-Ovo text-gray-600 leading-relaxed">
              Beyond coding, I am deeply invested in collaboration and teamwork,
              as I believe the best solutions emerge from diverse perspectives
              and shared knowledge. My goal is to contribute to forward-thinking
              teams, tackle complex challenges, and develop impactful software
              that makes a real difference.
            </p>
            <p className="mt-2 font-Ovo text-gray-600 leading-relaxed">
              {" "}
              I’m excited about the journey ahead and eager to take on new
              opportunities, expand my expertise, and work alongside innovative
              professionals to build cutting-edge technology that shapes the
              future.
            </p>
          </div>
        </div>
        {/* left */}
        <div className="lg:w-6/12 flex flex-col justify-center p-3 gap-8">
          {/* Contact Section */}
          <div className="bg-gradient-to-tl from-blue-50 to-white p-4 rounded-xl shadow-md border-1 border-gray-200 backdrop-blur-xl">
            <h3 className="text-xl font-extrabold text-gray-800 font-Ovo">
              Information
            </h3>
            <div className="mt-2 space-y-2">
              <p className=" flex justify-between ">
                <span className="font-Ovo text-gray-600 ">Email:</span>{" "}
                <span className="font-Ovo text-gray-600 ">
                  duyminh@example.com
                </span>
              </p>
              <p className=" flex justify-between">
                <span className="font-Ovo text-gray-600 ">Location:</span>{" "}
                <span className="font-Ovo text-gray-600 ">
                  Ho Chi Minh City, Vietnam
                </span>
              </p>
              <p className=" flex justify-between">
                <span className="font-Ovo text-gray-600 ">Phone:</span>{" "}
                <span className="font-Ovo text-gray-600 ">076 3966 477</span>
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-gradient-to-tl from-blue-50 to-white p-4 rounded-xl shadow-md border-1 border-gray-200 backdrop-blur-xl">
            <h3 className="text-xl font-extrabold text-gray-800 font-Ovo">
              Education
            </h3>
            <div className="mt-2 space-y-2">
              <p className=" flex justify-between">
                <span className="font-Ovo text-gray-600 ">School:</span>{" "}
                <span className="font-Ovo text-gray-600 "> HUFLIT</span>
              </p>
              <p className=" flex justify-between">
                <span className="font-Ovo text-gray-600 ">Major:</span>{" "}
                <span className="font-Ovo text-gray-600 "> Data Science</span>
              </p>
              <p className=" flex justify-between">
                <span className="font-Ovo text-gray-600 ">Graduation:</span>{" "}
                <span className="font-Ovo text-gray-600 "> 2024</span>
              </p>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
