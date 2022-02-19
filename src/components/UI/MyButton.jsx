import React from "react";
import style from "./MyButton.module.css";

// type MyButtonPropsType = {
//   children: string
//   props:any
// };
// : React.FC<MyButtonPropsType>

const MyButton = ({ children, ...props }) => {
  return (
    <button className={style.myBtn} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
