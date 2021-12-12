import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import IngredientList from "../IngredientList/IngredientList";
import burgerIngredientstStyle from "./burgeringredients.module.css";
import { ingredientPropTypes } from "../../utils/types";
import PropTypes from "prop-types";

function BurgerIngredients({ data }) {
  const [current, setCurrent] = useState("bun");
  const refBunDiv = useRef(null);
  const refSauceDiv = useRef(null);
  const refMainDiv = useRef(null);

  const handleTab = (value, element) => {
    setCurrent(value);
    element.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <div style={{ display: "flex" }}>
        <Tab
          value="bun"
          active={current === "bun"}
          onClick={(value) => {
            handleTab(value, refBunDiv);
          }}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={(value) => {
            handleTab(value, refSauceDiv);
          }}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={(value) => {
            handleTab(value, refMainDiv);
          }}
        >
          Начинки
        </Tab>
      </div>
      <div className={`${burgerIngredientstStyle.burgerIngredients} mt-10`}>
        <IngredientList
          list={data}
          typeCard="bun"
          title="Булки"
          ref={refBunDiv}
        />
        <IngredientList
          list={data}
          typeCard="sauce"
          title="Соусы"
          ref={refSauceDiv}
        />
        <IngredientList
          list={data}
          typeCard="main"
          title="Начинки"
          ref={refMainDiv}
        />
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};
export default BurgerIngredients;
