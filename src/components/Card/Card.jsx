import cardStyle from "./card.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { forwardRef } from "react";

const Card = forwardRef(({ list, typeCard }, ref) => {
  const filterItem = list.filter((element) => {
    return element.type === typeCard;
  });

  return (
    <div>
      <h2 id={typeCard} className="text text_type_main-medium pb-6 pt-10" ref={ref}>
        Бургер
      </h2>
      <ul className={cardStyle.card__list}>
        {filterItem.map((item) => (
          <li key={item._id} className={cardStyle.card__listItem}>
            <Counter count={1} size="default" />
            <img src={item.image} alt={item.name} className="pl-4 pb-1 pr-4" />
            <div className={cardStyle.card__prics}>
              <p className="text text_type_digits-default pb-1 pr-2">
                {item.price}
              </p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Card;
