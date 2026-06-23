"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ExternalLink } from "lucide-react";
import { FiverrIcon } from "./Icons";

export default function Hire() {
  const fiverrGigs = [
    {
      title: "I will build a custom responsive full stack web application",
      price: "From $100",
      rating: "5.0",
      reviews: "12",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
      link: "https://www.fiverr.com/s/wkRj6Yq"
    },
    {
      title: "I will develop a modern business portfolio website with React",
      price: "From $50",
      rating: "5.0",
      reviews: "8",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      link: "https://www.fiverr.com/s/wkRj6Yq"
    },
    {
      title: "I will create a powerful POS or booking management system",
      price: "From $150",
      rating: "4.9",
      reviews: "5",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      link: "https://www.fiverr.com/s/wkRj6Yq"
    }
  ];

  return (
    <section className="relative py-24 min-h-screen overflow-hidden" id="hire">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
            Available for freelance opportunities. Choose a specialized service through Fiverr or request a custom tailored solution.
          </p>
        </motion.div>

        {/* Custom Inquiry CTA (From Screenshot) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="w-full max-w-4xl mx-auto rounded-3xl p-8 md:p-12 text-center relative overflow-hidden" style={{ background: "linear-gradient(145deg, #0f111a, #0b0c13)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Looking for a Customized Tech Solution?</h2>
            <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Need custom features, custom databases, or specialized system flows? Send me a custom inquiry and I will build a tailored solution specifically for your business workflow.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-lg hover:scale-105 transition-transform"
              style={{ background: "linear-gradient(to right, #9d4edd, #f72585)", boxShadow: "0 10px 30px -10px rgba(247,37,133,0.5)" }}
            >
              Request Custom Quote <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

        {/* Fiverr Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#1dbf73]/10 flex items-center justify-center text-[#1dbf73]">
                <FiverrIcon size={24} />
              </span>
              My Fiverr Gigs
            </h3>
            <a href="https://www.fiverr.com/s/wkRj6Yq" target="_blank" rel="noopener noreferrer" className="text-[#1dbf73] font-medium hover:underline flex items-center gap-1">
              View Profile <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiverrGigs.map((gig, index) => (
              <a 
                href={gig.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={index}
                className="group glass rounded-2xl overflow-hidden border border-foreground/5 hover:border-[#1dbf73]/50 transition-all hover:-translate-y-2 flex flex-col bg-background/50"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#1dbf73]/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10" />
                  <img 
                    src={gig.image} 
                    alt={gig.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-lg font-semibold mb-4 text-foreground group-hover:text-[#1dbf73] transition-colors leading-snug">
                    {gig.title}
                  </h4>
                  <div className="flex items-center gap-1 mb-6 text-yellow-500 font-bold">
                    <Star size={16} fill="currentColor" />
                    <span>{gig.rating}</span>
                    <span className="text-foreground/40 font-normal ml-1">({gig.reviews})</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-foreground/10 pt-4">
                    <span className="text-sm text-foreground/60 font-medium">Starting at</span>
                    <span className="font-bold text-lg text-foreground">{gig.price}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
