import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { confirmResetPass } from "../../services/action/user";

const ResetPasswordPage: FC = () => {

  const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(false);

  const [state, setState] = useState({
    password: "",
    token: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <main className={styles.mainColumn}>
      <h2 className="text text_type_main-medium pb-6">Восстановление пароля</h2>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder={"Введите новый пароль"}
            icon={"ShowIcon"}
            onIconClick={() => {
              setShowPassword((preValue) => !preValue);
            }}
          />
          <Input
            type={"text"}
            name="token"
            value={state.token}
            onChange={handleChange}
            placeholder={"Введите код из письма"}
          />
          <div className={`${styles.button} "pb-20"`}>
            <Button
              type="primary"
              size="medium"
              onClick={(e) => {
                e.preventDefault();
                dispatch(confirmResetPass(state))
              }}
            >
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
