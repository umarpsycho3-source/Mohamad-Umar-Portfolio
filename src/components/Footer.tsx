"use client";

import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "./Icons";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer className="border-t border-foreground/10 glass mt-auto">
      <div className="container max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 inline-block text-foreground">
              UMAR<span className="text-primary">.</span>
            </Link>
            <p className="text-foreground/60 max-w-sm mt-4">
              Building scalable, innovative, and premium web applications. Delivering top-tier full-stack business solutions globally.
            </p>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-foreground/60 hover:text-primary transition-colors">About Me</Link></li>
              <li><Link href="/skills" className="text-foreground/60 hover:text-primary transition-colors">Skills</Link></li>
              <li><Link href="/services" className="text-foreground/60 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-foreground/60 hover:text-primary transition-colors">Projects</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-6">Connect</h4>
            <div className="flex items-center gap-4">
              <a href="https://github.com/umarpsycho3-source" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-foreground/5 hover:bg-primary/20 flex items-center justify-center text-foreground hover:text-primary transition-colors border border-foreground/10" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mohamad-umar-suiiii7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-foreground/5 hover:bg-primary/20 flex items-center justify-center text-foreground hover:text-primary transition-colors border border-foreground/10" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://www.fiverr.com/s/wkRj6Yq" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-foreground/5 hover:bg-primary/20 flex items-center justify-center text-foreground hover:text-primary transition-colors border border-foreground/10 font-bold italic text-lg" aria-label="Fiverr">
                fi
              </a>
              <a href="mailto:umarxgamer04@gmail.com" className="w-10 h-10 rounded-xl bg-foreground/5 hover:bg-primary/20 flex items-center justify-center text-foreground hover:text-primary transition-colors border border-foreground/10" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-foreground/5 hover:bg-primary/20 flex items-center justify-center text-foreground hover:text-primary transition-colors border border-foreground/10" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Mohamad Umar. All rights reserved.</p>
          <button onClick={() => window.scrollTo(0,0)} className="mt-4 md:mt-0 hover:text-primary transition-colors">Back to Top ↑</button>
        </div>
      </div>
    </footer>
  );
}
