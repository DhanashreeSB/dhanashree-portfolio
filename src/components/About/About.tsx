import React, { useEffect, useMemo } from "react";
import Typer from "../../shared/Typer/Typer";
import "./About.css";

export const About = () => {
  // const [aboutIndex, setAboutIndex] = useState(0);
  // const [content, setContent] = useState(<></>);
  const aboutMe = useMemo(() => {
    return [
      "Hello!",
      "My name is Dhanashree Bendarkar.",
      `I'm currently working in TATA CONSULTANCY SERVICES as software engineer.`,
      "My key responsibility include frontend development. I've also worked on NodeJS and some Azure cloud services",
    ];
  }, []);

  //   let content = <></>;

  // const handleTyping = () => {
  //   setAboutIndex((i) => i + 1);
  //   setContent((prev) => (
  //     <>
  //       {aboutMe.slice(0, aboutIndex).map((aboutText, i) => {
  //         return (
  //           <div id="about0" className="lsp pt-4" key={i}>
  //             <p>&gt; {aboutText}</p>
  //           </div>
  //         );
  //       })}
  //       <div className="lsp pt-4">
  //         <p className="flex">
  //           <span className="pr-2">&gt;</span>{" "}
  //           <Typer dataText={[aboutMe[aboutIndex]]} />
  //         </p>
  //       </div>
  //     </>
  //   ));
  //   // setText(fullText.substring(0, text.length + 1));
  //   // if (text === fullText) {
  //   //   setTimeout(() => setIsDeleting(true), 500);
  //   // } else if (isDeleting && text === "") {
  //   // setLoop(loop + 1);
  //   // }
  // };

  useEffect(() => {
    // let timer: any;

    // aboutMe.forEach((info, index) => {
    //   let i = 0;
    //   let speed = 100;
    //   //   let node = document.createElement('div');
    //   //   node.id = `about${index}`;
    //   //   node.textContent = '&gt; '
    //   //   document.getElementById('about').appendChild(node)

    //   async function typeWriter() {
    //     if (i < info.length) {
    //       document.getElementById(`about${index}`)!.innerHTML += info.charAt(i);
    //       i++;
    //       timer = await setTimeout(typeWriter, speed);
    //     }
    //   }

    //   if (index > 0) {
    //     setTimeout(() => {
    //       typeWriter();
    //     }, aboutMe[index - 1].split('').length * 100);
    //   } else {
    //     typeWriter();
    //   }
    // });

    // if(aboutIndex === 0) {
    //   timer = setTimeout(() => {
    //     handleTyping();
    //   }, 100);
    // } else if (aboutIndex <= 4) {
    //   // let speed = aboutIndex === 0 ? 1 : aboutMe[aboutIndex - 1].length;
    //   let speed = aboutMe[aboutIndex-1].length
    //   timer = setTimeout(() => {
    //     handleTyping();
    //   }, 150 * speed);
    // }

    // return () => clearTimeout(timer);
  });

  return (
    <div className="px-10 mt-24">
      <div className="flex px-6 content-center">
        <div className="text-2xl font-semibold text-center">About me</div>
        <div className="flex ml-auto">
          {/* <button className="bg-violet-700 w-fit rounded-xl text-white px-4 hover:bg-violet-900 text-xl py-4 ">
            Academics
          </button> */}
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
        <div className="lsp pt-4">
          <p className="flex">
            <span className="pr-2">&gt;</span>{" "}
            <Typer dataText={[aboutMe[0]]} />
          </p>
        </div>
        <div className="lsp pt-4">
          <p className="flex">
            <span className="pr-2">&gt;</span>{" "}
            <Typer dataText={[aboutMe[1]]} />
          </p>
        </div>
        <div className="lsp pt-4">
          <p className="flex">
            <span className="pr-2">&gt;</span>{" "}
            <Typer dataText={[aboutMe[2]]} />
          </p>
        </div>
        <div className="lsp pt-4">
          <p className="flex">
            <span className="pr-2">&gt;</span>{" "}
            <Typer dataText={[aboutMe[3]]} />
          </p>
        </div>
        {/* <div className="lsp pt-4">
          <p className="flex">
            <span className="pr-2">&gt;</span>{" "}
            <Typer dataText={[aboutMe[4]]} />
          </p>
        </div> */}
        {/* <div id="input" className="lsp pt-4">
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
        </div> */}
        {/* <div id="demo" className="demo"></div> */}
      </div>
    </div>
  );
};
