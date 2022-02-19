import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ResetPasswordPage: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [newPasswordValue, setNewPassword] = useState("");
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const [codeFromEmailValue, setCodeFromEmail] = useState("");
  const onChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeFromEmail(e.target.value);
  };

  return (
    <main className={styles.mainColumn}>
      <h2 className="text text_type_main-medium pb-6">Восстановление пароля</h2>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <Input
            type={showPassword ? "text" : "password"}
            value={newPasswordValue}
            onChange={onChangeEmail}
            placeholder={"Введите новый пароль"}
            icon={"ShowIcon"}
            onIconClick={() => {
              setShowPassword((preValue) => !preValue);
            }}
          />
          <Input
            type={"text"}
            value={codeFromEmailValue}
            onChange={onChangeCode}
            placeholder={"Введите код из письма"}
          />
          <div className={`${styles.button} "pb-20"`}>
            <Button type="primary" size="medium">
              Сохранить
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

export default ResetPasswordPage;
