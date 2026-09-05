import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Zap, Trophy, Star } from 'lucide-react';
import { certifications, achievements } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-[#060b19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-slate-800 pb-6">
          <div>
            <div className="font-mono text-xs text-[#00f0ff] font-semibold tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
              07 & 08 // CERTIFICATIONS & CORE STRENGTHS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              VERIFIED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#00ff9d]">CREDENTIALS</span>
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-md mt-4 md:mt-0">
            Professional certifications and core engineering strengths.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Certifications (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-mono text-xs font-semibold text-[#00f0ff] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#00f0ff]" />
              OFFICIAL CERTIFICATIONS
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-xl cyber-glass border border-slate-800 hover:border-[#00f0ff]/40 transition-all duration-300 group flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] shrink-0 group-hover:bg-[#00f0ff] group-hover:text-black transition-all">
                    <ShieldCheck className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-mono text-[11px]">
                      <span className="text-[#00ff9d] font-bold">{cert.issuer}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">{cert.code}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-100 group-hover:text-[#00f0ff] transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Achievements & Strengths (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-mono text-xs font-semibold text-[#00ff9d] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#00ff9d]" />
              KEY ACHIEVEMENTS & STRENGTHS
            </h3>

            <div className="space-y-4">
              
              {/* Strength 1 */}
              <div className="p-6 rounded-xl cyber-glass border border-slate-800 space-y-2">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-100 font-bold flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ACADEMIC PERFORMANCE
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#00ff9d]/20 text-[#00ff9d] font-bold">
                    CGPA 8.99
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Maintained consistently high academic standing throughout undergraduate computer science studies at KLEF.
                </p>
              </div>

              {/* Strength 2 */}
              <div className="p-6 rounded-xl cyber-glass border border-slate-800 space-y-2">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-100 font-bold flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#00f0ff]" />
                    AI & COMPUTER VISION
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#00f0ff]/20 text-[#00f0ff] font-bold">
                    YOLOv8
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Hands-on experience developing AI/ML solutions for wildlife species detection, camera trap analysis, and crop disease classification.
                </p>
              </div>

              {/* Strength 3 */}
              <div className="p-6 rounded-xl cyber-glass border border-slate-800 space-y-2">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-100 font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff9d]" />
                    PRACTICAL PROBLEM SOLVING
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                    CSE UNDERGRAD
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Ability to analyze domain problems and develop practical working solutions using programming, machine learning, and computer vision.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
