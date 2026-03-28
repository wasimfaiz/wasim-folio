"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
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

const LoadingScreen = ({
  progress,
  pointer,
}: {
  progress: number;
  pointer: { x: number; y: number };
}) => {
  const translate = (strength: number) => ({
    x: (pointer.x - 0.5) * strength,
    y: (pointer.y - 0.5) * strength,
  });
  const loaderTags = ["Direction", "Motion", "Commerce", "Systems"];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.01, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[10000] overflow-hidden bg-[#020202]"
    >
      <motion.div
        initial={{ scaleY: 1 }}
        exit={{ scaleY: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
        className="absolute inset-x-0 top-0 h-1/2 origin-top bg-[#020202]"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        exit={{ scaleY: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
        className="absolute inset-x-0 bottom-0 h-1/2 origin-bottom bg-[#020202]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20" />
      <motion.div
        animate={{ x: ["-20%", "120%"] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 h-full w-80 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={translate(100)}
        className="absolute left-[3%] top-[8%] h-72 w-72 rounded-full bg-emerald-400/16 blur-[130px]"
      />
      <motion.div
        animate={{ scale: [1, 0.9, 1], rotate: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={translate(-120)}
        className="absolute right-[2%] top-[10%] h-96 w-96 rounded-full bg-cyan-400/12 blur-[160px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], y: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={translate(150)}
        className="absolute bottom-[-8%] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-fuchsia-500/12 blur-[180px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_50%)]" />

      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-180 md:block [writing-mode:vertical-rl]">
        <span className="text-[10px] uppercase tracking-[0.45em] text-white/28">Award style portfolio experience</span>
      </div>
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] md:block">
        <span className="text-[10px] uppercase tracking-[0.45em] text-white/28">New Delhi to worldwide</span>
      </div>

      <div className="relative flex h-full flex-col justify-between px-6 py-8 md:px-12 md:py-10">
        <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.38em] text-white/38 md:text-xs">
          <span>Wasim Faiz</span>
          <span>Interactive Portfolio</span>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-7xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-6xl"
            >
              <motion.div
                style={translate(-24)}
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:h-[34rem] md:w-[34rem]"
              >
                <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.9)]" />
              </motion.div>
              <motion.div
                style={translate(18)}
                className="relative overflow-hidden border border-white/10 bg-white/[0.03] px-6 py-12 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-md md:px-14 md:py-16"
              >
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-60" />
                <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-white/15" />
                <div className="absolute inset-y-0 left-0 w-px bg-white/10" />
                <div className="absolute inset-y-0 right-0 w-px bg-white/10" />
                <div className="relative grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-8">
                  <div className="text-center md:text-left">
                  <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.8 }}
                    className="mb-5 text-[10px] uppercase tracking-[0.55em] text-emerald-300/80 md:text-xs"
                  >
                    Building cinematic digital experiences
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[17vw] font-black uppercase leading-[0.8] tracking-[-0.09em] text-white md:text-[8vw]"
                  >
                    Wasim
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0, y: 42 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-gradient-to-r from-white via-cyan-100 to-emerald-200 bg-clip-text text-[15vw] font-black uppercase leading-[0.8] tracking-[-0.09em] text-transparent md:text-[7vw]"
                  >
                    Faiz
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45, duration: 0.9 }}
                    className="mt-8 flex items-center justify-center gap-3 md:justify-start"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,1)]" />
                    <span className="text-[10px] uppercase tracking-[0.35em] text-white/45 md:text-xs">
                      Motion. Brand. Performance.
                    </span>
                  </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35, duration: 0.9 }}
                    className="flex flex-col gap-5 border-t border-white/10 pt-6 text-left md:border-l md:border-t-0 md:pl-8 md:pt-0"
                  >
                    <p className="max-w-xs text-sm leading-6 text-white/50">
                      Precision-led interfaces with editorial pacing, fluid motion, and premium visual restraint.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {loaderTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/12 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                style={translate(44)}
                className="pointer-events-none absolute -left-2 top-0 text-[11vw] font-black uppercase leading-none tracking-[-0.09em] text-white/[0.04] md:-left-10"
              >
                Vision
              </motion.div>
              <motion.div
                style={translate(-40)}
                className="pointer-events-none absolute -bottom-6 right-0 text-[12vw] font-black uppercase leading-none tracking-[-0.09em] text-white/[0.04]"
              >
                Systems
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mx-auto flex w-full max-w-6xl flex-col gap-4"
        >
          <div className="flex items-end justify-between gap-4">
            <p className="max-w-sm text-xs uppercase tracking-[0.32em] text-white/36 md:text-sm">
              Selected work loading with depth, restraint, and motion.
            </p>
            <span className="text-3xl font-bold tabular-nums text-white/80 md:text-5xl">
              {String(progress).padStart(2, "0")}
            </span>
          </div>
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{ x: ["-20%", "120%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-y-0 w-24 bg-white/20 blur-md"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
              className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-white to-cyan-300 shadow-[0_0_30px_rgba(255,255,255,0.35)]"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// --- Main Page ---

export default function Home() {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setLoadingProgress(0);
    setPointer({ x: 0.5, y: 0.5 });

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const targets = [18, 42, 68, 88, 100];
    let step = 0;

    const interval = window.setInterval(() => {
      setLoadingProgress(targets[step]);
      step += 1;

      if (step === targets.length) {
        window.clearInterval(interval);
      }
    }, 260);

    const finishTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1900);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(finishTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.body.style.overflow = "";
      return;
    }

    const updatePointer = (clientX: number, clientY: number) => {
      setPointer({
        x: clientX / window.innerWidth,
        y: clientY / window.innerHeight,
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) {
        updatePointer(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isLoading]);

  // Horizontal Scroll Setup
  const projectSectionRef = useRef(null);
  const { scrollYProgress: projectScrollProgress } = useScroll({
    target: projectSectionRef,
    offset: ["start start", "end end"]
  });

  const projects = [
    {
      id: "01",
      title: "Zenfora",
      category: "Food Tech & Commerce",
      tags: ["Next.js", "FMCG", "E-commerce"],
      color: "bg-emerald-900",
      img: "/zenfora.png"
    },
    {
      id: "02",
      title: "Setzet",
      category: "End-to-End Agency Solutions",
      tags: ["Development", "Design", "Marketing"],
      color: "bg-orange-900",
      img: "/setzet.png"
    },
    {
      id: "03",
      title: "Pure Makhana",
      category: "Food Brand & Commerce",
      tags: ["Branding", "E-commerce", "FMCG"],
      color: "bg-blue-900",
      img: "/puremakhana.png"
    },
    {
      id: "04",
      title: "Uncle Makhana",
      category: "Snack Brand Experience",
      tags: ["Branding", "Growth", "Commerce"],
      color: "bg-emerald-900",
      img: "/unclemakhana.png"
    },
  ];

  const totalProjectWidth = 80 + projects.length * 65;
  const maxTranslatePercentage = ((totalProjectWidth - 100) / totalProjectWidth) * 100;
  const x = useTransform(projectScrollProgress, [0, 1], ["0%", `-${maxTranslatePercentage}%`]);
  const smoothX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const heroShiftX = (pointer.x - 0.5) * 36;
  const heroShiftY = (pointer.y - 0.5) * 28;
  const heroOrbX = (pointer.x - 0.5) * -90;
  const heroOrbY = (pointer.y - 0.5) * -70;

  return (
    <div ref={containerRef} className="relative bg-black text-white selection:bg-white selection:text-black overflow-clip">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen progress={loadingProgress} pointer={pointer} />
        )}
      </AnimatePresence>

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
          <motion.div
            animate={{
              x: heroOrbX,
              y: heroOrbY,
              scale: [1, 1.05, 1],
            }}
            transition={{
              x: { type: "spring", stiffness: 40, damping: 18 },
              y: { type: "spring", stiffness: 40, damping: 18 },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
            className="pointer-events-none absolute left-[-10%] top-[8%] h-[16rem] w-[16rem] rounded-full bg-cyan-400/10 blur-[110px] md:h-[28rem] md:w-[28rem] md:blur-[160px]"
          />
          <motion.div
            animate={{
              x: -heroOrbX * 0.7,
              y: -heroOrbY * 0.7,
              scale: [1, 1.08, 1],
            }}
            transition={{
              x: { type: "spring", stiffness: 35, damping: 18 },
              y: { type: "spring", stiffness: 35, damping: 18 },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            }}
            className="pointer-events-none absolute bottom-[-12%] right-[-8%] h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/10 blur-[130px] md:h-[34rem] md:w-[34rem] md:blur-[180px]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.14]" />
          <motion.div
            animate={{ y: ["-100%", "120%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute inset-y-[-20%] left-1/2 w-32 -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent blur-3xl"
          />

          <div className="container max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{ x: heroShiftX, y: heroShiftY }}
                transition={{ type: "spring", stiffness: 45, damping: 20 }}
                className="text-center w-full"
              >
                <motion.div
                  initial={{ opacity: 0, letterSpacing: "0.5em" }}
                  animate={{ opacity: 1, letterSpacing: "0.35em" }}
                  transition={{ delay: 0.2, duration: 0.9 }}
                  className="mb-6 flex items-center justify-center gap-3 text-[10px] uppercase text-white/45 md:text-xs"
                >
                  <span className="h-px w-8 bg-white/20" />
                  <span>Creative Direction & Development</span>
                  <span className="h-px w-8 bg-white/20" />
                </motion.div>

                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35, duration: 1.1 }}
                    className="pointer-events-none absolute inset-x-0 top-[12%] hidden justify-center md:flex"
                  >
                    <span className="text-[9vw] font-black uppercase tracking-[-0.08em] text-white/[0.05]">Interactive</span>
                  </motion.div>

                  <h1 className="hero-title font-bold uppercase tracking-[-0.05em] leading-[0.8] mb-8 break-words text-center">
                    <motion.span
                      initial={{ y: 140, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="block"
                    >
                      Visionary
                    </motion.span>
                    <motion.span
                      initial={{ y: 140, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.28, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="block text-outline md:ml-12"
                    >
                      Digital
                    </motion.span>
                    <motion.span
                      initial={{ y: 140, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.42, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="block bg-gradient-to-r from-fuchsia-400 via-white to-cyan-300 bg-clip-text text-transparent"
                    >
                      Architect
                    </motion.span>
                  </h1>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-8 md:mt-12 w-full justify-between border-t border-white/10 pt-12"
              >
                <motion.div
                  animate={{ x: heroShiftX * -0.35, y: heroShiftY * -0.35 }}
                  transition={{ type: "spring", stiffness: 45, damping: 20 }}
                  className="flex items-center gap-4 text-white/50 font-inter text-xs md:text-sm max-w-xs text-center md:text-left"
                >
                  <div className="hidden md:block w-12 h-[1px] bg-white/20" />
                  <p>Based in New Delhi. Available worldwide for selected collaborations.</p>
                </motion.div>
                
                <motion.div
                  animate={{ x: heroShiftX * 0.3, y: heroShiftY * 0.3 }}
                  transition={{ type: "spring", stiffness: 45, damping: 20 }}
                >
                  <Magnetic>
                    <a href="#about" className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 cursor-pointer group md:h-32 md:w-32 md:text-xs">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 rounded-full border border-dashed border-white/15"
                      />
                      <span className="absolute inset-0 bg-white scale-0 rounded-full transition-transform duration-500 group-hover:scale-100" />
                      <span className="relative z-10 text-center transition-all duration-500 group-hover:rotate-45 group-hover:text-black">
                        Focus <br/> Scroll
                      </span>
                    </a>
                  </Magnetic>
                </motion.div>
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
        <section id="about" className="section-padding relative overflow-hidden bg-black">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute left-[-10%] top-[5%] h-56 w-56 rounded-full bg-cyan-500/8 blur-[120px] md:h-80 md:w-80"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute bottom-[-10%] right-[-8%] h-64 w-64 rounded-full bg-fuchsia-500/8 blur-[140px] md:h-96 md:w-96"
          />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-white/40 md:text-xs"
              >
                <span className="h-px w-10 bg-white/15" />
                <span>About the approach</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.0] lg:leading-[1.1] mb-8 md:mb-12"
              >
                I believe that <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-white/40 italic"
                >great design</motion.span> is invisible, yet its impact is <motion.span
                  initial={{ backgroundSize: "0% 2px" }}
                  whileInView={{ backgroundSize: "100% 2px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[linear-gradient(currentColor,currentColor)] bg-left-bottom bg-no-repeat text-white"
                >undeniable</motion.span>.
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.15, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-24 text-base md:text-lg text-white/60 font-inter leading-relaxed"
              >
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  I blend design instinct with technical precision to build digital experiences that feel refined, immersive, and impossible to ignore. Every interface is shaped to leave a lasting impression, not just fill a screen.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.32, duration: 0.8 }}
                >
                  My approach is rooted in clarity and intent: remove the noise, elevate what matters, and let performance, motion, and visual restraint do the talking.
                </motion.p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-4 lg:sticky lg:top-40 mt-12 lg:mt-0">
              <motion.div 
                initial={{ scale: 1.08, opacity: 0, y: 50 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden border border-white/10 bg-[#111]"
              >
                <motion.div
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 z-20 origin-top bg-white"
                />
                <motion.div
                  initial={{ y: "-100%" }}
                  whileInView={{ y: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.25, ease: "linear" }}
                  className="absolute inset-y-[-20%] left-1/2 z-10 w-24 -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent blur-2xl"
                />
                <Image src="/wasim-image.png" alt="Wasim Faiz Portrait" fill className="object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 border border-white/12 bg-black/30 px-3 py-2 text-[10px] uppercase tracking-[0.32em] text-white/60 backdrop-blur-md">
                  Wasim Faiz
                </div>
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

        {/* 6. CREATIVE PROJECTS: OPTIMIZED FOR ALL DEVICES */}
        <div id="work">
          {/* --- DESKTOP VIEW: HORIZONTAL PIN SCROLL --- */}
          <section ref={projectSectionRef} className="hidden md:block relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
              <motion.div style={{ x: smoothX }} className="flex gap-24 px-[10vw]">
                {/* Intro project tile */}
                <div className="w-[40vw] flex flex-col justify-center flex-shrink-0">
                  <span className="text-emerald-400 font-bold uppercase tracking-[0.35em] text-sm mb-4">Portfolio 2026</span>
                  <h2 className="text-8xl font-bold uppercase leading-[0.8]">Selected <br/> Work</h2>
                  <p className="mt-6 max-w-md text-sm leading-6 text-white/45">
                    A tighter mix of brand systems, commerce builds, and product-led experiences.
                  </p>
                  <div className="mt-12 flex items-center gap-4 text-white/30">
                    <ArrowRight />
                    <p className="uppercase tracking-widest text-xs">Scroll to Explore</p>
                  </div>
                </div>

                {projects.map((project) => (
                  <div key={project.id} className="w-[65vw] flex-shrink-0 flex items-center">
                    <div className="relative w-full aspect-[16/10] group">
                      {/* Project Reveal */}
                      <div className="relative w-full h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                        <Image 
                          src={project.img} 
                          alt={project.title} 
                          fill 
                          className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out grayscale group-hover:grayscale-0" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/60 group-hover:via-black/10 group-hover:to-transparent transition-colors duration-700" />
                        <div className={`absolute inset-x-0 top-0 h-40 ${project.color} opacity-20 blur-3xl`} />
                        
                        {/* Floating Project Info */}
                        <div className="absolute top-12 left-12 flex flex-col gap-4">
                          <span className="text-4xl font-outfit text-white/40">{project.id}</span>
                          <span className={`w-fit rounded-full ${project.color} px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white shadow-lg`}>
                            {project.category}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                              <span key={tag} className="px-3 py-1 rounded-full border border-white/20 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="absolute bottom-12 right-12">
                          <Magnetic>
                            <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                              <ArrowUpRight size={32} />
                            </div>
                          </Magnetic>
                        </div>
                      </div>
                      
                      <div className="mt-8 flex justify-between items-baseline gap-6">
                        <h3 className="text-7xl font-bold uppercase tracking-tighter group-hover:italic transition-all duration-500">{project.title}</h3>
                        <p className="max-w-[18rem] text-right text-white/30 text-sm uppercase tracking-widest border-l border-white/20 pl-4">{project.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Outro tile */}
                <div className="w-[40vw] flex flex-col justify-center flex-shrink-0">
                  <h2 className="text-6xl font-bold uppercase text-white/20">More Comin Soon...</h2>
                  <a href="#contact" className="mt-8 text-xl underline underline-offset-8 decoration-emerald-400 hover:text-emerald-300 transition-colors w-fit">Start a Project</a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* --- MOBILE VIEW: VERTICAL STACK --- */}
          <section className="md:hidden relative bg-black pt-20 pb-32 px-6">
            <div className="mb-16">
              <span className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-xs mb-3 block">Portfolio 2026</span>
              <h2 className="text-6xl font-bold uppercase leading-[0.85]">Selected <br/> Work</h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
                Brand-focused builds with sharper presentation and cleaner hierarchy.
              </p>
              <div className="mt-8 flex items-center gap-3 text-white/40">
                <ArrowRight className="rotate-90 w-4 h-4"/>
                <p className="uppercase tracking-widest text-[10px]">Scroll Down to Explore</p>
              </div>
            </div>

            <div className="flex flex-col gap-16">
              {projects.map((project) => (
                <div key={`mob-${project.id}`} className="flex flex-col group">
                  <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6 border border-white/10 bg-white/[0.03] shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      fill 
                      className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90" />
                    <div className={`absolute inset-x-0 top-0 h-24 ${project.color} opacity-20 blur-2xl`} />
                    
                    {/* Floating Project Info */}
                    <div className="absolute top-4 left-4 flex flex-col gap-3">
                      <span className="text-3xl font-outfit text-white/80 font-medium drop-shadow-md">{project.id}</span>
                      <span className={`w-fit rounded-full ${project.color} px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-white shadow-md`}>
                        {project.category}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-black/40 rounded-full border border-white/10 backdrop-blur-md text-[9px] uppercase font-bold tracking-widest shadow-sm text-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4">
                      <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 px-2">
                    <h3 className="text-4xl font-bold uppercase tracking-tighter leading-none">{project.title}</h3>
                    <p className="text-white/50 text-xs uppercase tracking-widest font-medium mt-1">{project.category}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 border-t border-white/10 pt-12 pb-8">
              <h2 className="text-3xl font-bold uppercase text-white/50 mb-6">More Comin Soon...</h2>
              <a href="#contact" className="inline-block text-sm font-bold uppercase tracking-widest bg-white text-black px-6 py-4 rounded-full hover:bg-emerald-400 hover:text-black transition-colors">Start a Project</a>
            </div>
          </section>
        </div>

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
