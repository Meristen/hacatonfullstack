import React, { useEffect, useState } from "react";
import styles from "./filmsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Cards from "../../widgets/productCard/Cards";
import { getFilms } from "../../store/films/films.actions";

const FilmsPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ page });
  }, [page]);

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch, searchParams]);

  const { films } = useSelector((state) => state.films);

  return (
    <>
      {films?.map((item) => (
        <div key={item.id}>
          <Cards item={item} />
        </div>
      ))}
      {/* <div>
        <Button onClick={() => setPage(page - 1)}>Prev</Button>
        <span>{page}</span>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div> */}
    </>
  );
};

export default FilmsPage;
