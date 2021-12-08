import {
  ConstructorElement,
  Button,
  DragIcon,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyle from "./burgerconstructor.module.css";

function BurgerConstructor() {
  return (
    <div className={burgerConstructorStyle.burgerconstructor}>
      <ul className={`pt-25 ${burgerConstructorStyle.burgerconstructorList}`}>
        <li className={burgerConstructorStyle.burgerconstructorList__item}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </li>
        <li className={burgerConstructorStyle.burgerconstructorList__item}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
          />
        </li>
        <li className={burgerConstructorStyle.burgerconstructorList__item}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </li>
      </ul>
      <div className={burgerConstructorStyle.burgerconstructor__total}>
        <p className="text text_type_digits-medium">610</p>
        <CurrencyIcon type="primary"/>
        <Button type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;
