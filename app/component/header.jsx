import React from "react";
import Image from "next/image";
import { Github, Facebook, Linkedin, Download } from "lucide-react";
import { assets } from "../../public/assets/assets"; // Đường dẫn đúng

function Header() {
  return (
    <div className="w-full max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-5 mt-5">
      {/* Avatar */}
      <Image
        src={assets.avar}
        alt="Avatar"
        className="rounded-full shadow-lg w-32 "
      />
      {/* Name & Job Title */}
      <h1 className="text-2xl  px-4 py-1 font-Ovo ">
        Hi! I'm Nguyen Le Duy Minh
      </h1>
      <h2 className="text-3xl sm:text-6xl lg:text-[60px]  font-semibold  font-Ovo">
        Frontend Developer
      </h2>
      <div className="flex gap-8 mt-4">
        <a
          href="https://github.com/MinhDuy0i0909090"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-400 border-2 border-gray-300 w-10 h-10 shadow-md flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 transform hover:scale-110"
        >
          <Github size={25} />
        </a>
        <a
          href="https://www.facebook.com/DuMin0908/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-400 border-2 border-gray-300 w-10 h-10 shadow-md flex items-center justify-center rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transform hover:scale-110"
        >
          <Facebook size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/nldm/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-400 border-2 border-gray-300 w-10 h-10 shadow-md flex items-center justify-center rounded-full transition-all duration-300 hover:bg-blue-900 hover:text-white hover:border-blue-900 transform hover:scale-110"
        >
          <Linkedin size={23} className="ml-[0.12rem]" />
        </a>
      </div>{" "}
      <a
        href="/NguyenLeDuyMinh-SE.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 border rounded-full px-10 py-4  bg-gradient-to-l from-blue-200 to-blue-300  transition-all duration-700 text-white font-medium shadow-lg"
      >
        <span className="text-md font-Ovo">Download CV</span>
        <Download size={20} color="#ffffff" />
      </a>
    </div>
  );
}

export default Header;
