import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Crosshair, ArrowUpRight, Cpu, Eye, Code, Award, CheckCircle2, RefreshCw } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [scanActive, setScanActive] = useState(true);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [confidence, setConfidence] = useState(99.8);
  const [inferenceTime, setInferenceTime] = useState(14);
  const [hudLogs, setHudLogs] = useState([
    '[SYSTEM_INIT] Neural visual pipeline online',
    '[YOLOv8] Loading model weights (wildlife_v8.pt)',
    '[FACE_DETECTION] Subject identified: GADDE GOWTHAM CHOWDARY',
    '[CONFIDENCE] 0.998 — Classification: AI/ML Engineer (CSE Undergrad)'
  ]);

  // Simulate subtle telemetry variations
  useEffect(() => {
    const interval = setInterval(() => {
      setInferenceTime((12 + Math.random() * 4).toFixed(1));
      setConfidence((99.5 + Math.random() * 0.4).toFixed(1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const triggerRescan = () => {
    setScanActive(false);
    setHudLogs(prev => [
      ...prev.slice(-3),
      `[RE-SCAN] Triggered manually at ${new Date().toLocaleTimeString()}`,
      `[YOLOv8] Processing facial landmarks & feature matrix...`
    ]);
    setTimeout(() => {
      setScanActive(true);
    }, 400);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center cyber-grid overflow-hidden">
      
      {/* Glow Orbs background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00ff9d]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Section Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-semibold tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping"></span>
            01 // HERO OVERVIEW
          </div>
          <div className="h-[1px] w-24 bg-gradient-to-r from-[#00f0ff]/50 to-transparent"></div>
          <span className="font-mono text-xs text-slate-400 hidden sm:inline-block">LOC: VIJAYAWADA, AP</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Identity & Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <div className="font-mono text-xs text-[#00ff9d] tracking-widest uppercase flex items-center gap-2">
                <Code className="w-4 h-4 text-[#00ff9d]" />
                <span>{personalInfo.title}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.05]">
                GADDE GOWTHAM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-sky-300 to-[#00ff9d]">
                  CHOWDARY
                </span>
              </h1>
            </div>

            {/* Positioning Tags */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                AI / MACHINE LEARNING
              </span>
              <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[#00f0ff]">
                COMPUTER VISION & YOLOv8
              </span>
              <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                SOFTWARE ENGINEERING
              </span>
            </div>

            {/* Subtitle Statement */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed border-l-2 border-[#00f0ff] pl-4">
              "{personalInfo.tagline}"
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
              Computer Science & Engineering undergraduate at <strong className="text-slate-200 font-semibold">KLEF (KL University)</strong> with strong foundations in DSA, Java, C, SQL, and Object-Oriented Programming. Specialized in building practical object detection and image-processing systems using <strong className="text-[#00f0ff] font-mono">Python</strong> and <strong className="text-[#00ff9d] font-mono">YOLOv8</strong>.
            </p>

            {/* Key Telemetry Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#090f1e]/90 border border-slate-800">
                <div className="text-slate-400 text-[10px]">ACADEMIC CGPA</div>
                <div className="text-lg font-bold text-[#00ff9d]">8.99 / 10.00</div>
                <div className="text-[10px] text-slate-400">KLEF B.Tech CSE</div>
              </div>
              <div className="p-3 rounded-lg bg-[#090f1e]/90 border border-slate-800">
                <div className="text-slate-400 text-[10px]">PRIMARY VISION ENGINE</div>
                <div className="text-lg font-bold text-[#00f0ff]">YOLOv8</div>
                <div className="text-[10px] text-slate-400">Object Detection</div>
              </div>
              <div className="p-3 rounded-lg bg-[#090f1e]/90 border border-slate-800 col-span-2 sm:col-span-1">
                <div className="text-slate-400 text-[10px]">FEATURED SYSTEMS</div>
                <div className="text-lg font-bold text-slate-100">03 PROJECTS</div>
                <div className="text-[10px] text-slate-400">Wildlife & Crop Vision</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#00f0ff] to-[#00c8ff] text-black font-semibold text-sm flex items-center gap-2 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                <Terminal className="w-4 h-4" />
                <span>EXPLORE FEATURED PROJECTS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-lg bg-[#090f1e] border border-slate-800 text-slate-200 font-mono text-xs hover:border-[#00f0ff]/40 hover:text-[#00f0ff] transition-all flex items-center gap-2"
              >
                <span>INITIATE CONTACT</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Interactive Cyber Portrait Scanner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Frame Container */}
            <div className="relative rounded-2xl cyber-glass p-3 border border-[#00f0ff]/30 shadow-2xl overflow-hidden group">
              
              {/* HUD Corner Markers */}
              <div className="hud-corner-tl"></div>
              <div className="hud-corner-tr"></div>
              <div className="hud-corner-bl"></div>
              <div className="hud-corner-br"></div>

              {/* Top HUD Telemetry Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-950/80 border-b border-slate-800 font-mono text-[11px] mb-3">
                <div className="flex items-center gap-2 text-[#00f0ff]">
                  <Crosshair className="w-3.5 h-3.5 animate-spin" />
                  <span>TARGET_LOCK: GOWTHAM</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span>INF: <strong className="text-[#00ff9d]">{inferenceTime}ms</strong></span>
                  <span>CONF: <strong className="text-[#00f0ff]">{confidence}%</strong></span>
                </div>
              </div>

              {/* Image Frame with Scanning Laser */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[4/5] border border-slate-800">
                
                {/* Provided Portrait Image */}
                <img
                  src={personalInfo.portrait}
                  alt="Gadde Gowtham Chowdary"
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    wireframeMode ? 'invert contrast-200 hue-rotate-180 brightness-90' : 'contrast-105'
                  }`}
                />

                {/* Cyber Matrix Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                <div className="absolute inset-0 cyber-grid-dense opacity-40 pointer-events-none"></div>

                {/* Laser Scan Line */}
                {scanActive && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_15px_#00f0ff] animate-laser pointer-events-none"></div>
                )}

                {/* Simulated Bounding Box Reticle */}
                <div className="absolute top-[18%] left-[16%] right-[16%] bottom-[28%] border-2 border-[#00f0ff] rounded-lg shadow-[0_0_20px_rgba(0,240,255,0.4)] pointer-events-none transition-all duration-300">
                  
                  {/* Bounding Box Corner Indicators */}
                  <div className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-[#00f0ff]"></div>
                  <div className="absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 border-[#00f0ff]"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 border-[#00f0ff]"></div>
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-[#00f0ff]"></div>

                  {/* Top Label Tag */}
                  <div className="absolute -top-7 left-0 px-2 py-0.5 bg-[#00f0ff] text-black font-mono text-[10px] font-bold rounded-t flex items-center gap-1 shadow-md">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>DEVELOPER: GOWTHAM ({confidence}%)</span>
                  </div>

                  {/* Bottom Telemetry Tag */}
                  <div className="absolute -bottom-7 right-0 px-2 py-0.5 bg-slate-950/90 border border-[#00f0ff]/40 text-[#00f0ff] font-mono text-[10px] rounded">
                    YOLOv8 // AI_ML_CSE
                  </div>
                </div>

                {/* Floating Interactive HUD Controls */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 z-20">
                  <button
                    onClick={triggerRescan}
                    className="px-3 py-1.5 rounded bg-slate-950/80 hover:bg-[#00f0ff]/20 border border-[#00f0ff]/40 text-[#00f0ff] font-mono text-[11px] flex items-center gap-1.5 transition-all backdrop-blur-md"
                  >
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>RE-SCAN ENGINE</span>
                  </button>

                  <button
                    onClick={() => setWireframeMode(!wireframeMode)}
                    className={`px-3 py-1.5 rounded border font-mono text-[11px] transition-all backdrop-blur-md ${
                      wireframeMode
                        ? 'bg-[#00ff9d]/20 border-[#00ff9d] text-[#00ff9d]'
                        : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-[#00f0ff]/40'
                    }`}
                  >
                    {wireframeMode ? 'SPECTRAL MODE' : 'RGB MODE'}
                  </button>
                </div>
              </div>

              {/* Bottom HUD Log Console */}
              <div className="mt-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[10px] text-slate-400 space-y-1 h-20 overflow-y-auto">
                {hudLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[#00f0ff] select-none">&gt;</span>
                    <span className={idx === hudLogs.length - 1 ? 'text-[#00ff9d] font-semibold' : ''}>{log}</span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
