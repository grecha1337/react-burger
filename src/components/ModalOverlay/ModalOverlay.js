import styleModal from "./modalOverlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay({children, onClose}) {
  return(<div className={`${styleModal.overlay}`} onClick={onClose}>{children}</div>);
}

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ModalOverlay;
