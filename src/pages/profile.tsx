import { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from "./home.module.css";
import profileStyles from "./profile.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import SidebarMenu from "../components/sidebar-menu/sidebar-menu";
import { useDispatch, useSelector } from "../services/hooks";
import { logoutThunk, updateProfileThunk } from "../services/action/user";
import { getCookie } from "../services/utils";
import { REFRESH_TOKEN } from "../services/constant";
import { useHistory } from "react-router-dom";

const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPassRef = useRef<HTMLInputElement>(null);
  const inputNameRef = useRef<HTMLInputElement>(null);

  const emailValue = useSelector((store) => store.userInfo.user?.email) || "";
  const nameValue = useSelector((store) => store.userInfo.user?.name) || "";
  const history = useHistory();

  const [state, setState] = useState({
    email: {
      value: emailValue,
      disabled: true,
    },
    name: {
      value: nameValue,
      disabled: true,
    },
    password: {
      value: "",
      disabled: true,
    },
  });

  useEffect(() => {
    setState({
      email: {
        value: emailValue,
        disabled: true,
      },
      name: {
        value: nameValue,
        disabled: true,
      },
      password: {
        value: "",
        disabled: true,
      },
    });
  }, [emailValue, nameValue]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name as keyof typeof state;
    setState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  }, []);

  const handleIconClick = useCallback((nameInput: keyof typeof state) => {
    console.log(nameInput);
    setState((prevState) => ({
      ...prevState,
      [nameInput]: {
        ...prevState[nameInput],
        disabled: !prevState[nameInput].disabled,
      },
    }));
  }, []);

  const onBlur = useCallback((nameInput: keyof typeof state) => {
    console.log(nameInput);
    setState((prevState) => ({
      ...prevState,
      [nameInput]: {
        ...prevState[nameInput],
        disabled: true,
      },
    }));
  }, []);

  useEffect(() => {
    if (!state.name.disabled) inputNameRef.current?.focus();
    if (!state.email.disabled) inputEmailRef.current?.focus();
    if (!state.password.disabled) inputPassRef.current?.focus();
  }, [state]);

  const onClickLogoutLink = useCallback(
    async (e) => {
      e.preventDefault();
      dispatch(
        logoutThunk(getCookie(REFRESH_TOKEN), () => {
          history.replace({ pathname: "/login" });
        })
      );
    },
    [dispatch]
  );

  const handleUpdateProfile = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        updateProfileThunk({
          email: state.email.value,
          password: state.password.value,
          name: state.name.value,
        })
      );
    },
    [dispatch]
  );

  const handleCancelChange = useCallback((e) => {
    e.preventDefault();
    setState({
      email: {
        value: emailValue,
        disabled: true,
      },
      name: {
        value: nameValue,
        disabled: true,
      },
      password: {
        value: "",
        disabled: true,
      },
    });
  }, []);

  return (
    <main className={profileStyles.main}>
      <div className={profileStyles.main__container}>
        <div className={profileStyles.wrapper}>
          <div className={profileStyles.sidebarLeft}>
            <SidebarMenu
              links={[
                { path: "/profile", name: "Профиль" },
                { path: "/profile/orders", name: "История заказов" },
                { path: "/logout", name: "Выход", onClick: onClickLogoutLink },
              ]}
            />
            <p
              className={`${profileStyles.aboutProfilePage} text text_type_main-default`}
            >
              В этом разделе вы можете изменить свои персональные данные
            </p>
          </div>

          <form className={styles.form}>
            <fieldset className={styles.fieldset}>
              <Input
                type="text"
                name="name"
                value={state.name.value}
                onChange={handleChange}
                placeholder={"Имя"}
                icon={"EditIcon"}
                disabled={state.name.disabled}
                onIconClick={() => {
                  handleIconClick("name");
                }}
                ref={inputNameRef}
                onBlur={() => {
                  onBlur("name");
                }}
              />
              <Input
                type="text"
                name="email"
                value={state.email.value}
                onChange={handleChange}
                placeholder={"Логин"}
                icon={"EditIcon"}
                disabled={state.email.disabled}
                onIconClick={() => {
                  handleIconClick("email");
                }}
                ref={inputEmailRef}
                onBlur={() => {
                  onBlur("email");
                }}
              />
              <Input
                type="password"
                name="password"
                value={state.password.value}
                onChange={handleChange}
                placeholder={"Пароль"}
                icon={"EditIcon"}
                disabled={state.password.disabled}
                onIconClick={() => {
                  handleIconClick("password");
                }}
                ref={inputPassRef}
                onBlur={() => {
                  onBlur("password");
                }}
              />
              <div className={`${styles.button} ${styles.button__group}`}>
                <Button
                  type="primary"
                  size="medium"
                  onClick={handleCancelChange}
                >
                  Отменить
                </Button>
                <Button
                  type="primary"
                  size="medium"
                  onClick={handleUpdateProfile}
                >
                  Сохранить
                </Button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
