import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import style from "./ConstructorItem.module.css";
import PropTypes from "prop-types";

function ConstructorItem({ children, moveItem, index, id }) {
  const ref = useRef(null);
  const [{ isHover }, drop] = useDrop({
    accept: "constructorItem",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [, drag] = useDrag({
    type: "constructorItem",
    item: () => {
      return { id, index };
    },
  });
  const styleHover = isHover
    ? {
        outline: "3px solid #8b00ff",
        outlineOffset: "-3px",
      }
    : null;
  drag(drop(ref));
  return (
    <li ref={ref} className={style.burgerconstructorList__innerItem}>
      <DragIcon type="primary" />
      <div className={style.wrapperConstucrotElement} style={styleHover}>
        {children}
      </div>
    </li>
  );
}

ConstructorItem.propTypes = {
  moveItem: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
export default ConstructorItem;
