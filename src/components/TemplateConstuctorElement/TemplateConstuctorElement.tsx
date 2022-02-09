import style from "./TemplateConstuctorElement.module.css";
import styleLi from "../ConstructorItem/ConstructorItem.module.css";
import { FC } from "react";
const TemplateConstructorElement: FC = () => {
  return (
    <li className={styleLi.burgerconstructorList__innerItem}>
      <p
        className={`${style.templateConstructorElement} text text_type_digits-medium pr-2`}
      >
        Перетещите сюда ингредиенты
      </p>
    </li>
  );
};

export default TemplateConstructorElement;