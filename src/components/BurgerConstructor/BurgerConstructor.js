import {
  ConstructorElement,
  Button,
  DragIcon,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyle from "./burgerconstructor.module.css";
import PropsTypes from 'prop-types';

function BurgerConstructor(props) {
  return (
    <section className={`{burgerConstructorStyle.burgerconstructor} pl-4 pr-4`}>
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
        <ul className={burgerConstructorStyle.burgerconstructorList__inner}>
          <li
            className={burgerConstructorStyle.burgerconstructorList__innerItem}
          >
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
            />
          </li>
          <li
            className={burgerConstructorStyle.burgerconstructorList__innerItem}
          >
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
            />
          </li>
          <li
            className={burgerConstructorStyle.burgerconstructorList__innerItem}
          >
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
            />
          </li>
          <li
            className={burgerConstructorStyle.burgerconstructorList__innerItem}
          >
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
            />
          </li>
          <li
            className={burgerConstructorStyle.burgerconstructorList__innerItem}
          >
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
            />
          </li>
          <li
            className={burgerConstructorStyle.burgerconstructorList__innerItem}
          >
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
            />
          </li>
          <li
            className={burgerConstructorStyle.burgerconstructorList__innerItem}
          >
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
            />
          </li>
        </ul>
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
        <p className="text text_type_digits-medium pr-2">610</p>
        <CurrencyIcon type="primary" style={{ height: 53, width: 36 }} />
        <div className="pl-10">
          <Button type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </div>
    </section>
  );
}

BurgerConstructor.propsTypes = {
  props: PropsTypes.arrayOf(PropsTypes.shape({
    
  }))
}
export default BurgerConstructor;
