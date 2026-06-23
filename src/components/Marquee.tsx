"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "Software Engineer",
    "•",
    "Web Developer",
    "•",
    "POS Systems",
    "•",
    "Full Stack",
    "•",
    "UI/UX Design",
    "•",
    "React & Next.js",
    "•",
    "Backend Architecture",
    "•"
  ];

  // We duplicate the items to create a seamless infinite loop
  const loopItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-foreground/5 border-y border-foreground/10 py-6 overflow-hidden flex whitespace-nowrap relative">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
      <motion.div 
        className="flex w-max gap-8 md:gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {loopItems.map((item, index) => (
          <span 
            key={index} 
            className={`font-bold tracking-widest uppercase flex-shrink-0 ${
              item === "•" ? "text-primary/50 text-2xl" : "text-foreground/80 text-xl md:text-2xl"
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
