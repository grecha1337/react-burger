import styles from "./ErrorText.module.css";
import PropTypes from "prop-types";

function ErrorText({ text }) {
  return (
    <div className={styles.errorText}>
      <p className="text text_type_digits-medium">{text}</p>
    </div>
  );
}

ErrorText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorText;
