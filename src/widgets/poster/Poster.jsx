import React from "react";
import styles from "./poster.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Poster = () => {
  const settings = {
    dots: true,
    infinite: true, // бесконечный цикл слайдов
    speed: 500, // скорость перехода
    slidesToShow: 3, // сколько слайдов показывать за раз
    slidesToScroll: 1, // сколько слайдов прокручивать за раз
  };
  return (
    <Slider className={styles.slider} {...settings}>
      <div className={styles.card}>
        <img
          className={styles.posterImg}
          src="https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1713657600&semt=ais"
          alt="logo"
        />
        <div className={styles.cardContent}>
          <h2>Title</h2>
          <p>janr</p>
          <p>year</p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          className={styles.posterImg}
          src="https://itc.ua/wp-content/uploads/2023/11/p0g7c2b6.jpg"
          alt="logo"
        />
        <div className={styles.cardContent}>
          <h2>Title</h2>
          <p>janr</p>
          <p>year</p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          className={styles.posterImg}
          src="https://c8.alamy.com/comp/2K7P2W9/kung-fu-panda-po-the-panda-2K7P2W9.jpg"
          alt="logo"
        />
        <div className={styles.cardContent}>
          <h2>Title</h2>
          <p>janr</p>
          <p>year</p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          className={styles.posterImg}
          src="https://upload.wikimedia.org/wikipedia/ru/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg"
          alt="logo"
        />
        <div className={styles.cardContent}>
          <h2>Title</h2>
          <p>janr</p>
          <p>year</p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          className={styles.posterImg}
          src="https://fs.kinomania.ru/file/film/2/dc/2dcc1c90af0dbc6b26c42dfa2b3a92ae.jpeg"
          alt="logo"
        />
        <div className={styles.cardContent}>
          <h2>Title</h2>
          <p>janr</p>
          <p>year</p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          className={styles.posterImg}
          src="https://play-lh.googleusercontent.com/NgLaEVvAL_blfvsZfyRc3A6AYPoCN90PIBJyvUJlul2OmasG3lZWpb2IhF62rkorLuU"
          alt="logo"
        />
        <div className={styles.cardContent}>
          <h2>Title</h2>
          <p>janr</p>
          <p>year</p>
        </div>
      </div>
    </Slider>
  );
};

export default Poster;
