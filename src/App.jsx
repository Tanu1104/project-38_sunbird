import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Refs for both videos
  const heroVideoRef = useRef(null);
  const secondaryVideoRef = useRef(null);

  // Sync both videos with the play/pause state
  useEffect(() => {
    const videos = [heroVideoRef.current, secondaryVideoRef.current];
    videos.forEach(video => {
      if (video) {
        isPlaying ? video.play().catch(() => {}) : video.pause();
      }
    });
  }, [isPlaying]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#44d62c] selection:text-black overflow-x-hidden">
      
      {/* 1. Navigation */}
      <nav className="flex justify-center gap-8 py-6 text-[11px] uppercase tracking-[0.2em] text-gray-400 border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-md z-30">
        <span className="hover:text-white cursor-pointer transition-colors">Store</span>
        <span className="hover:text-white cursor-pointer transition-colors">PC</span>
        <span className="hover:text-white cursor-pointer transition-colors">Console</span>
        <span className="hover:text-[#44d62c] cursor-pointer transition-colors font-bold">Mobile</span>
      </nav>

      {/* 2. Hero Section */}
      <section className="flex flex-col items-center pt-20 px-4 relative z-10 min-h-screen">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-black text-[#44d62c] tracking-tighter mb-6 text-center"
        >
          GAMING HEADSETS
        </motion.h1>
        <p className="max-w-2xl text-center text-gray-400 text-lg mb-12">
          Experience clear, powerful audio that builds incredible soundscapes for a new level of immersion.
        </p>

        <div className="w-full max-w-4xl px-4">
          <video
            ref={heroVideoRef}
            loop muted playsInline
            className="w-full h-auto rounded-lg"
            src="/headphone.mp4" 
          />
        </div>
      </section>

      {/* 3. NEW SECTION: BlackShark V3 Pro */}
      <section className="flex flex-col items-center py-32 px-4 bg-[#050505]">
        <div className="text-center mb-10">
          <span className="text-[#44d62c] uppercase tracking-[0.4em] text-2xl font-bold">New</span>
          <h2 className="text-5xl md:text-6xl font-black mt-4 mb-2 tracking-tight">
            RAZER BLACKSHARK V3 PRO
          </h2>
          <p className="text-gray-400 text-xl tracking-wide">
            Wireless ANC Esports Headset
          </p>
          <a href="#" className="text-[#44d62c] mt-6 inline-block hover:underline font-medium">
            Learn More {">"}
          </a>
        </div>

        {/* Video for the BlackShark Section */}
        <div className="relative w-full max-w-md max-h-[450px] flex justify-center">
          {/* Green circular glow effect seen in your screenshot */}
          <div className="absolute inset-0 bg-[#44d62c]/10 blur-[120px] rounded-full scale-75" />
          
          <video
            ref={secondaryVideoRef}
            loop muted playsInline
            className="w-full max-w-md max-h-[450px] rounded-lg relative z-10"
            src="/earbuds.mp4" // Ensure this file is in your public/ folder
          />
        </div>
      </section>

      {/* 4. Global Control Button */}
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-10 right-10 w-14 h-14 bg-[#44d62c] rounded-full flex items-center justify-center transition-all z-50 hover:bg-[#39b525] shadow-lg shadow-[#44d62c]/20"
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6 ml-1"><path d="M8 5v14l11-7z"/></svg>
        )}
      </button>

    </div>
  )
}

export default App