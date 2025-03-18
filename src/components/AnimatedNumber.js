import React, { useState, useEffect } from "react";

// Animated Number Component
const AnimatedNumber = ({ finalValue }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime = Date.now();
    const duration = 3000; // Animation duration (3 seconds)
    let interval;

    interval = setInterval(() => {
      let elapsedTime = Date.now() - startTime;
      let progress = elapsedTime / duration;

      if (progress >= 1) {
        clearInterval(interval);
        setValue(finalValue);
      } else {
        let animatedValue = Math.floor(progress * finalValue);
        setValue(animatedValue);
      }
    }, 50); // Smooth update every 50ms

    return () => clearInterval(interval);
  }, [finalValue]);

  return <p className="text-[40px] font-bold leading-tight">{value}+</p>;
};

// Facts Section
const FactsSection = () => {
  const facts = [
    { label: "Years of Experience", value: 5 },
    { label: "Projects We Work In", value: 100 },
    { label: "Companies We Work With", value: 8 },
    { label: "Successful Projects Done", value: 80 },
  ];

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white mt-1">
      <div className="sm:w-[80%] m-auto sm:flex p-6 sm:p-10 items-center justify-between sm:h-[300px] bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-[28px] text-white font-bold text-center sm:text-left sm:w-[250px] mb-6 sm:mb-0">
          Some Facts About Us
        </h1>

        <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-12">
          {facts.map((fact, index) => (
            <div key={index} className="w-[150px] text-center">
              <AnimatedNumber finalValue={fact.value} />
              <p className="font-bold text-[16px]">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
