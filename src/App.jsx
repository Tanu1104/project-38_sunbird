import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const videoRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    // Preload the video
    if (videoRef.current) {
      videoRef.current.load()
      
      const handleCanPlay = () => {
        setVideoLoaded(true)
        videoRef.current.play()
      }
      
      videoRef.current.addEventListener('canplay', handleCanPlay)
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('canplay', handleCanPlay)
        }
      }
    }
  }, [])

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  return (
    <div className="container">
      {/* Video Background */}
      <div className="video-container">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="metadata"
          className="video-bg noloop"
          poster=""
          data-speed=""
          loop
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
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay Effects */}
        <div className="video-overlay"></div>
        <div className="video-glow"></div>
      </div>

      {/* Loading Animation */}
      {!videoLoaded && (
        <div className="loading-animation">
          <div className="loading-spinner"></div>
          <div className="loading-text">Loading Headphone Animation...</div>
        </div>
      )}

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* Title */}
        <div className="title-section">
          <h1 className="main-title">IMMERSIVE AUDIO</h1>
          <p className="subtitle">GAMING HEADSETS & HEADPHONES</p>
          <div className="title-line"></div>
        </div>

        {/* Controls */}
        <div className="controls-section">
          <div className="instructions">
           
          </div>
          <button className="replay-button" onClick={handleReplay}>
            <div className="button-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V1L7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="button-text">REPLAY </span>
            <div className="button-glow"></div>
          </button>
        </div>
      </div>

      {/* Razer-like UI Elements */}
      <div className="razer-ui">
        <div className="nav-bar">
          <div className="nav-logo">RAZER</div>
          <div className="nav-menu">
            <span>STORE</span>
            <span>PC</span>
            <span>CONSOLE</span>
            <span>MOBILE</span>
            <span>LIFESTYLE</span>
            <span>SERVICES</span>
            <span>COMMUNITY</span>
            <span>SUPPORT</span>
          </div>
          <div className="nav-search">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11.7422 10.3439C12.5329 9.2673 13 7.9382 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C7.9382 13 9.2673 12.5329 10.3439 11.7422L14.2929 15.6912C14.6834 16.0817 15.3166 16.0817 15.7071 15.6912C16.0976 15.3007 16.0976 14.6675 15.7071 14.277L11.7422 10.3439ZM12 6.5C12 9.53757 9.53757 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5Z" fill="currentColor"/>
            </svg>
            <span>Search</span>
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="video-controls">
        <button className="video-control-btn mute-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4l-4 4H4v4h4l4 4V4z" fill="currentColor"/>
          </svg>
        </button>
        <div className="video-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  )
}

export default App