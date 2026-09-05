import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Cpu, Terminal, ArrowUpRight, Code, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose}></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl rounded-2xl cyber-glass border border-[#00f0ff]/40 p-6 sm:p-8 bg-[#070d1e] shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* HUD Corner Markers */}
          <div className="hud-corner-tl"></div>
          <div className="hud-corner-tr"></div>
          <div className="hud-corner-bl"></div>
          <div className="hud-corner-br"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/40 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Metadata */}
          <div className="space-y-4 mb-6">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="px-3 py-1 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30">
                {project.num}
              </span>
              <span className="px-3 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                {project.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              {project.title}
            </h2>
          </div>

          {/* Body Content */}
          <div className="space-y-6 text-sm text-slate-300 font-sans leading-relaxed">
            
            {/* Overview */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <h3 className="font-mono text-xs font-semibold text-[#00f0ff] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                SYSTEM ARCHITECTURE OVERVIEW
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {project.fullDesc}
              </p>
            </div>

            {/* Purpose & Impact */}
            <div className="p-4 rounded-xl bg-[#00ff9d]/5 border border-[#00ff9d]/20 text-[#00ff9d]">
              <div className="font-mono text-xs font-semibold tracking-wider uppercase mb-1 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                REAL-WORLD PURPOSE & CONSERVATION IMPACT
              </div>
              <p className="text-xs text-slate-200">
                {project.purpose}
              </p>
            </div>

            {/* Technical Highlights */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs font-semibold text-slate-100 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#00f0ff]" />
                KEY TECHNICAL IMPLEMENTATIONS & FEATURES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff9d] shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="pt-2">
              <div className="font-mono text-xs text-slate-400 mb-2">VERIFIED TECHNOLOGY STACK:</div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded bg-[#090f1e] border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-center font-mono text-xs">
            <span className="text-slate-500">AUTHOR: GADDE GOWTHAM CHOWDARY</span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-[#00f0ff] text-black font-bold hover:bg-[#00d0ff] transition-all"
            >
              CLOSE CASE STUDY
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
