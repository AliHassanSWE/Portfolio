import SectionTitle from '../components/SectionTitle';
import { Award, ExternalLink } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const certData = [
  {
    title: "Version Control with Git",
    issuer: "Atlassian (Coursera)",
    date: "Completed",
    link: "https://www.coursera.org/account/accomplishments/certificate/N1BQSZCK97ET",
    tag: "DEVOPS & TOOLS"
  },
  {
    title: "Hands-on Introduction to Linux Commands and Shell Scripting",
    issuer: "IBM (Coursera)",
    date: "Completed",
    link: "https://www.coursera.org/account/accomplishments/certificate/3CC4GKMJ809M",
    tag: "SYSTEMS & LINUX"
  },
  {
    title: "Java Programming for Beginners",
    issuer: "IBM",
    date: "Completed",
    link: "#",
    tag: "BACKEND & OOP"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-6 mb-16 gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple drop-shadow-[0_0_15px_rgba(0,255,163,0.4)]">
          Licenses & Certifications
        </h2>
        <span className="font-mono text-xs md:text-sm text-cyan tracking-[0.2em] uppercase font-semibold">
          Credentials
        </span>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certData.map((cert, index) => (
          <Tilt key={index} tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1000} scale={1.02} transitionSpeed={1500} className="w-full h-full">
            <div className="h-full bg-white/[0.03] border border-white/10 hover:border-cyan/60 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(0,255,163,0.2)] relative overflow-hidden flex flex-col justify-between group">
              
              {/* Background Glow Effect */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

              <div>
                {/* Category Tag */}
                <span className="inline-block font-mono text-[10px] tracking-widest text-cyan uppercase px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 mb-6">
                  {cert.tag}
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan group-hover:to-purple transition-all duration-300 leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-purple font-medium text-sm mb-6 drop-shadow-[0_0_8px_rgba(0,255,163,0.4)]">
                  {cert.issuer}
                </p>
              </div>
              
              <div className="flex justify-between items-center pt-6 border-t border-white/10 mt-6">
                <span className="text-gray-400 text-xs font-mono uppercase tracking-wider">
                  {cert.date}
                </span>
                
                {cert.link !== "#" && (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-cyan hover:text-white transition-colors group-hover:translate-x-1 duration-300">
                    Verify <ExternalLink size={16} />
                  </a>
                )}
              </div>
              
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Certifications;