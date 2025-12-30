import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { categories } from "./data/categories";
import { products } from "./data/products";
import "./App.css";

// Component Imports
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PromoSection from "./components/PromoSection";
import ProductCard from "./components/ProductCard";
import ShopTheLatest from "./components/ShopTheLatest";
import ContactUs from "./components/ContactUs";
import FollowUs from "./components/FollowUs";
import Warranty from "./pages/Warranty";
import AllSupport from "./pages/AllSupport";

/* ===================== SHARED SUB-COMPONENTS ===================== */

// Reusable Page for simple titles
const Page = ({ title }) => (
  <div className="pt-32 min-h-screen bg-black text-white flex items-center justify-center text-3xl font-bold uppercase tracking-tighter">
    {title}
  </div>
);

const CategoryCard = ({ cat }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div className="text-center group cursor-pointer">
      <div className="relative">
        <div className="image-inner aspect-[3/4] overflow-hidden rounded-xl flex items-center justify-center bg-zinc-900 border border-zinc-800 transition-colors group-hover:border-[#44d62c]">
          <img
            src={cat.icon}
            alt={cat.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }} 
          className="absolute top-2 right-2 bg-black/40 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill={isLiked ? '#44d62c' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke={isLiked ? '#44d62c' : 'white'} className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>
      <h4 className="mt-4 text-lg font-bold uppercase tracking-wide group-hover:text-[#44d62c] transition-colors">{cat.name}</h4>
    </div>
  );
};

/* ===================== HOME PAGE CONTENT ===================== */

const Home = () => {
  const [showAllSpotlight, setShowAllSpotlight] = useState(false);
  const [showAllCategory, setShowAllCategory] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const handleCanPlay = () => setVideoLoaded(true);
      videoRef.current.addEventListener('canplay', handleCanPlay);
      return () => videoRef.current?.removeEventListener('canplay', handleCanPlay);
    }
  }, []);

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const exploreCategories = categories?.filter(cat => cat.section === "explore") || [];
  const shopCategories = categories?.filter(cat => cat.section === "category") || [];

  return (
    <>
      {/* Immersive Video Hero */}
      <div className="relative h-[70vh] w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-60' : 'opacity-0'}`}
        >
          <source src="https://assets2.razerzone.com/images/pnx.assets/2b2992cb1df4542d05811355b291e4f2/razer-blackshark-v3-pro-kv-1920x700.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white mb-2">IMMERSIVE AUDIO</h1>
          <p className="text-[#44d62c] font-bold tracking-[0.2em] mb-8">GAMING HEADSETS & HEADPHONES</p>
          <button onClick={handleReplay} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-2 rounded-full transition-all backdrop-blur-sm">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 5V1L7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5Z"/></svg>
             <span className="text-xs font-black uppercase tracking-widest">Replay Animation</span>
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f1115] to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Category Spotlight */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black italic mb-4 uppercase">Explore Categories</h3>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">High-fidelity audio products engineered for the discerning listener.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {exploreCategories.slice(0, showAllSpotlight ? exploreCategories.length : 4).map(cat => (
              <CategoryCard key={cat.id} cat={cat} />
            ))}
          </div>
          {!showAllSpotlight && exploreCategories.length > 4 && (
            <div className="text-center mt-12">
              <button onClick={() => setShowAllSpotlight(true)} className="border border-[#44d62c] text-[#44d62c] px-8 py-3 font-bold uppercase hover:bg-[#44d62c] hover:text-black transition-all">View All</button>
            </div>
          )}
        </section>

        {/* Shop By Category */}
        <section className="py-24 border-t border-zinc-900">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black italic mb-4 uppercase">Shop by Category</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {shopCategories.slice(0, showAllCategory ? shopCategories.length : 4).map(cat => (
              <CategoryCard key={cat.id} cat={cat} />
            ))}
          </div>
        </section>

        {/* Shop Products */}
        <section className="py-24 border-t border-zinc-900">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black italic mb-4 uppercase text-[#44d62c]">Latest Products</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products?.slice(0, showAllProducts ? products.length : 4).map(product => (
              <ProductCard key={product.id} product={product} showButtons={true} />
            ))}
          </div>
        </section>

        <PromoSection />
      </div>
    </>
  );
};

/* ===================== MAIN APP ===================== */

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-[#0f1115] text-white overflow-x-hidden">
        <NavBar />
        
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Home />} />

          {/* Store Routes */}
          <Route path="/shop" element={<ShopTheLatest />} />
          <Route path="/store/earbuds" element={<Page title="Earbuds" />} />
          <Route path="/store/smartwatch" element={<Page title="Smart Watch" />} />
          <Route path="/store/earphone" element={<Page title="Earphone" />} />
          <Route path="/store/speaker" element={<Page title="Speaker" />} />
          <Route path="/store/neckband" element={<Page title="Neckband" />} />

          {/* Support & Company Routes */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/follow" element={<FollowUs />} />
          <Route path="/help" element={<Page title="Help" />} />
          <Route path="/faq" element={<Page title="FAQ" />} />
          <Route path="/returns" element={<Page title="Returns & Refunds" />} />
          <Route path="/shipping" element={<Page title="Shipping Guide" />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/support" element={<AllSupport />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}