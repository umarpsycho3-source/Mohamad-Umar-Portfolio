"use client";

import { motion } from "framer-motion";

const skillsCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion", "Redux", "Zustand"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "PHP", "Laravel", "Python", "RESTful APIs", "GraphQL", "WebSockets"]
  },
  {
    title: "Database & Cloud",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase", "Prisma ORM", "AWS", "Vercel"]
  },
  {
    title: "Tools, Design & Architecture",
    skills: ["Git", "GitHub", "Docker", "Figma", "UI/UX Design", "Postman", "Jest", "Agile/Scrum", "System Design", "Microservices"]
  }
];

export default function Skills() {
  return (
    <section className="relative py-24 overflow-hidden" id="skills">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border border-foreground/5 hover:border-primary/50 transition-all hover:-translate-y-2 group"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground text-center border-b border-foreground/10 pb-4 group-hover:border-primary/30 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-foreground/5 text-foreground/80 border border-foreground/10 hover:bg-primary/20 hover:text-foreground hover:border-primary/50 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
