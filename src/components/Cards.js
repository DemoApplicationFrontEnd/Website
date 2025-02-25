import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import "./Cards.css";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import ConsultationForm from "./Floating";

export default function Cards() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const facebookLink =
    "https://www.facebook.com/share/1DoGKefkRc/?mibextid=wwXIfr"; // Replace with your real Facebook URL
  const instagramLink =
    "https://www.instagram.com/nirmaanconstructions?igsh=eXE1bjZlNmkzZ2F6&utm_source=qr"; // Replace with your real Instagram URL
  const twitterLink = "https://twitter.com/yourtwitter"; // Replace with your real Twitter URL
  const whatsappLink = "https://wa.me/918549933305"; // Replace with your real WhatsApp link
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_bwpfb4q";
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
    <div className="cards-container">
      <div className="info-section">
        <div className="info-text">
          <p className="title">TALK TO US AND</p>
          <h1 className="subtitle">
            WE CAN <span className="highlight">BUILD A HOME</span> AROUND YOU
          </h1>
          <div className="background-section" style={{ position: "relative" }}>
            <img
              src="https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg"
              alt="Background"
              className="background-image"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <div
              className="ceo-card"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p
                className="quote"
                style={{ fontSize: "16px", fontStyle: "italic" }}
              >
                "If you can offer a free tier that provides a lot of value, it
                will naturally help your product to spread much more rapidly."
              </p>
              <h3
                className="ceo-name"
                style={{
                  margin: "10px 0 5px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Sangamesh Katagi
              </h3>
              <p
                className="ceo-title"
                style={{ fontSize: "14px", color: "gray" }}
              >
                CEO
              </p>
            </div>
          </div>
        </div>
        <div className="help-section">
          <h1 className="help-title">
            HOW CAN WE <span className="highlight">HELP</span>
          </h1>
          <ul className="help-list">
            <li>Do you have any general questions about construction?</li>
            <li>Do you have an upcoming project to discuss?</li>
          </ul>
          <h1 className="connect-title">
            STAY <span className="highlight">CONNECTED</span>
          </h1>
          <div
            className="contact-details"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div className="contact-item" style={{ width: "100%" }}>
              <AiOutlineMail size={50} className="icon" />
              <div>
                <p>Mail Us</p>
                <p style={{ wordBreak: "break-word" }}>
                  nc.nirmaanconstructions@gmail.com
                </p>
              </div>
            </div>
            <div className="contact-item" style={{ width: "100%" }}>
              <HiOutlinePhoneMissedCall size={50} className="icon" />
              <div>
                <p>Call Us</p>
                <p>8549933305</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="consultation-form-container"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ConsultationForm />
      </motion.div>
    </div>
  );
}
