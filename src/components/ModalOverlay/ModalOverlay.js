import ReactDOM from "react-dom";
import styleModal from "./modalOverlay.module.css";
import { useEffect } from "react";
import PropTypes from "prop-types"
const modalRoot = document.getElementById("modal");

function ModalOverlay({ show, onClose, children }) {
  const closeOnEscape = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const popupOpendClass = show ? styleModal.popup_opened : "";

  return ReactDOM.createPortal(
    <div className={`${styleModal.popup} ${popupOpendClass}`} onClick={onClose}>
      <div
        className={styleModal.popup__container}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div className={styleModal.popup__close} onClick={onClose}></div>
      </div>
    </div>,
    modalRoot
  );
}


ModalOverlay.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default ModalOverlay;
