import React, { useState } from "react";
import Button from "../buttons/Button";
import styles from "./card.module.css";
import Input from "../inputs/Input";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {
  createComment,
  deleteComment,
  deleteProduct,
  toggleLike,
} from "../../store/products/products.actions";
import { Link } from "react-router-dom";
import { toggleCategory } from "../../helpers/functions";

const Cards = ({ item }) => {
  console.log(item, "item");
  return (
    <div className={styles.contCard}>
      <div className={styles.card}>
        <img className={styles.cardImg} src={item.image} alt="" />
        <div className={styles.cardContent}>
          <h2>{item.title}</h2>
          <p>{toggleCategory(item.category).title}</p>
          <p>{Math.ceil(item.price)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
