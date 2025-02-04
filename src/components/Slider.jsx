import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    'https://www.pexels.com/photo/two-person-holding-hands-1444442/',
    'https://www.pexels.com/photo/two-person-holding-hands-1444442/',
   
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, newSlide) => setActiveSlide(newSlide),
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-80 sm:h-96 bg-cover bg-center ${
              index === activeSlide ? 'opacity-100' : 'opacity-50'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default EventSlider;