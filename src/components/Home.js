import React from "react";
import "./home.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Iconfinder from "./../assets/iconfinder.png";
import CalculationIcon from "./../assets/icon_calculation_blueprint.png";
import LocationIcon from "./../assets/location_gps_apartment.png";
import Bg1 from "./../assets/illustration-construction-site.jpg";
import Bg2 from "./../assets/bg-Image-2.png";
import ConsultationForm from "./Floating";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import NearMeSharpIcon from "@mui/icons-material/NearMeSharp";
import Image1 from "./../assets/home.webp";

import { ImgSlider } from "./ImgSlider/ImgSlider";
import { useState } from "react";
import HowItWorks from "./HowItWorks";
import PricingPlans from "./pricingplan";
import FactsSection from "./AnimatedNumber";
import Background from "./background";
import TrustedBrands from "./TrustedBrand";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  // const demoVideo = "https://www.w3schools.com/html/mov_bbb.mp4";
  return (
    <>
      {/* <div className="w-full flex justify-center items-center py-8 bg-gray-100">
        <div className="w-[90%] md:w-[70%] lg:w-[60%] rounded-lg overflow-hidden shadow-lg">
          <video className="w-full h-auto rounded-lg" controls autoPlay loop>
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-center p-4 text-lg font-semibold">
            "Your dream home is just a step away! Secure it now!"
          </div>
        </div>
      </div> */}
      <Background />
      <HowItWorks />
      <PricingPlans />
      <FactsSection />
      <TrustedBrands />
      <div className="w-full bg-gradient-to-b from-[#3e51c0] to-[#26D0CE] text-white sm:py-24 py-1 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}

        <div className="relative sm:w-[1200px] m-auto  z-10">
          <div className="text-center">
            <h1 className="font-bold text-white text-[28px] sm:text-[45px] mb-2 leading-tight animate-fade-in">
              Best Construction <span className="text-[#ff8c00]">Company</span>
            </h1>
          </div>
          <div className="sm:flex w-full gap-8 sm:gap-16 items-center animate-fade-in">
            <p className="sm:text-[45px] text-[24px] mt-6 leading-tight">
              Types of Construction we{" "}
              <span className="text-[#ff8c00]">Provide</span>
            </p>
            <div className="sm:text-[18px] text-[14px] mt-6 sm:mt-0 leading-relaxed">
              <p>
                With 5+ years of expertise, Nirmaan Construction stands as one
                of the most trusted and premier home construction companies in
                Karnataka. We have successfully executed 150+ projects,
                collaborating with 8+ renowned companies, and delivering 100+
                successful projects with absolute customer satisfaction. Our
                elite team of architects, structural designers, and seasoned
                civil engineers ensures precision, innovation, and excellence,
                offering a comprehensive, end-to-end construction solution
                across Karnataka.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div className="p-2 sm:w-[350px] bg-[#ffffff] text-[#000000]  sm:p-12 flex flex-col items-start gap-6 rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300 animate-fade-in">
              <img src={Iconfinder} alt="" />
              <h1 className="text-[23px] font-bold ">Project Planning</h1>
              <p>
                Managing construction projects requires excellent planning and
                execution skills. It takes a team of professionals and suppliers
                to accurately plan and deliver successful construction projects.
              </p>
            </div>
            <div className="p-2 sm:w-[350px] bg-[#ffffff] text-[#000000]  sm:p-12 flex flex-col items-start gap-6 rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300 animate-fade-in">
              <img src={CalculationIcon} alt="" />
              <h1 className="text-[23px] font-bold">Interior Design</h1>
              <p>
                We bring world-class expertise, whether handling single bathroom
                designs or entire homes. We work tirelessly to make your dream a
                reality with safe and comfortable designs.
              </p>
            </div>
            <div className="p-2 sm:w-[350px] bg-[#ffffff] text-[#000000]  sm:p-12 flex flex-col items-start gap-6 rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300 animate-fade-in delay-400">
              <img src={LocationIcon} alt="" />
              <h1 className="text-[23px] font-bold">Budget Planning</h1>
              <p>
                Cost estimation and budgeting are essential tools in
                construction planning. A total project budget should be
                developed as early as possible to ensure smooth execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

<div className="bg-[#ffffff] w-full">
  <div className=" relative sm:w-[1200px] m-auto sm:flex  p-2 gap-[50px] mb-[100px]">
    <div className="sm:flex sm:w-[50%] w-[100%]  gap-[20px] ">
      <img
        src={Bg2}
        alt=""
        className="mb-[20px] sm:w-[50%] w-[100%] sm:h-full object-cover mt-[20px]"
      />
      <img
        src={Bg1}
        alt=""
        className="sm:w-[50%] w-[100%] sm:h-full object-cover sm:mt-20"
      />
    </div>
    <div className="absolute sm:top-[50%] sm:left-[22%] top-[13%] left-[30%] bg-[#ff5e14] sm:h-[100px] h-[60px] w-[60px] sm:w-[100px] rounded-full flex justify-center items-center">
      <a href="https://www.youtube.com/watch?v=fG8aPSsx3G0">
        <PlayArrowIcon style={{ fontSize: "50px" }} className="text-white" />
      </a>
    </div>
    {/* <div className="sm:w-[50%] flex flex-col sm:gap-[30px] gap-[10px]">
            <h1 className="font-bold sm:text-[45px] text-[30px] mt-[20px] sm:text-center sm:mb-[50px]">
              We Provide You a <span className="text-[#ff5e14]">Future</span>
            </h1>
            <p className="text-[#565969] sm:text-[16px] text-[20px]">
              Standing tall with Two years of experience in the construction
              industry, Nirmaan construction is one of the best construction
              Company. The term best is added for its vast diversity of work
              experience and quality artistry. We are a civil construction
              company in Bangalore bagging 64k awards and have worked on more
              than 15+ projects in Two years. We cover all the aspects that the
              job requires, from Architecture to material acquisition to design
              layout and construction finesse. We understand our customers and
              their dilemma over selecting the right firm for their dreams and
              goals to align. Right from costs, material quality, reliability,
              and labor to creating the perfect fit, heartwave construction is
              amongst the top professional home construction companies in
              Bangalore.
            </p>
            <p className="text-[#565969] sm:text-[16px] text-[20px]">
              Nirmaan construction is an amalgamation of businesses like
              Construction, Finance, Real-estate, Interior designing,
              Investments, and Wealth management. Creating wealth through real
              estate investment is the crux of the business model. With a cent
              percent designated in-house solution, we break the conventional
              system of expecting whatever is in the offer through a researched
              and foolproof investment system. We aim to be one of the best
              construction companies in Bangalore.
            </p>
          </div> */}
  </div>
</div>;
