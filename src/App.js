import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytic from "./components/Analytic";

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

function App() {
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
          href="https://api.whatsapp.com/send?phone=918549933305&text=Hello"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <FaWhatsapp className="text-2xl mr-2" />
          <span className="hidden sm:inline">Need Help?</span>
        </a>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
