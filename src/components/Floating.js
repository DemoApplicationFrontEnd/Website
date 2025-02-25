import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [emailStatus, setEmailStatus] = useState(null);

  const quotes = [
    "Building dreams, one brick at a time.",
    "Quality construction you can trust.",
    "Innovative designs, solid foundations.",
    "Your vision, our expertise.",
    "Excellence in every project we build.",
  ];

  const colors = [
    "text-blue-500",
    "text-green-500",
    "text-orange-500",
    "text-purple-500",
    "text-red-500",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailStatus("Sending...");

    const serviceID = "service_58excdi";
    const templateID = "template_gehqs7k";
    const publicKey = "uCcOBOjTMQ4L5Y_AZ";

    const templateParams = {
      to_name: "Nirmaan Constructions",
      to_email: "nc.nirmaanconstruction@gmail.com", // Ensure this is sent
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setEmailStatus("✅ Email successfully sent!");
        sendWhatsAppMessage(); // Send WhatsApp message after email success
        setFormData({ name: "", email: "", phone: "", service: "" });
      })
      .catch((error) => {
        setEmailStatus(
          `❌ Failed to send email. ${error.text || error.message}`
        );
      });
  };

  const sendWhatsAppMessage = () => {
    const ownerNumber = "+918549933305"; // WhatsApp number of the owner
    const message = `New Consultation Request:
    👤 Name: ${formData.name}
    📧 Email: ${formData.email}
    📞 Phone: ${formData.phone || "Not provided"}
    🏗 Service: ${formData.service}`;

    const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <form
      className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto md:max-w-lg lg:max-w-xl border border-gray-200"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        🚀 Get a FREE Consultation!
      </h1>

      {/* Animated Quote Slider with Dynamic Colors */}
      <p
        className={`text-center italic font-semibold transition-all duration-500 text-lg ${colors[currentQuoteIndex]} drop-shadow-md`}
      >
        {quotes[currentQuoteIndex]}
      </p>

      {["name", "email", "phone"].map((field, index) => (
        <div className="consultation-form-group mt-4" key={index}>
          <input
            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 transition-all focus:outline-none text-lg"
            type={field === "email" ? "email" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required={field !== "phone"}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          />
        </div>
      ))}

      {/* Select Dropdown with Modern Styling */}
      <div className="relative w-full my-6">
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 bg-white focus:outline-none text-lg"
        >
          <option value="">Select Service</option>
          <option value="Industrial">🏭 Industrial</option>
          <option value="Commercial">🏢 Commercial</option>
          <option value="Residential">🏡 Residential</option>
          <option value="Renovation">🔨 Renovation</option>
        </select>
      </div>

      {/* Submit Button with Gradient Effect */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md shadow-md hover:from-blue-600 hover:to-blue-800 transition-all text-lg font-semibold"
      >
        Submit
      </motion.button>

      {/* WhatsApp Button with Icon */}
      <button
        type="button"
        onClick={sendWhatsAppMessage}
        className="w-full mt-4 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-md shadow-md hover:from-green-600 hover:to-green-800 transition-all text-lg font-semibold flex items-center justify-center"
      >
        <span className="mr-2">📲</span> Contact via WhatsApp
      </button>

      {/* Display Email Status Below the Buttons */}
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
  );
};

export default ConsultationForm;
