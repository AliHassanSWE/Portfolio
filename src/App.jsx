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
    <div className="min-h-screen bg-background border-[6px] border-primary/80 selection:bg-primary/30 relative flex flex-col p-2 md:p-4 overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="fixed top-[-15%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none z-0"></div>

      {/* Content wrapper with z-index to stay above the glow */}
      <div className="relative z-10 flex flex-col w-full h-full">
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