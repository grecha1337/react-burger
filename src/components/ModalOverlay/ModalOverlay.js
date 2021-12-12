const modalRoot = document.getElementById("react-modals");

function ModalOverlay(props) {
  return ReactDOM.createPortal(<h1>{props.children}</h1>, modalRoot);
}

export default ModalOverlay;