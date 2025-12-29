import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [openStore, setOpenStore] = useState(false);
  const storeRef = useRef(null);
  const navigate = useNavigate();

  // close dropdown on outside click
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

  const goTo = (path) => {
    navigate(path);
    setOpenStore(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black text-white border-b border-gray-800 z-50">
        <div className="px-8 py-4 flex items-center justify-between">

          {/* 🔹 LEFT SIDE (Logo + Store + Categories) */}
          <div className="flex items-center gap-10">

            {/* LOGO */}
            <div
              onClick={() => navigate("/")}
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

            {/* STORE */}
            <div
              onClick={() => setOpenStore(!openStore)}
              className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              Store
            </div>

            {/* CATEGORIES */}
            <div
              onClick={() => navigate("/categories")}
              className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              Categories
            </div>

          </div>

          {/* 🔹 RIGHT SIDE (Icons) */}
          <div className="flex items-center gap-6">
            <div className="text-xl text-gray-300 cursor-pointer hover:text-yellow-400 transition-colors duration-300">
              🔍
            </div>
            <div
              onClick={() => navigate("/cart")}
              className="text-xl text-gray-300 cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            >
              🛒
            </div>
          </div>

        </div>
      </nav>

      {/* STORE DROPDOWN */}
      {openStore && (
        <div
          ref={storeRef}
          className="fixed top-[72px] left-0 w-full bg-[#1a1a1a] text-white z-40"
        >
          <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-3 gap-10">

            <div className="border-r border-gray-700 pr-8">
              <p className="text-gray-400 text-sm mb-4">Explore</p>
              <ul className="space-y-4 text-lg">
                <li onClick={() => goTo("/store/latest")} className="hover:text-green-500 cursor-pointer">Shop The Latest</li>
                <li onClick={() => goTo("/store/earbuds")} className="hover:text-green-500 cursor-pointer">Earbuds</li>
                <li onClick={() => goTo("/store/smartwatch")} className="hover:text-green-500 cursor-pointer">Smart Watch</li>
                <li onClick={() => goTo("/store/earphone")} className="hover:text-green-500 cursor-pointer">Earphone</li>
                <li onClick={() => goTo("/store/speaker")} className="hover:text-green-500 cursor-pointer">Speaker</li>
                <li onClick={() => goTo("/store/neckband")} className="hover:text-green-500 cursor-pointer">Neckband</li>
              </ul>
            </div>

            <div className="col-span-2 pl-8">
              <p className="text-gray-400 text-sm mb-4">More About</p>
              <ul className="space-y-4 text-lg">
                <li onClick={() => goTo("/support")} className="hover:text-green-500 cursor-pointer">All Supports</li>
                <li onClick={() => goTo("/help")} className="hover:text-green-500 cursor-pointer">Help</li>
                <li onClick={() => goTo("/faq")} className="hover:text-green-500 cursor-pointer">FAQ</li>
                <li onClick={() => goTo("/returns")} className="hover:text-green-500 cursor-pointer">Returns & Refunds</li>
                <li onClick={() => goTo("/shipping")} className="hover:text-green-500 cursor-pointer">Shipping Guide</li>
              </ul>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
