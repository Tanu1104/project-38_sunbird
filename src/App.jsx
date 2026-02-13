import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

// Pages & Components
import ExploreCategories from "./components/ExploreCategories";
import ShopByCategory from "./components/ShopByCategoryPage";
import ShopProductsPage from "./components/ShopProductPage";
import FAQ from "./components/FAQ";
import Help from "./components/Help";
import ReturnRefunds from "./components/ReturnRefunds";
import AllSupport from "./pages/AllSupport";
import Warranty from "./pages/Warranty";
import About from "./components/About"; 
import Cart from "./components/CartPage"; 
import Checkout from "./pages/Checkout";

// Profile Pages
import Login from "./Profile/login&signup"; 
import Signup from "./Profile/Signup";
import Wishlist from "./Profile/wishlist";
import OrderHistory from "./Profile/order_history";
import EditProfile from "./Profile/edit_profile";

export default function App() {
  const { pathname } = useLocation();

  // Scroll to top on every route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen w-full bg-[#0f1115] text-white">
      <Header />
      <NavBar />

      <main className="max-w-7xl mx-auto px-6">
        <Routes>
          {/* Main Home Route: Restored the full section stack */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ExploreCategories /> {/* Added this back */}
                <ShopByCategory />    {/* Corrected name to match import */}
                <ShopTheLatest />
                <PromoSection />
                
              </>
            }
          />
          
          {/* Individual Pages */}
          <Route path="/shop" element={<ShopTheLatest />} />
          <Route path="/support" element={<AllSupport />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/help" element={<Help />} />
          <Route path="/returns" element={<ReturnRefunds />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<ExploreCategories />} />
          <Route path="/products/:category" element={<ShopProductsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          
          {/* Cart & Checkout */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Profile & Account */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/edit-profile" element={<EditProfile />} />

          {/* Legal & Info */}
          <Route path="/legal" element={<div className="pt-40 text-center text-2xl font-bold">Legal Terms Content</div>} />
          <Route path="/privacy" element={<div className="pt-40 text-center text-2xl font-bold">Privacy Policy Content</div>} />

          {/* Fallback */}
          <Route
            path="*"
            element={<div className="pt-40 pb-40 text-center text-2xl font-bold">Page Under Construction</div>}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}