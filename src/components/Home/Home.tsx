import React, { useEffect, useRef, useState } from "react";
import { DeveloperIllustration } from "../../images/DeveloperIllustration";
import { Skills } from "../Skills/Skills";
import "./Home.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { useIsInViewport } from "../../hooks/UseIsInViewPort";

export const Home = () => {
  const skillsRef = useRef(null);
  const homeRef = useRef(null);

  const [width, setWidth] = useState(window.innerWidth);

  // @ts-ignore
  const executeScroll = () => skillsRef.current!.scrollIntoView();
  const homeIsInViewport = useIsInViewport(homeRef);

  const openGithub = () => {
    window.open("https://github.com/DhanashreeSB", "_blank");
  };

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/dhanashree-bendarkar-789755170/",
      "_blank"
    );
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      if (!homeIsInViewport) {
        document.querySelector("#sticky")!.classList.add("sticky-nav");
        document
          .querySelector("#skills-section")!
          .classList.add("skills-section");
      }

      if (homeIsInViewport) {
        document.querySelector("#sticky")!.classList.remove("sticky-nav");
        document
          .querySelector("#skills-section")!
          .classList.remove("skills-section");
      }
    }
  });

  const update = (): void => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", update);
    return (): void => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div
        className="bg-violet200 px-10 pb-12 pt-16 home-section"
        id="main-section"
        ref={homeRef}
      >
        <div className="flex gap-4 items-center justify-around flex-wrap">
          <div className="font-semibold text-lg md:text-3xl self-center text-center">
            <p>Hi, I am Dhanashree Bendarkar.</p>
            <p className="pt-4 text-base md:text-xl">
              Software Engineer @Tata Consultancy Services
            </p>
            <div className="mt-6">
              <button
                className="py-2 bg-violet-700 w-fit rounded-lg text-white px-4 hover:bg-violet-900 text-xl"
                onClick={executeScroll}
              >
                View skills
              </button>
            </div>
            <div className="flex pt-16 gap-4 contact justify-center md:pb-10 xl:pb-0">
              <div
                className="text-black hover:text-blue-700 cursor-pointer"
                onClick={openGithub}
              >
                <BsGithub size={40} />
              </div>
              <div
                className="text-black hover:text-blue-700 cursor-pointer"
                onClick={openLinkedIn}
              >
                <BsLinkedin size={40} />
              </div>
            </div>
          </div>
          <DeveloperIllustration />
        </div>
      </div>
      <div id="skills-section">
        <div className="my-10 mx-6 md:mx-36 rounded-md" ref={skillsRef}>
          <Skills />
        </div>
      </div>
    </>
  );
};
