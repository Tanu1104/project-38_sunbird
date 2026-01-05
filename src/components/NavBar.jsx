import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo1.jpeg";

const NavBar = () => {
  const [openStore, setOpenStore] = useState(false);
  const storeRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setOpenStore(false);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openStore && storeRef.current && !storeRef.current.contains(event.target)) {
        setOpenStore(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openStore]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white border-b border-zinc-800 z-50">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* LOGO */}
            <div onClick={() => handleNavigation("/")} className="flex items-center gap-2 cursor-pointer mr-2">
              <img src={logo} alt="Sunbird" className="h-9 w-auto" />
              <span className="font-bold tracking-tighter text-xl uppercase hidden sm:block">Sunbird</span>
            </div>

            {/* --- HOME ICON BUTTON --- */}
            <button 
              onClick={() => handleNavigation("/")}
              className="text-gray-300 hover:text-[#44d62c] transition-colors duration-300 bg-transparent border-none p-1 cursor-pointer flex items-center"
              title="Home"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.432z" />
              </svg>
            </button>

            {/* STORE DROPDOWN TRIGGER */}
            <div 
              onClick={(e) => {
                e.stopPropagation();
                setOpenStore(!openStore);
              }} 
              className={`cursor-pointer font-medium transition-colors ${openStore ? "text-[#44d62c]" : "text-gray-300 hover:text-[#44d62c]"}`}
            >
              Store
            </div>

            {/* CATEGORIES LINK */}
            <div 
              onClick={() => handleNavigation("/categories")} 
              className="cursor-pointer font-medium text-gray-300 hover:text-[#44d62c] transition-colors"
            >
              Categories
            </div>
          </div>

          {/* RIGHT SIDE (Profile, Search & Cart) */}
          <div className="flex items-center gap-6">
            {/* Profile icon button */}
            <button
              onClick={() => handleNavigation("/profile")}
              className="text-gray-300 hover:text-[#44d62c] transition-colors duration-300 bg-transparent border-none p-1 cursor-pointer"
              title="Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.25a8.25 8.25 0 1115 0" />
              </svg>
            </button>

            {/* Existing search button */}
            <button className="text-gray-300 hover:text-[#44d62c] transition-colors duration-300 bg-transparent border-none p-1 cursor-pointer" title="Search">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>

            {/* Existing cart button */}
            <button
              onClick={() => handleNavigation("/cart")}
              className="text-gray-300 hover:text-[#44d62c] transition-colors duration-300 bg-transparent border-none p-1 cursor-pointer"
              title="Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* DROPDOWN MENU */}
      {openStore && (
        <div ref={storeRef} className="fixed top-[68px] left-0 w-full bg-[#111] text-white z-40 border-b border-zinc-800 shadow-2xl">
          <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-2 gap-20">
            <div>
              <p className="text-zinc-500 text-xs font-bold tracking-widest mb-6 uppercase">Explore</p>
              <ul className="space-y-4">
                <li onClick={() => handleNavigation("/shop")} className="text-gray-300 hover:text-[#44d62c] cursor-pointer transition-colors">Shop The Latest</li>
                {/* <li onClick={() => handleNavigation("/shop")} className="text-gray-300 hover:text-[#44d62c] cursor-pointer transition-colors">Earbuds</li> */}
              </ul>
            </div>
            <div>
              <p className="text-zinc-500 text-xs font-bold tracking-widest mb-6 uppercase">Support</p>
              <ul className="space-y-4">
                <li onClick={() => handleNavigation("/support")} className="text-gray-300 hover:text-[#44d62c] cursor-pointer">All Support</li>
                <li onClick={() => handleNavigation("/faq")} className="text-gray-300 hover:text-[#44d62c] cursor-pointer">FAQ</li>
                <li onClick={() => handleNavigation("/returns")} className="text-gray-300 hover:text-[#44d62c] cursor-pointer">Returns & Refunds</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;