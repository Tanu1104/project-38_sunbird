import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef1.current;
    if (!video) return;
    const onLoaded = () => setVideoLoaded(true);
    video.addEventListener("loadeddata", onLoaded);
    return () => video.removeEventListener("loadeddata", onLoaded);
  }, []);

  const handleReplay = (ref) => {
    if (ref.current) {
      ref.current.currentTime = 0;
      ref.current.play();
    }
  };

  return (
    <section className="hero-container">
      {/* SECTION 1 */}
      <div className="hero-block">
        <div className="hero-text-content">
          <h1>GAMING HEADSETS</h1>
          <p>Experience clear, powerful audio for a new level of immersion.</p>
        </div>

        <div className="hero-video-wrapper">
          <video ref={videoRef1} className="hero-video" autoPlay muted loop playsInline>
            <source src="https://assets2.razerzone.com/images/pnx.assets/2b2992cb1df4542d05811355b291e4f2/razer-blackshark-v3-pro-kv-1920x700.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          
          {/* Button pinned to bottom-right of THIS video */}
          <button className="replay-button" onClick={() => handleReplay(videoRef1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#44d62c">
              <path d="M12 5V1L7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5Z"/>
            </svg>
            REPLAY
          </button>
        </div>
      </div>

      <hr className="section-divider" />

      {/* SECTION 2 */}
      <div className="hero-block">
        <div className="hero-text-content">
          <h1>THE LETHAL LINEUP</h1>
          <p>With our lethal lineup of advanced gaming headsets, experience clear, powerful audio that builds incredible soundscapes.</p>
        </div>

        <div className="hero-video-wrapper">
          <video ref={videoRef2} className="hero-video" autoPlay muted loop playsInline>
            <source src="/bg_video2.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>

          {/* Button pinned to bottom-right of THIS video */}
          <button className="replay-button" onClick={() => handleReplay(videoRef2)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#44d62c">
              <path d="M12 5V1L7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5Z"/>
            </svg>
            REPLAY
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;