import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Cpu, Wrench, CheckCircle2 } from 'lucide-react';
import { techStack } from '../data/portfolioData';

const iconMap = {
  "PROGRAMMING LANGUAGES": Code2,
  "AI / ML / COMPUTER VISION": Brain,
  "CS FUNDAMENTALS": Cpu,
  "DEVELOPMENT TOOLS": Wrench
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(techStack[0].category);

  const currentCategoryObj = techStack.find(cat => cat.category === activeCategory) || techStack[0];

  return (
    <section id="skills" className="py-20 bg-[#060b19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-800 pb-6">
          <div>
            <div className="font-mono text-xs text-[#00ff9d] font-semibold tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff9d]"></span>
              03 // TECHNICAL MATRIX
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              VERIFIED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-[#00f0ff]">STACK</span>
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-md mt-4 md:mt-0">
            Strictly derived from academic coursework, machine learning systems, and computer vision projects.
          </p>
        </div>

        {/* Category Tabs Header */}
        <div className="flex flex-wrap gap-3 mb-10">
          {techStack.map((cat) => {
            const Icon = iconMap[cat.category] || Code2;
            const isActive = activeCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-5 py-3 rounded-lg font-mono text-xs tracking-wider flex items-center gap-2.5 transition-all duration-200 ${
                  isActive
                    ? 'bg-[#00f0ff]/15 border border-[#00f0ff] text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.2)] font-semibold'
                    : 'bg-[#090f1e] border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#00f0ff]' : 'text-slate-400'}`} />
                <span>{cat.category}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                  isActive ? 'bg-[#00f0ff]/20 text-[#00f0ff]' : 'bg-slate-800 text-slate-400'
                }`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skill Items Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentCategoryObj.skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl cyber-glass border border-slate-800/80 hover:border-[#00f0ff]/40 transition-all duration-200 group relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff9d]" />
                  <span>{skill.name}</span>
                </h3>
                <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-[#00f0ff]">
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {skill.desc}
              </p>

              {/* Faint Grid Lines */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#00f0ff]/10 group-hover:border-[#00f0ff]/30 transition-colors pointer-events-none"></div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-12 p-4 rounded-xl bg-[#090f1e]/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <span className="w-2 h-2 rounded-full bg-[#00ff9d]"></span>
            <span>VERIFICATION RULE: NO UNVERIFIED / INVENTED TECHNOLOGIES INCLUDED</span>
          </div>
          <span className="text-[#00f0ff]">KLEF CSE DEPT // ACADEMIC & PROJECT SYLLABUS</span>
        </div>

      </div>
    </section>
  );
}
