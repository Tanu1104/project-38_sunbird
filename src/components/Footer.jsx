import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-8">

        {/* TOP FOOTER - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-800 pb-12">

          {/* BRAND SECTION */}
          <div className="md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-2 italic tracking-tighter">SUNBIRD</h3>
            <p className="text-xs text-zinc-500 uppercase tracking-widest">High-Fidelity Audio</p>
          </div>

          {/* SHOP COLUMN */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li onClick={() => navigate("/store")} className="hover:text-[#44d62c] cursor-pointer transition">Sunbird Stores</li>
              <li onClick={() => navigate("/store/bulk")} className="hover:text-[#44d62c] cursor-pointer transition">Bulk Order</li>
            </ul>
          </div>

          {/* SUPPORT COLUMN */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm">
              <li onClick={() => navigate("/help")} className="hover:text-[#44d62c] cursor-pointer transition">Get Help</li>
              <li onClick={() => navigate("/warranty")} className="hover:text-[#44d62c] cursor-pointer transition">Registration & Warranty</li>
              <li onClick={() => navigate("/support")} className="hover:text-[#44d62c] cursor-pointer transition">Sunbird Support</li>
            </ul>
          </div>

          {/* COMPANY COLUMN */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li onClick={() => navigate("/about")} className="hover:text-[#44d62c] cursor-pointer transition">About Us</li>
              <li onClick={() => navigate("/careers")} className="hover:text-[#44d62c] cursor-pointer transition">Careers</li>
              <li onClick={() => navigate("/contact")} className="hover:text-[#44d62c] cursor-pointer transition">Contact Us</li>
            </ul>
          </div>

          {/* FOLLOW US - Social Icons */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center hover:border-[#44d62c] hover:text-[#44d62c] transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.4v-3h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 3h-2.1v7A10 10 0 0022 12z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center hover:border-[#44d62c] hover:text-[#44d62c] transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-[12px] text-zinc-500 gap-4">
          <p>© 2025 Sunbird Inc. All rights reserved.</p>
          <div className="flex gap-4 uppercase">
            <Link to="/legal" className="hover:text-white transition">Legal Terms</Link>
            <span>|</span>
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;