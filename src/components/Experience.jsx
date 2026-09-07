import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Section from "./common/Section";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <Section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 mb-6">
          <Sparkles size={17} className="text-[#7C3AED]" />
          <span className="text-sm text-[#7C3AED]">Career Journey</span>
        </div>
        <h2 className="section-heading text-white">
          My <span className="text-[#7C3AED] drop-shadow-[0_0_25px_rgba(124,58,237,0.5)]">Experience</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-[17px] leading-relaxed text-gray-400">
          A step-by-step overview of my internships, training and frontend development experience.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#7C3AED] via-[#7C3AED]/50 to-transparent sm:left-8" />

        <div className="flex flex-col gap-12">
          {experience.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#7C3AED]/50 bg-[#7C3AED]/15 text-lg font-black text-[#A855F7] shadow-[0_0_25px_rgba(124,58,237,0.2)] sm:h-16 sm:w-16 sm:rounded-3xl">
                {item.step}
              </div>

              <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#7C3AED]/40 hover:shadow-[0_20px_60px_rgba(124,58,237,0.2)]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-[#A855F7]">{item.company}</p>
                    <h3 className="mt-1 text-xl font-bold text-white md:text-2xl">{item.title}</h3>
                  </div>
                  {item.current && (
                    <motion.span
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="rounded-full bg-[#7C3AED] px-3 py-1 text-xs font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                    >
                      Current
                    </motion.span>
                  )}
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">{item.desc}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500 sm:text-sm">
                  <span><strong className="font-semibold text-gray-300">From:</strong> {item.from}</span>
                  <span><strong className="font-semibold text-gray-300">To:</strong> {item.to}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
