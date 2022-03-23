import style from "./icon-ingredient.module.css";
import { FC } from "react";

const IconIngredient: FC<{ src: string; alt?: string }> = ({ src, alt }) => {
  return <img className={style.IconIngredient} src={src} alt={alt} />;
};

export default IconIngredient;
