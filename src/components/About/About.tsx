import React, { useEffect, useMemo } from "react";
import "./About.css";

export const About = () => {
  const aboutMe = useMemo(() => {
    return [
      "Hello!",
      "My name is Dhanashree Bendarkar.",
      `I'm currently working in TATA CONSULTANCY SERVICES as software engineer.`,
      "My key responsibility include frontend development",
      `I've also worked on NodeJS and some Azure cloud services`,
    ];
  }, []);

  //   let content = <></>;

  useEffect(() => {
    let timer: any;

    aboutMe.forEach((info, index) => {
      console.log(info);
      let i = 0;
      let speed = 100;
      //   let node = document.createElement('div');
      //   node.id = `about${index}`;
      //   node.textContent = '&gt; '
      //   document.getElementById('about').appendChild(node)

      console.log(info);
      console.log(index);
      async function typeWriter() {
        if (i < info.length) {
          document.getElementById(`about${index}`)!.innerHTML += info.charAt(i);
          i++;
          timer = await setTimeout(typeWriter, speed);
        }
      }

      if (index > 0) {
        setTimeout(() => {
          typeWriter();
        }, aboutMe[index - 1].split('').length * 100);
      } else {
        typeWriter();
      }
    });

    return () => clearTimeout(timer);
  }, [aboutMe]);

  return (
    <div className="px-10 mt-4">
      <div className="flex px-6 content-center">
        <div className="text-2xl font-semibold self-center">About me</div>
        <div className="flex ml-auto">
          <button className="bg-violet-700 w-fit rounded-xl text-white px-4 hover:bg-violet-900 text-xl py-4 ">
            Academics
          </button>
          {/* <button className="bg-violet-700 w-fit rounded-full text-white px-4 hover:bg-violet-900 text-xl">
            Achievements
          </button> */}
        </div>
      </div>
      <div
        className="bg-black200 text-white font-normal text-lg p-4 rounded-md mx-6 h-screen text-left flex flex-col gap-4 about mt-8"
        id="about"
      >
        {/* {content} */}
        <div id="about0" className="lsp pt-4">
          &gt;{" "}
        </div>
        <div id="about1" className="lsp pt-4" style={{ animationDelay: "5s" }}>
          &gt;{" "}
        </div>
        <div id="about2" className="lsp pt-4">
          &gt;{" "}
        </div>
        <div id="about3" className="lsp pt-4">
          &gt;{" "}
        </div>
        <div id="about4" className="lsp pt-4">
          &gt;{" "}
        </div>
        {/* <div id="demo" className="demo"></div> */}
      </div>
    </div>
  );
};
