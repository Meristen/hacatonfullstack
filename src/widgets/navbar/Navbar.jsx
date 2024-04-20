import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import Button from "../buttons/Button";
import { getProfile } from "../../store/users/users.actions";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/users/users.slice";
import Search from "../search/Search";
import logo from "../foto/logo (2).png";

const Navbar = () => {
  const dispatch = useDispatch();
  const tokens = JSON.parse(localStorage.getItem("tokens"));

  const { currentUser } = useSelector((state) => state.users);

  useEffect(() => {
    if (tokens) {
      dispatch(getProfile());
    }
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null);
  const toggle = () => {
    setOpen(!open);
  };
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return (
    <div ref={navbarRef} className={styles.container}>
      <div className={styles.logonav}>
        <img
          className={styles.logo}
          style={{ width: "50px", height: "50px" }}
          src="https://thumbs.dreamstime.com/b/print-224007432.jpg"
          alt="logo"
        />
        <ul className={styles.navs}>
          <li>
            <NavLink to={"/"}>
              <Button>главная</Button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/films"}>
              <Button>фильмы</Button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/serials"}>
              <Button>сериалы</Button>
            </NavLink>
          </li>
        </ul>
      </div>
      <Search />
      <div className={styles.navUser}>
        {currentUser ? (
          <Button>
            <p>{currentUser}</p>
          </Button>
        ) : (
          ""
        )}
        <img
          onClick={toggle}
          className={styles.avatar}
          src="https://img.freepik.com/vector-premium/vector-texto-estilo-letreros-neon-noche-pelicula_118419-3581.jpg?w=2000"
          alt="avatar"
        />
      </div>
      {open && (
        <div onClick={() => setOpen(!open)} className={styles.navbar}>
          {currentUser && currentUser == "adminadmin@mail.com" ? (
            <NavLink to={"/add"}>добавить фильм</NavLink>
          ) : (
            ""
          )}
          {currentUser ? "" : <NavLink to={"/register"}>Регистрация</NavLink>}
          {currentUser ? "" : <NavLink to={"/login"}>Вход</NavLink>}

          {!currentUser ? (
            ""
          ) : (
            <span onClick={() => dispatch(logout())}>
              <NavLink to={"/"}>Выйти</NavLink>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
