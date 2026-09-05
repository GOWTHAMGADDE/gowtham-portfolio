import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Brain, Globe2, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo, languages } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#060b19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-slate-800 pb-6">
          <div>
            <div className="font-mono text-xs text-[#00f0ff] font-semibold tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
              05 // BIOGRAPHY & STORYTELLING
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#00ff9d]">ME</span>
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-xs max-w-md mt-4 md:mt-0">
            CSE Undergraduate focused on practical AI/ML engineering, image processing, and algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Story Narrative (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Story Card 1: Core Identity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-xl cyber-glass border border-slate-800 space-y-4"
            >
              <div className="flex items-center gap-3 font-mono text-xs text-[#00f0ff]">
                <User className="w-4 h-4" />
                <span>01 // THE CSE UNDERGRADUATE</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Foundations in Data Structures, Algorithms & OOP
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                I am a Computer Science and Engineering undergraduate at Koneru Lakshmaiah Education Foundation with strong core foundations in <strong className="text-slate-100 font-semibold">Data Structures, Algorithms, Object-Oriented Programming, Operating Systems, DBMS, and Computer Networks</strong>. I focus on writing structured, efficient code in C, Java, Python, and SQL.
              </p>
            </motion.div>

            {/* Story Card 2: AI/ML & Computer Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-xl cyber-glass border border-slate-800 space-y-4"
            >
              <div className="flex items-center gap-3 font-mono text-xs text-[#00ff9d]">
                <Brain className="w-4 h-4" />
                <span>02 // THE AI/ML & VISION FOCUS</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Practical Object Detection with Python & YOLOv8
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                My strongest portfolio direction is practical <strong className="text-[#00ff9d] font-semibold">AI/ML and Computer Vision</strong>. I have hands-on experience building custom computer vision applications using <strong className="text-[#00f0ff] font-mono">Python</strong> and <strong className="text-[#00ff9d] font-mono">YOLOv8</strong>, developing image processing pipelines, bounding-box telemetry generators, and classification systems for wildlife species and crop disease diagnosis.
              </p>
            </motion.div>

            {/* Story Card 3: Engineering Purpose */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-xl cyber-glass border border-slate-800 space-y-4"
            >
              <div className="flex items-center gap-3 font-mono text-xs text-sky-400">
                <Code2 className="w-4 h-4" />
                <span>03 // REAL-WORLD PROBLEM SOLVING</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Building Functional Systems for Real-World Impact
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                I am interested in developing systems that can solve real-world problems through programming, machine learning, image processing, and object detection. Rather than theoretical abstractions, I enjoy engineering end-to-end software tools that deliver concrete value to field monitoring and agricultural diagnostics.
              </p>
            </motion.div>

          </div>

          {/* Right Sidebar: Quick Facts & Languages (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Developer ID Card */}
            <div className="p-6 rounded-xl cyber-glass border border-[#00f0ff]/30 space-y-4 relative overflow-hidden">
              <div className="hud-corner-tl"></div>
              <div className="hud-corner-br"></div>

              <div className="flex items-center gap-3 border-b border-slate-800 pb-3 font-mono text-xs">
                <Terminal className="w-4 h-4 text-[#00f0ff]" />
                <span className="text-[#00f0ff] font-bold">DEVELOPER IDENTIFIER</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <div className="text-slate-400 text-[10px]">NAME</div>
                  <div className="text-slate-100 font-bold">GADDE GOWTHAM CHOWDARY</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px]">ROLE</div>
                  <div className="text-[#00ff9d]">Software Engineer – AI/ML</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px]">UNIVERSITY</div>
                  <div className="text-slate-200">KLEF (KL University)</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px]">CGPA SCORE</div>
                  <div className="text-[#00f0ff] font-bold">8.99 / 10.00</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px]">LOCATION</div>
                  <div className="text-slate-300">Vijayawada, Andhra Pradesh, India</div>
                </div>
              </div>
            </div>

            {/* Languages Proficiency Card */}
            <div className="p-6 rounded-xl cyber-glass border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3 font-mono text-xs text-slate-300">
                <Globe2 className="w-4 h-4 text-[#00ff9d]" />
                <span className="font-bold">LANGUAGES PROFICIENCY</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div>
                      <span className="text-slate-200 font-semibold">{lang.name}</span>
                      <span className="text-[10px] text-slate-400 ml-2">({lang.level})</span>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <span
                          key={dot}
                          className={`w-2 h-2 rounded-full ${
                            dot <= lang.dots ? 'bg-[#00f0ff]' : 'bg-slate-800'
                          }`}
                        ></span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
