import { assets } from "@/public/assets/assets";
import { Carousel, Divider } from "antd";
import { Download, MoveRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Project() {
  return (
    <section id="project" className="pt-[5.5rem] w-full py-16 bg-gray-50">
      {/* Title */}
      <div className="flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center ">
          <Divider style={{ borderColor: "#a5c0bf" }} className="flex-grow" />
          <span className="mx-4 text-2xl  font-Ovo">Project</span>
          <Divider style={{ borderColor: "#a5c0bf" }} className="flex-grow" />
        </div>
      </div>

      {/* Project List */}
      <div className="flex flex-col max-w-6xl mx-auto px-6 py-6  gap-32 ">
        {/* First Project */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 ">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 font-Ovo">
              School Task Management System – Personal Project
            </h3>

            <div className="flex flex-col gap-5">
              <div className="text-justify space-y-3 ">
                <p className="font-Ovo text-gray-600 leading-relaxed">
                  Designed and developed a school task management system with a
                  user-friendly and visually appealing interface to enhance the
                  user experience. Key features include attendance tracking,
                  event management, interactive charts for data visualization,
                  and automated earnings calculation per lesson for efficient
                  financial tracking. Additionally, implemented a class
                  timetable for seamless scheduling and ensured a fully
                  responsive design for accessibility across all devices.
                  (Email: nguyenleduyminh0908@gmail.com - Password: 123456)
                </p>
                <p className="font-Ovo text-gray-600 leading-relaxed">
                  Technologies: React + Vite, Node.js , Tailwind, Redux Thunk,
                  Express, MongoDB, React-Router, Axios, Ant Design.
                </p>
              </div>
              <div className="flex flex-wrap gap-5 justify-center">
                <a
                  href="https://school-task-rbzz.vercel.app/auth/login"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="group flex gap-1 border rounded-full px-5 py-[13px] border-blue-300 transition-all duration-300 text-blue-400 hover:bg-blue-300  hover:text-white font-medium shadow-lg "
                >
                  <span className="text-md font-Ovo">View Demo</span>
                  <MoveUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] "
                  />
                </a>
                <a
                  href="https://github.com/MinhDuy0i0909090/SchoolTask"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="group flex gap-1 border rounded-full px-5 py-[13px] border-blue-300 transition-all duration-300 text-blue-400 hover:bg-blue-300 hover:text-white font-medium shadow-lg "
                >
                  <span className="text-md font-Ovo">Git Repository</span>
                  <MoveUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] "
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Image Section */}

          <div className=" max-w-[580px]">
            <Carousel autoplay arrows infinite={false} effect="fade">
              {[
                assets.schooltask1,
                assets.web2image,
                assets.schooltask2,
                assets.schooltask3,
                assets.schooltask4,
              ].map((imgSrc, index) => (
                <div key={index} className="flex-1 flex justify-center ">
                  <Image
                    alt={`E-commerce App Screenshot ${index + 1}`}
                    src={imgSrc}
                    width={630}
                    height={400}
                    className="rounded-xl border border-gray-300 shadow-lg w-full max-w-[650px] h-[350px] "
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Second Project */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}

          <div className="max-w-[600px]">
            <Carousel autoplay arrows infinite={false} effect="fade">
              {[
                assets.web1image,
                assets.ecomerce1,
                assets.ecomerce2,
                assets.ecomerce3,
                assets.ecomerce4,
                assets.ecomerce5,
              ].map((imgSrc, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    alt={`E-commerce App Screenshot ${index + 1}`}
                    src={imgSrc}
                    className="rounded-xl border border-gray-300 shadow-lg w-full max-w-[650px] h-[350px] "
                  />
                </div>
              ))}
            </Carousel>
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center  md:text-left space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 font-Ovo">
              E-commerce App – Personal Project
            </h3>
            <div className="flex flex-col gap-5">
              <div className="text-justify space-y-2 ">
                <p className="font-Ovo text-gray-600 leading-relaxed">
                  Developed a fully functional e-commerce application with a
                  focus on user experience, security, and seamless backend
                  integration. Features include secure authentication, an admin
                  dashboard for product and order management, real-time order
                  tracking, and PayPal payment integration. Optimized
                  performance and implemented security best practices for a
                  smooth and reliable shopping experience.
                </p>
                <p className="font-Ovo text-gray-600 leading-relaxed">
                  Technologies: React + Vite, Node.js , Tailwind, Redux Thunk,
                  Express, MongoDB, React-Router, Axios, Ant Design.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://e-commercev2.vercel.app/auth/login"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="group flex gap-1 border rounded-full px-5 py-[13px] border-blue-300 transition-all duration-300 text-blue-400 hover:bg-blue-300  hover:text-white font-medium shadow-lg "
                >
                  <span className="text-md font-Ovo">View Detail</span>
                  <MoveUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] "
                  />
                </a>
                <a
                  href="https://github.com/MinhDuy0i0909090/E-commercev2"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="group flex gap-1 border rounded-full px-5 py-[13px] border-blue-300 transition-all duration-300 text-blue-400 hover:bg-blue-300 hover:text-white font-medium shadow-lg "
                >
                  <span className="text-md font-Ovo">Git Repository</span>
                  <MoveUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Third Project */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 ">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 font-Ovo">
              ETraffic Sign Detection and Localization – Group Project
            </h3>
            <div className="flex flex-col gap-5">
              <div className="text-justify space-y-3 ">
                <p className="font-Ovo text-gray-600 leading-relaxed">
                  Developed a real-time traffic sign detection application using
                  MobileNetV2 with TensorFlow and Gradio, achieving 99%
                  accuracy. Designed and implemented an intuitive web-based
                  interface for seamless interaction, enabling users to upload
                  or capture images for instant classification. Optimized the
                  model for efficiency and accuracy, ensuring real-time
                  performance. Integrated Bootstrap for a responsive and
                  user-friendly UI.
                </p>
                <p className="font-Ovo text-gray-600 leading-relaxed">
                  Technologies: Gradio, Bootstrap, HTML.
                </p>
              </div>
              <div className="flex flex-wrap gap-5 justify-center">
                <a
                  href="https://www.youtube.com/watch?v=FCVSZdNmYo4"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="group flex gap-1 border rounded-full px-5 py-[13px] border-blue-300 transition-all duration-300 text-blue-400 hover:bg-blue-300  hover:text-white font-medium shadow-lg "
                >
                  <span className="text-md font-Ovo">Demo Video</span>
                  <MoveUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] "
                  />
                </a>
                <a
                  href="https://github.com/MinhDuy0i0909090/TrafficSignClassification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-1 border rounded-full px-5 py-[13px] border-blue-300 transition-all duration-300 text-blue-400 hover:bg-blue-300 hover:text-white font-medium shadow-lg "
                >
                  <span className="text-md font-Ovo">Git Repository</span>
                  <MoveUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] "
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="max-w-[600px] bg-white rounded-full">
            <Carousel
              autoplay
              arrows
              infinite={false}
              effect="fade"
              className="rounded-full bg-white"
            >
              {[
                assets.trafficweb1,
                assets.trafficweb2,
                assets.trafficweb3,
                assets.trafficweb4,
              ].map((imgSrc, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    alt={`E-commerce App Screenshot ${index + 1}`}
                    src={imgSrc}
                    className="rounded-xl border border-gray-300 shadow-lg w-full max-w-[650px] h-[350px] "
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
