# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Here's how you can achieve this with EmailJS:

1. Set up EmailJS:

Go to EmailJS and sign up for an account.
Once logged in, create a new Service by selecting a provider (like Gmail, Outlook, etc.).
After creating the service, create an Email Template that will define how the email is formatted.
You'll get the following keys from EmailJS:
User ID
Service ID
Template ID 2. Install EmailJS SDK:

You need to install EmailJS SDK into your React project.

Run this command to install it:

npm install emailjs-com 3. Modify Your React Component:

You can now modify your React component to use EmailJS for sending the email directly from the frontend.
construction applications demo websites for free using mern technologies
























.cards-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 40px;
    background: linear-gradient(135deg, #6d7690, #0b6835);
    min-height: 100vh;
    animation: fadeIn 1s ease-in;
}

.info-section {
    max-width: 600px;
    text-align: left;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 40px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
}

.title {
    font-size: 26px;
    font-weight: bold;
}

.subtitle .highlight {
    color: #ffcc00;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 20px;
}

.icon {
    color: #ffcc00;
}

.consultation-form {
    max-width: 500px;
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.input-field {
    width: 100%;
    padding: 15px;
    border: 2px solid #001659;
    border-radius: 10px;
    font-size: 18px;
    background: transparent;
    color: #333;
}

.input-field:focus + .floating-label,
.input-field:not(:placeholder-shown) + .floating-label {
    top: -15px;
    font-size: 14px;
    color: #001659;
    background: white;
    padding: 0 5px;
}

.floating-label {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    color: #888;
    transition: 0.3s ease;
}

.submit-button {
    background: #ffcc00;
    color: white;
    font-size: 20px;
    padding: 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s ease;
}

.submit-button:hover {
    background: #e6b800;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}





























import React, { useState } from "react";
import emailjs from "emailjs-com";
import AboutKeyImg from "./../assets/AboutKey-image.png";
import Cards from "./Cards";


export default function Analytic() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "", // For the service dropdown
  });

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
        setFormData({ name: "", email: "", phone: "", service: "" }); // Reset form data
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again.");
      });
  };

  // Create WhatsApp URL with query params
  const whatsappURL = `https://wa.me/1234567890?text=Name:${formData.name}%0AEmail:${formData.email}%0APhone:${formData.phone}%0AService:${formData.service}`;

  return (
    <>
      <div className="analytic-container">
        <div className="text-section">
          <p className="section-title">
            ABOUT <span className="highlight">US</span>
          </p>
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
        </div>

        <div className="image-and-form">
          <div className="image-section">
            <img
              className="about-img"
              src={AboutKeyImg}
              alt="About Nirmaan Constructions"
            />
          </div>

          <div className="consultation-form-container">
            <form className="consultation-form" onSubmit={handleSubmit}>
              <h1 className="consultation-title">Get a FREE Consultation!</h1>

              {["name", "email", "phone"].map((field, index) => (
                <div className="form-group" key={index}>
                  <input
                    className="form-input"
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required={field !== "phone"}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)} // Ensure placeholder is aligned
                  />
                  <label className="form-label">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                </div>
              ))}

              <div className="form-group">
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

              <button className="learn-more-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Cards />

      {/* WhatsApp Button */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </>
  );
}









































































































import React, { useState } from "react";
import "./NewProject.css";
import newpic1 from "./../projectsPics/newpics/new1.jpeg";
import newpic2 from "./../projectsPics/newpics/new2.jpeg";
import newpic3 from "./../projectsPics/newpics/new3.jpeg";
import newpic4 from "./../projectsPics/newpics/new4.jpeg";
import newpic5 from "./../projectsPics/newpics/new5.jpeg";
import newpic6 from "./../projectsPics/newpics/new6.jpeg";
import newpic7 from "./../projectsPics/newpics/new7.jpeg";
import newpic8 from "./../projectsPics/newpics/new8.jpeg";
import newpic9 from "./../projectsPics/newpics/new9.jpeg";
import newpic10 from "./../projectsPics/newpics/new10.jpeg";
import newpic11 from "./../projectsPics/newpics/new11.jpeg";
import newpic12 from "./../projectsPics/newpics/new12.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "./layout/Layout";

export const NewProject = () => {
  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  // Define images for different projects (e.g., ongoing and completed projects)
  const project1Images = [
    { src: newpic1 },
    { src: newpic2 },
    { src: newpic3 },
    { src: newpic4 },
    { src: newpic5 },
    { src: newpic6 },
    { src: newpic7 },
    { src: newpic8 },
    { src: newpic9 },
    { src: newpic10 },
  ];

  const project2Images = [{ src: newpic4 }, { src: newpic5 }, { src: newpic6 }];
  const project3Images = [{ src: newpic7 }, { src: newpic8 }, { src: newpic9 }];

  const handleViewDetails = (imageList) => {
    setSelectedImages(imageList); // Set the selected images for the project
    setImageIndex(0); // Reset to the first image in the list
    setOpen(true); // Open the modal to show images
  };

  const handledir = (direction) => {
    let newIndex;
    if (direction === "left") {
      newIndex = imageIndex === 0 ? selectedImages.length - 1 : imageIndex - 1;
    } else {
      newIndex = imageIndex === selectedImages.length - 1 ? 0 : imageIndex + 1;
    }
    setImageIndex(newIndex);
  };

  return (
    <>
      {/* Ongoing Projects Section */}
      <div className="py-[40px]">
        <h2 className="text-center text-3xl text-[#333] mb-4">
          Ongoing Projects
        </h2>
        <div className="flex flex-wrap justify-around">
          {/* Define buttons to view details of specific projects */}
          <div className="w-[280px] bg-white shadow-lg rounded-lg p-4 mb-6">
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src={newpic1}
              alt="Ongoing Project 1"
            />
            <h3 className="text-xl font-semibold mt-4">Ongoing Project 1</h3>
            <p className="mt-2 text-gray-600">
              Brief project details or description goes here.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => handleViewDetails(project1Images)} // Pass images for project 1
            >
              View Details
            </button>
          </div>

          <div className="w-[280px] bg-white shadow-lg rounded-lg p-4 mb-6">
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src={newpic4}
              alt="Ongoing Project 2"
            />
            <h3 className="text-xl font-semibold mt-4">Ongoing Project 2</h3>
            <p className="mt-2 text-gray-600">
              Brief project details or description goes here.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => handleViewDetails(project2Images)} // Pass images for project 2
            >
              View Details
            </button>
          </div>

          {/* Add more projects if necessary */}
        </div>
      </div>

      {/* Completed Projects Section */}
      <div className="py-[40px]">
        <h2 className="text-center text-3xl text-[#333] mb-4">
          Completed Projects
        </h2>
        <div className="flex flex-wrap justify-around">
          <div className="w-[280px] bg-white shadow-lg rounded-lg p-4 mb-6">
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src={newpic7}
              alt="Completed Project 1"
            />
            <h3 className="text-xl font-semibold mt-4">Completed Project 1</h3>
            <p className="mt-2 text-gray-600">
              Brief project details or description goes here.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => handleViewDetails(project3Images)} // Pass images for project 3
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal with Image Gallery and Navigation */}
      {open && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 w-[80%] sm:w-[60%] rounded-lg relative">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="absolute top-2 right-2 text-2xl cursor-pointer"
              onClick={() => setOpen(false)} // Close the modal when clicked
            />
            <div className="relative flex justify-center items-center">
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="absolute left-0 text-2xl cursor-pointer"
                onClick={() => handledir("left")} // Navigate left
              />
              <img
                className="object-cover h-[300px] w-[300px]"
                src={selectedImages[imageIndex].src}
                alt={`Selected Project ${imageIndex + 1}`}
              />
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="absolute right-0 text-2xl cursor-pointer"
                onClick={() => handledir("right")} // Navigate right
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
