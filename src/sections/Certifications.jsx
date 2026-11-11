import SectionTitle from '../components/SectionTitle';
import { Award, ExternalLink } from 'lucide-react';

const certData = [
  {
    title: "Version Control with Git",
    issuer: "Atlassian (Coursera)",
    date: "Completed",
    link: "https://www.coursera.org/account/accomplishments/certificate/N1BQSZCK97ET"
  },
  {
    title: "Hands-on Introduction to Linux Commands and Shell Scripting",
    issuer: "IBM (Coursera)",
    date: "Completed",
    link: "https://www.coursera.org/account/accomplishments/certificate/3CC4GKMJ809M"
  },
  {
    title: "Java Programming for Beginners",
    issuer: "IBM",
    date: "Completed",
    link: "#" // You can update this link later if you have a digital badge
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-border/50">
      <SectionTitle title="Licenses & Certifications" subtitle="Continuous Learning & Professional Development" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {certData.map((cert, index) => (
          <div key={index} className="bg-surface border border-border rounded-xl p-6 hover:border-primary/50 transition-colors shadow-md relative overflow-hidden">
            
            {/* Background decorative icon */}
            <Award className="absolute -right-6 -bottom-6 text-border opacity-20" size={120} />
            
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white mb-2 leading-tight pr-8">
                {cert.title}
              </h3>
              <p className="text-primary font-medium text-sm mb-4">
                {cert.issuer}
              </p>
              
              <div className="flex justify-between items-end mt-6">
                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                  {cert.date}
                </span>
                
                {cert.link !== "#" && (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-primary transition-colors">
                    Verify <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;