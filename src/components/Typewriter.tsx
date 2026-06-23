"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Software Engineer",
  "Web Developer",
  "Front-End Developer",
  "Full-Stack Developer",
  "UI/UX Designer"
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[40px] flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
