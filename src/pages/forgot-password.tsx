import { FC, useCallback, useState } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import styles from "./home.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "../services/hooks";
import { resetPasswordThunk } from "../services/action/user";

const ForgotPasswordPage: FC = () => {
  const user = useSelector((store) => store.userInfo.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
  });
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  if (user) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  return (
    <main className={styles.mainColumn}>
      <h2 className="text text_type_main-medium pb-6">Восстановление пароля</h2>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <Input
            type="email"
            value={state.email}
            name="email"
            onChange={handleChange}
            placeholder={"Укажите e-mail"}
          />
          <div className={`${styles.button} pb-20`}>
            <Button
              type="primary"
              size="medium"
              onClick={(e) => {
                e.preventDefault();
                dispatch(resetPasswordThunk(state));
                history.replace({
                  pathname: "/reset-password",
                  state: { from: location },
                });
              }}
            >
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
