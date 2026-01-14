'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Mail,
  Trophy,
  ArrowRight,
  Code,
  Terminal,
  Cpu,
  Globe,
  Menu,
  X,
  BookOpen,
  Image as ImageIcon,
  Smartphone
} from 'lucide-react';
import {
  HERO_BG_IMAGE,
  NAV_LINKS,
  STATS,
  HACKATHONS,
  PROJECTS,
  EXPERIENCE,
  TECH_STACK,
  BLOG_POSTS,
  CONTACT_INFO
} from '@/lib/data';

/* --- Utility Components --- */

interface SectionHeadingProps {
  children: React.ReactNode;
  id: string;
}

const SectionHeading = ({ children, id }: SectionHeadingProps) => (
  <h2 id={id} className="text-3xl md:text-5xl font-bold mb-12 tracking-tight text-white">
    {children}
  </h2>
);

const KeyboardHint = ({ text }: { text: string }) => (
  <span className="hidden md:inline-flex items-center justify-center ml-3 px-2 py-0.5 text-xs font-mono text-neutral-400 border border-neutral-700 rounded bg-neutral-900/50">
    {text}
  </span>
);

/* --- Main Component --- */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for scrolling
  const heroRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const blogRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  const scrollTo = useCallback((ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  }, []);

  const handleNavClick = useCallback((key: string) => {
    const refMap: Record<string, React.RefObject<HTMLElement | null>> = {
      work: workRef,
      experience: experienceRef,
      blog: blogRef,
      about: aboutRef,
      contact: contactRef,
    };
    const ref = refMap[key];
    if (ref) scrollTo(ref);
  }, [scrollTo]);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      switch (e.key.toLowerCase()) {
        case 'w':
          scrollTo(workRef);
          break;
        case 'c':
          scrollTo(contactRef);
          break;
        case 'b':
          scrollTo(blogRef);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollTo]);

  return (
    <div className="bg-black min-h-screen text-neutral-200 selection:bg-blue-500/30 font-sans overflow-x-hidden relative">
      {/* Noise Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.05] z-50 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter text-white">SUDIPTA DEY</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map(link => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.key)}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full text-xs">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for work
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-black border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {NAV_LINKS.map(link => (
                  <button
                    key={link.key}
                    onClick={() => handleNavClick(link.key)}
                    className="text-left text-lg font-medium text-neutral-300 hover:text-white"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BG_IMAGE}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8 drop-shadow-lg">
              Founding Engineer scaling products from <span className="text-neutral-500">zero</span> to <span className="text-white decoration-blue-600 underline decoration-4 underline-offset-4">millions</span>.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl leading-relaxed mb-10 drop-shadow-md">
              Built platforms processing 100M+ events/year. Scaled apps to 100K+ downloads across 4 countries. Won global hackathons against 5000+ participants.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo(workRef)}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-200 bg-white hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-lg"
              >
                View Work <KeyboardHint text="W" />
              </button>
              <button
                onClick={() => scrollTo(contactRef)}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-transparent border border-neutral-700 hover:border-white focus:outline-none rounded-lg hover:bg-neutral-900/50 backdrop-blur-sm"
              >
                Contact <KeyboardHint text="C" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-20 space-y-32">

        {/* Stats Marquee */}
        <div className="w-screen -ml-6 md:ml-[calc(-50vw+50%)] relative border-y border-neutral-900 bg-neutral-950/30 overflow-hidden py-6 mt-8">
          <div className="flex whitespace-nowrap overflow-hidden">
            <motion.div
              className="flex gap-16 text-lg font-mono text-neutral-500 uppercase tracking-widest items-center"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              {[...STATS, ...STATS, ...STATS].map((stat, i) => (
                <div key={i} className="flex items-center gap-16">
                  <span>{stat}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600/50" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Hackathon Wins */}
        <section ref={workRef}>
          <SectionHeading id="hackathons">Hackathon Wins</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HACKATHONS.map((hack, idx) => (
              <motion.div
                key={hack.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group bg-neutral-900/50 border border-amber-500/30 rounded-2xl p-0 hover:bg-neutral-900 transition-colors overflow-hidden flex flex-col"
              >
                {/* Visual Header */}
                <div className="aspect-video bg-neutral-950 relative overflow-hidden border-b border-white/5">
                   {hack.links.video ? (
                     <iframe
                       src={`https://www.youtube.com/embed/${hack.links.video.split('v=')[1]?.split('&')[0]}`}
                       title={hack.title}
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
                       className="absolute inset-0 w-full h-full grayscale"
                     />
                   ) : hack.image ? (
                     <img
                       src={hack.image}
                       alt={hack.title}
                       className="absolute inset-0 w-full h-full object-contain bg-neutral-900"
                     />
                   ) : (
                     <>
                       <div className="absolute inset-0 z-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
                       <div className="absolute inset-0 flex items-center justify-center p-6 text-center opacity-60">
                          <div className="flex flex-col items-center">
                            <ImageIcon size={24} className="text-neutral-600 mb-2"/>
                            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest border border-neutral-800 px-2 py-1 rounded border-dashed">
                               {hack.imagePrompt}
                            </span>
                          </div>
                       </div>
                     </>
                   )}
                   <div className="absolute top-4 right-4 z-20">
                      <Trophy size={24} className="text-amber-500" />
                   </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="inline-flex self-start items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold rounded-full mb-4">
                    <Trophy size={14} /> {hack.badge}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{hack.title}</h3>
                  <p className="text-sm text-neutral-400 mb-2 font-mono">{hack.event}</p>
                  {hack.designer && (
                    <p className="text-sm text-neutral-500 mb-4">Product Design: <span className="text-neutral-300">{hack.designer}</span></p>
                  )}
                  <p className="text-neutral-300 leading-relaxed mb-6 flex-1">{hack.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {hack.stack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {hack.links.demo && (
                      <a href={hack.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-blue-400 font-medium transition-colors">
                        View Project <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section>
          <SectionHeading id="projects">Selected Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group flex flex-col h-full bg-neutral-900/20 border border-neutral-800 hover:border-neutral-600 rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Media Area */}
                <div className="aspect-video bg-neutral-950 relative overflow-hidden group-hover:bg-neutral-900 transition-colors border-b border-neutral-800">
                  {project.video ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${project.video.split('v=')[1]?.split('&')[0]}`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full grayscale"
                    />
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 z-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />
                      <div className="absolute inset-0 z-20 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                         {project.category === "Game Dev" ? <Cpu size={32} className="text-neutral-700 mb-3" /> :
                          project.category === "Side Project" ? <Globe size={32} className="text-neutral-700 mb-3" /> :
                          <Terminal size={32} className="text-neutral-700 mb-3" />}
                          <div className="max-w-[80%] space-y-2">
                             <div className="text-[10px] text-neutral-500 font-mono border-b border-neutral-800 pb-1 mb-2">
                               IMAGE PLACEHOLDER
                             </div>
                             <p className="text-[11px] font-mono text-neutral-400 leading-tight">
                               PROMPT: &quot;{project.imagePrompt}&quot;
                             </p>
                          </div>
                      </div>
                    </>
                  )}
                  <div className="absolute bottom-3 right-3 z-30 px-2 py-1 bg-black/90 text-[10px] font-mono border border-white/20 rounded text-white shadow-lg">
                     {project.stats}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider border border-neutral-800 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  {project.designer && (
                    <p className="text-sm text-neutral-500 mb-2">Product Design: <span className="text-neutral-300">{project.designer}</span></p>
                  )}

                  <p className="text-neutral-400 mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-neutral-900/50 text-xs text-neutral-500 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:underline flex items-center gap-1">
                        Live Demo <ExternalLink size={12} />
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:underline flex items-center gap-1">
                        GitHub <Github size={12} />
                      </a>
                    )}
                    {project.links.appStore && (
                      <a href={project.links.appStore} target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:underline flex items-center gap-1">
                        App Store <Smartphone size={12} />
                      </a>
                    )}
                    {project.links.playStore && (
                      <a href={project.links.playStore} target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:underline flex items-center gap-1">
                        Play Store <Smartphone size={12} />
                      </a>
                    )}
                    {project.links.article && (
                      <a href={project.links.article} target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:underline flex items-center gap-1">
                        Article <BookOpen size={12} />
                      </a>
                    )}
                    {project.links.devpost && (
                      <a href={project.links.devpost} target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:underline flex items-center gap-1">
                        Devpost <Trophy size={12} />
                      </a>
                    )}
                    {project.links.private && (
                      <span className="text-sm font-mono text-neutral-600 flex items-center gap-1 cursor-not-allowed">
                        Private Repo <Code size={12} />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className="max-w-4xl">
          <SectionHeading id="experience">Experience</SectionHeading>
          <div className="space-y-12 relative border-l border-neutral-800 ml-3 md:ml-6 pl-8 md:pl-12 py-2">
            {EXPERIENCE.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full bg-black border-4 border-neutral-800" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{job.company}</h3>
                  <span className="font-mono text-sm text-neutral-500">{job.period}</span>
                </div>

                <div className="mb-4 text-blue-400 font-medium tracking-wide flex items-center gap-2">
                  {job.role}
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-400 text-sm font-normal">{job.location}</span>
                </div>

                <ul className="space-y-3">
                  {job.details.map((detail, i) => (
                    <li key={i} className="text-neutral-300 leading-relaxed flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 bg-neutral-700 rounded-full shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <SectionHeading id="stack">Tech Stack</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(TECH_STACK).map(([category, skills]) => (
              <div key={category}>
                <h4 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4 border-b border-neutral-800 pb-2">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm rounded hover:border-neutral-600 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef}>
          <SectionHeading id="about">About</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6 text-lg text-neutral-300 leading-relaxed">
              <p>
                I&apos;m a Founding Engineer at an IIT Kanpur incubated startup, where I built the engineering team and infrastructure from scratch. I&apos;ve scaled products to millions of users, closed enterprise deals with brands like Godrej, Amazon, and Indian Oil, and won global hackathons competing against thousands.
              </p>
              <p>
                My background is in Computer Science (B.Tech, SMIT — 8.13 CGPA). I formerly served as the President of the Photography and Art Clubs. I approach engineering with a product mindset, bridging the gap between technical complexity and user delight.
              </p>
              <div className="pt-4">
                <h4 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4">Interests</h4>
                <div className="flex flex-wrap gap-3">
                  {["Traveling", "Oil Paintings", "Pottery", "Hiking", "Process Automation", "Game Dev"].map(interest => (
                    <span key={interest} className="px-3 py-1 rounded-full bg-neutral-900 text-neutral-400 text-sm border border-neutral-800">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 rounded-2xl border border-neutral-800 aspect-square flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent opacity-50" />
               <div className="text-center p-6 relative z-10">
                 <div className="w-24 h-24 bg-neutral-800 rounded-full mx-auto mb-4 border-2 border-neutral-700 flex items-center justify-center">
                    <span className="text-2xl">👨‍💻</span>
                 </div>
                 <p className="font-bold text-white">Sudipta Dey</p>
                 <p className="text-sm text-neutral-500">Hyderabad, IN</p>
               </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section ref={blogRef}>
           <div className="flex items-baseline justify-between mb-12">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Writing</h2>
             <a href="https://medium.com/@sdptd20" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-neutral-500 hover:text-white transition-colors">
               Read on Medium <ExternalLink size={16} />
             </a>
           </div>

           <div className="grid gap-6">
             {BLOG_POSTS.map((post, i) => (
               <a
                 key={i}
                 href={post.slug}
                 target="_blank"
                 rel="noreferrer"
                 className="group block p-6 md:p-8 bg-neutral-900/30 border border-neutral-800 rounded-xl hover:bg-neutral-900 hover:border-neutral-700 transition-all"
               >
                 <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                   <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{post.title}</h3>
                   <span className="text-sm font-mono text-neutral-500 shrink-0">{post.date}</span>
                 </div>
                 <p className="text-neutral-400 mb-3 line-clamp-2">{post.excerpt}</p>
                 <div className="flex items-center gap-4 text-sm text-neutral-500">
                    <span className="flex items-center gap-1"><BookOpen size={14}/> {post.readTime}</span>
                    <div className="flex gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-neutral-600">#{tag}</span>
                      ))}
                    </div>
                    <span className="ml-auto flex items-center gap-1 text-neutral-500 group-hover:text-blue-400">
                      Read more <ExternalLink size={12} />
                    </span>
                 </div>
               </a>
             ))}
           </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="py-20">
          <div className="bg-gradient-to-b from-neutral-900/50 to-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-16 text-center">
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
               Let&apos;s build something <br/>
               <span className="text-blue-500">together.</span>
             </h2>

             <div className="flex items-center justify-center mb-12">
               <a
                 href={`mailto:${CONTACT_INFO.email}`}
                 className="flex items-center gap-3 px-6 py-4 bg-white text-black rounded-lg font-bold hover:bg-neutral-200 transition-colors"
               >
                 <Mail size={20} />
                 {CONTACT_INFO.email}
               </a>
             </div>

             <div className="flex justify-center gap-8">
               <a
                 href="https://www.linkedin.com/in/sudipta-dey/"
                 target="_blank"
                 rel="noreferrer"
                 className="p-3 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-all"
                 aria-label="LinkedIn"
               >
                 <Linkedin size={24} />
               </a>
               <a
                 href="https://x.com/Doom_S_Dey"
                 target="_blank"
                 rel="noreferrer"
                 className="p-3 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-all"
                 aria-label="Twitter"
               >
                 <Twitter size={24} />
               </a>
               <a
                 href="https://github.com/doomSDey"
                 target="_blank"
                 rel="noreferrer"
                 className="p-3 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-all"
                 aria-label="GitHub"
               >
                 <Github size={24} />
               </a>
               <a
                 href="https://medium.com/@sdptd20"
                 target="_blank"
                 rel="noreferrer"
                 className="p-3 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-all"
                 aria-label="Medium"
               >
                 <Globe size={24} />
               </a>
             </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Sudipta Dey · veni, vidi, vici</p>
          <div className="flex items-center gap-6">
             <span>Next.js + Tailwind</span>
             <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})} className="hover:text-white">Back to top ↑</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
