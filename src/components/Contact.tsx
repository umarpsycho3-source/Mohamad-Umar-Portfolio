"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { useForm } from "react-hook-form";

import { createClient } from "@/utils/supabase/client";
import toast from "react-hot-toast";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const supabase = createClient();

  const onSubmit = async (data: any) => {
    try {
      const { error } = await supabase.from('messages').insert([
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message
        }
      ]);

      if (error) throw error;
      
      toast.success("Message sent successfully! I'll get back to you soon.", {
        style: { background: '#111', color: '#fff', border: '1px solid #333' }
      });
      reset();
    } catch (error: any) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="relative py-12 overflow-hidden" id="contact">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Have a project in mind or looking to collaborate? Feel free to reach out. I'm currently available for freelance work and full-time opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass p-8 rounded-2xl border border-foreground/5 neon-box-glow bg-background/50 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <p className="text-foreground/60 mb-8 leading-relaxed">
                Fill out the form and I will get back to you within 24 hours. You can also reach me directly via email or social media.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-1">Email</h4>
                    <a href="mailto:umarxgamer04@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium">umarxgamer04@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-foreground font-medium">Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-foreground/10">
                <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/umarpsycho3-source" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-foreground/5 hover:bg-primary/20 flex items-center justify-center text-foreground hover:text-primary transition-colors border border-foreground/10">
                    <GithubIcon size={22} />
                  </a>
                  <a href="https://www.linkedin.com/in/mohamad-umar-suiiii7" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-foreground/5 hover:bg-primary/20 flex items-center justify-center text-foreground hover:text-primary transition-colors border border-foreground/10">
                    <LinkedinIcon size={22} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass p-8 rounded-2xl border border-foreground/5 neon-box-glow bg-background/50 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Your Name</label>
                  <input 
                    id="name"
                    type="text" 
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message as string}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Your Email</label>
                  <input 
                    id="email"
                    type="email" 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" }
                    })}
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message as string}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                <input 
                  id="subject"
                  type="text" 
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message as string}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <textarea 
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows={6}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message as string}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
