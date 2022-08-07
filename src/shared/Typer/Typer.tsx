import React, { useState, useEffect } from "react";

const Typer = ({ dataText }: TyperProps) => {
  const [text, setText] = useState("");
  const [loop, setLoop] = useState(0);

  const i: number = loop % dataText.length;
  const fullText: string = dataText[i];

  const handleTyping = () => {
    setText(fullText.substring(0, loop));
    // if (text === fullText) {
    //   setTimeout(() => setIsDeleting(true), 500);
    // } else if (isDeleting && text === "") {
    setLoop(loop + 1);
    // }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, 150);
    return () => clearTimeout(timer);
  });

  return (
    <span>
      {text}
    </span>
  );
};

interface TyperProps {
  dataText: string[];
}

export default Typer;
