import { useDrop, useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useMemo, useRef, useCallback } from "react";
import style from "./ConstructorList.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../ConstructorItem/ConstructorItem";

function ConstructorList({ data }) {
  const itemsWithoutBun = data.filter((item) => {
    return item.type !== "bun";
  });

  const [itemBun] = data.filter((item) => {
    return item.type === "bun";
  });

  const dispatch = useDispatch();
  const [{ isHover }, dropRef] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      if (item.type === "bun") {
        dispatch({ type: "ADD_BUN", payload: { ...item, uuid: uuidv4() } });
        dispatch({ type: "INCREMENT_BUN", payload: item });
      } else {
        dispatch({
          type: "ADD_INGREDIENT",
          payload: { ...item, uuid: uuidv4() },
        });
        dispatch({ type: "INCREMENT_INGREDIENTS", payload: item });
      }
    },
  });

  const removeItem = (item) => {
    dispatch({ type: "DELETE_ITEM", uniqId: item.uuid });
    dispatch({ type: "DECREMENT_INGREDIENTS", payload: item });
  };

  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      let elements = data;
      // В стейсте у нас всегда первый элемент массива булка
      // Если  булка добавлена, то мы должны сделать инкремент индексов
      // Т.к. у нас единый массив хранения индегриентов,
      // И если в массиве будет bun, и мы будем перетаскивать индегриенд
      // То будет в стейте будет меняться булка и первый индегриент, вместо того, что бы поменять два индегриента между собой
      // Либо использовать такой костыль, или хранить булки отдельно
      if (data[0].type === "bun") {
        dragIndex += 1;
        hoverIndex += 1;
      }
      const dragElement = data[dragIndex];
      elements.splice(dragIndex, 1);
      elements.splice(hoverIndex, 0, dragElement);
      dispatch({
        type: "REORDER_INGREDIENTS",
        payload: elements,
      });
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
            text={itemBun.name}
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
      </ul>
      {itemBun && (
        <li className={style.burgerconstructorList__item}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={itemBun.name}
            price={itemBun.price}
            thumbnail={itemBun.image}
          />
        </li>
      )}
    </ul>
  );
}

export default ConstructorList;
