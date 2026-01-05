import React from "react";
import { Routes, Route } from "react-router-dom";
import { categories } from "./data/categories";
import { products } from "./data/products";
import "./App.css";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PromoSection from "./components/PromoSection";
import ProductCard from "./components/ProductCard";
import ShopTheLatest from "./components/ShopTheLatest";
import ContactUs from "./components/ContactUs";
import FollowUs from "./components/FollowUs";

// Pages
import Warranty from "./pages/Warranty";
import AllSupport from "./pages/AllSupport";

const CategoryCard = ({ cat }) => (
  <div className="text-center group cursor-pointer">
    <div className="aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800">
      <img
        src={cat.icon}
        alt={cat.name}
        className="w-full h-full object-cover group-hover:scale-110 transition"
      />
    </div>
    <h4 className="mt-4 font-bold uppercase group-hover:text-[#44d62c]">
      {cat.name}
    </h4>
  </div>
);

const Home = () => {
  const exploreCategories = categories.filter(c => c.section === "explore");

  return (
    <>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-6">
      <PromoSection />
      </div>
    </>
  );
};

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopTheLatest />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/follow" element={<FollowUs />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/support" element={<AllSupport />} />
      </Routes>

      <Footer />
    </>
  );
}
