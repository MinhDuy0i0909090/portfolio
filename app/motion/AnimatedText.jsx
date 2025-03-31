// components/motion/AnimatedText.tsx
"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";


const AnimatedText = ({ text }) => {
  // Default to empty string if text is undefined or null
  const actualText = text || "";
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typewriter animation logic
  useEffect(() => {
    if (!actualText) return; // Avoid running the animation if there's no text

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + actualText[index]);
      index += 1;
      if (index === actualText.length) {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed by changing the interval (in ms)

    return () => clearInterval(interval);
  }, [actualText]);

  // Cursor blink logic
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev); // Toggle cursor visibility
    }, 500); // Adjust cursor blink speed (in ms)

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative inline-block">
      <motion.span
        key={displayedText} // Ensures animation when text updates
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
      </motion.span>
      {cursorVisible && (
        <motion.span
          className="absolute top-0 right-0"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "loop" }}
        >
          |
        </motion.span>
      )}
    </div>
  );
};

export default AnimatedText;
