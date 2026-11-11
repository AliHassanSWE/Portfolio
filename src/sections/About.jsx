import SectionTitle from '../components/SectionTitle';
import { GraduationCap, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <SectionTitle title="About Me" subtitle="My Academic & Development Journey" />
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Text */}
        <div className="text-gray-400 space-y-5 leading-relaxed text-lg">
          <p>
            I am an undergraduate student currently pursuing a Bachelor of Science in Computer Science at the University of Gujrat. My academic focus heavily revolves around core Computer Science fundamentals, including Data Structures, Algorithms, and Object-Oriented Programming.
          </p>
          <p>
            Beyond university coursework, I actively apply software design paradigms (OOP & FP) and design patterns like MVC and Singleton to build maintainable, production-grade code. Whether it is writing low-level code, structuring a Java backend, or designing a database, I enjoy the process of solving complex logic problems.
          </p>
        </div>

        {/* Right Column: Education Card */}
        <div className="bg-surface p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-primary/10 text-primary rounded-xl">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">BS Computer Science</h3>
              <p className="text-primary font-medium mt-1">University of Gujrat</p>
            </div>
          </div>
          
          <div className="ml-16">
            <h4 className="text-white font-medium mb-3 flex items-center gap-2">
              <Code size={18} className="text-gray-400" /> Core Academic Focus:
            </h4>
            <ul className="text-gray-400 space-y-2 text-md list-disc marker:text-primary pl-4">
              <li>Arrays, Linked Lists, Hash Tables, Trees, & Graphs</li>
              <li>Sorting, Searching, Recursion, & Dynamic Programming</li>
              <li>Big O Notation (Time & Memory Complexity Analysis)</li>
              <li>Software Design & Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;