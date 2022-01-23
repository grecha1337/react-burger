import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import IngredientList from "../IngredientList/IngredientList";
import style from "./burgeringredients.module.css";
import { ingredientPropTypes } from "../../utils/types";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  INIT_INGREDIENT_DETAIL,
  SET_INGREDIENT_DETAIL,
} from "../../services/action/ingredientDetails";
function BurgerIngredients({ data }) {
  const [current, setCurrent] = useState("bun");
  const [show, setShow] = useState(false);
  const refBunDiv = useRef(null);
  const refSauceDiv = useRef(null);
  const refMainDiv = useRef(null);

  const handleTab = (value, element) => {
    setCurrent(value);
    element.current.scrollIntoView({ behavior: "smooth" });
  };

  const dispatch = useDispatch();
  const ingredientDataModal = useSelector((state) => state.ingredientDetails);

  const openModal = (data) => {
    dispatch({ type: SET_INGREDIENT_DETAIL, payload: data });
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
            dispatch({ type: INIT_INGREDIENT_DETAIL });
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
          list={data}
          typeCard="bun"
          title="Булки"
          ref={refBunDiv}
          handleModal={openModal}
        />
        <IngredientList
          list={data}
          typeCard="sauce"
          title="Соусы"
          ref={refSauceDiv}
          handleModal={openModal}
        />
        <IngredientList
          list={data}
          typeCard="main"
          title="Начинки"
          ref={refMainDiv}
          handleModal={openModal}
        />
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};
export default BurgerIngredients;
