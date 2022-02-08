import styles from "./ErrorText.module.css";
import PropTypes from "prop-types";
import {FC} from 'react'
import { TErrorText } from "../../services/types/data";

const ErrorText:FC<TErrorText> =  ({ text }) =>{
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
