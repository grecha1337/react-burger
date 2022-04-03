import { FC } from "react";
import { orderStatus } from "../../services/constant";

const statusText = {
  [orderStatus.done]: "Выполнен",
  [orderStatus.pending]: "Готовится",
  [orderStatus.created]: "Создан",
};

const OrderStatus: FC<{ status: orderStatus }> = ({ status }) => {
  let styleText = {};
  switch (status) {
    case orderStatus.done: {
      styleText = { color: "#00CCCC" };
      break;
    }
    case orderStatus.created: {
      styleText = { color: "#4C4CFF" };
      break;
    }
    default : {
      styleText = { color: "#FFF" };
    }
  }

  return (
    <p style={styleText} className="text text_type_main-medium">
      {statusText[status]}
    </p>
  );
};

export default OrderStatus;
