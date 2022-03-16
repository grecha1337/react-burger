import style from "./modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("modal");

function Modal({ title, onClose, children }) {
  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={style.popup} onClick={(e) => e.stopPropagation()}>
        {title && (
          <h2
            className={`${style.popup__title} text text_type_main-large pl-10 pr-10`}
          >
            {title}
          </h2>
        )}
        {children}
        <div className={style.popup__close} onClick={onClose}>
          <CloseIcon type="primary" />
        </div>
      </div>
    </ModalOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default Modal;
