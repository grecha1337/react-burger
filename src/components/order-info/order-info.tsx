import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { memo, useMemo } from "react";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";
import { orderStatus } from "../../services/constant";
import { useDispatch, useSelector } from "../../services/hooks";
import { TIngredient } from "../../services/types/data";
import { timeSince } from "../../services/utils";
import OrderList from "../order-list/order-list";
import OrderStatus from "../order-status/order-status";
import style from "./order-info.module.css";

const array: ReadonlyArray<TIngredient> = [
  {
    _id: "60d3b41abdacab0026a733c6",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733c7",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733c8",
    name: "Филе Люминесцентного тетраодонтимформа",
    type: "main",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/meat-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733c9",
    name: "Мясо бессмертных моллюсков Protostomia",
    type: "main",
    proteins: 433,
    fat: 244,
    carbohydrates: 33,
    calories: 420,
    price: 1337,
    image: "https://code.s3.yandex.net/react/code/meat-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733ca",
    name: "Говяжий метеорит (отбивная)",
    type: "main",
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: "https://code.s3.yandex.net/react/code/meat-04.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733cb",
    name: "Биокотлета из марсианской Магнолии",
    type: "main",
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: "https://code.s3.yandex.net/react/code/meat-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733cc",
    name: "Соус Spicy-X",
    type: "sauce",
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: "https://code.s3.yandex.net/react/code/sauce-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733cd",
    name: "Соус фирменный Space Sauce",
    type: "sauce",
    proteins: 50,
    fat: 22,
    carbohydrates: 11,
    calories: 14,
    price: 80,
    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733ce",
    name: "Соус традиционный галактический",
    type: "sauce",
    proteins: 42,
    fat: 24,
    carbohydrates: 42,
    calories: 99,
    price: 15,
    image: "https://code.s3.yandex.net/react/code/sauce-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733cf",
    name: "Соус с шипами Антарианского плоскоходца",
    type: "sauce",
    proteins: 101,
    fat: 99,
    carbohydrates: 100,
    calories: 100,
    price: 88,
    image: "https://code.s3.yandex.net/react/code/sauce-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733d0",
    name: "Хрустящие минеральные кольца",
    type: "main",
    proteins: 808,
    fat: 689,
    carbohydrates: 609,
    calories: 986,
    price: 300,
    image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
    image_mobile:
      "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
    image_large:
      "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733d1",
    name: "Плоды Фалленианского дерева",
    type: "main",
    proteins: 20,
    fat: 5,
    carbohydrates: 55,
    calories: 77,
    price: 874,
    image: "https://code.s3.yandex.net/react/code/sp_1.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733d2",
    name: "Кристаллы марсианских альфа-сахаридов",
    type: "main",
    proteins: 234,
    fat: 432,
    carbohydrates: 111,
    calories: 189,
    price: 762,
    image: "https://code.s3.yandex.net/react/code/core.png",
    image_mobile: "https://code.s3.yandex.net/react/code/core-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/core-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733d3",
    name: "Мини-салат Экзо-Плантаго",
    type: "main",
    proteins: 1,
    fat: 2,
    carbohydrates: 3,
    calories: 6,
    price: 4400,
    image: "https://code.s3.yandex.net/react/code/salad.png",
    image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733d4",
    name: "Сыр с астероидной плесенью",
    type: "main",
    proteins: 84,
    fat: 48,
    carbohydrates: 420,
    calories: 3377,
    price: 4142,
    image: "https://code.s3.yandex.net/react/code/cheese.png",
    image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
    __v: 0,
  },
];

const OrderInfo = () => {
  const location = useLocation<{
    background?: Location;
  }>();
  const isFeed = useRouteMatch({
    path: `/:feed/:number`,
    exact: true,
  });

  const { number } = useParams<{ number: string }>();

  const myOrders = useSelector((state) => state.myOrders.orders);
  const allOrders = useSelector((state) => state.feed.orders);
  const ingredients = useSelector(
    (state) => state.burgerIngredients.burgerIngredients
  );

  const searchOrder = (
    listOrder: ReadonlyArray<{
      ingredients: ReadonlyArray<string>;
      id: string;
      status: orderStatus;
      number: number;
      createdAt: string;
      updateAt: string;
      name: string;
    }>,
    number: number
  ) => {
    return listOrder.find((item) => item.number === number);
  };

  const order = !!isFeed
    ? searchOrder(allOrders, parseInt(number))
    : searchOrder(myOrders, parseInt(number));

  const dateTime = new Date(order?.createdAt!);

  const totalSum = order?.ingredients.reduce((accumulator, currentValue) => {
    let ingredient = ingredients.find((a) => a._id === currentValue);
    return (accumulator +=
      ingredient?.type === "bun" ? ingredient?.price! * 2 : ingredient?.price!);
  }, 0);

  const ingredientsCurrentOrder = useMemo(() => {
    return order?.ingredients.map((id) =>
      ingredients.find((item) => id === item._id)
    );
  }, [order]);

  // Подсчитываем количество ингредиентов
  const ingredientsListWithCount = new Map();
  ingredientsCurrentOrder?.forEach(function (el) {
    if (!el) return;
    if (ingredientsListWithCount.has(el["_id"])) {
      ingredientsListWithCount.get(el["_id"]).qty++;
    } else {
      if (el.type === "bun") {
        ingredientsListWithCount.set(el["_id"], Object.assign(el, { qty: 2 }));
      } else {
        ingredientsListWithCount.set(el["_id"], Object.assign(el, { qty: 1 }));
      }
    }
  });

  if (order) {
    return (
      <div>
        <div className={style.orderInfo__header}>
          {!location?.state?.background && (
            <p className="mb-10 text text_type_digits-default">
              #{order?.number}
            </p>
          )}
          <p className="mb-3 text text_type_main-medium">{order?.name}</p>
        </div>
        <div className={style.orderInfo__main}>
          <p className={`${style.status} mb-15 text text_type_main-default`}>
            <OrderStatus status={order.status} />
          </p>
          <p className="mb-6 text text_type_main-medium">Состав:</p>
          <OrderList list={Array.from(ingredientsListWithCount.values())} />
        </div>
        <div className={style.orderInfo__footer}>
          <p className="text text_type_main-default text_color_inactive">
            {timeSince(dateTime)}
          </p>
          <div className={style.orderInfo__total}>
            <p className="mr-2 text text_type_digits-default">{totalSum}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    );
  }
  return <p>Загрузка...</p>;
};

export default OrderInfo;
