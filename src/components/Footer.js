import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import Logo from "./../assets/NIRMAAAN.png"; // Ensure HD version
import { Link } from "react-router-dom";

export default function Footer() {
  const facebookLink =
    "https://www.facebook.com/share/1DoGKefkRc/?mibextid=wwXIfr";
  const instagramLink =
    "https://www.instagram.com/nirmaanconstructions?igsh=eXE1bjZlNmkzZ2F6&utm_source=qr";
  const whatsappLink = "https://wa.me/918549933305";

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-700 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left Section (Logo & Description) */}
        <div className="space-y-4">
          <img src={Logo} alt="Nirmaan Logo" className="w-28" />
          <p className="text-sm text-gray-300 leading-relaxed">
            Nirmaan Construction is one of the best construction Company. Our
            company’s motto is to provide an end-to-end, professional
            construction service that goes beyond customer expectations.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-3">
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaFacebookSquare className="text-blue-500 hover:text-blue-400 text-2xl" />
            </a>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram className="text-pink-500 hover:text-pink-400 text-2xl" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaWhatsappSquare className="text-green-500 hover:text-green-400 text-2xl" />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Services We Provide</h6>
          <ul className="space-y-2 text-gray-300">
            <li>Planning & Designing</li>
            <li>3D-Modelling</li>
            <li>Cost-estimation</li>
            <li>Renovation works</li>
            <li>Survey & Layout preparation</li>
            <li>Construction permissions</li>
            <li>Building Supervision</li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Support</h6>
          <ul className="space-y-2 text-gray-300">
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
          </ul>
        </div>

        {/* Links Column */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Links</h6>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition-colors"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/analytic"
                className="hover:text-yellow-400 transition-colors"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/newproject"
                className="hover:text-yellow-400 transition-colors"
                onClick={handleLinkClick}
              >
                Our Projects
              </Link>
            </li>
            <li>
              <Link
                to="/ourService"
                className="hover:text-yellow-400 transition-colors"
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/ourpackage"
                className="hover:text-yellow-400 transition-colors"
                onClick={handleLinkClick}
              >
                Our Packages
              </Link>
            </li>
            <li>
              <Link
                to="/cards"
                className="hover:text-yellow-400 transition-colors"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Nirmaan Construction. All rights reserved.
      </div>
    </footer>
  );
}
