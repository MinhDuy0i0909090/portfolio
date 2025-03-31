import { Divider } from "antd";
import {
  Code,
  Database,
  Figma,
  Frame,
  GitBranch,
  Globe,
  Languages,
} from "lucide-react";
import React from "react";

function Skill() {
  const skills = [
    {
      category: "Front-end",
      icon: <Globe size={30} color="#262b31" className="mt-4" />,
      iconDark: <Globe size={30} color="#ffffff" className="mt-3" />,
      items: [
        "ReactJS",
        "Redux",
        "Tailwind",
        "Bootstrap",
        "Ant Design",
        "Typescript",
        "ASP.NET",
        "React Query",
      ],
    },
    {
      category: "Back-end",
      icon: <Code size={30} color="#262b31" className="mt-3" />,
      iconDark: <Code size={30} color="#ffffff" className="mt-3" />,
      items: ["Node.js", " ASP.NET WebAPI", "PHP", "RESTfull API"],
    },
    {
      category: "Databases",
      icon: <Database size={30} color="#262b31" className="mt-3" />,
      iconDark: <Database size={30} color="#ffffff" className="mt-3" />,
      items: ["Microsoft SQL Server", "MongoDB"],
    },
    {
      category: "Design",
      icon: <Figma size={30} color="#262b31" className="mt-3" />,
      iconDark: <Figma size={30} color="#ffffff" className="mt-3" />,
      items: ["Figma", "Canva"],
    },
    {
      category: "Languages",
      icon: <Languages size={30} color="#262b31" className="mt-3" />,
      iconDark: <Languages size={30} color="#ffffff" className="mt-3" />,
      items: ["TOEIC 685 "],
    },
    {
      category: "Version Control",
      icon: <GitBranch size={30} color="#262b31" className="mt-3" />,
      iconDark: <GitBranch size={30} color="#ffffff" className="mt-3" />,
      items: ["Git"],
    },
  ];
  return (
    <>
      <div id="skill" className="lg:pt-[5.5rem] w-full mx-auto  flex flex-col ">
        {/* title */}
        <div className="flex flex-col items-center justify-center ">
          <div className="flex items-center justify-center ">
            <Divider
              style={{ borderColor: "#a5c0bf", width: "3rem" }}
              className="flex-grow"
            />
            <span className="mx-4 text-2xl  font-Ovo">Skill </span>
            <Divider
              style={{ borderColor: "#a5c0bf", width: "2rem" }}
              className="flex-grow"
            />
          </div>
        </div>

        <ul className="w-8/12 grid grid-cols-1 md:w-11/12 lg:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto py-6">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="group odd:bg-gradient-to-tr odd:from-blue-50 odd:to-white
                 p-4 rounded-xl shadow-lg border border-gray-200 backdrop-blur-xl
                 even:bg-gradient-to-l even:from-blue-50 even:to-white"
            >
              {skill.icon}
              <h3 className="my-5 text-xl font-semibold text-gray-700 font-Ovo ">
                {skill.category}
              </h3>
              <ul className="mt-2 space-y-1">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="border border-gray-300 rounded-full px-1 py-1 inline-block bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm my-1 mx-1"
                  >
                    <span className="p-2 font-Ovo text-gray-600"> {item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Skill;
