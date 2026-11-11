import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background bg-mesh text-white selection:bg-purple/30 relative flex flex-col p-2 md:p-4 overflow-hidden">
      <CustomCursor />
      <div className="relative z-10 flex flex-col w-full h-full border border-white/5 rounded-3xl bg-black/20 backdrop-blur-[2px]">
        <Navbar />
        <main className="flex-1 w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;