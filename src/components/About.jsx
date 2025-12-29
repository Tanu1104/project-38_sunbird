import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const [activeYear, setActiveYear] = useState('2023');

  // Content for the History Timeline
  const historyData = {
    '2023': [
      "Razer brought home a total of 46 awards at CES 2023, including Best of CES.",
      "Launched the Razer Kiyo Pro Ultra, featuring the largest sensor ever in a webcam.",
      "Lee 'Faker' Sang-hyeok won the League of Legends World Championship for the fourth time.",
      "Razer became the #1 PC Gaming Headset Brand in the US."
    ],
    '2022': [
      "Unveiled the Razer Edge, the ultimate 5G handheld gaming device.",
      "Expanded the Razer Enki line with the Pro HyperSense gaming chair.",
      "Launched the Viper V2 Pro, setting a new standard for esports mice."
    ],
    // Add additional years as needed
  };

  const years = ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014'];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#44d62c] selection:text-black overflow-x-hidden">
      
      {/* 1. Header Navigation */}
      <nav className="flex justify-center gap-8 py-6 text-[11px] uppercase tracking-[0.2em] text-gray-400 border-b border-white/10 sticky top-0 bg-black/90 backdrop-blur-md z-50">
        <Link to="/" className="hover:text-white transition-colors">Store</Link>
        <Link to="/" className="hover:text-white transition-colors">PC</Link>
        <Link to="/" className="hover:text-white transition-colors">Console</Link>
        <Link to="/" className="text-[#44d62c] font-bold">About</Link>
      </nav>

      {/* 2. Hero Section & Narrative */}
      <section className="pt-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-black text-[#44d62c] tracking-tight mb-4"
        >
          ABOUT RAZER
        </motion.h1>
        
        <p className="text-lg md:text-xl font-bold mb-12">
          Razer™ is the world’s leading lifestyle brand made For Gamers. By Gamers.
        </p>
        
        <div className="max-w-4xl mx-auto text-gray-400 text-lg leading-relaxed space-y-8 mb-20">
          <p>
            The triple-headed snake trademark of Razer is one of the most recognized logos in the global gaming and esports communities. With a fan base that spans every continent, Razer has designed and built the world’s largest gamer-focused ecosystem of hardware, software and services.
          </p>
        </div>

        {/* Feature Laptop Display */}
        <div className="max-w-6xl mx-auto relative mb-32 px-4">
          <img 
            src="https://assets2.razerzone.com/images/pnx.assets/20857502787e914df16b47d3c01c0b39/razer-project-valerie-laptop.png" 
            alt="Razer Project Valerie"
            className="w-full h-auto relative z-10"
          />
          <div className="absolute inset-0 bg-[#44d62c]/5 blur-[120px] rounded-full scale-75" />
        </div>
      </section>

      {/* 3. History Section (Interactive Timeline) */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
        <h2 className="text-5xl font-black text-[#44d62c] mb-12 italic tracking-tighter">HISTORY</h2>
        
        {/* Year Selector Bar */}
        <div className="flex gap-8 overflow-x-auto pb-6 mb-12 scrollbar-hide border-b border-white/5">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`text-xl font-bold transition-all shrink-0 ${
                activeYear === year ? 'text-[#44d62c] border-b-2 border-[#44d62c] pb-2' : 'text-gray-600 hover:text-gray-300'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.ul 
              key={activeYear}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6 text-gray-300 text-lg md:text-xl"
            >
              {historyData[activeYear] ? historyData[activeYear].map((bullet, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-[#44d62c]">•</span>
                  <span>{bullet}</span>
                </li>
              )) : (
                <li className="text-gray-500 italic">Timeline data for this year is coming soon.</li>
              )}
            </motion.ul>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Accolades Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-[#050505]">
        <h2 className="text-5xl font-black text-[#44d62c] mb-16 italic tracking-tighter">ACCOLADES</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* PC Accolade */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="overflow-hidden rounded-xl border border-white/5">
              <img 
                src="https://assets2.razerzone.com/images/pnx.assets/20857502787e914df16b47d3c01c0b39/about-razer-accolades-pc.jpg" 
                className="w-full h-auto hover:scale-105 transition-transform duration-700" 
                alt="PC Gaming"
              />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight">PC</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Build your battle station with Razer's suite of award-winning peripherals, 
              Blade laptops, and software platforms. The Blade continues to be the 
              pinnacle of gaming laptops.
            </p>
          </motion.div>

          {/* Console Accolade */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="overflow-hidden rounded-xl border border-white/5">
              <img 
                src="https://assets2.razerzone.com/images/pnx.assets/20857502787e914df16b47d3c01c0b39/about-razer-accolades-console.jpg" 
                className="w-full h-auto hover:scale-105 transition-transform duration-700" 
                alt="Console Gaming"
              />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight">Console</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Console gamers expect the highest quality from their devices, which is 
              why Razer brings the latest technology to lines like Kraken and Wolverine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-32 flex flex-col items-center border-t border-white/5">
        <div className="text-3xl md:text-5xl font-black text-[#44d62c] opacity-50 tracking-tighter">
          FOR GAMERS. BY GAMERS.™
        </div>
      </footer>

    </div>
  );
};

export default About;