"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { GraduationCap, Calendar, CheckCircle2, Clock } from "lucide-react";
import { useRef } from "react";

const educationData = [
  {
    id: 1,
    title: "Diploma in Information Technology",
    institution: "Unknown",
    status: "Completed",
    isCompleted: true,
    skills: ["Programming Fundamentals", "Database Management", "Web Development", "Networking", "Software Concepts", "System Development"],
  },
  {
    id: 2,
    title: "English Qualification",
    institution: "Unknown",
    status: "Completed",
    isCompleted: true,
    skills: ["Professional Communication", "Writing Skills", "Speaking Skills", "Business Communication"],
  },
  {
    id: 3,
    title: "Higher National Diploma (HND) in Computing (Software Engineering)",
    institution: "London Metropolitan University (UK) via ESOFT UNI (ESU) Kandy, Sri Lanka",
    status: "Currently Pursuing",
    isCompleted: false,
    date: "Expected Completion: May 2027",
    description: "Focused on developing strong technical and practical expertise in software engineering, including software development methodologies, database systems, web technologies, system analysis and design, networking, project management, and enterprise application development. This program provides hands-on experience in building real-world software solutions while strengthening problem-solving and analytical skills.",
    skills: ["Software Engineering", "System Analysis & Design", "Web Development", "Database Management", "Programming & Algorithms", "Networking Fundamentals", "Project Management", "SDLC Methodologies"],
  },
  {
    id: 4,
    title: "Bachelor of Engineering (Honours) in Software Engineering (Top-Up)",
    institution: "London Metropolitan University (UK) via ESOFT UNI (ESU) Kandy, Sri Lanka",
    status: "Registered / Future Academic Pathway",
    isCompleted: false,
    date: "Expected Completion: December 2030",
    description: "Following the completion of the HND, this top-up degree pathway is designed to advance expertise in modern software engineering practices, software architecture, enterprise systems, cloud technologies, research methodologies, and large-scale application development.",
    skills: ["Advanced Software Engineering", "Software Architecture", "Enterprise Application Development", "Cloud Computing", "Artificial Intelligence & Emerging Technologies", "Research & Innovation", "Quality Assurance & Testing", "Professional Software Development Practices"],
  }
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="relative py-24 bg-background/50 overflow-hidden" id="education">
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            My academic journey and career goal: To become a highly skilled Software Engineer capable of designing, developing, and deploying scalable software solutions while contributing to innovative technology-driven projects worldwide.
          </p>
        </motion.div>

        <div ref={containerRef} className="space-y-12 relative ml-4 md:ml-0">
          {/* Static Background Line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-[1px] w-[2px] bg-foreground/5" />
          
          {/* Animated Scroll Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-[1px] w-[2px] bg-gradient-to-b from-primary via-accent to-primary z-0 shadow-[0_0_10px_rgba(157,78,221,0.8)]"
          />

          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-secondary text-foreground shadow-[0_0_15px_rgba(157,78,221,0.5)] z-10 mt-4 md:mt-0">
                <GraduationCap size={20} />
              </div>

              <div className="ml-20 md:ml-0 w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] glass p-6 md:p-8 rounded-2xl border border-foreground/5 hover:border-primary/50 transition-colors neon-box-glow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-xl text-foreground">{item.title}</h3>
                  <span className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${item.isCompleted ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-accent/10 text-accent border border-accent/20'}`}>
                    {item.isCompleted ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                    {item.status}
                  </span>
                </div>
                
                {item.institution !== "Unknown" && (
                  <p className="text-primary font-medium text-sm mb-3">
                     {item.institution}
                  </p>
                )}
                
                {item.date && (
                  <div className="flex items-center gap-2 text-foreground/60 text-sm mb-4">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                )}
                
                {item.description && (
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-foreground/5 text-foreground/80 px-3 py-1 rounded-full border border-foreground/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
