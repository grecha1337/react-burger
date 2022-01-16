import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";

import styles from "./Ingredient.module.css";

function Ingredient({ data }) {
  const { image, name, price, _id, qty} = data;

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
}

export default Ingredient;
