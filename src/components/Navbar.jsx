const Navbar = () => {
  return (
    <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[400px]">
      {/* Reduced padding on mobile (px-5), normal on desktop (sm:px-8) */}
      <nav className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 sm:px-8 py-3 sm:py-3.5 flex justify-between items-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <a href="#home" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-[#00FFA3] transition-colors">Home</a>
        <a href="#projects" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-[#00FFA3] transition-colors">Projects</a>
        <a href="#about" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-[#00FFA3] transition-colors">About</a>
        <a href="#contact" className="text-xs sm:text-sm font-medium text-gray-300 hover:text-[#00FFA3] transition-colors">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;