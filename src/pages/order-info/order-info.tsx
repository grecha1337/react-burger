import { FC } from "react";
import OrderInfo from "../../components/order-info/order-info";
import styles from "./order-info.module.css";

const OrderInfoPage: FC = () => {
  return (
    <main className={styles.orderInfo}>
      <OrderInfo />
    </main>
  );
};

export default OrderInfoPage;