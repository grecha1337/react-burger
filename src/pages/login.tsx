import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, useCallback, useEffect, useState } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import { loginThunk } from "../services/action/user";
import { useDispatch, useSelector } from "../services/hooks";
import styles from "./home.module.css";

const LoginPage: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userInfo.user);
  const location = useLocation<Location & { from: Location }>();

  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  if (user) {
    return <Redirect to={location.state?.from || "/"} />;
  }

  return (
    <main className={styles.mainColumn}>
      <h2 className="text text_type_main-medium pb-6">Вход</h2>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <EmailInput
            onChange={handleChange}
            value={state.email}
            name={"email"}
          />
          <PasswordInput
            onChange={handleChange}
            value={state.password}
            name={"password"}
          />
          <div className={`${styles.button} pb-20`}>
            <Button
              type="primary"
              size="medium"
              onClick={async (e) => {
                e.preventDefault();
                dispatch(loginThunk(state));
              }}
            >
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
