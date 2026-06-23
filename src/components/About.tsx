"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-12 overflow-hidden" id="about">
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">About Me</h1>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Image Container & Highlights (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 w-full flex flex-col gap-8"
          >
            <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden glass p-2 border border-primary/20 neon-box-glow">
              <div className="w-full h-full rounded-xl overflow-hidden bg-background">
                 <img 
                  src="/profile.png" 
                  alt="Mohamad Umar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Quick Highlights */}
            <div className="glass p-6 rounded-2xl border border-foreground/5 bg-background/50">
              <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                Quick Highlights
              </h3>
              <ul className="grid grid-cols-1 gap-3 text-sm text-foreground/70">
                <li className="flex items-center gap-2"><span>🎓</span> Software Engineering Undergraduate</li>
                <li className="flex items-center gap-2"><span>💻</span> Full-Stack Web Developer</li>
                <li className="flex items-center gap-2"><span>🎨</span> UI/UX Designer</li>
                <li className="flex items-center gap-2"><span>🚀</span> Freelance Developer on Fiverr</li>
                <li className="flex items-center gap-2"><span>🌐</span> Responsive Website Specialist</li>
                <li className="flex items-center gap-2"><span>⚡</span> Modern Web Application Developer</li>
                <li className="flex items-center gap-2"><span>🛒</span> POS & Business Management System Developer</li>
                <li className="flex items-center gap-2"><span>📱</span> Mobile-Friendly Design Expert</li>
                <li className="flex items-center gap-2"><span>🔧</span> Problem Solver & Continuous Learner</li>
                <li className="flex items-center gap-2"><span>🎯</span> Focused on Building Scalable Digital Solutions</li>
              </ul>
            </div>
          </motion.div>

          {/* Text Container (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-7 flex flex-col justify-start h-full space-y-8"
          >
            <div className="space-y-6 text-foreground/80 leading-relaxed text-[15px] md:text-base">
              <p>
                I am a passionate and ambitious <strong className="text-primary">Software Engineering Undergraduate</strong> with a strong focus on Full-Stack Web Development, Software Engineering, and UI/UX Design. I enjoy transforming ideas into modern, user-friendly, and scalable digital solutions that deliver real value to businesses and individuals.
              </p>
              <p>
                Currently pursuing a Higher National Diploma (HND) in Computing (Software Engineering) and progressing toward a BEng (Hons) in Software Engineering, I continuously enhance my technical knowledge through academic learning, freelance projects, and hands-on software development experience.
              </p>
              <p>
                My expertise includes designing and developing responsive websites, web applications, POS systems, booking platforms, management systems, and business solutions using modern technologies such as <strong className="text-accent">HTML, CSS, JavaScript, React, Next.js, PHP, Laravel, MySQL, and Tailwind CSS</strong>. I am passionate about creating clean, efficient, and maintainable code while ensuring exceptional user experiences through modern UI/UX principles.
              </p>
              <p>
                As a freelance developer on Fiverr, I have worked on various projects for clients and personal ventures, helping businesses establish a strong online presence through professional websites and custom web applications. My development approach combines creativity, problem-solving, and attention to detail to deliver high-quality solutions that meet both user and business requirements.
              </p>
              <p>
                I am committed to continuous learning, staying updated with emerging technologies, and improving my skills in software architecture, cloud technologies, and modern development practices. My goal is to build innovative software solutions that make a meaningful impact while growing into a highly skilled Software Engineer and technology professional.
              </p>
            </div>

            {/* Personal Motto */}
            <div className="border-l-4 border-primary pl-6 py-2 italic text-foreground/70 bg-gradient-to-r from-primary/10 to-transparent rounded-r-lg mt-8 text-lg">
              "I believe great software is built through creativity, continuous learning, and a commitment to solving real-world problems with innovative technology."
            </div>
          </motion.div>
        </div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Experience</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          </div>

          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="glass p-8 rounded-2xl border border-foreground/5 neon-box-glow bg-background/50 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Software Engineering Student & Academic Project Developer</h3>
                  <p className="text-lg text-primary font-medium mt-1">ESOFT UNI KANDY</p>
                </div>
                <div className="mt-2 md:mt-0 glass px-4 py-1.5 rounded-full border border-foreground/10 text-sm font-semibold h-fit w-fit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  2025 – Present
                </div>
              </div>
              <p className="text-foreground/80 mb-6 text-sm md:text-base leading-relaxed">
                As a Software Engineering undergraduate, actively engaged in designing and developing practical software solutions through academic coursework and self-driven projects. Gained hands-on experience in the complete software development lifecycle, from requirements analysis and system design to implementation, testing, and deployment.
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-3">Key Responsibilities & Achievements</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 text-sm">
                  <li>Developed full-stack web applications using modern development frameworks and technologies.</li>
                  <li>Designed and implemented POS (Point of Sale) systems for inventory and sales management.</li>
                  <li>Created restaurant management platforms with online ordering and reservation features.</li>
                  <li>Built booking and appointment management systems for service-based businesses.</li>
                  <li>Applied Software Development Life Cycle (SDLC) methodologies in project development.</li>
                  <li>Designed relational database structures and optimized data management processes.</li>
                  <li>Conducted system analysis and requirement gathering for software solutions.</li>
                  <li>Developed responsive user interfaces focused on accessibility and user experience.</li>
                  <li>Collaborated on academic projects while following professional software engineering practices.</li>
                  <li>Enhanced problem-solving, debugging, and software testing skills through practical implementation.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-3">Technologies Applied</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS3", "JavaScript", "PHP", "Laravel", "MySQL", "Bootstrap", "Tailwind CSS", "Git & GitHub"].map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-foreground/5 border border-foreground/10 text-foreground/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="glass p-8 rounded-2xl border border-foreground/5 neon-box-glow bg-background/50 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Freelance Full-Stack Web Developer</h3>
                  <p className="text-lg text-accent font-medium mt-1">Fiverr</p>
                </div>
                <div className="mt-2 md:mt-0 glass px-4 py-1.5 rounded-full border border-foreground/10 text-sm font-semibold h-fit w-fit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  2025 – Present
                </div>
              </div>
              <p className="text-foreground/80 mb-6 text-sm md:text-base leading-relaxed">
                Providing professional freelance web development services to clients by creating modern, responsive, and business-oriented web solutions. Focused on delivering high-quality websites and custom web applications that help businesses establish a strong online presence and improve operational efficiency.
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-3">Key Responsibilities & Achievements</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 text-sm">
                  <li>Designed and developed custom business websites and portfolio platforms.</li>
                  <li>Built responsive web applications optimized for desktop, tablet, and mobile devices.</li>
                  <li>Developed POS systems and business management solutions tailored to client requirements.</li>
                  <li>Created booking and reservation systems for service-based businesses.</li>
                  <li>Designed intuitive and engaging UI/UX interfaces to improve customer engagement.</li>
                  <li>Integrated databases and backend systems for secure and efficient data management.</li>
                  <li>Implemented modern design trends, animations, and interactive user experiences.</li>
                  <li>Collaborated with clients throughout the development process to ensure project success.</li>
                  <li>Delivered projects on time while maintaining high standards of code quality and performance.</li>
                  <li>Provided ongoing website maintenance, updates, and technical support.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "PHP", "Laravel", "MySQL", "PostgreSQL", "Tailwind CSS", "Bootstrap", "Git & GitHub"].map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-foreground/5 border border-foreground/10 text-foreground/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>

        {/* Professional Objective Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 glass p-8 md:p-12 rounded-3xl border border-primary/20 neon-box-glow text-center bg-gradient-to-b from-background/50 to-primary/5"
        >
          <h2 className="text-3xl font-bold mb-6 text-foreground">Professional Objective</h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-4xl mx-auto">
            To build a successful career as a Software Engineer and Full-Stack Web Developer, specializing in the development of scalable web applications, enterprise solutions, and innovative digital products while continuously expanding technical expertise and contributing to impactful technology-driven projects.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
