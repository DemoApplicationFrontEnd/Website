import React, { useState, useEffect } from "react";
import how1 from "./../assets/howitwork.jpeg";
import how2 from "./../assets/howitwork2.JPG";
import how3 from "./../assets/howitwork3.jpg";
import how4 from "./../assets/howitwork4.jpg";
import how5 from "./../assets/howitwork6.JPG";
import how6 from "./../assets/howitwork7.JPG";
import { Link } from "react-router-dom";

const steps = [
  "Raise a Request",
  "Meet our Expert",
  "Book with Us",
  "Receive Designs",
  "Track & Transact",
  "Settle In",
];

const stepDescriptions = [
  "Submit your request through our platform, and our team will connect with you.",
  "Experts will guide you in selecting the right package for house construction and solve any queries that you may have.",
  "Book our services with a hassle-free process tailored to your requirements.",
  "Receive personalized and detailed designs from our architects.",
  "Track your project progress and manage transactions effortlessly.",
  "Move into your completed home and enjoy the results of your dream project.",
];

const stepImages = [how1, how2, how3, how4, how5, how6];

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#fce4ec] to-[#f8bbd0] min-h-screen py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">How it works</h2>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl">
        Our house construction steps are simple and easy to understand: Plan –
        Build – Track – Settle in.
      </p>

      {/* Steps Progress */}
      <div className="relative w-full max-w-[900px] flex flex-col items-center">
        <div className="absolute top-[1.3rem] w-[calc(100%-2.7rem)] flex justify-between left-[2.15rem]">
          {steps.map((_, index) =>
            index < steps.length - 1 ? (
              <div
                key={index}
                className={`h-[2px] flex-1 transition-all duration-300 ${
                  currentStep >= index + 1
                    ? "bg-gray-800"
                    : "border-b-2 border-dotted border-gray-500"
                }`}
              ></div>
            ) : null
          )}
        </div>

        <div className="flex justify-between w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative z-10 cursor-pointer"
              onClick={() => setCurrentStep(index)}
            >
              <div
                className={`w-12 h-12 flex justify-center items-center rounded-full text-lg font-bold transition-all duration-300 ${
                  currentStep >= index
                    ? "bg-gray-800 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`mt-2 text-sm transition-all duration-300 text-center ${
                  currentStep >= index
                    ? "font-bold text-gray-800"
                    : "text-gray-500"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content (Image + Description) */}
      <div className="mt-10 flex flex-col md:flex-row items-center gap-8 max-w-4xl bg-white p-6 rounded-xl shadow-lg">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={stepImages[currentStep]}
            alt={`Step ${currentStep + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md border border-purple-300"
          />
        </div>

        {/* Description */}
        <div className="w-full md:w-1/2 text-center md:text-left bg-gradient-to-r from-pink-300 to-yellow-300 p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold text-gray-800 mb-2">
            {`${currentStep + 1}. ${steps[currentStep]}`}
          </h4>
          <p className="text-lg text-gray-600">
            {stepDescriptions[currentStep]}
          </p>
          <div class="my-4 text-white flex sm:flex-row flex-col flex-wrap items-center justify-center gap-3 w-full">
            <Link to="/cards" onClick={handleLinkClick}>
              <button class="px-6 py-3 text-white bg-blue-600 rounded-lg">
                Get Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
