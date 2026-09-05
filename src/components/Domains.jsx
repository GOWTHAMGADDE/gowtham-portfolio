import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, Code2, Lightbulb, ChevronRight } from 'lucide-react';
import { domains } from '../data/portfolioData';

const iconMap = {
  "01": Brain,
  "02": Eye,
  "03": Code2,
  "04": Lightbulb,
};

export default function Domains() {
  return (
    <section id="domains" className="py-20 bg-[#040711] relative cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-slate-800/80 pb-6">
          <div>
            <div className="font-mono text-xs text-[#00f0ff] font-semibold tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
              02 // PROFESSIONAL DOMAINS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              WHAT I <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#00ff9d]">BUILD</span>
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-md mt-4 md:mt-0">
            Engineered systems at the intersection of machine learning, computer vision, and software engineering.
          </p>
        </div>

        {/* 4 Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain, idx) => {
            const IconComponent = iconMap[domain.id] || Brain;
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-xl cyber-glass p-8 hover:border-[#00f0ff]/40 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* HUD Header Bar */}
                <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#00ff9d] tracking-widest">{domain.code}</span>
                  </div>
                  <span className="font-mono text-xl font-bold text-slate-600 group-hover:text-[#00f0ff] transition-colors">
                    {domain.id}
                  </span>
                </div>

                {/* Card Title & Desc */}
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-[#00f0ff] transition-colors">
                  {domain.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {domain.description}
                </p>

                {/* Tag badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                  {domain.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-300 group-hover:border-[#00f0ff]/20 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom Corner Accent */}
                <div className="absolute bottom-3 right-3 text-slate-600 group-hover:text-[#00f0ff] transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
