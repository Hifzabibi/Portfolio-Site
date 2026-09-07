import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Technologies" },
  { value: "6", label: "Projects" },
  { value: "2+", label: "Years Learning" },
  { value: "100%", label: "Curiosity" },
];

export default function Stats() {
  return (
    <div className="px-6 md:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="border border-white/10 bg-white/5 rounded-2xl p-5 text-center"
          >
            <p className="text-2xl md:text-3xl font-black text-[#7C3AED]">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
