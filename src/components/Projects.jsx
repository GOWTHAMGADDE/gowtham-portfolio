import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Crosshair, CheckCircle2, Eye, ShieldAlert, Cpu, Sparkles, Layers, ArrowUpRight, Zap, RefreshCw, Moon } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  // Project 01 State: Wildlife Bounding Box Playground
  const [p1SampleIdx, setP1SampleIdx] = useState(0);
  const [p1ScanAnim, setP1ScanAnim] = useState(true);

  // Project 02 State: Crop Scanner
  const [p2SampleIdx, setP2SampleIdx] = useState(0);
  const [p2Scanning, setP2Scanning] = useState(true);

  // Project 03 State: Camera Trap Night Vision
  const [p3NightMode, setP3NightMode] = useState(true);
  const [p3SampleIdx, setP3SampleIdx] = useState(0);

  const p1Current = projects[0].samples[p1SampleIdx];
  const p2Current = projects[1].samples[p2SampleIdx];
  const p3Current = projects[2].samples[p3SampleIdx];

  const handleP1Switch = (idx) => {
    setP1ScanAnim(false);
    setP1SampleIdx(idx);
    setTimeout(() => setP1ScanAnim(true), 150);
  };

  const handleP2Switch = (idx) => {
    setP2Scanning(false);
    setP2SampleIdx(idx);
    setTimeout(() => setP2Scanning(true), 200);
  };

  return (
    <section id="projects" className="py-24 bg-[#040711] relative cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-800 pb-6">
          <div>
            <div className="font-mono text-xs text-[#00f0ff] font-semibold tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping"></span>
              04 // FEATURED SYSTEMS & PROJECT ARCHIVE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-sky-400 to-[#00ff9d]">PROJECTS</span>
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-md mt-4 md:mt-0">
            Interactive computer vision & machine learning systems built with Python and YOLOv8.
          </p>
        </div>

        <div className="space-y-16">
          
          {/* ========================================================================= */}
          {/* PROJECT 01 — WILDLIFE ANIMAL DETECTION SYSTEM (FLAGSHIP) */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl cyber-glass border border-[#00f0ff]/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden group"
          >
            {/* Corner HUD Markers */}
            <div className="hud-corner-tl"></div>
            <div className="hud-corner-tr"></div>
            <div className="hud-corner-bl"></div>
            <div className="hud-corner-br"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-3 py-1 rounded bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/30 font-bold">
                    {projects[0].num}
                  </span>
                  <span className="px-3 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    {projects[0].category}
                  </span>
                  <span className="text-xs text-[#00ff9d] font-bold">FLAGSHIP SYSTEM</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight group-hover:text-[#00f0ff] transition-colors">
                  {projects[0].title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {projects[0].shortDesc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                  {projects[0].tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Interactive Species Selector */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <div className="font-mono text-[11px] text-slate-400 flex items-center justify-between">
                    <span>SELECT INFERENCE SPECIES:</span>
                    <span className="text-[#00f0ff]">YOLOv8 DETECTOR ACTIVE</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {projects[0].samples.map((sample, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleP1Switch(sIdx)}
                        className={`px-3 py-2 rounded-lg font-mono text-xs transition-all flex items-center justify-between ${
                          p1SampleIdx === sIdx
                            ? 'bg-[#00f0ff]/20 border border-[#00f0ff] text-[#00f0ff] font-bold shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                            : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <span>{sample.name.split(' ')[1] || sample.name}</span>
                        {p1SampleIdx === sIdx && <Zap className="w-3 h-3 text-[#00f0ff]" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => setSelectedModalProject(projects[0])}
                    className="px-6 py-3 rounded-lg bg-[#00f0ff] text-black font-bold text-xs flex items-center gap-2 hover:bg-[#00d0ff] transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Right Interactive Detection Canvas */}
              <div className="lg:col-span-6">
                <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-[#00f0ff]/30 aspect-[4/3] shadow-xl">
                  
                  {/* Active Sample Image */}
                  <img
                    src={p1Current.image}
                    alt={p1Current.name}
                    className="w-full h-full object-cover transition-all duration-300 brightness-90"
                  />

                  {/* Grid Overlay */}
                  <div className="absolute inset-0 cyber-grid-dense opacity-40 pointer-events-none"></div>

                  {/* Animated Scanning Line */}
                  {p1ScanAnim && (
                    <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_12px_#00f0ff] animate-laser pointer-events-none"></div>
                  )}

                  {/* Bounding Box Visualizer */}
                  {p1ScanAnim && (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        top: p1Current.box.top,
                        left: p1Current.box.left,
                        width: p1Current.box.width,
                        height: p1Current.box.height,
                        borderColor: p1Current.color,
                      }}
                      className="absolute border-2 rounded shadow-[0_0_20px_rgba(0,240,255,0.4)] pointer-events-none transition-all duration-300"
                    >
                      {/* Bounding Box Label Tag */}
                      <div
                        style={{ backgroundColor: p1Current.color }}
                        className="absolute -top-6 left-0 px-2 py-0.5 text-black font-mono text-[10px] font-bold rounded-t flex items-center gap-1 shadow"
                      >
                        <Crosshair className="w-3 h-3" />
                        <span>{p1Current.label} ({p1Current.confidence})</span>
                      </div>

                      {/* Bounding Box Reticle Corners */}
                      <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2" style={{ borderColor: p1Current.color }}></div>
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2" style={{ borderColor: p1Current.color }}></div>
                      <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2" style={{ borderColor: p1Current.color }}></div>
                      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2" style={{ borderColor: p1Current.color }}></div>
                    </motion.div>
                  )}

                  {/* Top Canvas Bar */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded bg-slate-950/80 border border-slate-800 font-mono text-[10px] text-slate-300 backdrop-blur-md">
                    <span className="flex items-center gap-1.5 text-[#00f0ff]">
                      <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping"></span>
                      YOLOv8 INFERENCE PIPELINE
                    </span>
                    <span>FRAME: 1920x1080</span>
                  </div>

                  {/* Bottom Species Info Bar */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded bg-slate-950/90 border border-slate-800 font-mono text-[11px] text-slate-300 backdrop-blur-md">
                    <div className="flex justify-between text-[#00ff9d]">
                      <span>{p1Current.name}</span>
                      <span>CONF: {p1Current.confidence}</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{p1Current.speciesInfo}</div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* PROJECT 02 — CROP DISEASE DETECTION SYSTEM */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl cyber-glass border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-[#00ff9d]/30 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Interactive Leaf Scanner Canvas */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[4/3] shadow-xl">
                  
                  <img
                    src={p2Current.image}
                    alt={p2Current.name}
                    className="w-full h-full object-cover transition-all duration-300 brightness-95"
                  />

                  {/* Spectral Laser Scan Overlay */}
                  {p2Scanning && (
                    <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent shadow-[0_0_15px_#00ff9d] animate-laser pointer-events-none"></div>
                  )}

                  {/* Spectral Scan Overlay Tint */}
                  <div
                    style={{ backgroundColor: p2Current.color }}
                    className="absolute inset-0 opacity-15 pointer-events-none transition-colors duration-300"
                  ></div>

                  {/* Diagnostic Banner */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded bg-slate-950/90 border border-slate-800 font-mono text-[11px] backdrop-blur-md">
                    <span className="text-slate-300 font-semibold">{p2Current.name}</span>
                    <span
                      style={{ color: p2Current.color }}
                      className="font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-700"
                    >
                      {p2Current.status} ({p2Current.confidence})
                    </span>
                  </div>

                  {/* Bottom Diagnostic Action Box */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded bg-slate-950/90 border border-slate-800 font-mono text-[11px] space-y-1 backdrop-blur-md">
                    <div className="text-slate-400 text-[10px]">DIAGNOSTIC ANALYSIS:</div>
                    <div className="text-slate-200">{p2Current.condition}</div>
                    <div className="text-[10px]" style={{ color: p2Current.color }}>
                      ▶ RECOMMENDATION: {p2Current.action}
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Details */}
              <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-3 py-1 rounded bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/30 font-bold">
                    {projects[1].num}
                  </span>
                  <span className="px-3 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    {projects[1].category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight group-hover:text-[#00ff9d] transition-colors">
                  {projects[1].title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {projects[1].shortDesc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                  {projects[1].tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Interactive Leaf Sample Switcher */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <div className="font-mono text-[11px] text-slate-400 flex items-center justify-between">
                    <span>CROP LEAF SAMPLES:</span>
                    <span className="text-[#00ff9d]">IMAGE PREPROCESSING ACTIVE</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {projects[1].samples.map((sample, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleP2Switch(sIdx)}
                        className={`px-3 py-2 rounded-lg font-mono text-xs transition-all text-left ${
                          p2SampleIdx === sIdx
                            ? 'bg-[#00ff9d]/20 border border-[#00ff9d] text-[#00ff9d] font-bold'
                            : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="truncate">{sample.name.split(' ')[0]}</div>
                        <div className="text-[10px] opacity-75">{sample.status}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => setSelectedModalProject(projects[1])}
                    className="px-6 py-3 rounded-lg bg-[#00ff9d] text-black font-bold text-xs flex items-center gap-2 hover:bg-[#00e08b] transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* PROJECT 03 — CAMERA TRAP SPECIES DETECTION SYSTEM */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl cyber-glass border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-[#38bdf8]/40 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-3 py-1 rounded bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/30 font-bold">
                    {projects[2].num}
                  </span>
                  <span className="px-3 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    {projects[2].category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight group-hover:text-[#38bdf8] transition-colors">
                  {projects[2].title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {projects[2].shortDesc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                  {projects[2].tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Camera Trap Telemetry Box */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span>FIELD CAMERA TRAP LOCATION:</span>
                    <span className="text-[#38bdf8]">{p3Current.coords}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-200 bg-slate-900 p-2.5 rounded border border-slate-800">
                    <span>{p3Current.name}</span>
                    <button
                      onClick={() => setP3NightMode(!p3NightMode)}
                      className="px-2.5 py-1 rounded bg-[#38bdf8]/20 border border-[#38bdf8] text-[#38bdf8] text-[10px] flex items-center gap-1"
                    >
                      <Moon className="w-3 h-3" />
                      <span>{p3NightMode ? 'IR NIGHT MODE ON' : 'DAYLIGHT MODE'}</span>
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => setSelectedModalProject(projects[2])}
                    className="px-6 py-3 rounded-lg bg-[#38bdf8] text-black font-bold text-xs flex items-center gap-2 hover:bg-[#0284c7] transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Right Infrared Field Camera Visualizer */}
              <div className="lg:col-span-6">
                <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[4/3] shadow-xl">
                  
                  <img
                    src={p3Current.image}
                    alt={p3Current.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      p3NightMode ? 'brightness-75 contrast-150 grayscale hue-rotate-90' : 'brightness-95'
                    }`}
                  />

                  {/* Night Vision Thermal Filter Overlay */}
                  {p3NightMode && (
                    <div className="absolute inset-0 bg-[#00ff9d]/15 mix-blend-color-dodge pointer-events-none"></div>
                  )}

                  {/* Night Vision Scanlines */}
                  <div className="absolute inset-0 cyber-grid-dense opacity-30 pointer-events-none"></div>

                  {/* Bounding Box Reticle */}
                  <div className="absolute top-[20%] left-[20%] right-[20%] bottom-[20%] border-2 border-[#00ff9d] rounded pointer-events-none shadow-[0_0_15px_#00ff9d]">
                    <div className="absolute -top-6 left-0 px-2 py-0.5 bg-[#00ff9d] text-black font-mono text-[10px] font-bold rounded-t">
                      TRAP DETECTED: {p3Current.species} ({p3Current.confidence})
                    </div>
                  </div>

                  {/* Top Night Vision HUD Telemetry */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded bg-slate-950/90 border border-slate-800 font-mono text-[10px] text-[#00ff9d] backdrop-blur-md">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                      REC // CAMERA TRAP 04
                    </span>
                    <span>TIMESTAMP: {p3Current.time}</span>
                  </div>

                  {/* Bottom Coords Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between px-3 py-1.5 rounded bg-slate-950/90 border border-slate-800 font-mono text-[10px] text-slate-300 backdrop-blur-md">
                    <span>MODE: {p3Current.mode}</span>
                    <span>YOLOv8 // AUTOMATED SENSING</span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Modal Pop-up */}
        <ProjectModal
          project={selectedModalProject}
          onClose={() => setSelectedModalProject(null)}
        />

      </div>
    </section>
  );
}
