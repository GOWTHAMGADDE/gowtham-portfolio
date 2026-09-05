import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Menu, X, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ cyberSoundEnabled, setCyberSoundEnabled }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'domains', 'skills', 'projects', 'about', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'DOMAINS', href: '#domains' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'TIMELINE', href: '#timeline' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#040711]/90 backdrop-blur-md border-b border-[#00f0ff]/15 py-3 shadow-lg shadow-black/50' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-md bg-[#00f0ff]/10 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff] group-hover:bg-[#00f0ff]/20 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="font-mono text-xs font-semibold text-[#00f0ff] tracking-widest flex items-center gap-1.5">
              <span>SYS.GGC</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse"></span>
            </div>
            <div className="font-bold text-sm text-slate-100 tracking-wider group-hover:text-[#00f0ff] transition-colors">
              GOWTHAM CHOWDARY
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#090f1e]/80 border border-slate-800 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/30 shadow-[0_0_10px_rgba(0,240,255,0.2)] font-semibold'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Status Badge & Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-md bg-[#00ff9d]/5 border border-[#00ff9d]/20 text-[#00ff9d] font-mono text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CSE UNDERGRAD (8.99 CGPA)</span>
          </div>

          <button
            onClick={() => setCyberSoundEnabled(!cyberSoundEnabled)}
            className={`px-3 py-1 rounded border font-mono text-xs transition-all flex items-center gap-1.5 ${
              cyberSoundEnabled
                ? 'bg-[#00f0ff]/10 border-[#00f0ff]/40 text-[#00f0ff]'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle cyber ambient audio effect"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>HUD {cyberSoundEnabled ? 'ON' : 'OFF'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#00f0ff]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#040711]/95 border-b border-[#00f0ff]/20 px-4 pt-3 pb-6 space-y-2 font-mono text-sm backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-md text-slate-300 hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] border border-transparent hover:border-[#00f0ff]/20 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>STATUS: AVAILABLE FOR AI/ML</span>
            <span className="text-[#00ff9d]">KLEF CSE</span>
          </div>
        </div>
      )}
    </header>
  );
}
