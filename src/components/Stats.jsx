export default function Stats() {
  const skills = [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Node.js",
    "GitHub",
    "REST APIs",
    "React Hooks",
    "Responsive Design",
  ];

  return (
    <div className="animate-fadeInUp">

      {/* STATS */}
      <div className="flex flex-wrap justify-center gap-6 pb-10">
        {[
          { value: "2+", label: "Years Learning" },
          { value: "5+", label: "Projects" },
          { value: "100%", label: "Dedication" },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 w-40 text-center rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-3xl font-bold text-[#7C3AED]">
              {item.value}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>

      {/* FULL WIDTH SKILLS BAR (YOUR WEBSITE COLORS) */}
      <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#2563EB] py-5">

        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 text-white text-sm md:text-base font-medium px-6">

          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="hover:opacity-100 opacity-90 transition cursor-pointer">
                {skill}
              </span>

              {index !== skills.length - 1 && (
                <span className="text-white/70 text-lg">•</span>
              )}
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}