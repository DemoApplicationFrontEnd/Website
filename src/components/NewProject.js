import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./NewProject.css";
import newpic1 from "./../projectsPics/newpics/new1.jpeg";
import newpic2 from "./../projectsPics/newprojectspics/funhallimg1.jpeg";
import newpic3 from "./../projectsPics/newprojectspics/funhallimg2.jpeg";
import newpic4 from "./../projectsPics/newprojectspics/funhallimg4.jpeg";
import newpic5 from "./../projectsPics/newprojectspics/funhallimg5.jpeg";
import newpic6 from "./../projectsPics/newprojectspics/funhallimg6.jpeg";
import newpic7 from "./../projectsPics/newprojectspics/funhallimg7.jpeg";
import newpic8 from "./../projectsPics/newprojectspics/funhallimg8.jpeg";
import newpic9 from "./../projectsPics/newprojectspics/funhallimh9.jpeg";
import newpic10 from "./../projectsPics/newprojectspics/funhallimh10.jpeg";
import newpic11 from "./../projectsPics/newprojectspics/funhallimg11.jpeg";

import newpic15 from "./../projectsPics/newprojectspics/1stprodemo.jpeg";
import newpic16 from "./../projectsPics/newprojectspics/1stproimgmain.jpeg";
import newpic17 from "./../projectsPics/newprojectspics/1stproimg1.jpeg";
import newpic18 from "./../projectsPics/newprojectspics/1stproimg2.jpeg";
import newpic19 from "./../projectsPics/newprojectspics/1stproimg3.jpeg";
import newpic20 from "./../projectsPics/newprojectspics/1stproimg4.jpeg";

import newpic21 from "./../projectsPics/newprojectspics/2ndproimgdemo.jpeg";
import newpic22 from "./../projectsPics/newprojectspics/2ndpromain.jpeg";
import newpic23 from "./../projectsPics/newprojectspics/2ndproimg1.jpeg";
import newpic24 from "./../projectsPics/newprojectspics/2ndproimg2.jpeg";
import newpic25 from "./../projectsPics/newprojectspics/2ndproimg3.jpeg";
import newpic26 from "./../projectsPics/newprojectspics/2ndproimg4.jpeg";
import newpic27 from "./../projectsPics/newprojectspics/2ndproimg5.jpeg";
import newpic28 from "./../projectsPics/newprojectspics/2ndproimg6.jpeg";

import newpic30 from "./../projectsPics/newprojectspics/3rdprodemo.jpeg";
// import newpic31 from "./../projectsPics/newprojectspics/3rdproimg1.jpeg";
import newpic32 from "./../projectsPics/newprojectspics/3rdproimg2.jpeg";
import newpic33 from "./../projectsPics/newprojectspics/3rdproimg3.jpeg";
import newpic34 from "./../projectsPics/newprojectspics/3rdproimg4.jpeg";
import newpic35 from "./../projectsPics/newprojectspics/3rdproimg5.jpeg";
import newpic36 from "./../projectsPics/newprojectspics/3rdproimg6.jpeg";

import newpic40 from "./../projectsPics/newprojectspics/comdemo.jpeg";
import newpic41 from "./../projectsPics/newprojectspics/comimg1.jpeg";
import newpic42 from "./../projectsPics/newprojectspics/comimg2.jpeg";
import newpic43 from "./../projectsPics/newprojectspics/comimg3.jpeg";
import newpic44 from "./../projectsPics/newprojectspics/comimg4.jpeg";
import newpic45 from "./../projectsPics/newprojectspics/comimg5imp.jpeg";
import newpic46 from "./../projectsPics/newprojectspics/comimg6.jpeg";
import newpic47 from "./../projectsPics/newprojectspics/comimg7.jpeg";
import newpic48 from "./../projectsPics/newprojectspics/comimg8.jpeg";

import ongo1 from "./../projectsPics/ongoingpro/on1.jpeg";
import ongo2 from "./../projectsPics/ongoingpro/on2.jpeg";
import ongo3 from "./../projectsPics/ongoingpro/on3.jpeg";
import ongo4 from "./../projectsPics/ongoingpro/on4.jpeg";
import ongo5 from "./../projectsPics/ongoingpro/on5.jpeg";
import ongo6 from "./../projectsPics/ongoingpro/on6.jpeg";
import ongo7 from "./../projectsPics/ongoingpro/on7.jpeg";
import ongo8 from "./../projectsPics/ongoingpro/on8.jpeg";
import ongo9 from "./../projectsPics/ongoingpro/on9.jpeg";
import ongo10 from "./../projectsPics/ongoingpro/on10.jpeg";
import ongo11 from "./../projectsPics/ongoingpro/on11.jpeg";

import ongo12 from "./../projectsPics/oldpics/Dcentermain.jpeg";
import ongo13 from "./../projectsPics/oldpics/Dcenterdemo1.jpeg";
import ongo14 from "./../projectsPics/oldpics/Dcenterdemo2.jpeg";
import ongo15 from "./../projectsPics/oldpics/Dcenterdemo3.jpeg";

import ongo16 from "./../projectsPics/oldpics/ongo5.jpg";
import ongo17 from "./../projectsPics/oldpics/ongo65demo.jpeg";
import ongo18 from "./../projectsPics/oldpics/ongo64demo.jpeg";
import ongo19 from "./../projectsPics/oldpics/ongo63demo.jpeg";
import ongo20 from "./../projectsPics/oldpics/ongo62demo.jpeg";
import ongo21 from "./../projectsPics/oldpics/ongo61demo.jpeg";

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

  const completedProjects = [
    {
      title: "Dhanashree Convention Hall Project",
      images: [
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
        { src: newpic11 },
      ],
    },
    {
      title: "Residential Project",
      images: [
        { src: newpic15 },
        { src: newpic16 },
        { src: newpic17 },
        { src: newpic18 },
        { src: newpic19 },
        { src: newpic20 },
      ],
    },
    {
      title: "Residential Project",
      images: [
        { src: newpic21 },
        { src: newpic22 },
        { src: newpic23 },
        { src: newpic24 },
        { src: newpic25 },
        { src: newpic26 },
        { src: newpic27 },
        { src: newpic28 },
      ],
    },
    {
      title: "Residential Project",
      images: [
        { src: newpic30 },
        { src: newpic32 },
        { src: newpic33 },
        { src: newpic34 },
        { src: newpic35 },
        { src: newpic36 },
      ],
    },
    {
      title: "Commercial Complex Project",
      images: [
        { src: newpic40 },
        { src: newpic41 },
        { src: newpic42 },
        { src: newpic43 },

        { src: newpic45 },
        { src: newpic46 },
        { src: newpic47 },
        { src: newpic48 },
      ],
    },
  ];

  // Define images specific to each project
  const ongoingProjects = [
    {
      title: "Dhanashree Business Center Project",
      images: [
        { src: ongo12 },
        { src: ongo13 },
        { src: ongo14 },
        { src: ongo15 },
      ],
    },
    {
      title: "Ongoing Residential Project",
      images: [
        { src: ongo16 },
        { src: ongo17 },
        { src: ongo18 },
        { src: ongo19 },

        { src: ongo20 },
        { src: ongo21 },
      ],
    },
    {
      title: "Ongoing Commercial Project",
      images: [
        { src: newpic44 },
        { src: ongo1 },
        { src: ongo2 },
        { src: ongo3 },
      ],
    },
    {
      title: "Ongoing Residential Project",
      images: [
        { src: ongo8 },
        { src: ongo9 },
        { src: ongo10 },
        { src: ongo11 },
      ],
    },
    {
      title: "Ongoing Residential Project",
      images: [{ src: newpic4 }, { src: newpic5 }, { src: newpic6 }],
    },
    {
      title: "Ongoing Commercial Project",
      images: [{ src: ongo4 }, { src: ongo5 }, { src: ongo6 }, { src: ongo7 }],
    },

    // {
    //   title: "Ongoing Project 5",
    //   images: [{ src: newpic4 }, { src: newpic5 }, { src: newpic6 }],
    // },
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
      {/* Video Section */}
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

      {/* Completed Projects Section */}
      <div>
        <h2 className="text-center text-3xl text-[#333] mb-6 font-semibold">
          Completed Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {completedProjects.map((project, i) => (
            <motion.div
              className="w-[280px] bg-white shadow-lg rounded-lg p-4"
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <img
                className="w-full h-[200px] object-fill rounded-lg"
                src={project.images[0].src}
                alt={project.title}
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg "
                onClick={() => handleViewDetails(project.images)}
              >
                View Details
              </button>
            </motion.div>
          ))}
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

      {/* Modal with Image Gallery */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-4 sm:p-6 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] rounded-lg relative"
              initial={{ y: "-100vh" }}
              animate={{ y: "0" }}
              exit={{ y: "100vh" }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <FontAwesomeIcon
                icon={faCircleXmark}
                className=" absolute top-2 right-2 text-2xl cursor-pointer text-gray-600 hover:text-red-500"
                onClick={() => setOpen(false)}
              />
              <div className="text-center text-lg font-semibold mb-4 ">
                {selectedImages.length > 0
                  ? "Project Images"
                  : "No Images Available"}
              </div>

              {/* Image Gallery Container - Scrollable */}
              <div className="project-gallery-container">
                <div className="project-gallery">
                  {selectedImages.map((image, index) => (
                    <div key={index} className="image-container">
                      <img src={image.src} alt={`Project Image ${index + 1}`} />
                      {/* <div className="image-caption">
                      Image {index + 1} of {selectedImages.length}
                    </div> */}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
