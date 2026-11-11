const Navbar = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[400px] px-4">
      <nav className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3.5 flex justify-between items-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <a href="#home" className="text-sm font-medium text-gray-300 hover:text-cyan transition-colors">Home</a>
        <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-cyan transition-colors">Projects</a>
        <a href="#about" className="text-sm font-medium text-gray-300 hover:text-cyan transition-colors">About</a>
        <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-cyan transition-colors">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;