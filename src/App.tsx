/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Layers,
  ChevronRight,
  Menu,
  X,
  Award,
  Leaf
} from 'lucide-react';

const PROJECTS = [
  {
    title: "Assistive Robotics",
    description: "Utilizing open source robotics software to create custom AI models in budget-friendly systems for movement impaired individuals.",
    tech: ["Python", "AI", "LeRobot"],
    image: "lerobot.png",
    link: "#",
    github: "#"
  },
  {
    title: "Data Science Analytics",
    description: "Deploying isolated environments to analyze student created programs safely.",
    tech: ["Kubernetes", "Docker", "Bash"],
    image: "datascience.png",
    link: "#",
    github: "#"
  },
  {
    title: "Web Development",
    description: "Multi-Course instruction on web development and user interface design with an emphasis on natural path-planning and user satisfaction.",
    tech: ["Javascript", "Angular", "React", "Three.js"],
    image: "webdev.png",
    link: "#",
    github: "#"
  }
];

const SKILLS = [
  { category: "Languages", items: ["Javascript", "Python", "C(#/++)", "Java", "RISC-V"] },
  { category: "Frontend", items: ["React", "Angular", "Three.js", "BootStrap"] },
  { category: "Backend", items: ["Node.js", "Google Cloud", "PostgreSQL", "Redis"] },
  { category: "Tools", items: ["Docker", "Git", "Linux", "Kubernetes"] }
];

const LOGOS = [
  { src: "easyjs.png", alt: "EasyJS", invert: true, link: "https://egauon.github.io/easyjs/index.html" },
  { src: "mouseplus.png", alt: "MOUSE+", invert: true, link: "https://braedennnnn.github.io/mouseplus/" },
  { src: "uncover.png", alt: "unCover", invert: false, link: "https://braedennnnn.github.io/unCover/" },
  { src: "streamy.png", alt: "Streamy", invert: false },
  { src: "studentsection.png", alt: "Student Section", invert: true, inProgress: true },
];

const CERTIFICATIONS = [
  {
    title: "TensorFlow Certified",
    description: "Through Google's Tensorflow Deep Learning Certification Program",
    icon: <Cpu className="w-5 h-5 text-neon-orange" />
  },
  {
    title: "Best In Show",
    description: "Team Awarded \"Best In Show\" by Consortium for Computer Sciences in Colleges",
    icon: <Award className="w-5 h-5 text-neon-orange" />
  },
  {
    title: "Clean Vibes",
    description: "Volunteer for dedicated on-site waste management through Clean Vibes Program",
    icon: <Leaf className="w-5 h-5 text-neon-orange" />
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-urban-black overflow-x-hidden urban-grid">
      {/* Background Accents */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-orange/10 spray-blur rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-pink/10 spray-blur rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-urban-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display tracking-tighter text-neon-orange"
          >
            Braeden<span className="text-white">.Songer</span>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {['Projects', 'Skills', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-widest hover:text-neon-orange transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-urban-black flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {['Projects', 'Skills', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-display uppercase tracking-tighter hover:text-neon-orange"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 md:pt-40 pb-20">
          <div className="text-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mb-12 md:mb-20 flex justify-center"
            >
              <div className="relative group">
                <img 
                  src="me.jpg" 
                  alt="Braeden Songer" 
                  className="w-full max-w-md aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700 border-8 border-white shadow-[20px_20px_0px_theme('colors.neon-orange')]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-neon-orange text-black px-6 py-2 font-display text-2xl uppercase tracking-tighter -rotate-3">
                  Nice to meet you!
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-10 -right-10 md:-top-16 md:-right-16 pointer-events-none"
              >

              </motion.div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-mono"
            >
              Computer Science Major @ University of Missouri.
              Focusing on user experience and sustainable practice

            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-12 flex justify-center space-x-6"
            >
              <a href="#projects" className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-neon-orange transition-colors">
                View Work
              </a>
              <div className="flex items-center space-x-4">
                <a href="https://github.com/Braedennnnn/" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6 cursor-pointer hover:text-neon-orange transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/braeden-songer-741b17334/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 cursor-pointer hover:text-neon-orange transition-colors" />
                </a>
                <a href="mailto:braedensonger@gmail.com">
                  <Mail className="w-6 h-6 cursor-pointer hover:text-neon-orange transition-colors" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
            <div className="w-px h-20 bg-gradient-to-b from-neon-orange to-transparent" />
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-12 border-b border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center md:items-start text-center md:text-left space-y-3"
                >
                  <div className="p-2 bg-white/5 border border-white/10 rounded-lg">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-sm uppercase tracking-wider text-white/90">{cert.title}</h4>
                    <p className="font-mono text-[10px] text-white/40 leading-relaxed mt-1">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Logo Section */}
        <section className="py-20 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
              {LOGOS.map((logo, i) => {
                const MotionComponent = logo.link ? motion.a : motion.div;
                return (
                  <MotionComponent
                    key={i}
                    href={logo.link}
                    target={logo.link ? "_blank" : undefined}
                    rel={logo.link ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className={`max-w-full max-h-full object-contain filter ${logo.invert ? 'invert brightness-200' : ''} drop-shadow-[0_0_8px_rgba(255,99,33,0.3)]`}
                      referrerPolicy="no-referrer"
                    />
                    {logo.inProgress && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px] rounded-lg">
                        <span className="text-[8px] md:text-[10px] font-mono uppercase tracking-widest text-neon-orange font-bold text-center px-1">
                          In Progress
                        </span>
                      </div>
                    )}
                  </MotionComponent>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">
                Project Ecosystem & Collaborations
              </span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-5xl md:text-7xl graffiti-text">Experience</h2>
            <div className="hidden md:block text-right font-mono text-white/40">
              [01] PROJECTS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 border border-white/10 overflow-hidden hover:border-neon-orange transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <ExternalLink className="w-5 h-5 cursor-pointer hover:text-neon-orange" />
                  </div>
                  <h3 className="text-2xl font-display uppercase mb-4 group-hover:text-neon-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-8 font-mono text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-widest border border-white/20 px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 bg-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex items-end justify-between mb-16">
              <h2 className="text-5xl md:text-7xl graffiti-text">ToolKit</h2>
              <div className="hidden md:block text-right font-mono text-white/40">
                [02] SKILLS
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="text-neon-orange font-display uppercase tracking-widest mb-6 flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {skill.category}
                  </h4>
                  <ul className="space-y-3 font-mono text-white/60">
                    {skill.items.map(item => (
                      <li key={item} className="hover:text-white transition-colors cursor-default">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Decorative background text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-display opacity-[0.02] whitespace-nowrap pointer-events-none select-none">
            ENGINEERING CREATIVITY
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-white/5 border border-white/10 overflow-hidden group"
            >
              <img 
                src="aboutme.png" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[20px] border-urban-black" />
       
            </motion.div>

            <div>
              <h2 className="text-5xl md:text-7xl graffiti-text mb-8">About<br />Me</h2>
              <div className="space-y-6 text-white/70 font-mono leading-relaxed">
                <p>
                  I'm a Computer Science student with a passion for building an intuitive experience for the user.  
                  Whether it's developing custom AI models for assistive robotics, creating easy to use websites, or automating an annoying task, I find
                  my drive in making things *easier*. 
                </p>
                <p>
                  I also strive to make my projects as sustainable as possible, utilizing low carbon footprint technology and efficient algorithms to not only avoid high API costs, but to 
                  also help protect our planet. 
                </p>
                <div className="pt-8 grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-neon-orange text-3xl font-display">3.75</div>
                    <div className="text-xs uppercase tracking-widest opacity-50">GPA</div>
                  </div>
                  <div>
                    <div className="text-neon-orange text-3xl font-display">10+</div>
                    <div className="text-xs uppercase tracking-widest opacity-50">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 bg-neon-orange text-black">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl md:text-9xl graffiti-text mb-12" style={{ textShadow: 'none' }}>
              LET'S<br />BUILD
            </h2>
            <p className="text-xl font-mono mb-12 max-w-xl mx-auto opacity-80">
              Interested in collaborating? My inbox is always open.
            </p>
            <a 
              href="mailto:braedensonger@gmail.com" 
              className="inline-block px-12 py-4 border-4 border-black font-display text-2xl uppercase tracking-tighter hover:bg-black hover:text-neon-orange transition-all"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center space-y-4 md:space-y-0">
          <div className="font-mono text-xs opacity-40">
            © 2024 BRAEDEN SONGER. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Braedennnnn/" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/braeden-songer-741b17334/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
            </a>
            <a href="mailto:braedensonger@gmail.com">
              <Mail className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
