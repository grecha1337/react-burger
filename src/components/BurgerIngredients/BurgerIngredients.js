import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import burgerArray from "../../utils/data";
import Card from "../Card/Card";
import burgerIngredientstStyle from "./burgeringredients.module.css";
function BurgerIngredients() {
  const [current, setCurrent] = useState("bun");
  const refIngrediend = useRef(null);

  function handleTab(value) {
    setCurrent(value);
    refIngrediend.current.scrollIntoView();
 
  }

  return (
    <>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <div style={{ display: "flex" }}>
        <Tab value="bun" active={current === "bun"} onClick={handleTab}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={handleTab}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={handleTab}>
          Начинки
        </Tab>
      </div>
      <div className={burgerIngredientstStyle.burgerIngredients}>
        <Card list={burgerArray} typeCard="bun" ref={refIngrediend} />
        <Card list={burgerArray} typeCard="sauce" ref={refIngrediend} />
        <Card list={burgerArray} typeCard="main" ref={refIngrediend} />
      </div>
    </>
  );
}

export default BurgerIngredients;
