import React from "react";
import { Routes, Route } from "react-router-dom";
import { categories } from "./data/categories";
import { products } from "./data/products";
import "./App.css";
import Header from "./components/Header";
import ShopTheLatest from "./components/ShopTheLatest";
import HeroSection from "./components/HeroSection";
import PromoSection from "./components/PromoSection";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import FollowUs from "./components/FollowUs";

const CategoryCard = ({ cat }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div className="text-center group cursor-pointer">
      <div className="relative">
        <div className="image-inner aspect-[3/4] overflow-hidden rounded-xl flex items-center justify-center">
          <img
            src={cat.icon}
            alt={cat.name}
            className="w-full h-full object-cover card-hover"
          />
        </div>
        <button 
          onClick={() => setIsLiked(!isLiked)} 
          className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill={isLiked ? 'red' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke={isLiked ? 'red' : 'white'} className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>
      <h4 className="mt-4 text-lg font-bold">{cat.name}</h4>
    </div>
  );
};

/* ===================== CATEGORY SPOTLIGHT ===================== */
const CategorySpotlight = () => {
  const [showAll, setShowAll] = React.useState(false);
  const filteredCategories = categories.filter(cat => cat.section === "explore");

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-black italic mb-4">
          Explore Categories
        </h3>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">Discover our wide range of high-fidelity audio products, meticulously engineered for the discerning listener.</p>
        <p className="text-cyan-400 cursor-pointer mt-4 text-base font-semibold">Learn More</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCategories.slice(0, showAll ? filteredCategories.length : 4).map(cat => (
          <CategoryCard key={cat.id} cat={cat} />
        ))}
      </div>
      {!showAll && filteredCategories.length > 4 && (
        <div className="text-center mt-8">
          <button onClick={() => setShowAll(true)} className="bg-cyan-500 text-white font-bold uppercase px-6 py-3 rounded">
            View All
          </button>
        </div>
      )}
    </section>  
  );
};


/* ===================== SHOP BY CATEGORY ===================== */
const ShopByCategory = () => {
  const [showAll, setShowAll] = React.useState(false);
  const filteredCategories = categories.filter((cat) => cat.section === "category");

  return (
    <section className="py-24 px-6 lg:px-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-black italic mb-4">
          Shop by Category
        </h3>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">From immersive headphones to portable speakers, find the perfect audio gear to suit your lifestyle.</p>
        <p className="text-cyan-400 cursor-pointer mt-4 text-base font-semibold">Learn More</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCategories.slice(0, showAll ? filteredCategories.length : 4).map((cat) => (
          <CategoryCard key={cat.id} cat={cat} />
        ))}
      </div>
      {!showAll && filteredCategories.length > 4 && (
        <div className="text-center mt-8">
          <button onClick={() => setShowAll(true)} className="bg-cyan-500 text-white font-bold uppercase px-6 py-3 rounded">
            View All
          </button>
        </div>
      )}
    </section>
  );
};

/* ===================== SHOP PRODUCTS ===================== */
const Products = () => {
  const [showAll, setShowAll] = React.useState(false);

  return (
    <section className="py-24 px-6 lg:px-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-black italic mb-4">
          Shop Products
        </h3>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">Explore our newest collection of cutting-edge audio devices, designed for premium sound and comfort.</p>
        <p className="text-cyan-400 cursor-pointer mt-4 text-base font-semibold">Learn More</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, showAll ? products.length : 4).map((product) => (
          <ProductCard key={product.id} product={product} showButtons={true} />
        ))}
      </div>
      {!showAll && products.length > 4 && (
        <div className="text-center mt-8">
          <button onClick={() => setShowAll(true)} className="bg-cyan-500 text-white font-bold uppercase px-6 py-3 rounded">
            View All
          </button>
        </div>
      )}
    </section>
  );
};


/* ===================== APP ===================== */
export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0f1115] text-white">
      <Header />
      <div className="max-w-7xl mx-auto px-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CategorySpotlight />
                <ShopByCategory />
                <Products />
                <PromoSection />
              </>
            }
          />
          <Route path="/shop" element={<ShopTheLatest />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/follow" element={<FollowUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
