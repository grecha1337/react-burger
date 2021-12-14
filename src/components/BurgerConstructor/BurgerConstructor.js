import {
  ConstructorElement,
  Button,
  DragIcon,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burgerconstructor.module.css";
import { ingredientPropTypes } from "../../utils/types";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { useState } from "react";

import PropTypes from "prop-types";

function BurgerConstructor({ data }) {
  const [show, setShow] = useState(false);
  const filterItems = data.filter((item) => {
    return item.type !== "bun";
  });

  return (
    <section className={`{style.burgerconstructor} pl-4 pr-4`}>
      <ul className={`pt-25 ${style.burgerconstructorList}`}>
        <li className={style.burgerconstructorList__item}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </li>

        <ul className={style.burgerconstructorList__inner}>
          {filterItems.map((item) => (
            <li
              key={item._id}
              className={
                style.burgerconstructorList__innerItem
              }
            >
              <DragIcon type="primary" />
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </li>
          ))}
        </ul>
        <li className={style.burgerconstructorList__item}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </li>
      </ul>
      <div className={style.burgerconstructor__total}>
        <p className="text text_type_digits-medium pr-2">610</p>
        <CurrencyIcon type="primary" style={{ height: 53, width: 36 }} />
        <div className="pl-10">
          <Button
            onClick={() => {
              setShow(true);
            }}
            type="primary"
            size="large"
          >
            Оформить заказ
          </Button>
        </div>
      </div>
      {show && (
        <Modal
          show={show}
          onClose={() => {
            setShow(false);
          }}
        >
          <OrderDetails order={"034536"} />
        </Modal>
      )}
    </section>
  );
}

BurgerConstructor.propsTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};
export default BurgerConstructor;
