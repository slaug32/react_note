import React from "react";
import style from "./MyInput.module.css";

// type MyInputPropsType = {
//   props: any;
//   type: string;
//   placeholder: string
// };

// : React.FC<MyInputPropsType>

const MyInput = React.forwardRef((props, ref) => {
  return <input className={style.MyInput} {...props} ref={ref} />;
});

export default MyInput;
