import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./filmProfile.module.css";
import {
  createComment,
  deleteComment,
  deleteProduct,
  getCategories,
  getOneProduct,
  toggleLike,
} from "../../store/products/products.actions";
import Input from "../../widgets/inputs/Input";
import Button from "../../widgets/buttons/Button";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const FilmProfile = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const { categories, oneProduct } = useSelector((state) => state.products);

  //   console.log(oneProduct, "oneProduct");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [openInput, setOpenInput] = useState(false);
  const toggle = () => {
    setOpenInput(!openInput);
  };

  const [comment, setComment] = useState("");
  const [like, setLike] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getOneProduct(id));
  }, [dispatch]);

  useEffect(() => {
    oneProduct &&
      setProduct({
        title: oneProduct.title,
        description: oneProduct.description,
        price: oneProduct.price,
        category: oneProduct.category.id,
        image: oneProduct.image,
      });
  }, [oneProduct]);

  console.log(product);

  return (
    <div className={styles.wrapperProfile}>
      <img src={product.image} alt="" />
      <h2 className={styles.profileTitle}>{product.title}</h2>
      <h4 className={styles.profileDesc}>{product.description}</h4>
      {/* {product.is_author && ( */}
      <div>
        <Link to={`/edit/${product.id}`}>
          <Button>Изменить</Button>
        </Link>
        <Button onClick={() => dispatch(deleteProduct(product.id))}>
          Удалить
        </Button>
      </div>
      {/* )} */}
      <div
        onClick={() => {
          dispatch(toggleLike(product.id));
          setLike(!like);
        }}
      >
        {like ? <FcLike size={25} /> : <FcLikePlaceholder size={25} />}
      </div>
      <p>Лайки: {product.likes}</p>
      <h5>Коментарии:</h5>
      {/* {product.reviews.map((item) => (
        <div>
          <b>{item.author}:</b> <p key={item.id}>{item.text}</p>
          <Button onClick={() => dispatch(deleteComment(item.id))}>
            Удалить
          </Button>
        </div>
      ))} */}
      <Button onClick={toggle}>коментарий:</Button>

      {openInput && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (comment) {
              dispatch(
                createComment({
                  text: comment,
                  product: product.id,
                })
              );
              setComment("");
            }
          }}
        >
          <Input value={comment} onChange={(e) => setComment(e.target.value)} />
        </form>
      )}
    </div>
  );
};

export default FilmProfile;
