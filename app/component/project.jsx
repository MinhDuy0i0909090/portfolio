import { assets } from "@/public/assets/assets";
import { Carousel, Divider } from "antd";
import { Download, MoveRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Project() {
  return (
    <section
      id="project"
      className="pt-16 sm:pt-[5.5rem] w-full py-8 sm:py-16 bg-gray-50"
    >
      {/* Title */}
      <div className="flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center ">
          <Divider
            style={{ borderColor: "#a5c0bf", width: "1.5rem" }}
            className="flex-grow"
            plain
          />

          <span className="mx-4 text-2xl  font-Ovo">Project</span>
          <Divider
            style={{ borderColor: "#a5c0bf", width: "1.5rem" }}
            className="flex-grow"
          />
        </div>
      </div>

      {/* Project List */}
      <div className="flex flex-col max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 gap-16 sm:gap-32">
        {/* First Project */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-10">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left   space-y-3 sm:space-y-4 mt-6 md:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-Ovo px-2 md:px-0">
              School Task Management System – Personal Project
            </h3>

            <div className="flex flex-col gap-3 sm:gap-5 ">
              <div className="text-justify space-y-2 sm:space-y-3 px-2 md:px-0">
                <p className="font-Ovo text-sm sm:text-base text-gray-600 leading-relaxed">
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
                <p className="font-Ovo text-sm sm:text-base text-gray-600 leading-relaxed">
                  Technologies: React + Vite, Node.js, Tailwind, Redux Thunk,
                  Express, MongoDB, React-Router, Axios, Ant Design.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-5 justify-center ">
                <a
                  href="https://school-task-rbzz.vercel.app/auth/login"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="group flex gap-1 border rounded-full px-4 sm:px-5 py-2 sm:py-[13px] border-blue-300 transition-all duration-300 text-blue-400 hover:bg-blue-300 hover:text-white font-medium shadow-lg"
                >
                  <span className="text-sm sm:text-md font-Ovo">View Demo</span>
                  <MoveUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </a>
                <a
                  href="https://github.com/MinhDuy0i0909090/SchoolTask"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="group flex gap-1 border rounded-full px-4 sm:px-5 py-2 sm:py-[13px] border-blue-300 transition-all duration-300 text-blue-400 hover:bg-blue-300 hover:text-white font-medium shadow-lg"
                >
                  <span className="text-sm sm:text-md font-Ovo">
                    Git Repository
                  </span>
                  <MoveUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full sm:max-w-[600px]">
            <Carousel autoplay arrows infinite={false} effect="fade">
              {[
                assets.schooltask1,
                assets.web2image,
                assets.schooltask2,
                assets.schooltask3,
                assets.schooltask4,
              ].map((imgSrc, index) => (
                <div key={index} className="flex-1 flex justify-center">
                  <Image
                    alt={`School task Screenshot ${index + 1}`}
                    src={imgSrc}
                    width={630}
                    height={400}
                    className="rounded-xl border border-gray-300 shadow-lg w-full h-[200px] sm:h-[280px] md:h-[350px] "
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Second Project */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10">
          {/* Image Section */}
          <div className="w-full sm:max-w-[600px] ">
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
                    width={630}
                    height={400}
                    className="rounded-xl border border-gray-300 shadow-lg w-full h-[200px] sm:h-[280px] md:h-[350px] object-cover"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center space-y-3 sm:space-y-4 mt-6 md:mt-0 order-1 md:order-2">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-Ovo px-2 md:px-0">
              E-commerce App – Personal Project
            </h3>
            <div className="flex flex-col gap-3 sm:gap-5">
              <div className="text-justify space-y-2 px-2 md:px-0">
                <p className="font-Ovo text-sm sm:text-base text-gray-600 leading-relaxed">
                  Developed a fully functional e-commerce application with a
                  focus on user experience, security, and seamless backend
                  integration. Features include secure authentication, an admin
                  dashboard for product and order management, real-time order
                  tracking, and PayPal payment integration. Optimized
                  performance and implemented security best practices for a
                  smooth and reliable shopping experience.
                </p>
                <p className="font-Ovo text-sm sm:text-base text-gray-600 leading-relaxed">
                  Technologies: React + Vite, Node.js, Tailwind, Redux Thunk,
                  Express, MongoDB, React-Router, Axios, Ant Design.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center ">
                <a
                  href="https://e-commercev2.vercel.app/auth/login"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="group flex gap-1 border rounded-full px-4 sm:px-5 py-2 sm:py-[13px] border-blue-300 transition-all duration-300 text-blue-400 hover:bg-blue-300 hover:text-white font-medium shadow-lg"
                >
                  <span className="text-sm sm:text-md font-Ovo">
                    View Detail
                  </span>
                  <MoveUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </a>
                <a
                  href="https://github.com/MinhDuy0i0909090/E-commercev2"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="group flex gap-1 border rounded-full px-4 sm:px-5 py-2 sm:py-[13px] border-blue-300 transition-all duration-300 text-blue-400 hover:bg-blue-300 hover:text-white font-medium shadow-lg"
                >
                  <span className="text-sm sm:text-md font-Ovo">
                    Git Repository
                  </span>
                  <MoveUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Third Project */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-10">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left space-y-3 sm:space-y-4 mt-6 md:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-Ovo px-2 md:px-0">
              Traffic Sign Detection and Localization – Group Project
            </h3>
            <div className="flex flex-col gap-3 sm:gap-5">
              <div className="text-justify space-y-2 sm:space-y-3 px-2 md:px-0">
                <p className="font-Ovo text-sm sm:text-base text-gray-600 leading-relaxed">
                  Developed a real-time traffic sign detection application using
                  MobileNetV2 with TensorFlow and Gradio, achieving 99%
                  accuracy. Designed and implemented an intuitive web-based
                  interface for seamless interaction, enabling users to upload
                  or capture images for instant classification. Optimized the
                  model for efficiency and accuracy, ensuring real-time
                  performance. Integrated Bootstrap for a responsive and
                  user-friendly UI.
                </p>
                <p className="font-Ovo text-sm sm:text-base text-gray-600 leading-relaxed">
                  Technologies: Gradio, Bootstrap, HTML.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-5 justify-center ">
                <a
                  href="https://www.youtube.com/watch?v=FCVSZdNmYo4"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="group flex gap-1 border rounded-full px-4 sm:px-5 py-2 sm:py-[13px] border-blue-300 transition-all duration-300 text-blue-400 hover:bg-blue-300 hover:text-white font-medium shadow-lg"
                >
                  <span className="text-sm sm:text-md font-Ovo">
                    Demo Video
                  </span>
                  <MoveUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </a>
                <a
                  href="https://github.com/MinhDuy0i0909090/TrafficSignClassification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-1 border rounded-full px-4 sm:px-5 py-2 sm:py-[13px] border-blue-300 transition-all duration-300 text-blue-400 hover:bg-blue-300 hover:text-white font-medium shadow-lg"
                >
                  <span className="text-sm sm:text-md font-Ovo">
                    Git Repository
                  </span>
                  <MoveUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full sm:max-w-[600px] ">
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
                    width={630}
                    height={400}
                    className="rounded-xl border border-gray-300 shadow-lg w-full h-[200px] sm:h-[280px] md:h-[350px] object-cover"
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
