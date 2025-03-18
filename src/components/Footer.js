// import React from "react";
// import {
//   FaFacebookSquare,
//   FaInstagram,
//   FaWhatsappSquare,
// } from "react-icons/fa";
// import Logo from "./../assets/NIRMAAAN.png";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   const facebookLink =
//     "https://www.facebook.com/share/1DoGKefkRc/?mibextid=wwXIfr";
//   const instagramLink =
//     "https://www.instagram.com/nirmaanconstructions?igsh=eXE1bjZlNmkzZ2F6&utm_source=qr";
//   const whatsappLink = "https://wa.me/918549933305";

//   const handleLinkClick = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-gray-900 text-white py-10">
//       <div className="max-w-7xl mx-auto px-6 md:px-10">
//         {/* Flex Container for Logo & Heading Sections */}
//         <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-700 pb-6">
//           {/* Logo, Text & Social Media */}
//           <div className="w-full text-center">
//             <img src={Logo} alt="Nirmaan Logo" className="w-32 mx-auto" />
//             <p className="text-sm text-gray-300 leading-relaxed max-w-lg mx-auto mt-3">
//               Nirmaan Constructions is one of the best construction companies.
//               We provide end-to-end professional construction services that go
//               beyond customer expectations.
//             </p>
//             {/* Social Icons */}
//             <div className="flex justify-center space-x-4 mt-4">
//               <a
//                 href={facebookLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:scale-110 transition-transform"
//               >
//                 <FaFacebookSquare className="text-blue-500 hover:text-blue-400 text-3xl" />
//               </a>
//               <a
//                 href={instagramLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:scale-110 transition-transform"
//               >
//                 <FaInstagram className="text-pink-500 hover:text-pink-400 text-3xl" />
//               </a>
//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:scale-110 transition-transform"
//               >
//                 <FaWhatsappSquare className="text-green-500 hover:text-green-400 text-3xl" />
//               </a>
//             </div>
//           </div>

//           {/* Sections - Services, Quick Links, Support */}
//           <div className="w-full flex flex-wrap justify-center md:justify-between lg:w-2/3 gap-8 mt-6">
//             {/* Services Column */}
//             <div className="text-center md:text-left w-full sm:w-1/3">
//               <h6 className="text-xl font-bold text-yellow-400">
//                 Services We Provide
//               </h6>
//               <ul className="mt-3 space-y-2 text-gray-300">
//                 {[
//                   "Planning & Designing",
//                   "3D-Modelling",
//                   "Cost Estimation",
//                   "Renovation Works",
//                   "Survey & Layout",
//                   "Construction Permissions",
//                   "Building Supervision",
//                 ].map((service, index) => (
//                   <li
//                     key={index}
//                     className="hover:text-yellow-300 transition-colors"
//                   >
//                     {service}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Quick Links Column */}
//             <div className="text-center md:text-left w-full sm:w-1/3">
//               <h6 className="text-xl font-bold text-purple-400">Quick Links</h6>
//               <ul className="mt-3 space-y-2">
//                 {[
//                   { text: "Home", to: "/" },
//                   { text: "About Us", to: "/analytic" },
//                   { text: "Our Projects", to: "/newproject" },
//                   { text: "Services", to: "/ourService" },
//                   { text: "Our Packages", to: "/ourpackage" },
//                   { text: "Contact Us", to: "/cards" },
//                 ].map((link, index) => (
//                   <li key={index}>
//                     <Link
//                       to={link.to}
//                       onClick={handleLinkClick}
//                       className="text-white hover:text-purple-300 transition-colors"
//                     >
//                       {link.text}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Support Column */}
//             <div className="text-center md:text-left w-full sm:w-1/3">
//               <h6 className="text-xl font-bold text-green-400">Support</h6>
//               <ul className="mt-3 space-y-2 text-gray-300">
//                 {["Pricing", "Documentation", "Guides"].map(
//                   (support, index) => (
//                     <li
//                       key={index}
//                       className="hover:text-green-300 transition-colors"
//                     >
//                       {support}
//                     </li>
//                   )
//                 )}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="mt-8 text-center text-sm font-semibold text-orange-400">
//         © {new Date().getFullYear()} Nirmaan Constructions. All rights reserved.
//       </div>
//     </footer>
//   );
// }

import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import Logo from "./../assets/NIRMAAAN.png";
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
    <footer className="bg-gray-900 text-white py-10">
      <div className="w-full mx-auto px-6 md:px-10 flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Left Section (Logo & Text) */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <img src={Logo} alt="Nirmaan Logo" className="w-32 mx-auto lg:mx-0" />
          <p className="text-sm text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 mt-3 font-sans">
            Nirmaan Constructions is one of the best construction companies. We
            provide end-to-end professional construction services that go beyond
            customer expectations.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaFacebookSquare className="text-blue-500 hover:text-blue-400 text-5xl" />
            </a>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram className="text-pink-500 hover:text-pink-400 text-5xl" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaWhatsappSquare className="text-green-500 hover:text-green-400 text-5xl" />
            </a>
          </div>
        </div>

        {/* Right Side: Services, Quick Links, Support */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 pt-6 lg:pt-0">
          {/* Services Column */}
          <div>
            <h6 className="text-xl font-semibold text-yellow-400">
              Services We Provide
            </h6>
            <ul className="mt-3 space-y-2 text-gray-300 font-sans">
              {[
                "Planning & Designing",
                "3D-Modelling",
                "Cost Estimation",
                "Renovation Works",
                "Survey & Layout",
                "Construction Permissions",
                "Building Supervision",
              ].map((service, index) => (
                <li
                  key={index}
                  className="hover:text-yellow-300 transition-colors"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h6 className="text-xl font-semibold text-purple-400">
              Quick Links
            </h6>
            <ul className="mt-3 space-y-2 font-sans">
              {[
                { text: "Home", to: "/" },
                { text: "About Us", to: "/analytic" },
                { text: "Our Projects", to: "/newproject" },
                { text: "Services", to: "/ourService" },
                { text: "Our Packages", to: "/ourpackage" },
                { text: "Contact Us", to: "/cards" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    onClick={handleLinkClick}
                    className="text-white text-base font-light flex items-center space-x-1 hover:text-purple-300 transition-colors"
                  >
                    <span>{link.text}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-400 hover:text-purple-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h6 className="text-xl font-semibold text-green-400">Support</h6>
            <ul className="mt-3 space-y-2 text-gray-300 font-sans">
              {["Pricing", "Documentation", "Guides"].map((support, index) => (
                <li
                  key={index}
                  className="hover:text-green-300 transition-colors"
                >
                  {support}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-sm font-semibold text-orange-400">
        © {new Date().getFullYear()} Nirmaan Constructions. All rights reserved.
      </div>
    </footer>
  );
}
