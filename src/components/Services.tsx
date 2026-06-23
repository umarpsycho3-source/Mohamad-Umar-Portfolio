"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Code2, Database, LayoutTemplate, Smartphone, LineChart } from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Full-Stack Web Development",
    description: "Building responsive, high-performance web applications from scratch using modern frameworks like React, Next.js, and Node.js."
  },
  {
    icon: LayoutTemplate,
    title: "UI/UX Design Implementation",
    description: "Translating Figma designs into pixel-perfect, interactive, and accessible frontend interfaces with smooth animations."
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description: "Designing robust server-side architectures, RESTful APIs, and database structures using Node.js, Express, and SQL/NoSQL databases."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Ensuring your website looks and functions perfectly across all devices, prioritizing mobile experiences."
  },
  {
    icon: Code2,
    title: "Code Refactoring & Optimization",
    description: "Improving existing codebases for better performance, readability, and scalability while fixing complex bugs."
  },
  {
    icon: LineChart,
    title: "SEO & Performance Tuning",
    description: "Optimizing web applications for search engines and blazing fast load times using server-side rendering and best practices."
  }
];

export default function Services() {
  return (
    <section className="relative py-12 overflow-hidden" id="services">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            I offer a comprehensive range of development services tailored to build, scale, and optimize your digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border border-foreground/5 hover:border-primary/50 transition-all group neon-box-glow hover:-translate-y-2 bg-background/50"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
