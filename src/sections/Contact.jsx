import SectionTitle from '../components/SectionTitle';
import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t border-border/40 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionTitle title="Get In Touch" subtitle="Academic & Professional Opportunities" />
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed">
              I am actively seeking international higher education opportunities, bachelor's degree scholarships, and software engineering collaborations. Whether you are an admissions committee member or a recruiter, feel free to reach out.
            </p>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-surface border border-border text-primary rounded-lg shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <a href="mailto:hassammehmood1321090@gmail.com" className="hover:text-primary transition-colors text-lg font-medium tracking-tight">
                    hassammehmood1321090@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-surface border border-border text-green-500 rounded-lg shadow-sm">
                  <WhatsAppIcon size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                  <a href="https://wa.me/923497462724" target="_blank" rel="noreferrer" className="hover:text-green-500 transition-colors text-lg font-medium tracking-tight">
                    +92 349 7462724
                  </a>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-surface border border-border text-primary rounded-lg shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-lg font-medium tracking-tight">Gujranwala, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.2)]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="name@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows="4" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-orange-700 text-white font-medium py-3.5 rounded-lg transition-all shadow-lg shadow-primary/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;