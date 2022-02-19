import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

const RegisterPage: FC = () => {
  const [emailValue, setEmailValue] = useState("");
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const [passwordValue, setPassword] = useState("");
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [nameValue, setName] = useState("");
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <main className={styles.mainColumn}>
      <h2 className="text text_type_main-medium pb-6">Регистрация</h2>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setName(e.target.value)}
            value={nameValue}
            name={"name"}
          />
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
              Зарегистрироваться
            </Button>
          </div>
        </fieldset>
      </form>
      <ul className={styles.registrationNav}>
        <li className={styles.registrationNav__item}>
          <p className="text text_type_main-default">Уже зарегистрированы?</p>
          <Link className={styles.link} to="/login">
            Войти
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default RegisterPage;
