import { assets } from "@/public/assets/assets";
import { Divider } from "antd";
import { BriefcaseBusiness, Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";

function Experience() {
  const companies = [
    {
      image: assets.logoLC1,
      icon1: <BriefcaseBusiness size={17} color="#374151" />,
      icon1Dark: <BriefcaseBusiness size={17} color="#ffffff" />,
      icon2: <Calendar size={17} color="#374151" />,
      icon2Dark: <Calendar size={17} color="#ffffff" />,
      name: "Frontend Developer",
      position: "Internship",
      companyName: "LC 1 Long Cam Production Trading Company Limited",
      date: "March 2024 – October 2024 ",

      descriptions: [
        "Built dynamic user interfaces using React, focusing on state management and component-based design. ",
        "Prepared daily/weekly reports and collaborated with cross-functional teams to achieve project milestones. ",
      ],
    },
    {
      image: assets.logoB24,
      icon1: <BriefcaseBusiness size={17} color="#374151" />,
      icon1Dark: <BriefcaseBusiness size={17} color="#ffffff" />,
      icon2: <Calendar size={17} color="#374151" />,
      icon2Dark: <Calendar size={17} color="#ffffff" />,
      name: "Frontend Developer",
      position: "Internship",
      companyName: "B24 Joint Stock Company",
      date: "May 2023 – September 2023 ",

      descriptions: [
        "Developed responsive interfaces with Angular while integrating C# backend and SQL for database components.",
        "Collaborated with backend teams to improve data flow and enhance front-to-back integration. ",
      ],
    },
  ];
  return (
    <>
      <div
        id="experience"
        className="lg:pt-[5.5rem] w-full sm:p-3  mx-auto flex flex-col "
      >
        {/* title */}
        <div className="flex flex-col items-center justify-center ">
          <div className="flex items-center justify-center ">
            <Divider
              style={{ borderColor: "#a5c0bf" }}
              className="flex-grow"
              plain
            />

            <span className="mx-4 text-2xl  font-Ovo">Experience</span>
            <Divider style={{ borderColor: "#a5c0bf" }} className="flex-grow" />
          </div>
        </div>
        {/* content */}

        <div className="sm:max-w-xl md:w-9/12 md:max-w-4xl mx-auto py-6">
          <div className="bg-gradient-to-tr from-blue-50 to-white rounded-xl shadow-md border border-gray-200 backdrop-blur-xl">
            {companies.map((company, index) => (
              <div key={index}>
                <div className="flex p-4  gap-5">
                  {/* Company Logo */}
                  <div className="ml-4">
                    <Image
                      alt="Logo"
                      src={company.image}
                      className="w-16 rounded-xl p-1 border-2 bg-white border-gray-200 my-3"
                    />
                  </div>

                  {/* Company Info */}
                  <div className="w-10/12 flex flex-col">
                    {/* Position and Company Name */}
                    <div className="flex justify-between my-2">
                      <p className="text-md font-semibold text-gray-950 font-Ovo">
                        {company.name}
                      </p>
                      <div className="rounded-full border-2 border-blue-400 bg-white flex justify-center items-center">
                        <p className="mx-4 text-sm text-blue-400 font-Ovo">
                          {company.position}
                        </p>
                      </div>
                    </div>

                    {/* Job Role & Date */}
                    <div className="flex justify-between my-1">
                      <div className="flex gap-1 justify-center items-center">
                        <BriefcaseBusiness size={17} color="#374151" />
                        <span className="text-sm font-semibold text-gray-700 font-Ovo ">
                          {company.companyName}
                        </span>
                      </div>
                      <div className="flex gap-2 justify-center items-center">
                        <Calendar size={17} color="#374151" />
                        <span className="text-sm text-gray-600 font-Ovo">
                          {company.date}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="list-disc pl-4 mt-1 space-y-1">
                      {company.descriptions.map((desc, idx) => (
                        <li
                          key={idx}
                          className="text-gray-500 leading-relaxed font-Ovo text-justify"
                        >
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index !== companies.length - 1 && (
                  <div className="mx-6">
                    {" "}
                    <Divider
                      style={{ borderColor: " #e5e7eb", width: "2rem" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
