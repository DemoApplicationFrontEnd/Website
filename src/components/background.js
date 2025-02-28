import React, { useState, useEffect } from "react";
import "./background.css";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import ConsultationForm from "./Floating";
const quotes = [
  "Building the Future, Restoring the Past",
  "A Solid Reputation like Concrete",
  "Highest Standards of Construction",
  "Strong Foundation for Tomorrow",
];

const Background = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_58excdi";
    const templateID = "template_gehqs7k";
    const publicKey = "uCcOBOjTMQ4L5Y_AZ";

    const templateParams = {
      to_name: "Nirmaan Constructions",
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert("Email successfully sent!");
        setFormData({ name: "", email: "", phone: "", service: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again.");
      });
  };

  return (
    <div className="homepage-container">
      <div className="overlay">
        <motion.div
          className="left-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="quote-slider">
            <motion.h1
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {quotes[currentQuoteIndex]}
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          className="right-form"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className=""
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ConsultationForm />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Background;
