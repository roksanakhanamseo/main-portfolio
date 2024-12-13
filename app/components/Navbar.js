"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const handleConnectLink = (link) => {
  window.open(link, "_blank");
};
const Navbar = () => {
  return (
    <div className="sm:h-20 h-14 left-8 select-none sm:left-16 fixed top-0 z-20 bg-[#111] backdrop-blur-xl bg-opacity-30 w-full">
      <div className="flex w-full  h-full mx-10 gap-6 items-center">
        <div className="flex gap-6 cursor-pointer select-none items-center ml-3 h-full ">
          <div
            onClick={() =>
              handleConnectLink("https://github.com/tanviranjum0/")
            }
            className="text-2xl select-none hover:text-green-300 text-white"
          >
            <FaGithub />
          </div>
          <div
            onClick={() =>
              handleConnectLink(
                "https://www.linkedin.com/in/tanvir-anjum-649288312/"
              )
            }
            className="text-2xl select-none hover:text-green-300 text-white"
          >
            <FaLinkedin />
          </div>
          <div
            onClick={() => handleConnectLink("https://react.dev/")}
            className="text-2xl select-none hover:text-green-300 text-white"
          >
            <FaReact />
          </div>
          <div
            onClick={() => handleConnectLink("https://x.com/AnjumTanvi87406")}
            className="text-2xl select-none hover:text-green-300 text-white"
          >
            <FaTwitterSquare />
          </div>
        </div>
      </div>
      <a
        href="/tanvir.pdf"
        target="_blank"
        className="rounded-2xl hidden sm:flex flex-end absolute sm:right-32 right-16 top-2 md:top-3  border-2  border-green-400 bg-green-400 px-3 py-1 sm:px-6 sm:py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
      >
        My Resume
      </a>
    </div>
  );
};

export default Navbar;
