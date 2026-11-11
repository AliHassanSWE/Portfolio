import SectionTitle from '../components/SectionTitle';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript"]
  },
  {
    title: "Backend Development",
    skills: ["Java (Spring)", "Node.js (Learning)", "Django (Learning)"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB (Learning)"]
  },
  {
    title: "CS Fundamentals",
    skills: ["Data Structures", "Algorithms", "OOP & FP", "Design Patterns (MVC, Factory)"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git & GitHub", "VS Code", "Android Studio", "Pip"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-border/50">
      <SectionTitle title="Technical Skills" subtitle="Technologies & Fundamentals I Work With" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-surface border border-border rounded-2xl p-7 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 shadow-md">
            <h3 className="text-xl font-bold text-white mb-5">{category.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, i) => (
                <span key={i} className="bg-background text-gray-300 px-3.5 py-1.5 rounded-lg text-sm border border-border font-medium">
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