import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./slider.module.css";

const Sliders = ({ children, onClick, className, style }) => {
  const PrevArrow = ({ onClick }) => {
    return (
      <button onClick={onClick} className={styles.left}>
        &#8249;
      </button>
    );
  };
  const NextArrow = ({ onClick }) => {
    return (
      <button onClick={onClick} className={styles.right}>
        &#8250;
      </button>
    );
  };
  const settings = {
    // dots: true,
    infinite: true, // Бесконечная прокрутка
    speed: 300, // Скорость анимации
    // slidesToShow: 3, // Количество слайдов, показываемых одновременно
    slidesToScroll: 1, // Количество слайдов, которые прокручиваются за раз
    autoplay: true, // Автоматическая прокрутка
    autoplaySpeed: 3000, // Скорость автоматической прокрутки в миллисекундах
    prevArrow: <PrevArrow />, // Стрелка для прокрутки влево
    nextArrow: <NextArrow />, // Стрелка для прокрутки вправо
  };
  return (
    <div>
      <Slider
        style={style}
        className={className}
        onClick={onClick}
        {...settings}
      >
        {children}
      </Slider>
    </div>
  );
};

export default Sliders;
