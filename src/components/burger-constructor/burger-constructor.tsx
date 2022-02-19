import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-constructor.module.css";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { useState, useMemo, useRef, useEffect, FC } from "react";
import ConstructorList from "../constructor-list/constructor-list";
import { useDispatch, useSelector } from "../../services/hooks";
import { sendOrder } from "../../services/action/order-details";
import { setDefaultValueIngredients } from "../../services/action/burger-constructor";
import { resetQtyIngredients } from "../../services/action/burger-ingredients";
import ErrorText from "../error-text/error-text";

const BurgerConstructor: FC = () => {
  const { ingredients } = useSelector((state) => state.burgerConstructor);

  const [show, setShow] = useState(false);
  const total = useMemo(() => {
    return ingredients.reduce((accumulator, element) => {
      return element.type !== "bun"
        ? (accumulator += element.price)
        : (accumulator += element.price * 2);
    }, 0);
  }, [ingredients]);

  const dispatch = useDispatch();

  const idIngredientList = useSelector((state) => {
    const listIngredients = state.burgerConstructor.ingredients;
    const idList = listIngredients.map((item) => {
      return item._id;
    });

    return idList;
  });

  const orderNumber = useSelector((state) => state.orderInfo.order.number);
  const orderFailed = useSelector((state) => state.orderInfo.orderFailed);

  // Сохраняем предыдущее значение, что бы отображать модалку только с новым заказом
  const prevOrderNumber = useRef<number | null>();
  useEffect(() => {
    prevOrderNumber.current = orderNumber;
  });

  return (
    <section className={`${style.burgerConstructor} pl-4 pr-4`}>
      <ConstructorList ingredientList={ingredients} />
      {orderFailed ? <ErrorText text={"Ошибка при оформлении заказа"} /> : null}
      <div className={style.burgerConstructor__total}>
        <p className="text text_type_digits-medium pr-2">{total}</p>
        <CurrencyIcon type="primary" />
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
      {show && orderNumber !== prevOrderNumber.current && (
        <Modal
          onClose={() => {
            setShow(false);
            dispatch(setDefaultValueIngredients());
            dispatch(resetQtyIngredients());
          }}
        >
          <OrderDetails order={orderNumber} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
