import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ArrowUpRight, Sun, Moon, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { EXPERIENCES, PROJECTS, SKILLS, SOCIALS, NAME, ROLE, BIO } from './constants';
import ChatWidget from './components/ChatWidget';

// Date formatter for the newspaper header
const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

const Separator = () => (
  <div className="w-full h-px bg-ink my-2 md:my-4" />
);

const DoubleSeparator = () => (
  <div className="w-full flex flex-col gap-1 my-6">
    <div className="w-full h-[2px] bg-ink" />
    <div className="w-full h-[1px] bg-ink" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen px-4 py-6 md:p-8 max-w-[1400px] mx-auto relative z-10">
      
      {/* --- HEADER / MASTHEAD --- */}
      <header className="mb-12">
        {/* Top Meta Bar */}
        <div className="flex justify-between items-center text-xs md:text-sm font-mono border-b border-ink pb-2 mb-2 uppercase tracking-wider">
          <div className="flex gap-4">
            <span>Vol. 01</span>
            <span>Print Edition</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="hidden md:inline">{today}</span>
            <span className="md:hidden">{new Date().toLocaleDateString()}</span>
            <span>Price: Free</span>
          </div>
        </div>

        {/* Main Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center py-4 md:py-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter leading-none text-ink uppercase scale-y-90">
            {NAME}
          </h1>
          
          {/* Stamp */}
          <motion.div 
            initial={{ opacity: 0, scale: 2, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: -12 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute top-0 right-0 md:top-4 md:right-10 border-[3px] border-green-700 text-green-700 px-3 py-1 md:px-6 md:py-2 text-sm md:text-xl font-mono font-bold uppercase opacity-80 mix-blend-multiply mask-ink"
            style={{ borderRadius: '4px' }}
          >
            Open to Work
          </motion.div>
        </motion.div>

        <DoubleSeparator />

        {/* Navigation / Links Line */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-2 font-mono text-sm uppercase tracking-widest border-b border-ink mb-8">
          {SOCIALS.map((social) => (
            <a 
              key={social.platform}
              href={social.url} 
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:bg-ink hover:text-paper px-2 transition-all flex items-center gap-2"
            >
              <span>{social.platform}</span>
              <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
      </header>

      {/* --- MAIN CONTENT GRID --- */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 border-b border-ink pb-12">
        
        {/* LEFT COLUMN: HERO (8 cols) */}
        <section className="lg:col-span-8 lg:border-r lg:border-ink lg:pr-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-headline font-bold mb-6 leading-[0.9]">
              MEET YOUR NEW <br/>
              <span className="italic font-serif font-medium">FAVORITE</span> DEVELOPER
            </h2>

            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="md:w-2/3">
                <p className="text-xl md:text-2xl font-body leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                  {BIO}
                </p>
                <div className="mt-6 flex items-center gap-2 font-mono text-sm text-neutral-600">
                  <MapPin size={14} />
                  <span>Available for Remote & Relocation</span>
                </div>
              </div>
              
              {/* Image / Illustration placeholder */}
              <div className="md:w-1/3 border border-ink p-2 bg-white rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-[3/4] bg-neutral-100 flex items-center justify-center overflow-hidden grayscale contrast-125 relative">
                   {/* Placeholder for a sketch/photo */}
                   <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Naman&backgroundColor=transparent" alt="Profile Sketch" className="w-full h-full object-cover" />
                   <div className="absolute bottom-2 right-2 bg-ink text-paper text-xs px-2 py-1 font-mono">FIG A. THE DEV</div>
                </div>
              </div>
            </div>

            <Separator />
            
            {/* PROJECTS SECTION (Nested in Left Column) */}
            <div className="mt-8">
              <h3 className="font-mono text-sm uppercase tracking-widest mb-4 border-b border-ink inline-block pb-1">Projects & Case Studies</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((project, idx) => (
                  <div key={idx} className="group border border-transparent hover:border-ink hover:bg-white transition-all p-4">
                    <div className="aspect-video bg-neutral-200 mb-4 border border-ink overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                      <img src={project.image || `https://picsum.photos/seed/${idx}/800/600`} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-headline text-2xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">{project.title}</h4>
                    <p className="font-body text-sm leading-relaxed mb-4 text-neutral-800 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.slice(0,3).map(t => (
                        <span key={t} className="text-[10px] font-mono uppercase border border-neutral-400 px-1 text-neutral-600">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-4 font-mono text-xs underline">
                      {project.link && <a href={project.link} className="hover:text-neutral-500">Live Demo</a>}
                      {project.github && <a href={project.github} className="hover:text-neutral-500">Source Code</a>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* RIGHT COLUMN: SIDEBAR (4 cols) */}
        <aside className="lg:col-span-4 lg:pl-0 mt-12 lg:mt-0 space-y-8">
          
          {/* Active Project Box */}
          <div className="border border-ink p-6 bg-white shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
            <div className="flex justify-between items-start mb-4 border-b border-dashed border-neutral-300 pb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Now Building</span>
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-1">remotelQ</h3>
            <p className="font-body italic text-neutral-600 text-sm mb-4">A mock interview platform</p>
            
            <div className="w-full bg-neutral-200 h-2 mb-1">
              <div className="bg-ink h-full" style={{ width: '65%' }}></div>
            </div>
            <div className="text-right font-mono text-[10px] text-neutral-500">65% COMPLETE</div>
          </div>

          <Separator />

          {/* Tools & Tech Column */}
          <div>
             <h3 className="font-headline text-3xl mb-4 italic">Tools & Tech</h3>
             <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center border-b border-dotted border-neutral-400 pb-1">
                  <span>React / Next.js</span>
                  <span className="text-neutral-500">[EXP]</span>
                </div>
                <div className="flex justify-between items-center border-b border-dotted border-neutral-400 pb-1">
                  <span>TypeScript</span>
                  <span className="text-neutral-500">[EXP]</span>
                </div>
                <div className="flex justify-between items-center border-b border-dotted border-neutral-400 pb-1">
                  <span>Node.js / Express</span>
                  <span className="text-neutral-500">[EXP]</span>
                </div>
                <div className="flex justify-between items-center border-b border-dotted border-neutral-400 pb-1">
                  <span>PostgreSQL</span>
                  <span className="text-neutral-500">[INT]</span>
                </div>
                <div className="flex justify-between items-center border-b border-dotted border-neutral-400 pb-1">
                  <span>Tailwind CSS</span>
                  <span className="text-neutral-500">[EXP]</span>
                </div>
                
                <div className="pt-4">
                  <p className="font-body text-xs italic text-neutral-500 leading-tight">
                    * Ratings based on professional usage and confidence level in production environments.
                  </p>
                </div>
             </div>
          </div>

          <Separator />

          {/* Experience Feed */}
          <div>
            <h3 className="font-headline text-3xl mb-6">Career Archive</h3>
            <div className="space-y-8">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-ink">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-ink rounded-full"></div>
                  <span className="font-mono text-xs text-neutral-500 uppercase mb-1 block">{exp.period}</span>
                  <h4 className="font-bold text-lg leading-tight">{exp.role}</h4>
                  <div className="font-serif italic text-neutral-700 mb-2">{exp.company}</div>
                  <p className="font-body text-sm text-neutral-800 leading-snug">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Advertisement / CTA */}
          <div className="mt-8 border-2 border-ink p-4 text-center">
             <h4 className="font-headline text-xl font-bold uppercase mb-2">Want to work together?</h4>
             <p className="font-body text-sm mb-4">Space available for Spring/Summer 2025.</p>
             <a href="mailto:hello@example.com" className="inline-block bg-ink text-paper px-6 py-2 font-mono text-sm uppercase hover:bg-neutral-800 transition-colors">
               Contact Me
             </a>
          </div>

        </aside>

      </main>

      {/* FOOTER */}
      <footer className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-mono uppercase tracking-wide text-neutral-500">
        <div>
          <p>© {new Date().getFullYear()} Naman Sharma</p>
          <p>All Rights Reserved</p>
        </div>
        <div className="text-center md:text-left">
          <p>Built with Gemini & React</p>
          <p>Printed in the Cloud</p>
        </div>
        <div className="md:text-right">
          <p>Vol. 1 Issue 1</p>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;