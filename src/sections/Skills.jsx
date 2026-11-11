import SectionTitle from '../components/SectionTitle';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript"]
  },
  {
    title: "Backend Development",
    skills: ["Java (Spring)", "Node.js", "Django"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"]
  },
  {
    title: "CS Fundamentals",
    skills: ["Data Structures", "Algorithms", "OOP & FP", "Design Patterns (MVC, Factory)"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git & GitHub", "VS Code", "Android Studio", "Pip", "Docker", "Render"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-6 mb-16 gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan drop-shadow-[0_0_15px_rgba(0,255,163,0.4)]">
          Technical Skills
        </h2>
        <span className="font-mono text-xs md:text-sm text-purple tracking-[0.2em] uppercase font-semibold">
          Expertise
        </span>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white/[0.03] border border-white/10 hover:border-purple/60 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(0,255,163,0.2)] group flex flex-col justify-between">
            <h3 className="text-xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple group-hover:to-cyan transition-all duration-300">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, i) => (
                <span key={i} className="bg-black/40 text-gray-300 px-4 py-2 rounded-xl text-xs font-mono border border-white/10 group-hover:border-white/20 group-hover:text-white transition-all shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;