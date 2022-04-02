import { FC, useEffect } from "react";
import style from "./feed.module.css";
import StatusList from "../../components/status-list/status-list";
import CardOrder from "../../components/card-order/card-order";
import { useDispatch, useSelector } from "../../services/hooks";
import { FeedWsClose, FeedWsInit } from "../../services/action/ws-feed";
import { WS_BASE_URL } from "../../services/api";

const FeedPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FeedWsInit(`${WS_BASE_URL}/orders/all`));
    return () => {
      dispatch(FeedWsClose());
    };
  }, [dispatch]);

  const total = useSelector((state) => state.feed.total);
  const totalToday = useSelector((state) => state.feed.totalToday);
  const orders = useSelector((state) => state.feed.orders);

  console.log(orders)

  return (
    <main className={style.feedPage}>
      <div className={style.feedPage__wrapper}>
        <h2 className="text text_type_main-large pt-10 pb-5">Лента заказов</h2>
        <div className={style.feedPage__content}>
          <section>
            <ul className={style.feedList}>
              {orders.map((item) => (
                <li className={style.feedList__item}>
                  <CardOrder
                    orderNameBurger={item.name}
                    orderNumber={item.number}
                    orderDateTime={item.createdAt}
                  />
                </li>
              ))}
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
              <p className={`text text_type_digits-large textShadow`}>
                {total}
              </p>
            </div>
            <div className={style.orderToday}>
              <p className="text text_type_main-medium">
                Выполнено за сегодня:
              </p>
              <p className={`text text_type_digits-large textShadow`}>
                {totalToday}
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default FeedPage;
