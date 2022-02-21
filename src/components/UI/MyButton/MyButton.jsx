import style from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button className={style.myBtn} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
