import cardStyle from "./ingredientList.module.css";
import { forwardRef } from "react";

import Ingredient from "../ingredient/ingredient";
import { TIngredientList } from "../../services/types/data";

const IngredientList = forwardRef<HTMLDivElement, TIngredientList>(
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

export default IngredientList;
