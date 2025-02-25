import React from "react";
import logo1 from "./../projectsPics/Ultratech_Cement_Logo.svg.png";
import logo11 from "./../projectsPics/tatatiscon.png";
import logo2 from "./../projectsPics/Asian Paints logo 2012.png";
import logo3 from "./../projectsPics/Astrallogo.png";
import logo4 from "./../projectsPics/ashirvad.png";
import logo5 from "./../projectsPics/acclogo.jpeg";
import logo12 from "./../projectsPics/JSW_Logo.jpg";
import logo13 from "./../projectsPics/Supreme_Industries_logo.svg.png";
import logo14 from "./../projectsPics/polycablogo.png";

import logo6 from "./../projectsPics/hindware.png";
import logo7 from "./../projectsPics/jaguar-bathroom-fittings-500x500.webp";
import logo8 from "./../projectsPics/ceralogo.jpg";
import logo9 from "./../projectsPics/finolexlogo.png";
import logo10 from "./../projectsPics/pidilite_660_141220104004.webp";

const TrustedBrands = () => {
  const logos = [
    logo1,
    logo11,
    logo9,
    logo10,
    logo2,
    logo3,
    logo4,
    logo5,
    logo12,
    logo13,
    logo14,
    logo6,
  ];

  return (
    <div className="w-full py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001659] mb-8">
          TRUSTED <span className="text-[#ff5e14]">BRANDS</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-[120px] sm:w-[150px] h-[80px] sm:h-[100px] p-2 bg-white shadow-md rounded-lg flex items-center justify-center hover:shadow-lg transition-all"
            >
              <img
                className="w-full h-full object-contain"
                src={logo}
                alt={`Brand ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
