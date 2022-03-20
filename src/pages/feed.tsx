import { FC } from "react";
import CardOrder from "../card-order/card-order";
import styles from "./home.module.css";
import s from "./feed.module.css";

const FeedPage: FC = () => {
  return (
    <>
      <section className={s.feed}>
        <h2 className="text text_type_main-large pt-10 pb-5">Лента заказов</h2>
        <main className={styles.main}></main>
        <ul className={s.feedList}>
          <li className={s.feedList__item}>
            <CardOrder />
          </li>
          <li className={s.feedList__item}>
            <CardOrder />
          </li>
          <li className={s.feedList__item}>
            <CardOrder />
          </li>
          <li className={s.feedList__item}>
            <CardOrder />
          </li>
          <li className={s.feedList__item}>
            <CardOrder />
          </li>
          <li className={s.feedList__item}>
            <CardOrder />
          </li>
        </ul>
      </section>
      <section className="feedInfo">
        <div>
          <p className="text text_type_main-medium">Готовы :</p>
          <ul className={s.feedReadyList}>
              <li className={s.feedReadyList__item}>034533</li>
              <li className={s.feedReadyList__item}>034533</li>
              <li className={s.feedReadyList__item}>034533</li>
              <li className={s.feedReadyList__item}>034533</li>
              <li className={s.feedReadyList__item}>034533</li>
          </ul>
        </div>
        <div className={s.orderAllTime}>
          <p className="text text_type_main-medium">Выполнено за все время:</p>
          <p className={`text text_type_digits-large textShadow`}>
            31 138
          </p>
        </div>
        <div className={s.orderToday}>
          <p className="text text_type_main-medium">Выполнено за сегодня:</p>
          <p className={`text text_type_digits-large textShadow`}>138</p>
        </div>
      </section>
    </>
  );
};

export default FeedPage;
