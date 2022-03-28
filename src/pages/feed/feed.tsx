import { FC } from "react";
import style from "./feed.module.css";
import StatusList from "../../components/status-list/status-list";
import CardOrder from "../../components/card-order/card-order";

const FeedPage: FC = () => {
  return (
    <main className={style.feedPage}>
      <div className={style.feedPage__wrapper}>
        <h2 className="text text_type_main-large pt-10 pb-5">Лента заказов</h2>
        <div className={style.feedPage__content}>
          <section>
            <ul className={style.feedList}>
              <li className={style.feedList__item}>
                <CardOrder />
              </li>
              <li className={style.feedList__item}>
                <CardOrder />
              </li>
              <li className={style.feedList__item}>
                <CardOrder />
              </li>
              <li className={style.feedList__item}>
                <CardOrder />
              </li>
              <li className={style.feedList__item}>
                <CardOrder />
              </li>
              <li className={style.feedList__item}>
                <CardOrder />
              </li>
            </ul>
          </section>
          <section className="feedInfo">
            <div className={style.feedStatusLists}>
              <StatusList
                title="Готовы:"
                list={[
                  "034533",
                  "034534",
                  "034533",
                  "034534",
                  "034533",
                  "034534",
                ]}
                colorTextList="#00CCCC"
              />

              <StatusList
                title="В работе:"
                list={["034533", "034534", "034533", "034534"]}
              />
            </div>
            <div className={style.orderAllTime}>
              <p className="text text_type_main-medium">
                Выполнено за все время:
              </p>
              <p className={`text text_type_digits-large textShadow`}>31 138</p>
            </div>
            <div className={style.orderToday}>
              <p className="text text_type_main-medium">
                Выполнено за сегодня:
              </p>
              <p className={`text text_type_digits-large textShadow`}>138</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default FeedPage;
