import React from "react";
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react"; // Added useEffect
import { Routes, Route, useLocation } from "react-router-dom"; // Added useLocation
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

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PromoSection from "./components/PromoSection";
import ProductCard from "./components/ProductCard";
import ShopTheLatest from "./components/ShopTheLatest";
import ContactUs from "./components/ContactUs";
import FollowUs from "./components/FollowUs";

// Pages & New Sections
import FAQ from "./components/FAQ";
import Help from "./components/Help";
import ReturnRefunds from "./components/ReturnRefunds";
import AllSupport from "./pages/AllSupport";
import Warranty from "./pages/Warranty";
import About from "./components/About"; 

// Section Components
import ExploreCategories from "./components/ExploreCategories";
import ShopByCategory from "./components/ShopByCategoryPage";
import ShopProductsPage from "./components/ShopProductPage";


import Login from "./Profile/login&signup";
import Signup from "./Profile/Signup";
const CategoryCard = ({ cat }) => (
  <div className="text-center group cursor-pointer">
    <div className="aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800">
      <img
        src={cat.icon}
        alt={cat.name}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />
    </div>
    <h4 className="mt-4 font-bold uppercase group-hover:text-[#44d62c] transition-colors">
      {cat.name}
    </h4>
  </div>
);

const Home = () => {
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

        {/* 404 Fallback */}
        <Route path="*" element={<div className="pt-40 text-center text-2xl font-bold">Page Under Construction</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
     
      </Routes>

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
