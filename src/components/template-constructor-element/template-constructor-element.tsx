import style from "./template-constructor-element.module.css";
import styleLi from "../constructor-item/constructor-item.module.css";
import { FC } from "react";
const TemplateConstructorElement: FC = () => {
  return (
    <li className={styleLi.burgerConstructorList__innerItem}>
      <p
        className={`${style.templateConstructorElement} text text_type_digits-medium pr-2`}
      >
        Перетащите сюда ингредиенты
      </p>
    </li>
  );
};

export default TemplateConstructorElement;
