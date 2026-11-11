const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm font-medium">
          © {new Date().getFullYear()} Ali Hassan. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="https://github.com/AliHassanSWE" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;