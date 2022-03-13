import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState, useRef, FC, useCallback } from "react";
import IngredientList from "../ingredient-list/IngredientList";
import style from "./burger-ingredients.module.css";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import { useDispatch, useSelector } from "../../services/hooks";
import {
  setDefaultValuesIngredientDetail,
  setDetailInfoIngredient,
} from "../../services/action/ingredient-details";
import { TIngredient, TIngredientType } from "../../services/types/data";
import { RefObject } from "react-dom/node_modules/@types/react";
import { useLocation } from "react-router-dom";

const BurgerIngredients: FC = () => {
  const [current, setCurrent] = useState<TIngredientType>("bun");
  const refBunDiv = useRef<HTMLDivElement>(null);
  const refSauceDiv = useRef<HTMLDivElement>(null);
  const refMainDiv = useRef<HTMLDivElement>(null);

  const BUN: TIngredientType = "bun";
  const SAUCE: TIngredientType = "sauce";
  const MAIN: TIngredientType = "main";

  const { burgerIngredients } = useSelector((state) => state.burgerIngredients);

  const handleTab = useCallback(
    (value: TIngredientType, element: RefObject<HTMLElement>) => {
      setCurrent(value);
      element?.current?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  const dispatch = useDispatch();

  const handlerScroll: React.EventHandler<React.UIEvent<HTMLDivElement>> =
    useCallback((e: React.UIEvent<HTMLElement>) => {
      if (refBunDiv.current === null || refSauceDiv.current === null) return;
      const scrollTop = (e.target as HTMLElement).scrollTop;
      const posOfSectionBun = refBunDiv.current.offsetTop;
      const posOfSauceBun = refSauceDiv.current.offsetTop;
      if (scrollTop + 40 <= posOfSectionBun) {
        setCurrent(BUN);
      } else if (scrollTop - 170 <= posOfSauceBun) {
        setCurrent(SAUCE);
      } else {
        setCurrent(MAIN);
      }
    }, []);

  return (
    <section>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <div style={{ display: "flex" }}>
        <Tab
          value={BUN}
          active={current === BUN}
          onClick={() => {
            handleTab(BUN, refBunDiv);
          }}
        >
          Булки
        </Tab>
        <Tab
          value={SAUCE}
          active={current === SAUCE}
          onClick={() => {
            handleTab(SAUCE, refSauceDiv);
          }}
        >
          Соусы
        </Tab>
        <Tab
          value={MAIN}
          active={current === MAIN}
          onClick={() => {
            handleTab(MAIN, refMainDiv);
          }}
        >
          Начинки
        </Tab>
      </div>
      <div
        className={`${style.burgerIngredients} mt-10`}
        onScroll={handlerScroll}
      >
        <IngredientList
          list={burgerIngredients}
          typeCard="bun"
          title="Булки"
          ref={refBunDiv}
        />
        <IngredientList
          list={burgerIngredients}
          typeCard="sauce"
          title="Соусы"
          ref={refSauceDiv}
        />
        <IngredientList
          list={burgerIngredients}
          typeCard="main"
          title="Начинки"
          ref={refMainDiv}
        />
      </div>
    </section>
  );
};

export default BurgerIngredients;
