import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import IngredientList from "../IngredientList/IngredientList";
import style from "./burgeringredients.module.css";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  setDefaultValuesIngredientDetail,
  setDetailInfoIngredient,
} from "../../services/action/ingredientDetails";

function BurgerIngredients() {
  const [current, setCurrent] = useState("bun");
  const [show, setShow] = useState(false);
  const refBunDiv = useRef(null);
  const refSauceDiv = useRef(null);
  const refMainDiv = useRef(null);

  const { burgerIngredients } = useSelector((state) => state.burgerIngredients);

  const handleTab = (value, element) => {
    setCurrent(value);
    element.current.scrollIntoView({ behavior: "smooth" });
  };

  const dispatch = useDispatch();
  const ingredientDataModal = useSelector((state) => state.ingredientDetails);

  const openModal = (data) => {
    dispatch(setDetailInfoIngredient(data));
    setShow(true);
  };

  const handlerScroll = (e) => {
    const { scrollTop } = e.target;
    const posOfSectionBun = refBunDiv.current.offsetTop;
    const posOfSauceBun = refSauceDiv.current.offsetTop;
    if (scrollTop + 40 <= posOfSectionBun) {
      setCurrent("bun");
    } else if (scrollTop - 170 <= posOfSauceBun) {
      setCurrent("sauce");
    } else {
      setCurrent("main");
    }
  };
  return (
    <section>
      {show && (
        <Modal
          show={show}
          onClose={() => {
            setShow(false);
            dispatch(setDefaultValuesIngredientDetail());
          }}
          title="Детали ингредиента"
        >
          <IngredientDetails ingredientInfo={ingredientDataModal} />
        </Modal>
      )}
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
      <div
        className={`${style.burgerIngredients} mt-10`}
        onScroll={handlerScroll}
      >
        <IngredientList
          list={burgerIngredients}
          typeCard="bun"
          title="Булки"
          ref={refBunDiv}
          handleModal={openModal}
        />
        <IngredientList
          list={burgerIngredients}
          typeCard="sauce"
          title="Соусы"
          ref={refSauceDiv}
          handleModal={openModal}
        />
        <IngredientList
          list={burgerIngredients}
          typeCard="main"
          title="Начинки"
          ref={refMainDiv}
          handleModal={openModal}
        />
      </div>
    </section>
  );
}

export default BurgerIngredients;
