import React from "react";
import { useNavigate } from "react-router-dom";
import "./PricingPlans.css"; // Import CSS
import plan1 from "./../assets/card1.png";
import plan2 from "./../assets/Primum.png";
import plan3 from "./../assets/PRM.png";

const plans = [
  {
    title: "Descent",
    price: "₹1,700/sq.ft",
    gst: "(incl. GST)",
    image: plan1,
  },
  {
    title: "Classic",
    price: "₹1,900/sq.ft",
    gst: "(incl. GST)",
    image: plan2,
  },
  {
    title: "Elegant",
    price: "₹2,100/sq.ft",
    gst: "(incl. GST)",
    image: plan3,
  },
];

export default function PricingPlans() {
  const navigate = useNavigate();
  const HandleClicked = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/ourpackage");
  };

  return (
    <div className="pricing-container">
      <h2 className="pricing-header">Pricing Plans</h2>
      <div className="pricing-card-container">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <img src={plan.image} alt={plan.title} />
            <div className="pricing-content">
              <h3 className="pricing-title">{plan.title}</h3>
              <p className="pricing-price">{plan.price}</p>
              <p className="pricing-gst">{plan.gst}</p>
              <button className="pricing-button" onClick={HandleClicked}>
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
