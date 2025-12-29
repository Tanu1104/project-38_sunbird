import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">

        {/* TOP FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-800 pb-12">

          {/* SHOP */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li onClick={() => navigate("/store")} className="hover:text-white cursor-pointer">Sunbird Stores</li>
              <li onClick={() => navigate("/store/Bulk Order")} className="hover:text-white cursor-pointer">Bulk Order</li>
                    </ul>
          </div>

        

          {/* SUPPORT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li onClick={() => navigate("/help")} className="hover:text-white cursor-pointer">Get Help</li>
<li
  onClick={() => navigate("/warranty")}
  className="hover:text-white cursor-pointer"
>
  Registration & Warranty
</li>

              <li onClick={() => navigate("/support")} className="hover:text-white cursor-pointer">Sunbird Support</li>
              <li className="hover:text-white cursor-pointer">Support Videos</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li onClick={() => navigate("/about")} className="hover:text-white cursor-pointer">About Us</li>
              <li onClick={() => navigate("/careers")} className="hover:text-white cursor-pointer">Careers</li>
              <li onClick={() => navigate("/contact")} className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

      {/* FOLLOW US */}
<div>
  <h4 className="text-white font-semibold mb-4">Follow Us</h4>

  <div className="flex flex-col gap-4">

    {/* Facebook */}
    <a
      href="https://facebook.com"
      target="_blank"
      className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
    >
      <svg className="w-4 h-4 text-gray-400 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.4v-3h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 3h-2.1v7A10 10 0 0022 12z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com"
      target="_blank"
      className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
    >
      <svg className="w-4 h-4 text-gray-400 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"/>
      </svg>
    </a>

    {/* X (Twitter) */}
    <a
      href="https://x.com"
      target="_blank"
      className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
    >
      <svg className="w-4 h-4 text-gray-400 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.2 2H21l-6.5 7.4L22 22h-6.6l-5.1-6.6L4.7 22H2l7-8.1L2 2h6.7l4.6 6L18.2 2z"/>
      </svg>
    </a>

    {/* YouTube */}
    <a
      href="https://youtube.com"
      target="_blank"
      className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
    >
      <svg className="w-4 h-4 text-gray-400 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.5 6.2s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.4-1C16.8 2.5 12 2.5 12 2.5h0s-4.8 0-8.2.3c-.5.1-1.5.1-2.4 1-.7.7-.9 2.4-.9 2.4S.3 8.1.3 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.7.9 2.4c.9.9 2.1.9 2.6 1 1.9.2 8 .3 8 .3s4.8 0 8.2-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.4.9-2.4s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.8 14.7V8.9l5.2 2.9-5.2 2.9z"/>
      </svg>
    </a>

    {/* Discord */}
    <a
      href="https://discord.com"
      target="_blank"
      className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
    >
      <svg className="w-4 h-4 text-gray-400 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4.6A16 16 0 0016 3l-.3.6a15 15 0 00-3.7 0L11.7 3A16 16 0 007.9 4.6C4.7 9.1 4.2 13.4 4.4 17.7a16 16 0 004.9 2.5l.6-.9a10 10 0 01-1.9-.9l.5-.4a11 11 0 009.1 0l.5.4a10 10 0 01-1.9.9l.6.9a16 16 0 004.9-2.5c.3-4.3-.3-8.6-3.3-13.1z"/>
      </svg>
    </a>

  </div>
</div>


        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© 2025 Sunbird Inc. All rights reserved.</p>

          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Site Map</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Legal Terms</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          </div>

          <div className="hover:text-white cursor-pointer">
            India | Change Location
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
