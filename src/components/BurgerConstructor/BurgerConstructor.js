import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burgerconstructor.module.css";
import { ingredientPropTypes } from "../../utils/types";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { useState, useMemo, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ConstructorList from "../ConstructorList/ConstructorList";
import { useDispatch, useSelector } from "react-redux";
import { sendOrder } from "../../services/action/orderDetails";
import { SET_DEFAULT_VALUE_INGREDIENTS } from "../../services/action/burgerConstructor";
import { RESET_QTY_INGREDIENTS } from "../../services/action/burgerIngredients";
function BurgerConstructor({ data }) {
  const [show, setShow] = useState(false);

  const total = useMemo(() => {
    return data.reduce((accumulator, element) => {
      return (accumulator += element.price);
    }, 0);
  }, [data]);

  const dispatch = useDispatch();

  const idIngredientList = useSelector((state) => {
    const listIngredients = state.burgerConstructor.ingridients;
    const idList = listIngredients.map((item) => {
      return item._id;
    });
    return idList;
  });

  const orderNumber = useSelector((state) =>
    state.orderInfo.order?.number.toString()
  );

  // Сохраняем предыдущее значение, что бы отображать модалку только с новым заказом
  const prevOrderNumber = useRef();
  useEffect(() => {
    prevOrderNumber.current = orderNumber;
  });

  return (
    <section className={`${style.burgerconstructor} pl-4 pr-4`}>
      <ConstructorList data={data} />
      <div className={style.burgerconstructor__total}>
        <p className="text text_type_digits-medium pr-2">{total}</p>
        <CurrencyIcon type="primary" style={{ height: 53, width: 36 }} />
        <div className="pl-10">
          <Button
            disabled={!total}
            onClick={() => {
              setShow(true);
              dispatch(sendOrder(idIngredientList));
            }}
            type="primary"
            size="large"
          >
            Оформить заказ
          </Button>
        </div>
      </div>
      {show && orderNumber && orderNumber !== prevOrderNumber.current && (
        <Modal
          show={show}
          onClose={() => {
            setShow(false);
            dispatch({ type: SET_DEFAULT_VALUE_INGREDIENTS });
            dispatch({ type: RESET_QTY_INGREDIENTS });
          }}
        >
          <OrderDetails order={orderNumber} />
        </Modal>
      )}
    </section>
  );
}

BurgerConstructor.propsTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};
export default BurgerConstructor;
