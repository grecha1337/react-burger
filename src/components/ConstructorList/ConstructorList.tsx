import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { FC, useCallback } from "react";
import style from "./ConstructorList.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import {
  addIngredientToConstructor,
  addBunToConstructor,
  deleteItemById,
  reorderIngredients,
} from "../../services/action/burgerConstructor";
import {
  decrementQtyIngredients,
  incrementQtyBun,
  incrementQtyIngredient,
} from "../../services/action/burgerIngredients";
import TemplateConstructorElement from "../TemplateConstuctorElement/TemplateConstuctorElement";
import { TIngredientWithUniqKey } from "../../services/types/data";

const POSTIX_NAME_BUN_TOP = "(верх)";
const POSTIX_NAME_BUN_BUTTOM = "(низ)";

const ConstructorList: FC<{
  ingredientList: Array<TIngredientWithUniqKey>;
}> = ({ ingredientList }) => {
  const itemsWithoutBun = ingredientList.filter((item) => {
    return item.type !== "bun";
  });

  const [itemBun] = ingredientList.filter((item) => {
    return item.type === "bun";
  });

  const dispatch = useDispatch();
  const [, dropRef] = useDrop({
    accept: "ingredient",
    drop(item: TIngredientWithUniqKey) {
      if (item.type === "bun") {
        dispatch(addBunToConstructor({ ...item, uuid: uuidv4() }));
        dispatch(incrementQtyBun(item));
      } else {
        dispatch(addIngredientToConstructor({ ...item, uuid: uuidv4() }));
        dispatch(incrementQtyIngredient(item));
      }
    },
  });

  const removeItem = (item: TIngredientWithUniqKey) => {
    dispatch(deleteItemById(item.uuid));
    dispatch(decrementQtyIngredients(item));
  };

  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      let elements = ingredientList;
      // В стейсте у нас всегда первый элемент массива булка
      // Если  булка добавлена, то мы должны сделать инкремент индексов
      // Т.к. у нас единый массив хранения индегриентов,
      // И если в массиве будет bun, и мы будем перетаскивать индегриенд
      // То в стейте будет меняться булка и первый индегриент, вместо того, что бы поменять два индегриента между собой
      // Либо использовать такой костыль, или хранить булки отдельно
      if (ingredientList[0].type === "bun") {
        dragIndex += 1;
        hoverIndex += 1;
      }
      const dragElement = ingredientList[dragIndex];
      elements.splice(dragIndex, 1);
      elements.splice(hoverIndex, 0, dragElement);
      dispatch(reorderIngredients(elements));
    },
    [ingredientList]
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
              text={item.name}
              price={item.price}
              thumbnail={item.image}
              handleClose={() => {
                removeItem(item);
              }}
            />
          </ConstructorItem>
        ))}
        {ingredientList.length === 0 ? <TemplateConstructorElement /> : null}
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
};

export default ConstructorList;
