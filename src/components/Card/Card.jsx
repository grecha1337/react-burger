import cardStyle from "./card.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const Card = forwardRef(({ list, typeCard, title }, ref) => {
  const filterItem = list.filter((element) => {
    return element.type === typeCard;
  });

  return (
    <div ref={ref}>
      <h2 className="text text_type_main-medium pb-6">{title}</h2>
      <ul className={`pl-4 ${cardStyle.card__list}`}>
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
            <p className="pt-2 text text_type_main-default">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});

Card.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  typeCard : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
};

export default Card;
