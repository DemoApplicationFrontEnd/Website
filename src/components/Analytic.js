import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./analytic.css";
import AboutKeyImg from "./../assets/AboutKey-image.png";
import AnimatedNumber from "./AnimatedNumber";

export default function Analytic() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [emailStatus, setEmailStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailStatus("Sending...");
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
        setEmailStatus("✅ Email successfully sent!");

        setFormData({ name: "", email: "", phone: "", service: "" });
      })
      .catch((error) => {
        setEmailStatus(
          `❌ Failed to send email. ${error.text || error.message}`
        );
      });
  };

  const whatsappMessage = `Hello, I am interested in the ${formData.service} service. My name is ${formData.name}, and you can reach me at ${formData.phone}.`;

  return (
    <>
      <AnimatedNumber />
      <motion.div
        className="analytic-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-section"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="aboutTitle">Welcome to Nirmaan Constructions</p>
          <h1>
            BUILDING AS PER YOUR <span className="highlight">Convenience</span>
          </h1>
          <p className="description">
            Nirmaan Constructions has been synonymous with quality and trust
            since its inception, constantly bettering itself with every project.
            We provide customized floor plans, 3D Elevations, interior designs,
            technical drawings & Architectural guidance.
          </p>
        </motion.div>

        <div className="image-and-form">
          <motion.div
            className="image-section"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              className="about-img"
              src={AboutKeyImg}
              alt="About Nirmaan Constructions"
            />
          </motion.div>
          <motion.div
            className="consultation-form-container"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <form className="consultation-form" onSubmit={handleSubmit}>
              <h1 className="consultation-title">Get a FREE Consultation!</h1>

              {["name", "email", "phone"].map((field, index) => (
                <div className="consultation-form-group" key={index}>
                  <input
                    className="consultation-form-input"
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required={field !== "phone"}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  />
                  <label className="consultation-form-label">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                </div>
              ))}
              <div className="consultation-form-group">
                <select
                  className="input-field"
                  value={formData.service}
                  name="service"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="IS">Industrial</option>
                  <option value="Co">Commercial</option>
                  <option value="Re">Residential</option>
                  <option value="Rn">Renovation</option>
                </select>
              </div>

              <motion.button
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md shadow-md hover:from-blue-600 hover:to-blue-800 transition-all text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="btn-submit"
              >
                Submit
              </motion.button>
              {emailStatus && (
                <p className="text-center mt-4 font-semibold text-lg transition-all duration-500">
                  {emailStatus.includes("✅") ? (
                    <span className="text-green-600">{emailStatus}</span>
                  ) : (
                    <span className="text-red-600">{emailStatus}</span>
                  )}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
