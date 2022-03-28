import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./app-header.module.css";

const setActive = (isActive: boolean) => {
  return !isActive
    ? styles.linkHeader
    : styles.linkHeader__active + " " + styles.linkHeader;
};



const AppHeader: FC = () => {
  const { pathname } = useLocation();
  const [activeIcon, setActiveIcon] = useState("");
  useEffect(() => {
    switch (pathname) {
      case "/":
        setActiveIcon("home");
        break;
      case "/feed":
        setActiveIcon("feed");
        break;
      case "/profile":
        setActiveIcon("profile");
        break;
      default:
        setActiveIcon("");
    }
  }, [pathname]);

  return (
    <header className={`pt-4 pb-4 ${styles.header}`}>
      <div className={styles.headerContent}>
        <nav className={`${styles.menu}`}>
          <ul className={`${styles.menu__list}`}>
            <li className={`pr-5 ${styles.menu__item}`}>
              <NavLink
                exact
                to="/"
                className={setActive}
                onClick={() => setActiveIcon("home")}
              >
                <BurgerIcon
                  type={activeIcon === "home" ? "primary" : "secondary"}
                />
                <p className="pl-2 text text_type_main-default">Конструктор</p>
              </NavLink>
            </li>
            <li className={`pl-5 pr-5 ${styles.menu__item}`}>
              <NavLink
                to="/feed"
                className={setActive}
                onClick={() => setActiveIcon("feed")}
              >
                <ListIcon
                  type={activeIcon === "feed" ? "primary" : "secondary"}
                />
                <p className="pl-2 text text_type_main-default">
                  Лента заказов
                </p>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.account}>
          <NavLink to="/profile" className={setActive}  onClick={() => setActiveIcon("profile")}>
            <ProfileIcon
              type={activeIcon === "profile" ? "primary" : "secondary"}
            />
            <p className="pl-2 text text_type_main-default">Личный кабинет</p>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
