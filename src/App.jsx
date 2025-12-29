import React from "react";
import { Routes, Route } from "react-router-dom";
import { categories } from "./data/categories";
import { products } from "./data/products";
import "./App.css";

// Component Imports
// Ensure these paths are correct for your folder structure
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

const Page = ({ title }) => (
  <div className="pt-32 min-h-screen bg-black text-white flex items-center justify-center text-3xl font-bold">
    {title}
  </div>
);

const CategoryCard = ({ cat }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div className="text-center group cursor-pointer">
      <div className="relative">
        <div className="image-inner aspect-[3/4] overflow-hidden rounded-xl flex items-center justify-center bg-zinc-900">
          <img
            src={cat.icon}
            alt={cat.name}
            className="w-full h-full object-cover card-hover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }} 
          className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill={isLiked ? 'red' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke={isLiked ? 'red' : 'white'} className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>
      <h4 className="mt-4 text-lg font-bold uppercase">{cat.name}</h4>
    </div>
  );
};

/* ===================== HOME PAGE CONTENT ===================== */

const Home = () => {
  // Safe filtering with optional chaining
  const exploreCategories = categories?.filter(cat => cat.section === "explore") || [];
  const shopCategories = categories?.filter(cat => cat.section === "category") || [];

  return (
    <>
      <HeroSection />
      
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black italic mb-4 uppercase text-blue-500">Explore Categories</h3>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">High-fidelity audio products engineered for the discerning listener.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {exploreCategories.slice(0, 4).map(cat => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black italic mb-4 uppercase">Shop by Category</h3>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">Find the perfect audio gear to suit your lifestyle.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {shopCategories.slice(0, 4).map(cat => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black italic mb-4 uppercase">Shop Products</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} showButtons={true} />
          ))}
        </div>
      </section>

      <PromoSection />
    </>
  );
};

/* ===================== MAIN APP ===================== */

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0f1115] text-white overflow-x-hidden">
      {/* Rendered as NavBar to match your component file */}
      <NavBar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopTheLatest />} />
          <Route path="/store/earbuds" element={<Page title="Earbuds" />} />
          <Route path="/store/smartwatch" element={<Page title="Smart Watch" />} />
          <Route path="/store/earphone" element={<Page title="Earphone" />} />
          <Route path="/store/speaker" element={<Page title="Speaker" />} />
          <Route path="/store/neckband" element={<Page title="Neckband" />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/follow" element={<FollowUs />} />
          <Route path="/help" element={<Page title="Help" />} />
          <Route path="/faq" element={<Page title="FAQ" />} />
          <Route path="/returns" element={<Page title="Returns & Refunds" />} />
          <Route path="/shipping" element={<Page title="Shipping Guide" />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/support" element={<AllSupport />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}