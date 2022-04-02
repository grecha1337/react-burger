import { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import SidebarMenu from "../../components/sidebar-menu/sidebar-menu";
import CardOrder from "../../components/card-order/card-order";
import styles from "./order-history.module.css";

const OrderHistoryPage: FC = () => {
  return (
    <main className={styles.orderHistory}>
      <div className={styles.orderHistory__container}>
        <div className={styles.orderHistory__wrapper}>
          <div className="sidebarLeft">
            <div className="sidebarLeft__wrapper pb-20">
              <SidebarMenu />
            </div>
            <p className="text text_type_main-default text_color_inactive aboutPage">
              В этом разделе вы можете просмотреть свою историю заказов
            </p>
          </div>
          <section>
            <ul className={styles.orderHistoryList}>
              {/* <li className={styles.orderHistoryList__item}>
                <CardOrder />
              </li>
              <li className={styles.orderHistoryList__item}>
                <CardOrder />
              </li>
              <li className={styles.orderHistoryList__item}>
                <CardOrder />
              </li>
              <li className={styles.orderHistoryList__item}>
                <CardOrder />
              </li>
              <li className={styles.orderHistoryList__item}>
                <CardOrder />
              </li>
              <li className={styles.orderHistoryList__item}>
                <CardOrder />
              </li> */}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default OrderHistoryPage;
