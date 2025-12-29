import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const GamingHero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // Synchronize the video playback with the isPlaying state
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch((err) => console.log("Auto-play blocked: ", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-10 py-6 text-sm uppercase tracking-widest text-gray-400">
        <div className="text-[#44d62c] font-bold text-2xl">RAZER</div>
        <div className="flex gap-8">
          <span className="hover:text-white cursor-pointer transition-colors">Store</span>
          <span className="hover:text-white cursor-pointer transition-colors">PC</span>
          <span className="hover:text-white cursor-pointer transition-colors">Console</span>
          <span className="hover:text-white cursor-pointer transition-colors">Mobile</span>
        </div>
        <div className="w-6 h-6 bg-white rounded-full opacity-20"></div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center pt-20 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black text-[#44d62c] mb-6 tracking-tighter text-center"
        >
          GAMING HEADSETS
        </motion.h1>

        <p className="max-w-2xl text-center text-gray-400 text-lg md:text-xl px-4 mb-12 leading-relaxed">
          With our lethal lineup of advanced gaming headsets, experience clear, powerful audio 
          that builds incredible soundscapes for a new level of immersion.
        </p>

        {/* Video Display Section */}
        <div className="relative flex items-center justify-center w-full max-w-5xl px-4">
          <div className="relative w-full rounded-2xl overflow-hidden border border-[#44d62c]/30 shadow-[0_0_50px_rgba(68,214,44,0.15)]">
            <video
              ref={videoRef}
              src="/headphone.mp4" // Move your video to the /public folder
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Dark Vignette Overlay to blend video */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>

          {/* Background Glow Effect */}
          <div className={`absolute -z-10 w-full h-full bg-[#44d62c] blur-[120px] rounded-full transition-opacity duration-1000 ${isPlaying ? 'opacity-20' : 'opacity-5'}`} />
        </div>
      </main>

      {/* Play/Pause Button */}
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-12 right-12 w-16 h-16 bg-[#44d62c] rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(68,214,44,0.5)] z-50 group"
      >
        {isPlaying ? (
          <Pause size={28} color="black" fill="black" className="group-hover:rotate-12 transition-transform" />
        ) : (
          <Play size={28} color="black" fill="black" className="ml-1 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default GamingHero;