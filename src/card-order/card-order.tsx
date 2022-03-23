import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import IconIngredient from "../components/icon-ingredient/icon-ingredient";
import style from "./card-order.module.css";

const CardOrder: FC<{ orderNameBurger?: string; orderDateTime?: Date, orderNumber? : string}> = ({
  orderNameBurger,
  orderDateTime,
  orderNumber
}) => {
  return (
    <div className={style.cardOrder}>
      <div className={style.cardOrder_wrapper}>
        <div className={style.cardOrder__info}>
          <p
            className={`text text_type_digits-default ${style.cardOrder__orderNumber}`}
          >
            #034535
          </p>
          <p
            className={`text text_type_main-default text_color_inactive ${style.cardOrder__dateNumber}`}
          >
            Сегодня, 16:20 i-GMT+3
          </p>
        </div>
        <p className={`text text_type_main-medium ${style.cardOrder__name}`}>
          Death Star Starship Main бургер
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
};

export default CardOrder;
