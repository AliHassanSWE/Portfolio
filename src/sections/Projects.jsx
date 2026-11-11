import Tilt from 'react-parallax-tilt';
import { ArrowUpRight } from 'lucide-react';

const projectData = [
  {
    num: "01",
    title: "NEXUS POS (Point of Sale)",
    description: "A comprehensive web-based Point of Sale interface hosted on Render. It automates inventory tracking, streamlines sales transactions, and manages user roles through a Java 21 and Spring Boot backend architecture, deployed via Docker.",
    tech: ["JAVA 21", "SPRING BOOT", "DOCKER", "RENDER"],
    link: "https://nexuspos-wcws.onrender.com/"
  },
  {
    num: "02",
    title: "Digital Wallet System",
    description: "An open-source digital wallet software application developed to manage secure wallet operations, track multi-user transactions, and demonstrate core object-oriented programming principles in a robust environment.",
    tech: ["C++", "OOP", "DATA STRUCTURES", "ARCHITECTURE"],
    link: "https://github.com/AliHassanSWE/digital-wallet-system"
  },
  {
    num: "03",
    title: "ATM Management System",
    description: "A terminal-based banking simulation featuring comprehensive account management, secure PIN verification algorithms, initial deposit checks, and robust multi-user withdrawal handling logic.",
    tech: ["C++", "LOGIC BUILDING", "FILE HANDLING", "VALIDATION"],
    link: "https://github.com/AliHassanSWE/ATM_Project_PF"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-6 mb-16 gap-4">
        <div className="flex items-center gap-6">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan drop-shadow-[0_0_15px_rgba(0,255,163,0.5)]">Featured Projects</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {projectData.map((project, index) => (
          <Tilt key={index} tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} scale={1.01} transitionSpeed={2000} className="w-full">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col md:flex-row gap-6 md:gap-12 p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-cyan/50 backdrop-blur-xl transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(0,255,163,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple/10 to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="text-cyan font-mono text-2xl font-bold pt-1 md:w-16 shrink-0 drop-shadow-[0_0_10px_rgba(0,255,163,0.8)]">
                {project.num}
              </div>

              <div className="flex-1 z-10">
                <div className="flex justify-between items-start mb-6">
                  {/* Colorful Hover Title */}
                  <h4 className="text-2xl md:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan group-hover:to-purple transition-all duration-500 tracking-tight">
                    {project.title}
                  </h4>
                  <ArrowUpRight size={32} className="text-white/30 group-hover:text-cyan group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 shrink-0 ml-4 drop-shadow-[0_0_10px_rgba(0,255,163,0.5)]" />
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg max-w-3xl font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-3 font-mono text-[11px] md:text-xs text-white/70 tracking-widest">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full border border-white/20 bg-black/40 group-hover:border-cyan/40 group-hover:text-cyan group-hover:shadow-[0_0_10px_rgba(0,255,163,0.2)] transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;