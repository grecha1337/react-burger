import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burgerconstructor.module.css";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { useState, useMemo, useRef, useEffect } from "react";
import ConstructorList from "../ConstructorList/ConstructorList";
import { useDispatch, useSelector } from "react-redux";
import { sendOrder } from "../../services/action/orderDetails";
import { setDefaultValueIngredients } from "../../services/action/burgerConstructor";
import { resetQtyIngredients } from "../../services/action/burgerIngredients";
import ErrorText from "../ErrorText/ErrorText";

function BurgerConstructor() {
  const { ingridients } = useSelector((state) => state.burgerConstructor);

  const [show, setShow] = useState(false);
  const total = useMemo(() => {
    return ingridients.reduce((accumulator, element) => {
      return element.type !== "bun"
        ? (accumulator += element.price)
        : (accumulator += element.price * 2);
    }, 0);
  }, [ingridients]);

  const dispatch = useDispatch();

  const idIngredientList = useSelector((state) => {
    const listIngredients = state.burgerConstructor.ingridients;
    const idList = listIngredients.map((item) => {
      return item._id;
    });

    // Булки считаем за две
    // const idList = listIngredients.reduce((r, e) => {
    //   if (e.type === "bun") {
    //     r.push(e._id, e._id);
    //   } else {
    //     r.push(e._id);
    //   }
    //   return r;
    // }, []);
    return idList;
  });

  const orderNumber = useSelector((state) =>
    state.orderInfo.order?.number.toString()
  );

  const orderFailed = useSelector((state) => state.orderInfo.orderFailed);

  // Сохраняем предыдущее значение, что бы отображать модалку только с новым заказом
  const prevOrderNumber = useRef();
  useEffect(() => {
    prevOrderNumber.current = orderNumber;
  });

  return (
    <section className={`${style.burgerconstructor} pl-4 pr-4`}>
      <ConstructorList data={ingridients} />
      {orderFailed ? <ErrorText text={"Ошибка при оформлении заказа"} /> : null}
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
            dispatch(setDefaultValueIngredients());
            dispatch(resetQtyIngredients());
          }}
        >
          <OrderDetails order={orderNumber} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
