import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, CheckCircle2, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState(''); // '' | 'submitting' | 'success' | 'error'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hassammehmood1321090@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target;
    const data = new FormData(form);

    try {
      // Using your specific Formspree endpoint
      const response = await fetch("https://formspree.io/f/xoedjlaj", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        // Reset the success message back to normal after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00FFA3] drop-shadow-[0_0_15px_rgba(0,102,255,0.4)] mb-4">
          Initiate Protocol
        </h2>
        <p className="text-gray-400 font-light max-w-xl mx-auto">
          Currently open for collaborations and professional opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Clickable, Animated Contact Cards */}
        <div className="flex flex-col gap-6">
          
          {/* Clickable Email Card */}
          <button 
            onClick={handleCopyEmail}
            className="group relative flex flex-col items-start p-8 w-full bg-white/[0.02] border border-white/10 hover:border-[#00FFA3]/60 rounded-3xl backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,163,0.15)] text-left"
          >
            <Mail size={32} className="text-[#0066FF] group-hover:text-[#00FFA3] transition-colors mb-4" />
            <span className="text-white font-medium mb-1 text-lg">Email Me</span>
            <span className="text-gray-400 text-sm font-mono tracking-tight group-hover:text-white transition-colors break-all">
              hassammehmood1321090@gmail.com
            </span>
            <div className="absolute top-8 right-8 text-gray-500 group-hover:text-[#00FFA3] opacity-0 group-hover:opacity-100 transition-all">
              <Copy size={20} />
            </div>
          </button>

          {/* Clickable WhatsApp Card */}
          <a 
            href="https://wa.me/923497462724"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-6 p-6 w-full bg-white/[0.02] border border-white/10 hover:border-[#00FFA3]/60 rounded-3xl backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,163,0.15)] text-left"
          >
            <Phone size={28} className="text-[#0066FF] group-hover:text-[#00FFA3] transition-colors shrink-0" />
            <div>
              <span className="block text-white font-medium mb-1">WhatsApp / Phone</span>
              <span className="block text-gray-400 text-sm font-mono group-hover:text-white transition-colors">+92 349 7462724</span>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-6 text-gray-500 group-hover:text-[#00FFA3] opacity-0 group-hover:opacity-100 transition-all">
              <ExternalLink size={20} />
            </div>
          </a>

          {/* Clickable Location Card */}
          <a 
            href="https://maps.google.com/?q=Gujranwala,+Pakistan"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-6 p-6 w-full bg-white/[0.02] border border-white/10 hover:border-[#00FFA3]/60 rounded-3xl backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,163,0.15)] text-left"
          >
            <MapPin size={28} className="text-[#0066FF] group-hover:text-[#00FFA3] transition-colors shrink-0" />
            <div>
              <span className="block text-white font-medium mb-1">Location</span>
              <span className="block text-gray-400 text-sm font-mono group-hover:text-white transition-colors">Gujranwala, Pakistan</span>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-6 text-gray-500 group-hover:text-[#00FFA3] opacity-0 group-hover:opacity-100 transition-all">
              <ExternalLink size={20} />
            </div>
          </a>
        </div>

        {/* Right Side: Working Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-mono text-[#00FFA3]">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required
              placeholder="John Doe" 
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00FFA3]/50 focus:ring-1 focus:ring-[#00FFA3]/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-mono text-[#00FFA3]">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              placeholder="john@example.com" 
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00FFA3]/50 focus:ring-1 focus:ring-[#00FFA3]/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-mono text-[#00FFA3]">Message</label>
            <textarea 
              id="message" 
              name="message"
              required
              rows="4" 
              placeholder="How can I help you?" 
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00FFA3]/50 focus:ring-1 focus:ring-[#00FFA3]/50 transition-all resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={status === 'submitting'}
            className="mt-2 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#0066FF] to-[#00FFA3] text-black font-bold py-3.5 rounded-xl hover:opacity-90 transition-all shadow-[0_0_20px_rgba(0,255,163,0.3)] disabled:opacity-70"
          >
            {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
            {status === 'success' ? <CheckCircle2 size={18} /> : <Send size={18} />}
          </button>

          {status === 'error' && (
            <p className="text-red-400 text-center text-sm font-medium mt-1">Oops! Something went wrong. Please try again.</p>
          )}
        </form>

      </div>

      {/* Copy Notification Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 bg-[#02040A]/90 border border-[#00FFA3] px-6 py-3 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(0,255,163,0.3)]"
          >
            <CheckCircle2 size={18} className="text-[#00FFA3]" />
            <span className="text-[#00FFA3] text-sm font-medium tracking-wide">Email address copied!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;