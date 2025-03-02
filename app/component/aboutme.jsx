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
              I’m Nguyen Le Duy Minh, a student at HCMC University of Foreign
              Languages – Information Technology (HUFLIT), aspiring to become a
              Bachelor of Data Science. Passionate about leveraging data-driven
              insights to solve real-world problems, I continuously explore data
              analysis, machine learning, and software development.
            </p>
            <p className="mt-2 font-Ovo text-gray-600 leading-relaxed">
              With a foundation in frontend development, I build engaging web
              applications using React and ASP.NET, focusing on aesthetics and
              user experience. I enjoy transforming ideas into intuitive digital
              solutions.
            </p>
            <p className="mt-2 font-Ovo text-gray-600 leading-relaxed">
              I believe growth in tech comes from hard work, persistence, and
              continuous learning. My goal is to contribute in a dynamic
              environment, gain hands-on experience, and create impactful
              solutions through data and technology.
            </p>
            <p className="mt-2 font-Ovo text-gray-600 leading-relaxed">
              {" "}
              I am excited about the journey ahead and look forward to working
              with innovative teams to create solutions that make a difference.
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
