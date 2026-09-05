import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-[#040711] relative cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-800 pb-6">
          <div>
            <div className="font-mono text-xs text-[#00ff9d] font-semibold tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff9d]"></span>
              06 // ACADEMIC & TECHNICAL TIMELINE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              EDUCATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-[#00f0ff]">CHRONICLE</span>
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-md mt-4 md:mt-0">
            Academic achievements, degree milestones, and foundational coursework.
          </p>
        </div>

        {/* Timeline Line Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 bg-gradient-to-b from-[#00f0ff] via-[#00ff9d] to-slate-800 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {education.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Center Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#040711] border-2 border-[#00f0ff] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                    <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ml-10 sm:ml-0 ${
                    isEven ? 'sm:pr-8' : 'sm:pl-8'
                  }`}>
                    <div className="p-6 rounded-xl cyber-glass border border-slate-800 hover:border-[#00f0ff]/40 transition-all duration-300 group">
                      
                      {/* Top Badge & Date */}
                      <div className="flex items-center justify-between gap-2 mb-3 font-mono text-xs">
                        <span className="px-2.5 py-0.5 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-bold">
                          {item.period}
                        </span>
                        <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[#00ff9d] font-bold">
                          {item.gradeLabel}: {item.grade}
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-[#00f0ff] transition-colors mb-1">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5 font-sans">
                        <GraduationCap className="w-4 h-4 text-[#00f0ff]" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Location & Details */}
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono mb-3">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.location}</span>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed font-sans border-t border-slate-800/80 pt-3">
                        {item.details}
                      </p>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
