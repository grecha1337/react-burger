import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

const LoginPage: FC = () => {
  const [emailValue, setEmailValue] = useState("");
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const [passwordValue, setPassword] = useState("");
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <main className={styles.mainColumn}>
      <h2 className="text text_type_main-medium pb-6">Вход</h2>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <EmailInput
            onChange={onChangeEmail}
            value={emailValue}
            name={"email"}
          />
          <PasswordInput
            onChange={onChangePassword}
            value={passwordValue}
            name={"password"}
          />
          <div className={`${styles.button} "pb-20"`}>
            <Button type="primary" size="medium">
              Войти
            </Button>
          </div>
        </fieldset>
      </form>
      <ul className={styles.registrationNav}>
        <li className={styles.registrationNav__item}>
          <p className="text text_type_main-default">
            Вы — новый пользователь?
          </p>
          <Link className={styles.link} to="/register">
            Зарегистрироваться
          </Link>
        </li>
        <li className={styles.registrationNav__item}>
          <p className="text text_type_main-default">Забыли пароль?</p>
          <Link className={styles.link} to="/forgot-password">
            Восстановить пароль
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default LoginPage;
