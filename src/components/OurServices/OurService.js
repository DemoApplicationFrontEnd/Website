import React, { useState } from "react";
import "./ourService.css";
import { motion } from "framer-motion";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "./../Login/styles.module.css";
import chevronDown from "./../../assets/chevron-down.svg";

const AccordionItem = ({ header, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Item
      {...rest}
      header={
        <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
          <span>{header}</span>
          <motion.img
            className="chevron-icon"
            src={chevronDown}
            alt="Chevron Down"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      }
      className={styles.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
  );
};

const ServiceCard = ({ title, desc, imgSrc }) => (
  <motion.div
    className="project-card"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" }}
    transition={{ duration: 0.5 }}
  >
    {/* <img src={imgSrc} alt={title} className="card-image" /> */}
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{desc}</p>
  </motion.div>
);

const OurService = () => {
  const services = [
    {
      title: "Commercial",
      desc: "Our commercial construction services cover office buildings, retail spaces, and hospitality projects, ensuring efficiency and aesthetic appeal.",
      // imgSrc: "https://source.unsplash.com/400x300/?commercial,building",
    },
    {
      title: "Residential",
      desc: "We specialize in constructing high-quality residential homes, from modern apartments to luxury villas, focusing on sustainable and smart home solutions.",
      // imgSrc: "https://source.unsplash.com/400x300/?residential,house",
    },
    {
      title: "Renovation",
      desc: "We provide renovation and remodeling services for homes and businesses, enhancing spaces with modern upgrades and efficient designs.",
      // imgSrc: "https://source.unsplash.com/400x300/?renovation,interior",
    },
  ];

  return (
    <>
      <motion.div
        className="hero-container"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="offer-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">
            What We <span className="highlight">Offer</span>
          </h1>
          <p className="description">
            Nirmaan Constructions is a leading home construction company in
            Bidar, specializing in commercial, residential, and renovation
            projects.
          </p>
          <div>
            <h6 className="text-lg font-semibold mt-5 mb-2 text-orange-500">
              Services We Provide
            </h6>
            <ul className="space-y-2 text-black">
              <li>Planning & Designing</li>
              <li>3D-Modelling</li>
              <li>Cost-estimation</li>
              <li>Renovation works</li>
              <li>Survey & Layout preparation</li>
              <li>Construction permissions</li>
              <li>Building Supervision</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <div className="projects-container">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="accordion-section">
        <Accordion className="flex flex-col gap-6">
          <AccordionItem header="Efficient. Reliable. Experienced.">
            <p>
              Our clients are our number one priority, and we go the extra mile
              to ensure their projects are completed with precision and quality.
            </p>
          </AccordionItem>
          <AccordionItem header="Customized to Your Preferences">
            <p>
              Looking for a tailored construction solution? We provide
              customized plans and expert consultation for all types of
              projects.
            </p>
          </AccordionItem>
          <AccordionItem header="It’s All in the Details">
            <p>
              With years of industry experience, we are known for our meticulous
              attention to detail and commitment to customer satisfaction.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default OurService;
