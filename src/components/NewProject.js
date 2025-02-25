import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
// import propertyVideo from "./../projectsPics/videos/property.mp4";
import {
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
// import demoVideo from "./../assets/VID-20250221-WA0027.mp4";

import demoVideo from "./../assets/VID-20250223-WA0017.mp4";

export const NewProject = () => {
  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  // Define images specific to each project
  const ongoingProjects = [
    {
      title: "Ongoing Project 1",
      images: [{ src: newpic1 }, { src: newpic2 }, { src: newpic3 }],
    },
    {
      title: "Ongoing Project 2",
      images: [{ src: newpic4 }, { src: newpic5 }, { src: newpic6 }],
    },
    {
      title: "Ongoing Project 3",
      images: [{ src: newpic4 }, { src: newpic5 }, { src: newpic6 }],
    },
    {
      title: "Ongoing Project 4",
      images: [{ src: newpic4 }, { src: newpic5 }, { src: newpic6 }],
    },
    {
      title: "Ongoing Project 5",
      images: [{ src: newpic4 }, { src: newpic5 }, { src: newpic6 }],
    },
  ];

  const completedProjects = [
    {
      title: "Completed Project 1",
      images: [{ src: newpic7 }, { src: newpic8 }, { src: newpic9 }],
    },
    {
      title: "Completed Project 2",
      images: [{ src: newpic10 }, { src: newpic11 }, { src: newpic12 }],
    },
    {
      title: "Completed Project 2",
      images: [{ src: newpic10 }, { src: newpic11 }, { src: newpic12 }],
    },
    {
      title: "Completed Project 2",
      images: [{ src: newpic10 }, { src: newpic11 }, { src: newpic12 }],
    },
    {
      title: "Completed Project 2",
      images: [{ src: newpic10 }, { src: newpic11 }, { src: newpic12 }],
    },
  ];

  // Function to handle the "View Details" click
  const handleViewDetails = (images) => {
    setSelectedImages(images);
    setImageIndex(0);
    setOpen(true);
  };

  // Function to handle image navigation
  const handledir = (direction) => {
    let newIndex =
      direction === "left"
        ? imageIndex === 0
          ? selectedImages.length - 1
          : imageIndex - 1
        : imageIndex === selectedImages.length - 1
        ? 0
        : imageIndex + 1;
    setImageIndex(newIndex);
  };

  return (
    <>
      <div className="flex justify-center items-center py-8 bg-gray-100">
        <div className="w-[95%] md:w-[85%] lg:w-[80%] xl:w-[70%] max-w-screen-lg rounded-lg overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105">
          <div className="relative w-full aspect-video">
            <video
              className="w-full h-full object-contain rounded-lg"
              controls
              autoPlay
              muted
              loop
            >
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-center p-4 text-lg font-semibold bg-white text-gray-700 shadow-md rounded-b-lg">
            "Your dream home is just a step away! Secure it now!"
          </div>
        </div>
      </div>

      {/* Ongoing Projects Section */}
      <div className="py-[40px]">
        <h2 className="text-center text-3xl text-[#333] mb-2">
          Ongoing Projects
        </h2>
        <div className="flex flex-wrap justify-around">
          {ongoingProjects.map((project, i) => (
            <motion.div
              className="w-[280px] bg-white shadow-lg rounded-lg p-4 mb-6"
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <img
                className="w-full h-[200px] object-cover rounded-lg"
                src={project.images[0].src}
                alt={project.title}
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={() => handleViewDetails(project.images)}
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Completed Projects Section */}
      <div className="">
        <h2 className="text-center text-3xl text-[#333] mb-2">
          Completed Projects
        </h2>
        <div className="flex flex-wrap justify-around">
          {completedProjects.map((project, i) => (
            <motion.div
              className="w-[280px] bg-white shadow-lg rounded-lg p-4 mb-6"
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <img
                className="w-full h-[200px] object-cover rounded-lg"
                src={project.images[0].src}
                alt={project.title}
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={() => handleViewDetails(project.images)}
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal with Image Gallery and Navigation */}
      {/* Modal with Image Gallery and Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] rounded-lg relative"
              initial={{ y: "-100vh" }}
              animate={{ y: "0" }}
              exit={{ y: "100vh" }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="absolute top-2 right-2 text-2xl cursor-pointer"
                onClick={() => setOpen(false)}
              />
              <div className="relative flex flex-col items-center">
                <div className="mb-4 text-center text-xl font-semibold">
                  Project {imageIndex + 1} Images
                </div>

                {/* Image Gallery with Smooth Transition */}
                <div className="relative flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    className="absolute left-[-40px] text-2xl cursor-pointer"
                    onClick={() => handledir("left")}
                  />

                  <motion.img
                    key={imageIndex}
                    className="object-contain w-full h-auto sm:h-[70vh] md:h-[80vh] lg:h-[80vh] rounded-lg" // Ensuring it fits the screen
                    src={selectedImages[imageIndex].src}
                    alt={`Selected Project ${imageIndex + 1}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                  />

                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="absolute right-[-40px] text-2xl cursor-pointer"
                    onClick={() => handledir("right")}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
