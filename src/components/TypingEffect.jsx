import { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <h2>{displayText}</h2>;
};

export default TypingEffect;
