import React from "react";

import styles from "./button.module.css";

const Button = ({ children, onClick, className, style }) => {
  return (
    <button style={style} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
