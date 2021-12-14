import style from "./ingredientDetails.module.css";
import { ingredientPropTypes } from "../../utils/types";
import PropTypes from "prop-types";

function IngredientDetails({ ingredientInfo }) {
  console.log(ingredientInfo);
  return (
    <div className={style.ingredientDetails}>
      <h2
        className={`${style.ingredientDetails__title} text text_type_main-large pl-10 pr-10`}
      >
        Детали ингредиента
      </h2>
      <img
        className="pb-6"
        src={ingredientInfo.image_large}
        alt={ingredientInfo.name}
      />
      <p className="text text_type_main-medium pb-8">{ingredientInfo.name}</p>
      <ul className={style.ingredientDetails__nutritionalValue}>
        <li className={style.ingredientDetails__nutritionaValueItem}>
          <p
            className={`text text_type_main-default ${style.ingredientDetails__nutritionaName}`}
          >
            Калории,ккал
          </p>
          <p
            className={`${style.ingredientDetails__nutritionaCount} text text_type_digits-default `}
          >
            {ingredientInfo.calories}
          </p>
        </li>
        <li className={style.ingredientDetails__nutritionaValueItem}>
          <p
            className={`text text_type_main-default ${style.ingredientDetails__nutritionaName}`}
          >
            Белки, г
          </p>
          <p
            className={`${style.ingredientDetails__nutritionaCount} text text_type_digits-default `}
          >
            {ingredientInfo.proteins}
          </p>
        </li>
        <li className={style.ingredientDetails__nutritionaValueItem}>
          <p
            className={`text text_type_main-default ${style.ingredientDetails__nutritionaName}`}
          >
            Жиры, г
          </p>
          <p
            className={`${style.ingredientDetails__nutritionaCount} text text_type_digits-default `}
          >
            {ingredientInfo.fat}
          </p>
        </li>
        <li className={style.ingredientDetails__nutritionaValueItem}>
          <p
            className={`text text_type_main-default ${style.ingredientDetails__nutritionaName}`}
          >
            Углеводы, г
          </p>
          <p
            className={`${style.ingredientDetails__nutritionaCount} text text_type_digits-default `}
          >
            {ingredientInfo.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingredientInfo:  ingredientPropTypes.isRequired
};



export default IngredientDetails;
