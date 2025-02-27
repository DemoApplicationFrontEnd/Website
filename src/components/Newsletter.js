import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className="text-white py-16 px-4 w-full">
      <div className="max-w-[1240] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl py-3">
            {" "}
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="rounded-md text-black p-3 w-full flex"
              type="email"
              placeholder="Enter Email"
            />
            <button className="w-[200px] font-medium p-2 bg-[#00df9a] ml-4 my-6 rounded-md text-black py-3 px-6">
              Notify Me
            </button>
          </div>
          <p className="py-3">
            {" "}
            We care bout the protection of your data. Read our
            <span className="text-[#00df9a]"> Privacy Police</span>
          </p>
        </div>
      </div>
    </div>
  );
}
