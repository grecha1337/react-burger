import cardStyle from "./ingredientList.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { forwardRef } from "react";
import { ingredientPropTypes } from "../../utils/types";
import PropTypes from "prop-types";

const IngredientList = forwardRef(({ list, typeCard, title, handleModal}, ref) => {
  const filterItems = list.filter((element) => {
    return element.type === typeCard;
  });

  return (
    <div ref={ref}>
      <h2 className="text text_type_main-medium pb-6">{title}</h2>
      <ul className={`pl-4 ${cardStyle.card__list}`}>
        {filterItems.map((item) => (
          <li
            key={item._id}
            className={cardStyle.card__listItem}
            onClick={()=>{handleModal(item)}}
          >
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

IngredientList.propTypes = {
  list: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
  typeCard: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default IngredientList;
