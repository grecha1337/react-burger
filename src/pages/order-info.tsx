import { FC } from "react";
import OrderInfo from "../components/order-info/order-info";
import styles from "./order-info-page.module.css";

const OrderInfoPage: FC = () => {
  return (
    <main className={styles.orderInfoPage}>
      <OrderInfo />
    </main>
  );
};

export default OrderInfoPage;
