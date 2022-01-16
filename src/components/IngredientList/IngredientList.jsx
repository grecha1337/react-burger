import cardStyle from "./ingredientList.module.css";
import { forwardRef } from "react";
import { ingredientPropTypes } from "../../utils/types";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import Ingredient from "../Ingredient/Ingredient";

const IngredientList = forwardRef(
  ({ list, typeCard, title, handleModal }, ref) => {
    const filteredItems = list.filter((element) => {
      return element.type === typeCard;
    });

    return (
      <div ref={ref}>
        <h2 className="text text_type_main-medium pb-6">{title}</h2>
        <ul className={`pl-4 ${cardStyle.card__list}`}>
          {filteredItems.map((item) => (
            <li
              key={item._id}
              className={cardStyle.card__listItem}
              onClick={() => {
                handleModal(item);
              }}
            >
              <Ingredient data={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

IngredientList.propTypes = {
  list: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
  typeCard: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default IngredientList;
