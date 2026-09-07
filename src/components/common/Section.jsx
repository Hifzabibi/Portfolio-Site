export default function Section({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-28 px-6 md:px-10 lg:px-12 overflow-hidden scroll-mt-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
      </div>
    </section>
  );
}
