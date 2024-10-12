import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import { MdCloseFullscreen } from "react-icons/md";
import { handleProjectDetailsShow } from "../handlers/handlers";
const ProjectDetailsShow = ({ projects }) => {
  return (
    <div
      id={projects.name}
      className="hidden fixed backdrop-blur pt-20 w-full overflow-x-hidden overflow-y-scroll inset-0 z-50"
    >
      {" "}
      <div className="w-full mx-auto flex justify-center">
        <div
          onClick={() => handleProjectDetailsShow(projects.name)}
          className="absolute right-5 top-5 md:right-10 md:top-10  text-2xl mx-auto font-bold text-white hover:underline active:text-base transition-all duration-200 z-50"
        >
          <MdCloseFullscreen />
        </div>
        <div className="relative rounded-lg shrink-0 w-[80vw] md:w-[50vw] h-fit  z-50  text-green-50 bg-[#171616]">
          <div
            style={{
              backgroundImage: `url(${projects.img.src})`,
              backgroundSize: "cover",
              borderRadius: "10px",
              backgroundPosition: "center",
              height: "40vh",
              // width: "50vw",
              objectFit: "cover",
            }}
          ></div>
          <div className="p-10">
            <div className="text-4xl ">{projects.name}</div>
            <div className="flex pt-3">
              {projects.tags.map((tag, key) => {
                return (
                  <span
                    key={`${key} ${tag}`}
                    className="px-1 text-sm sm:text-base text-green-300 font-mono"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
            <div className="py-3 test-base">{projects.description}</div>
            <div className="text-2xl py-3 flex">
              Project Links <span className="text-green-300">.</span>
            </div>
            <div className="flex ">
              <div className="flex hover:underline cursor-pointer text-green-300">
                <div className="mt-1 pr-1">
                  <FaGithub />
                </div>
                <a href={projects.github} target="_black" className="">
                  Source Code
                </a>
              </div>
              <div className="flex text-green-300 cursor-pointer hover:underline ml-5">
                <div className="mt-1 text-xl pr-1">
                  <IoIosExit />
                </div>
                <a target="_blank" href={projects.link} className="">
                  {" "}
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsShow;
