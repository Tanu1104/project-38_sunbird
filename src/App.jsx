import React, { useEffect } from "react"; // Added useEffect
import { Routes, Route, useLocation } from "react-router-dom"; // Added useLocation
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
    <>
      <HeroSection />
      <ExploreCategories />
      <ShopByCategory />
      <ShopProductsPage />
      <div className="max-w-7xl mx-auto px-6">
        <PromoSection />
      </div>
    </>
  );
};

export default function App() {
  // --- IN-FILE SCROLL TO TOP LOGIC ---
  const { pathname } = useLocation();

  useEffect(() => {
    // This will trigger every time the URL path changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "instant" is usually better for route changes to avoid seeing the scroll
    });
  }, [pathname]);
  // -----------------------------------

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* Functional Routes */}
        <Route path="/shop" element={<ShopTheLatest />} />
        <Route path="/support" element={<AllSupport />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/help" element={<Help />} />
        <Route path="/returns" element={<ReturnRefunds />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/follow" element={<FollowUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<ExploreCategories />} />
        {/* Legal & Info */}
        <Route path="/legal" element={<div className="pt-40 text-center text-2xl font-bold">Legal Terms Content</div>} />
        <Route path="/privacy" element={<div className="pt-40 text-center text-2xl font-bold">Privacy Policy Content</div>} />

        {/* 404 Fallback */}
        <Route path="*" element={<div className="pt-40 text-center text-2xl font-bold">Page Under Construction</div>} />
      </Routes>

      <Footer />
    </div>
  );
}
