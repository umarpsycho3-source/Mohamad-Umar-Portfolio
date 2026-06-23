"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const hardcodedProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with Next.js, Tailwind CSS, Stripe integration, and a custom CMS for inventory management.",
    image_url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    live_url: "#",
    github_url: "#"
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "An analytics dashboard for SaaS businesses, featuring real-time data visualization, user management, and subscription tracking.",
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind", "Firebase"],
    live_url: "#",
    github_url: "#"
  },
  {
    title: "AI Content Generator",
    description: "A web application that leverages OpenAI API to generate marketing copy, blog posts, and social media content automatically.",
    image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["Next.js", "OpenAI API", "PostgreSQL"],
    live_url: "#",
    github_url: "#"
  }
];

export default function Projects() {
  const [projects, setProjects] = useState<any[]>(hardcodedProjects);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (data && data.length > 0) {
        setProjects(data);
      }
      setLoading(false);
    }
    fetchProjects();
  }, [supabase]);

  return (
    <section className="relative py-12 overflow-hidden" id="projects">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            A comprehensive look at my portfolio of work, ranging from full-stack applications to dynamic frontend interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-foreground/5 hover:border-primary/50 neon-box-glow bg-background/50 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10" />
                <img 
                  src={project.image_url || "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-foreground/60 text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags?.map((tag: string) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-foreground/5 border border-foreground/10 text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 border-t border-foreground/10 pt-4 mt-auto">
                  {project.github_url && (
                    <a href={project.github_url} className="text-foreground/60 hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
                      <GithubIcon size={16} /> Code
                    </a>
                  )}
                  {project.live_url && (
                    <a href={project.live_url} className="text-foreground/60 hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
