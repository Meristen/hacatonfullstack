import React from "react";
import styles from "./input.module.css";

const Input = ({
  children,
  name,
  type,
  onChange,
  value,
  placeholder,
  style,
}) => {
  return (
    <div className={styles.boxInput}>
      <div className={styles.border}>
        <input
          style={style}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          type={type}
          required="required"
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default Input;
