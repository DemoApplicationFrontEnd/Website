import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"; // Material UI icons
import Image1 from "./../../assets/home.webp";

export const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    fade: false,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: <CustomArrowPrev />,
    nextArrow: <CustomArrowNext />,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src={Image1} alt="Image 1" />
      </Wrap>
      <Wrap>
        <img
          src="https://heartwaveconstruct.com/wp-content/uploads/2022/06/PRM.png"
          alt="Image 2"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://heartwaveconstruct.com/wp-content/uploads/2022/06/8.jpeg"
          alt="Image 3"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://heartwaveconstruct.com/wp-content/uploads/2022/06/D3.png"
          alt="Image 4"
        />
      </Wrap>
    </Carousel>
  );
};

// Custom Styled Material UI Arrow components
const CustomArrowPrev = styled(ArrowBackIos)`
  color: #ff5733; /* Custom color */
  font-size: 30px;
  font-weight: bold; /* Make the previous arrow bold */
  position: absolute;
  top: 50%;
  left: 10px;
  z-index: 10;
  transform: translateY(-50%);
  
  /* Remove hover effect on previous arrow */
  &:hover {
    color: #ff5733; /* Maintain color on hover */
    transform: translateY(-50%); /* Prevent scale on hover */
  }
`;

const CustomArrowNext = styled(ArrowForwardIos)`
  color: #ff5733; /* Custom color */
  font-size: 30px;
  position: absolute;
  top: 50%;
  right: 50px; /* Move the next arrow slightly left to avoid overlap */
  z-index: 10;
  transform: translateY(-50%);
  
  /* Maintain color on hover */
  &:hover {
    color: #ff5733;
    transform: translateY(-50%); /* Prevent scaling */
  }
`;

const Carousel = styled(Slider)`
  margin: 20px 0;

  ul li button {
    &:before {
      font-size: 12px;
      color: rgb(100, 100, 100);
    }
  }
  li.slick-active button::before {
    color: #333;
  }

  .slick-list {
    overflow: visible;
  }

  /* Custom left and right buttons with Material UI icons */
  .slick-prev,
  .slick-next {
    display: none; /* Hide default slick buttons */
  }

  .slick-prev:hover,
  .slick-next:hover {
    transform: none; /* Prevent scaling effect on hover */
  }

  .slick-track {
    margin: 0 -20px; /* Reduced margin for smaller gap */
  }

  .slick-slide {
    padding: 0 30px; /* Adjusted padding for space around images */
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  img {
    border: 4px solid transparent;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    max-width: 100vw;
    object-fit: cover;
    box-shadow: rgb(0 0 0 / 40%) 0px 20px 30px -10px,
      rgb(0 0 0 / 30%) 0px 10px 10px -10px;
    transition: all 0.5s ease-in-out;
    animation: fadeIn 1s ease-out;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
      transform: scale(1.05);
      box-shadow: rgb(0 0 0 / 50%) 0px 30px 50px -15px,
        rgb(0 0 0 / 20%) 0px 10px 10px -10px;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    img {
      width: 90%;
      height: 90%;
    }
  }
`;

export default ImgSlider;
