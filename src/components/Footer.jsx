import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between">
        <div>
          <h3 className="text-lg font-bold">Sunbird</h3>
          <p className="text-sm text-gray-400">High-Fidelity Audio</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Pages</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/follow" className="text-gray-400 hover:text-white">
                Follow Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
