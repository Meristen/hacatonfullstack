// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../../store/products/products.actions";
// import Button from "../../../widgets/buttons/Button";
// import Cards from "../../../widgets/productCard/Cards";
// import styles from "./products.module.css";
// import { useSearchParams } from "react-router-dom";
// const ProductsList = () => {
//   const dispatch = useDispatch();
//   const [page, setPage] = useState(1);
//   const [searchParams, setSearchParams] = useSearchParams();
//   // console.log("qwert");
//   useEffect(() => {
//     setSearchParams({ page });
//   }, [page]);

//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch, searchParams]);

//   const { products } = useSelector((state) => state.products);
//   // console.log(products);
//   return (
//     <>
//       <div className={styles.containerCard}>
//         {products?.map((item) => (
//           <Cards key={item.id} item={item} />
//         ))}
//       </div>
//       <div>
//         <Button onClick={() => setPage(page - 1)}>Prev</Button>
//         <span>{page}</span>
//         <Button onClick={() => setPage(page + 1)}>Next</Button>
//       </div>
//     </>
//   );
// };

// export default ProductsList;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/products/products.actions";
import Button from "../../../widgets/buttons/Button";
import Cards from "../../../widgets/productCard/Cards";
import styles from "./products.module.css";
import { useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // количество отображаемых слайдов
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {products?.map((item) => (
          <div key={item.id}>
            <Cards item={item} />
          </div>
        ))}
      </Slider>
      <div>
        <Button onClick={() => setPage(page - 1)}>Prev</Button>
        <span>{page}</span>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </>
  );
};

export default ProductsList;
