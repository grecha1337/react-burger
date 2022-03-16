import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useCallback } from "react";
import style from "./ConstructorList.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import {
  addIngredintToСonstructor,
  addBunToСonstructor,
  deleteItemById,
  reorderIngredients,
} from "../../services/action/burgerConstructor";
import {
  decerementQtyIngredients,
  incrementQtyBun,
  incrementQtyIngredient,
} from "../../services/action/burgerIngredients";
import TemplateConstructorElement from "../TemplateConstuctorElement/TemplateConstuctorElement";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../utils/types";

const POSTIX_NAME_BUN_TOP = "(верх)";
const POSTIX_NAME_BUN_BUTTOM = "(низ)";

function ConstructorList({ data }) {
  const itemsWithoutBun = data.filter((item) => {
    return item.type !== "bun";
  });

  const [itemBun] = data.filter((item) => {
    return item.type === "bun";
  });

  const dispatch = useDispatch();
  const [, dropRef] = useDrop({
    accept: "ingredient",
    drop(item) {
      if (item.type === "bun") {
        dispatch(addBunToСonstructor({ ...item, uuid: uuidv4() }));
        dispatch(incrementQtyBun(item));
      } else {
        dispatch(addIngredintToСonstructor({ ...item, uuid: uuidv4() }));
        dispatch(incrementQtyIngredient(item));
      }
    },
  });

  const removeItem = (item) => {
    dispatch(deleteItemById(item.uuid));
    dispatch(decerementQtyIngredients(item));
  };

  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      let elements = data;
      // В стейсте у нас всегда первый элемент массива булка
      // Если  булка добавлена, то мы должны сделать инкремент индексов
      // Т.к. у нас единый массив хранения индегриентов,
      // И если в массиве будет bun, и мы будем перетаскивать индегриенд
      // То в стейте будет меняться булка и первый индегриент, вместо того, что бы поменять два индегриента между собой
      // Либо использовать такой костыль, или хранить булки отдельно
      if (data[0].type === "bun") {
        dragIndex += 1;
        hoverIndex += 1;
      }
      const dragElement = data[dragIndex];
      elements.splice(dragIndex, 1);
      elements.splice(hoverIndex, 0, dragElement);
      dispatch(reorderIngredients(elements));
    },
    [data]
  );
  return (
    <ul className={`pt-25 ${style.burgerconstructorList}`} ref={dropRef}>
      {itemBun && (
        <li className={style.burgerconstructorList__item}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${itemBun.name} ${POSTIX_NAME_BUN_TOP}`}
            price={itemBun.price}
            thumbnail={itemBun.image}
          />
        </li>
      )}

      <ul className={style.burgerconstructorList__inner}>
        {itemsWithoutBun.map((item, index) => (
          <ConstructorItem
            key={item.uuid}
            index={index}
            moveItem={moveItem}
            id={item.uuid}
          >
            <ConstructorElement
              index={index}
              text={item.name}
              price={item.price}
              thumbnail={item.image}
              handleClose={() => {
                removeItem(item);
              }}
            />
          </ConstructorItem>
        ))}
        {data.length === 0 ? <TemplateConstructorElement /> : null}
      </ul>
      {itemBun && (
        <li className={style.burgerconstructorList__item}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${itemBun.name} ${POSTIX_NAME_BUN_BUTTOM}`}
            price={itemBun.price}
            thumbnail={itemBun.image}
          />
        </li>
      )}
    </ul>
  );
}

ConstructorList.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};

export default ConstructorList;