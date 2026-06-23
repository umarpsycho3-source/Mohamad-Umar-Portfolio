"use client";

import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import Image from "next/image";
import { Download, Briefcase, Code, Terminal, Monitor, Smartphone, Database, ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  const floatingIcons = [
    { Icon: Terminal, delay: 0, x: -280, y: -180 },
    { Icon: Code, delay: 1, x: 280, y: -100 },
    { Icon: Monitor, delay: 2, x: -260, y: 160 },
    { Icon: Database, delay: 3, x: 280, y: 180 },
    { Icon: Smartphone, delay: 4, x: -20, y: -290 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24 md:pb-0">
      {/* Background Animated Particles/Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 max-w-4xl mx-auto"
        >


          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass border border-foreground/5 text-sm"
          >
            <span className="text-primary font-semibold tracking-wider">SOFTWARE ENGINEER & WEB DEVELOPER</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent neon-text-glow">
              Mohamad Umar
            </span>
          </h1>

          <p className="text-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Crafting premium, high-performance web applications with a focus on seamless user experiences, scalable backend architectures, and modern UI/UX design. Transforming complex ideas into elegant digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a href="/projects" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:scale-105 transition-transform neon-box-glow flex items-center gap-2">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="/Umar_CV.pdf" download="Mohamad_Umar_CV.pdf" className="px-8 py-4 rounded-full glass border border-foreground/10 text-foreground font-bold text-lg hover:bg-foreground/5 transition-colors flex items-center gap-2">
              Download CV <FileText size={20} />
            </a>
          </div>
        </motion.div>



        {/* Right Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative flex justify-center items-center mt-12 md:mt-0 mb-12 md:mb-0"
        >
          {/* Profile Image Container */}
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full p-2 bg-gradient-to-tr from-primary via-accent to-secondary animate-spin-slow neon-box-glow">
            <div className="w-full h-full rounded-full overflow-hidden bg-background border-4 border-background relative">
              <img 
                src="/profile.png" 
                alt="Mohamad Umar" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Floating Icons */}
          {floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              className="absolute glass p-4 rounded-full border border-primary/20 text-primary hidden md:flex"
              initial={{ x: item.x, y: item.y, opacity: 0 }}
              animate={{ 
                x: item.x, 
                y: [item.y - 15, item.y + 15, item.y - 15],
                opacity: 1
              }}
              transition={{ 
                opacity: { duration: 1, delay: item.delay * 0.2 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay * 0.5 } 
              }}
            >
              <item.Icon size={24} />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}

function SocialLink({ href, label, icon: Icon }: { href: string, label: string, icon: any }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={label}
      className="text-foreground/60 hover:text-accent transition-colors hover:scale-110 transform"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}

// Inline SVGs for brand icons (Lucide doesn't include brands)
const GitHubIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

const LinkedInIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

const FiverrIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22 6.6v10.8c0 2.5-2 4.6-4.5 4.6h-11c-2.5 0-4.5-2.1-4.5-4.6v-10.8c0-2.5 2-4.6 4.5-4.6h11c2.5 0 4.5 2.1 4.5 4.6zm-14.8 6.7v3.5h2.1v-3.5h1.9v-2.1h-1.9v-1.1c0-.4.3-.7.7-.7h1.2v-2h-1.6c-1.5 0-2.4.9-2.4 2.5v1.3h-1.1v2.1h1.1zm9.6-1.5c-1 0-1.9.5-2.4 1.3v-1.2h-2v6.6h2.1v-3.4c0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3v3.4h2.1v-3.4c0-1.8-1.5-3.3-3.4-3.3zM14 5.2c0-.6-.5-1.1-1.1-1.1s-1.1.5-1.1 1.1.5 1.1 1.1 1.1 1.1-.5 1.1-1.1z"/></svg>
);

const WhatsAppIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.031 0C5.405 0 .012 5.394.012 12.02c0 2.124.553 4.195 1.603 6.012L.037 24l6.115-1.603c1.761.966 3.758 1.478 5.879 1.478 6.626 0 12.019-5.394 12.019-12.021C24.05 5.394 18.657 0 12.031 0zm0 21.84c-1.785 0-3.53-.478-5.064-1.385l-.362-.214-3.766.986.997-3.668-.235-.373c-1.002-1.59-1.53-3.435-1.53-5.341 0-5.503 4.478-9.98 9.98-9.98 5.502 0 9.981 4.477 9.981 9.98 0 5.503-4.479 9.981-9.981 9.981zm5.474-7.464c-.3-.15-1.776-.876-2.052-.977-.276-.101-.476-.15-.676.15-.2.301-.776.977-.951 1.178-.176.201-.351.226-.651.076-1.59-.796-2.73-1.424-3.782-3.21-.202-.341.225-.32.812-1.478.1-.199.05-.375-.025-.526-.075-.15-.676-1.628-.926-2.228-.244-.585-.492-.505-.676-.514-.175-.01-.375-.011-.575-.011-.2 0-.526.075-.801.376-.276.301-1.052 1.026-1.052 2.503 0 1.478 1.076 2.906 1.226 3.106.15.201 2.115 3.23 5.12 4.526 2.016.872 2.766.974 3.738.824.935-.144 2.052-.838 2.34-1.648.288-.811.288-1.503.202-1.648-.088-.145-.313-.22-.613-.37z"/></svg>
);

const MailIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
