import React from "react";
import style from "./MyInput.module.css";

const MyInput = React.forwardRef((props, ref) => {
  return <input className={style.MyInput} {...props} ref={ref} />;
});

export default MyInput;
