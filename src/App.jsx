import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Domains from './components/Domains';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import About from './components/About';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [cyberSoundEnabled, setCyberSoundEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-[#040711] text-slate-100 selection:bg-[#00f0ff] selection:text-black font-sans relative">
      <Navbar
        cyberSoundEnabled={cyberSoundEnabled}
        setCyberSoundEnabled={setCyberSoundEnabled}
      />
      <main>
        <Hero />
        <Domains />
        <TechStack />
        <Projects />
        <About />
        <Timeline />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
