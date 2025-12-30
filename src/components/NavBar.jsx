import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [openStore, setOpenStore] = useState(false);
  const storeRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (storeRef.current && !storeRef.current.contains(e.target)) {
        setOpenStore(false);
      }
    };
    if (openStore) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openStore]);

  // Combined function to navigate and close the menu
  const goTo = (path) => {
    navigate(path);
    setOpenStore(false);
    window.scrollTo(0, 0); // Reset scroll position
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black text-white border-b border-gray-800 z-50">
        <div className="px-8 py-4 flex items-center justify-between">

          {/* 🔹 LEFT SIDE (Logo + Store + Categories) */}
          <div className="flex items-center gap-10">

            {/* LOGO -> Links to Home "/" */}
            <div
              onClick={() => goTo("/")}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <img
                src={logo}
                alt="Sunbird Logo"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-bold tracking-wide text-lg">
                <span className="text-white">SUN</span>
                <span className="text-blue-500">BIRD</span>
              </span>
            </div>

            {/* STORE -> Toggles Dropdown */}
            <div
              onClick={() => setOpenStore(!openStore)}
              className={`cursor-pointer transition-colors duration-300 ${
                openStore ? "text-[#44d62c]" : "text-gray-300 hover:text-[#44d62c]"
              }`}
            >
              Store
            </div>

            {/* CATEGORIES -> Links to categories page */}
            <div
              onClick={() => goTo("/shop")}
              className="cursor-pointer text-gray-300 hover:text-[#44d62c] transition-colors duration-300"
            >
              Categories
            </div>
          </div>

          {/* 🔹 RIGHT SIDE (Icons) */}
          <div className="flex items-center gap-6">
            {/* Search Icon */}
            <button className="text-gray-300 hover:text-[#44d62c] transition-colors duration-300 bg-transparent border-none p-1 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>

            {/* Cart Icon -> Links to "/cart" */}
            <button
              onClick={() => goTo("/cart")}
              className="text-gray-300 hover:text-[#44d62c] transition-colors duration-300 bg-transparent border-none p-1 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* STORE DROPDOWN */}
      {openStore && (
        <div
          ref={storeRef}
          className="fixed top-[72px] left-0 w-full bg-[#111] text-white z-40 border-b border-zinc-800 shadow-2xl animate-in fade-in slide-in-from-top-2"
        >
          <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-3 gap-10">

            {/* Left Column: Product Sections */}
            <div className="border-r border-gray-800 pr-8">
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6">Explore</p>
              <ul className="space-y-4 text-sm font-medium">
                <li onClick={() => goTo("/shop")} className="hover:text-[#44d62c] cursor-pointer transition-colors">Shop The Latest</li>
                <li onClick={() => goTo("/store/earbuds")} className="hover:text-[#44d62c] cursor-pointer transition-colors">Earbuds</li>
                <li onClick={() => goTo("/store/smartwatch")} className="hover:text-[#44d62c] cursor-pointer transition-colors">Smart Watch</li>
                <li onClick={() => goTo("/store/earphone")} className="hover:text-[#44d62c] cursor-pointer transition-colors">Earphone</li>
                <li onClick={() => goTo("/store/speaker")} className="hover:text-[#44d62c] cursor-pointer transition-colors">Speaker</li>
                <li onClick={() => goTo("/store/neckband")} className="hover:text-[#44d62c] cursor-pointer transition-colors">Neckband</li>
              </ul>
            </div>

            {/* Right Column: Support Sections */}
            <div className="col-span-2 pl-8">
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6">Support & Service</p>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-4 text-sm font-medium">
                  <li onClick={() => goTo("/support")} className="hover:text-[#44d62c] cursor-pointer transition-colors">All Support</li>
                  <li onClick={() => goTo("/warranty")} className="hover:text-[#44d62c] cursor-pointer transition-colors">Warranty</li>
                  <li onClick={() => goTo("/contact")} className="hover:text-[#44d62c] cursor-pointer transition-colors">Contact Us</li>
                </ul>
                <ul className="space-y-4 text-sm font-medium">
                  <li onClick={() => goTo("/Help")} className="hover:text-[#44d62c] cursor-pointer transition-colors">Help Center</li>
                  <li onClick={() => goTo("/FAQ")} className="hover:text-[#44d62c] cursor-pointer transition-colors">FAQ</li>
                  <li onClick={() => goTo("/ReturnRefunds")} className="hover:text-[#44d62c] cursor-pointer transition-colors">Returns & Refunds</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;