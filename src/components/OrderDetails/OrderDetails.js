import style from "./orderDetails.module.css";
import orderDone from "../../images/orderDone.svg"
import PropTypes from "prop-types"

function OrderDetails({ order }) {
  return (
    <div className={style.orderDetails}>
      <h2 className="pt-30 pl-25 pr-25 pb-8 text text_type_digits-large">{order}</h2>
      <p className="pb-15 text text_type_main-medium">идентификатор заказа</p>
      <img className="pb-15" src={orderDone} alt="Заказ Выполнен"/>
      <p className="pb-2 text text_type_main-small">Ваш заказ начали готовить</p>
      <p className="pb-30 text text_type_main-small">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

OrderDetails.propTypes = {
  order: PropTypes.string.isRequired
}

export default OrderDetails;
