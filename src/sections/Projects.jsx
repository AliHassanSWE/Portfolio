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
    <section id="projects" className="py-24 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t border-border/40">
      
      {/* Top Header matching reference */}
      <div className="flex flex-wrap items-center justify-between border-b border-border/60 pb-6 mb-12 gap-4">
        <div className="flex items-center gap-6">
          <div className="w-12 md:w-16 h-[1px] bg-primary"></div>
          <h2 className="text-3xl md:text-4xl font-serif italic text-primary tracking-wide">Work</h2>
        </div>
        <span className="font-mono text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase font-semibold">
          03 Projects
        </span>
      </div>

      {/* Large Statement Text matching reference */}
      <h3 className="text-3xl md:text-5xl lg:text-[54px] font-medium text-white mb-20 leading-[1.15] tracking-tight max-w-4xl">
        Selected projects developed across software engineering, desktop applications, and web infrastructure.
      </h3>
      
      {/* Project Rows */}
      <div className="flex flex-col">
        {projectData.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            className="group flex flex-col md:flex-row gap-6 md:gap-12 py-12 md:py-16 border-b border-border/40 hover:bg-surface/20 transition-all duration-500 px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl"
          >
            {/* Number */}
            <div className="text-gray-500 font-mono text-sm md:text-base pt-1 md:w-12 shrink-0 font-medium">
              {project.num}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl md:text-4xl font-serif text-white group-hover:text-primary transition-colors duration-500 tracking-tight">
                  {project.title}
                </h4>
                <ArrowUpRight size={28} className="text-gray-500 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 shrink-0 ml-4" />
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-8 text-base md:text-lg max-w-3xl font-light">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[11px] md:text-xs text-gray-500 tracking-[0.15em]">
                {project.tech.map((tech, i) => (
                  <span key={i} className="hover:text-gray-300 transition-colors">{tech}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;