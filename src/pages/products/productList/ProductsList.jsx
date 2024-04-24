import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/products/products.actions";
import Button from "../../../widgets/buttons/Button";
import Cards from "../../../widgets/productCard/Cards";
import styles from "./products.module.css";
import { useSearchParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Poster from "../../../widgets/poster/Poster";

const ProductsList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ page });
  }, [page]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, searchParams]);

  const { products } = useSelector((state) => state.products);

  return (
    <div className={styles.wraper}>
      <Poster />
      <div className={styles.containerCard}>
        {products?.map((item) => (
          <div key={item.id}>
            <Cards item={item} />
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <Button onClick={() => setPage(page - 1)}>Prev</Button>
        <span>{page}</span>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </div>
  );
};

export default ProductsList;
