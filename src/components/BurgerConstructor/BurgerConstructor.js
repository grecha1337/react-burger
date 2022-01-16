import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burgerconstructor.module.css";
import { ingredientPropTypes } from "../../utils/types";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import ConstructorList from "../ConstructorList/ConstructorList";

function BurgerConstructor({ data }) {
  const [show, setShow] = useState(false);

  const total = useMemo(() => {
    return data.reduce((accumulator, element) => {
      return (accumulator += element.price);
    }, 0);
  }, [data]);

  return (
    <section className={`{style.burgerconstructor} pl-4 pr-4`}>
      <ConstructorList data={data} />
      <div className={style.burgerconstructor__total}>
        <p className="text text_type_digits-medium pr-2">{total}</p>
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
