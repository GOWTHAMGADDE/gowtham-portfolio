import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Terminal, ArrowUpRight, Copy, Check, Globe, Share2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#040711] relative cyber-grid overflow-hidden border-t border-slate-800">
      
      {/* Background glow orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-t from-[#00f0ff]/10 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Container */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-semibold tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-ping"></span>
            09 // INITIATE COLLABORATION
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
            LET'S BUILD PRACTICAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-sky-300 to-[#00ff9d]">
              AI/ML SYSTEMS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Interested in discussing AI/ML projects, computer vision initiatives, object detection pipelines, or software engineering roles? Feel free to reach out.
          </p>

          {/* Contact Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            
            {/* Direct Email Button */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#00c8ff] text-black font-bold text-sm flex items-center gap-3 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              <span>SEND EMAIL (2300033152cse1@gmail.com)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="px-6 py-4 rounded-xl bg-[#090f1e] border border-slate-800 text-slate-200 font-mono text-xs hover:border-[#00f0ff]/40 hover:text-[#00f0ff] transition-all flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-[#00ff9d]" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? 'EMAIL COPIED!' : 'COPY ADDRESS'}</span>
            </button>

          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 text-left font-mono text-xs">
            
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-5 rounded-xl cyber-glass border border-slate-800 hover:border-[#00f0ff]/40 transition-all group"
            >
              <div className="text-slate-400 text-[10px] mb-1 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>PRIMARY EMAIL</span>
              </div>
              <div className="text-slate-200 font-bold group-hover:text-[#00f0ff] transition-colors truncate">
                {personalInfo.email}
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl cyber-glass border border-slate-800 hover:border-[#00f0ff]/40 transition-all group"
            >
              <div className="text-slate-400 text-[10px] mb-1 flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-[#00ff9d]" />
                <span>LINKEDIN PROFILE</span>
              </div>
              <div className="text-slate-200 font-bold group-hover:text-[#00ff9d] transition-colors flex items-center justify-between">
                <span>gowtham-chowdary-gadde</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#00ff9d]" />
              </div>
            </a>

            <div className="p-5 rounded-xl cyber-glass border border-slate-800">
              <div className="text-slate-400 text-[10px] mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>PRIMARY LOCATION</span>
              </div>
              <div className="text-slate-200 font-bold">
                {personalInfo.location}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="pt-16 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-slate-500 gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00f0ff]" />
              <span>© {new Date().getFullYear()} GADDE GOWTHAM CHOWDARY. ALL RIGHTS RESERVED.</span>
            </div>
            <div>
              <span>KLEF B.TECH CSE // AI/ML & COMPUTER VISION</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
