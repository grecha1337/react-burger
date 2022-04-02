import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, memo } from "react";
import { timeSince } from "../../services/utils";
import IconIngredient from "../icon-ingredient/icon-ingredient";
import style from "./card-order.module.css";

const CardOrder: FC<{
  orderNameBurger: string;
  orderDateTime: string;
  orderNumber: number;
}> = memo(({ orderNameBurger, orderDateTime, orderNumber }) => {
  const dateTime = new Date(orderDateTime);
  return (
    <div className={style.cardOrder}>
      <div className={style.cardOrder_wrapper}>
        <div className={style.cardOrder__info}>
          <p
            className={`text text_type_digits-default ${style.cardOrder__orderNumber}`}
          >
            #{orderNumber}
          </p>
          <p
            className={`text text_type_main-default text_color_inactive ${style.cardOrder__dateNumber}`}
          >
            {timeSince(dateTime)}
          </p>
        </div>
        <p className={`text text_type_main-medium ${style.cardOrder__name}`}>
          {orderNameBurger}
        </p>
        <div className={style.cardOrder__orderDetails}>
          <ul className={style.cardOrder__listIngredients}>
            <li className={style.cardOrder__listIngredientItem}>
              <IconIngredient
                src="https://code.s3.yandex.net/react/code/cheese-mobile.png"
                alt="Сыр с астероидной плесенью"
              />
            </li>
            <li className={style.cardOrder__listIngredientItem}>
              <IconIngredient
                src="https://code.s3.yandex.net/react/code/core-mobile.png"
                alt="Кристаллы марсианских альфа-сахаридов"
              />
              <img className={style.cardOrder__listIngredientItemImg} />
            </li>
            <li className={style.cardOrder__listIngredientItem}>
              <IconIngredient
                src="https://code.s3.yandex.net/react/code/cheese-mobile.png"
                alt="Сыр с астероидной плесенью"
              />
            </li>
            <li className={style.cardOrder__listIngredientItem}>
              <IconIngredient
                src="https://code.s3.yandex.net/react/code/core-mobile.png"
                alt="Кристаллы марсианских альфа-сахаридов"
              />
              <img className={style.cardOrder__listIngredientItemImg} />
            </li>
            <li className={style.cardOrder__listIngredientItem}>
              <IconIngredient
                src="https://code.s3.yandex.net/react/code/cheese-mobile.png"
                alt="Сыр с астероидной плесенью"
              />
            </li>
            <li className={style.cardOrder__listIngredientItem}>
              <IconIngredient
                src="https://code.s3.yandex.net/react/code/core-mobile.png"
                alt="Кристаллы марсианских альфа-сахаридов"
              />
              <img className={style.cardOrder__listIngredientItemImg} />
            </li>
            <li className={style.cardOrder__listIngredientItem}>
              <IconIngredient
                src="https://code.s3.yandex.net/react/code/cheese-mobile.png"
                alt="Сыр с астероидной плесенью"
              />
            </li>
          </ul>
          <div className={style.cardOrder__total}>
            <p className="text text_type_digits-default pr-2">480</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default CardOrder;
