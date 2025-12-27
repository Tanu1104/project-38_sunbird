const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">

        {/* TOP FOOTER LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-800 pb-12">

          {/* SHOP */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Sunbird Stores</li>
              <li className="hover:text-white cursor-pointer">Earbuds</li>
              <li className="hover:text-white cursor-pointer">Smart Watch</li>
              <li className="hover:text-white cursor-pointer">Earphone</li>
              <li className="hover:text-white cursor-pointer">Speaker</li>
              <li className="hover:text-white cursor-pointer"> Neckband</li>
            </ul>
          </div>


          {/* SUPPORT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Get Help</li>
              <li className="hover:text-white cursor-pointer">Registration & Warranty</li>
              <li className="hover:text-white cursor-pointer">Sunbird Support</li>
              <li className="hover:text-white cursor-pointer">Sunbird Care</li>
              <li className="hover:text-white cursor-pointer">Manage Sunbird ID</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              
            </ul>
          </div>

       

        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">

          <p>
            © 2025 Sunbird Inc. All rights reserved.
          </p>

          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Site Map</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Legal Terms</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Cookie Settings</span>
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
