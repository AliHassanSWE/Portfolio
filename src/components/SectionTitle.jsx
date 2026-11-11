const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{title}</h2>
      {subtitle && <p className="text-primary font-medium">{subtitle}</p>}
      <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;