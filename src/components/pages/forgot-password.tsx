import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ForgotPasswordPage: FC = () => {
  const [emailValue, setEmailValue] = useState("");
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  return (
    <main className={styles.mainColumn}>
      <h2 className="text text_type_main-medium pb-6">Восстановление пароля</h2>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <Input
            type="email"
            value={emailValue}
            onChange={onChangeEmail}
            placeholder={"Укажите e-mail"}
          />
          <div className={`${styles.button} "pb-20"`}>
            <Button type="primary" size="medium">
              Восстановить
            </Button>
          </div>
        </fieldset>
      </form>
      <ul className={styles.registrationNav}>
        <li className={styles.registrationNav__item}>
          <p className="text text_type_main-default">Вспомнили пароль?</p>
          <Link className={styles.link} to="/login">
            Войти
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default ForgotPasswordPage;
