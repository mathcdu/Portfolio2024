import React, { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <img
        src={images[currentIndex]}
        alt={`Carousel slide ${currentIndex + 1}`}
        className={styles.carouselImage}
      />
      <button className={styles.prevButton} onClick={prevImage}>
        &#10094;
      </button>
      <button className={styles.nextButton} onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
