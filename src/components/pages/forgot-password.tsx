import { FC, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import styles from "./home.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "../../services/hooks";
import { resetPassword } from "../../services/action/user";

const ForgotPasswordPage: FC = () => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.userInfo.codePasswordInfo);
  const [state, setState] = useState({
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(success)
  if (success) {
    return (
      <Redirect
        to={{
          pathname: "/reset-password",
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
          <div className={`${styles.button} "pb-20"`}>
            <Button
              type="primary"
              size="medium"
              onClick={(e) => {
                e.preventDefault();
                dispatch(resetPassword(state));
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
