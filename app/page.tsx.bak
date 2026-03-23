"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, Code2, Palette, Zap, Cpu, Menu, X, ArrowRight } from "lucide-react";

// --- Components ---

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const handleMouse = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

// --- Main Page ---

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Horizontal Scroll Setup
  const projectSectionRef = useRef(null);
  const { scrollYProgress: projectScrollProgress } = useScroll({
    target: projectSectionRef,
  });

  const x = useTransform(projectScrollProgress, [0, 1], ["0%", "-66.6%"]);
  const smoothX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const projects = [
    {
      id: "01",
      title: "Metaverse.X",
      category: "Creative Development",
      tags: ["Three.js", "WebGl", "Next.js"],
      color: "bg-purple-900",
      img: "/project.png"
    },
    {
      id: "02",
      title: "Quantum SaaS",
      category: "Industrial Branding",
      tags: ["Tailwind", "Framer", "UI/UX"],
      color: "bg-blue-900",
      img: "/project.png"
    },
    {
      id: "03",
      title: "Cyber-V",
      category: "Hardware Interface",
      tags: ["React", "API", "Hardware"],
      color: "bg-emerald-900",
      img: "/project.png"
    },
  ];

  return (
    <div ref={containerRef} className="relative bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* 1. CINEMATIC CURSOR / NOISE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-[9999] bg-noise opacity-[0.03]" />
      
      {/* 2. RESPONSIVE NAV */}
      <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center p-6 md:p-8 mix-blend-difference font-outfit uppercase tracking-tighter text-sm">
        <Magnetic>
          <div className="font-bold text-lg md:text-xl cursor-pointer">WASIM FAIZ ©</div>
        </Magnetic>
        
        <div className="hidden md:flex gap-12 font-medium">
          {["Work", "About", "Contact"].map((item) => (
            <Magnetic key={item}>
              <a href={`#${item.toLowerCase()}`} className="group relative overflow-hidden block">
                <span className="block group-hover:-translate-y-full transition-transform duration-500">{item}</span>
                <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-500 underline">{item}</span>
              </a>
            </Magnetic>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 z-[110] relative">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "100vh" }}
              exit={{ height: 0 }}
              className="fixed inset-0 bg-black z-[105] flex flex-col items-center justify-center gap-8 overflow-hidden"
            >
              {["Work", "About", "Contact"].map((item) => (
                <motion.a 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-bold uppercase tracking-tighter"
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative">
        {/* 3. HERO */}
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden section-padding bg-[#0a0a0a]">
          <div className="container max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <div className="text-center w-full">
                <h1 className="hero-title font-bold uppercase tracking-[-0.05em] leading-[0.8] mb-8 break-words text-center">
                  <span className="block">Visionary</span>
                  <span className="block text-outline md:ml-12">Digital</span>
                  <span className="block bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Architect</span>
                </h1>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-8 md:mt-12 w-full justify-between border-t border-white/10 pt-12"
              >
                <div className="flex items-center gap-4 text-white/50 font-inter text-xs md:text-sm max-w-xs text-center md:text-left">
                  <div className="hidden md:block w-12 h-[1px] bg-white/20" />
                  <p>Based in New Delhi. Available worldwide for selected collaborations.</p>
                </div>
                
                <Magnetic>
                  <a href="#about" className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 flex items-center justify-center text-[10px] md:text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer group">
                    <span className="group-hover:rotate-45 transition-transform duration-500 text-center">Focus <br/> Scroll</span>
                  </a>
                </Magnetic>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            animate={{ 
              y: [0, 50, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-24 -right-24 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 blur-[120px] md:blur-[180px] rounded-full -z-10" 
          />
        </section>

        {/* 4. ABOUT */}
        <section id="about" className="section-padding bg-black">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.0] lg:leading-[1.1] mb-8 md:mb-12">
                I believe that <span className="text-white/40 italic">great design</span> is invisible, yet its impact is <span className="underline decoration-purple-500 underline-offset-8">undeniable</span>.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-24 text-base md:text-lg text-white/60 font-inter leading-relaxed">
                <p>
                  As Wasim Faiz, I inhabit the intersection of design intuition and technical precision. I craft digital landscapes that don&apos;t just exist—they command attention.
                </p>
                <p>
                  My philosophy is simple: strip away the unnecessary until only the essential remains. Precision, performance, and poetry in motion.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-4 lg:sticky lg:top-40 mt-12 lg:mt-0">
              <motion.div 
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="aspect-[4/5] md:aspect-[3/4] rounded-sm filter grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden bg-[#111]"
              >
                <Image src="/wasim-image.png" alt="Wasim Faiz Portrait" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. EXPERTISE */}
        <section className="section-padding bg-[#050505]">
           <div className="max-w-7xl mx-auto">
             <div className="mb-12 md:mb-24 flex items-end justify-between">
               <h2 className="text-5xl md:text-9xl font-bold uppercase text-outline">Expertise</h2>
               <div className="hidden md:block text-sm font-outfit uppercase tracking-widest text-white/40">Capabilities — 02</div>
             </div>
             
             <div className="space-y-0 border-t border-white/10">
               {[
                 { id: "01", title: "Development", full: "Creative Development", desc: "Next.js, Three.js, GSAP", icon: <Code2 /> },
                 { id: "02", title: "Visuals", full: "Visual Storytelling", desc: "UI/UX, Branding, Motion", icon: <Palette /> },
                 { id: "03", title: "Engineering", full: "Performance Engineering", desc: "Vercel, AWS, Optimization", icon: <Zap /> },
                 { id: "04", title: "Strategy", full: "Digital Strategy", desc: "Product Thinking, Scale", icon: <Cpu /> },
               ].map((service) => (
                 <motion.div 
                   key={service.id}
                   whileHover={{ x: 10 }}
                   className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-12 border-b border-white/5 cursor-pointer transition-colors hover:bg-white/5 px-2 md:px-4"
                 >
                    <div className="flex items-center gap-6 md:gap-12">
                      <span className="text-sm md:text-xl font-outfit text-white/20">{service.id}</span>
                      <h3 className="text-3xl md:text-6xl font-bold uppercase transition-all group-hover:md:pl-4">{isMobile ? service.title : service.full}</h3>
                    </div>
                    <div className="flex items-center gap-4 md:gap-8 mt-2 md:mt-0 ml-10 md:ml-0">
                      <p className="text-white/40 font-inter text-[10px] md:text-sm uppercase tracking-widest">{service.desc}</p>
                      <div className="hidden md:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                        <ArrowUpRight strokeWidth={1} />
                      </div>
                    </div>
                 </motion.div>
               ))}
             </div>
           </div>
        </section>

        {/* 6. CREATIVE PROJECTS: HORIZONTAL PIN SCROLL */}
        <section id="work" ref={projectSectionRef} className="relative h-[300vh] bg-black">
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <motion.div style={{ x: isMobile ? "0%" : smoothX }} className="flex gap-0 md:gap-24 px-6 md:px-[10vw]">
              {/* Intro project tile */}
              <div className="w-[80vw] md:w-[40vw] flex flex-col justify-center flex-shrink-0">
                <span className="text-purple-500 font-bold uppercase tracking-widest text-sm mb-4">Portfolio — 2026</span>
                <h2 className="text-6xl md:text-8xl font-bold uppercase leading-[0.8]">Selected <br/> Work</h2>
                <div className="mt-12 flex items-center gap-4 text-white/30">
                  <ArrowRight />
                  <p className="uppercase tracking-widest text-xs">Swipe or Scroll to Explore</p>
                </div>
              </div>

              {projects.map((project) => (
                <div key={project.id} className="w-[90vw] md:w-[65vw] flex-shrink-0 flex items-center">
                  <div className="relative w-full aspect-[4/3] md:aspect-[16/10] group">
                    {/* Project Reveal */}
                    <div className="relative w-full h-full overflow-hidden rounded-sm">
                      <Image 
                        src={project.img} 
                        alt={project.title} 
                        fill 
                        className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out grayscale group-hover:grayscale-0" 
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                      
                      {/* Floating Project Info */}
                      <div className="absolute top-8 left-8 md:top-12 md:left-12 flex flex-col gap-4">
                        <span className="text-2xl md:text-4xl font-outfit text-white/40">{project.id}</span>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full border border-white/20 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
                        <Magnetic>
                          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                             <ArrowUpRight size={32} />
                          </div>
                        </Magnetic>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between items-baseline">
                      <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter group-hover:italic transition-all duration-500">{project.title}</h3>
                      <p className="hidden md:block text-white/30 text-sm uppercase tracking-widest border-l border-white/20 pl-4">{project.category}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Outro tile */}
              <div className="w-[80vw] md:w-[40vw] flex flex-col justify-center flex-shrink-0">
                <h2 className="text-4xl md:text-6xl font-bold uppercase text-white/20">More Comin Soon...</h2>
                <a href="#contact" className="mt-8 text-xl underline underline-offset-8 decoration-purple-500 hover:text-purple-400 transition-colors">Start a Project</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 7. CONTACT */}
        <section id="contact" className="relative z-10 section-padding bg-[#0a0a0a] min-h-screen flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
               <div className="text-center lg:text-left">
                  <h2 className="text-6xl md:text-[12vw] font-bold uppercase leading-[0.8] mb-8 md:mb-12">Let&apos;s <br className="hidden md:block"/> Talk</h2>
                  <div className="flex justify-center lg:justify-start gap-4 mb-12">
                     {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                       <Magnetic key={i}>
                         <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                           <Icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                         </div>
                       </Magnetic>
                     ))}
                  </div>
                  <div className="space-y-2 text-[10px] md:text-xs text-white/40 font-inter uppercase tracking-widest">
                    <p>Designed & Built by Wasim Faiz</p>
                    <p>© 2026 WASIM FAIZ. ALL RIGHTS RESERVED.</p>
                  </div>
               </div>
               
               <div className="flex flex-col justify-end">
                  <form className="space-y-6 md:space-y-8">
                     <div className="relative border-b border-white/20 pb-4 focus-within:border-white transition-all">
                        <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Name</label>
                        <input type="text" className="w-full bg-transparent outline-none pt-2 md:pt-4 text-lg md:text-2xl font-light" placeholder="Your name" />
                     </div>
                     <div className="relative border-b border-white/20 pb-4 focus-within:border-white transition-all">
                        <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Email</label>
                        <input type="email" className="w-full bg-transparent outline-none pt-2 md:pt-4 text-lg md:text-2xl font-light" placeholder="hello@world.com" />
                     </div>
                     <div className="relative border-b border-white/20 pb-4 focus-within:border-white transition-all">
                        <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Message</label>
                        <textarea className="w-full bg-transparent outline-none pt-2 md:pt-4 text-lg md:text-2xl font-light resize-none" rows={3} placeholder="The project details..." />
                     </div>
                     <button className="w-full py-6 md:py-8 mt-4 md:mt-12 bg-white text-black text-lg md:text-2xl font-bold uppercase hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-4">
                        Send Proposal <ArrowUpRight />
                     </button>
                  </form>
               </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* GLOBAL FOOTER BAR */}
      <footer className="hidden sm:flex fixed bottom-0 left-0 w-full p-6 md:p-8 pointer-events-none justify-between items-end z-40 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">
         <div>High-End Performance • 2026</div>
         <div>Wasim Faiz • Creator</div>
      </footer>
    </div>
  );
}
