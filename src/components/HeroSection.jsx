import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => setVideoLoaded(true);

    video.addEventListener("loadeddata", onLoaded);

    return () => {
      video.removeEventListener("loadeddata", onLoaded);
    };
  }, []);

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section className="hero">
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            media="(max-width: 768px)"
            src="https://assets2.razerzone.com/images/pnx.assets/2b2992cb1df4542d05811355b291e4f2/razer-blackshark-v3-pro-kv-768x500.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets2.razerzone.com/images/pnx.assets/2b2992cb1df4542d05811355b291e4f2/razer-blackshark-v3-pro-kv-1920x700.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-overlay"></div>
      </div>

      {!videoLoaded && (
        <div className="hero-loader">
          <div className="spinner"></div>
          <p>Loading Headphone Animation...</p>
        </div>
      )}

      <div className="hero-content">
        <h1>GAMING HEADSETS</h1>
        <p>With our lethal lineup of advanced gaming headsets, 
          experience clear, powerful audio that builds incredible soundscapes for 
          a new level of immersion, and gain the competitive edge with next-gen surround sound.</p>

        <button className="replay-btn" onClick={handleReplay}>
          <div className="controls-section">
        <button onClick={handleReplay} className="replay-button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#44d62c">
            <path d="M12 5V1L7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5Z"/>
          </svg>
          REPLAY
        </button>
      </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
