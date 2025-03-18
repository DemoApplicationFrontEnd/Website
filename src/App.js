import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytic from "./components/ContactUs";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import "./../src/App.css";
import { OldProject } from "./components/OldProject";
import { NewProject } from "./components/NewProject";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import Home from "./components/Home";
import OurService from "./components/OurServices/OurService";
import Ourpackage from "./components/OurPackeges/Ourpackage";
import Layout from "./components/layout/Layout";
import { FaWhatsapp } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

function App() {
  useEffect(() => {
    // Load Google Analytics script dynamically
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-0TZFQXCJDZ";
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-0TZFQXCJDZ");
  }, []);
  return (
    <div className="relative">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/analytic" element={<Analytic />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/oldproject" element={<OldProject />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/ourService" element={<OurService />} />
          <Route path="/ourpackage" element={<Ourpackage />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
        <a
          href="https://api.whatsapp.com/send?phone=918549933305&text=Hello!%20I'm%20interested%20in%20your%20construction%20services.%20Can%20you%20help%20me%20with%20my%20project?"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <FaWhatsapp className="text-2xl mr-2" />
          <span className="hidden sm:inline">Need Help?</span>
        </a>

        <Footer />
        <Analytics />
      </Router>
    </div>
  );
}

export default App;
