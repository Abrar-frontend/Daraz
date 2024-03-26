import React, { useState, useEffect } from 'react';

function Hero() {
  const images = [
    "//icms-image.slatic.net/images/ims-web/74f4e16f-f7f6-4ded-b8fc-3b5991168162.png_1200x1200.jpg",
    "//icms-image.slatic.net/images/ims-web/f6759911-ac57-45e3-9db9-d71f0b51bc8f.jpeg_1200x1200.jpg",
    "//icms-image.slatic.net/images/ims-web/8ab649ec-b49d-4de3-b6e5-b0677b06026d.jpg",
    "//icms-image.slatic.net/images/ims-web/b344e037-c993-48b2-b96e-02dc635d7a25.jpg",
    "//icms-image.slatic.net/images/ims-web/099ab390-19d0-426f-8389-a5f654fa32df.jpg"
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Start from index 0

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Automatically change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-2/4 h-50 absolute left-96 ml-28 mt-6 h-2/5 rounded-lg overflow-hidden" style={{ zIndex: '-20' }}>
      <style>
        {`
          .sidebar {
            display: flex;
            animation: slide 20s linear infinite;
          }

          @keyframes slide {
            0% {
              transform: translateX(-400%);
            }
            25% {
              transform: translateX(-300%);
            }
            50% {
              transform: translateX(-200%);
            }
            75% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          .slide-image {
            flex: 0 0 auto;
            width: 100%;
          }
        `}
      </style>
      <div className="sidebar relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={index === activeIndex ? 'slide-image active' : 'slide-image'}
          />
        ))}
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
        <div className="indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === activeIndex ? 'indicator active' : 'indicator'}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
