"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { assets } from "../../public/assets/assets";
import { AlignRight, Moon, MoveUpRight } from "lucide-react";
import { Drawer } from "antd";

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);


  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-20 translate-y-[-65%]">
        <Image alt="bg-navbar" src={assets.header_bg} />
      </div>
      <nav
        className={`w-full fixed px-10 lg:px-8 xl:px-[8%]  flex items-center justify-between ${
          isScroll ? " bg-opacity-50 backdrop-blur-md bg-white " : ""
        } z-50 `}
      >
        <a href="">
          <Image
            alt="Logo"
            src={assets.logo}
            className="w-24 cursor-pointer mr-14"
          />
        </a>
        <ul
          className={`hidden md:flex items-center  justify-center gap-6 lg:gap-8 py-3 px-12 
       border-gray-300   ml-9  ${
         isScroll ? "" : "shadow-md bg-opacity-50 rounded-full bg-white  "
       }`}
        >
          <li>
            <a href="#top" className="font-Ovo hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me" className="font-Ovo hover:text-blue-300">
              Introduction
            </a>
          </li>
          <li>
            <a href="#skill" className="font-Ovo hover:text-blue-300">
              Skill
            </a>
          </li>
          <li>
            <a href="#experience" className="font-Ovo hover:text-blue-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#project" className="font-Ovo hover:text-blue-300">
              Project
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          {/* <button>
            <Moon size={28} strokeWidth={1} />
          </button> */}
          <a
            href="https://www.linkedin.com/in/nldm/"
            className={`hidden md:flex items-center gap-3 px-7 py-2.5 ml-4  border border-gray-500 rounded-full `}
          >
            <span className="font-Ovo">Connect</span> <MoveUpRight size={17} />
          </a>
          <button onClick={showDrawer} className="block md:hidden ml-4">
            <AlignRight size={28} strokeWidth={1} />
          </button>
        </div>
      </nav>

      <Drawer onClose={onClose} open={open}>
        <ul className="flex flex-col gap-6 py-7 px-7 ">
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#top" className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#top" className="font-Ovo">
              Service
            </a>
          </li>
          <li>
            <a href="#top" className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#top" className="font-Ovo">
              Contact Me{" "}
            </a>
          </li>
        </ul>
      </Drawer>
    </>
  );
}

export default Navbar;
