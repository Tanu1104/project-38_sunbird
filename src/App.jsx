import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

// Sections
import HeroSection from "./components/HeroSection";
import PromoSection from "./components/PromoSection";
import ShopTheLatest from "./components/ShopTheLatest";
import ContactUs from "./components/ContactUs";
import FollowUs from "./components/FollowUs";

// Pages
import ShopByCategoryPage from "./components/ShopByCategoryPage";
import ShopProductsPage from "./components/ShopProductPage";
import Login from "./Profile/login&signup";
import Signup from "./Profile/Signup";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0f1115] text-white">
      <Header />
      <NavBar />

      <div className="max-w-7xl mx-auto px-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ShopByCategoryPage />
                <PromoSection />
              </>
            }
          />

          <Route path="/shop" element={<ShopTheLatest />} />
          <Route path="/products/:category" element={<ShopProductsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/follow" element={<FollowUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Fallback */}
          <Route
            path="*"
            element={
              <div className="pt-40 text-center text-2xl font-bold">
                Page Under Construction
              </div>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
