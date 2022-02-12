import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import styles from "./Ingredient.module.css";
import { FC } from "react";
import { TIngredient } from "../../services/types/data";

const Ingredient: FC<{ data: TIngredient }> = ({ data }) => {
  const { image, name, price, qty } = data;

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: data,
  });
  return (
    <div ref={dragRef}>
      {qty && <Counter count={qty} size="default" />}
      <img src={image} alt={name} className="pl-4 pb-1 pr-4" />
      <div className={styles.card__prics}>
        <p className="text text_type_digits-default pb-1 pr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="pt-2 text text_type_main-default">{name}</p>
    </div>
  );
};

export default Ingredient;