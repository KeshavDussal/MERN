import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

const images = [
  "/images/central-park.jpg",
  "/images/great-wall-of-china.jpg",
  "/images/eiffel-tower.jpg",
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ width: "600px", height: "400px", margin: "auto" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`Slide ${index}`}
            width="100%"
            height="500px"
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
