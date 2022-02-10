import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";

import headerStyle from "./appheader.module.css";

const AppHeader: FC = () => {
  return (
    <header className={`pt-4 pb-4 ${headerStyle.header}`}>
      <div className={headerStyle.headerContent}>
        <nav className={`${headerStyle.menu}`}>
          <ul className={`${headerStyle.menu__list}`}>
            <li className={`pr-5 ${headerStyle.menu__item}`}>
              <BurgerIcon type="primary" />
              <p className="pl-2 text text_type_main-default">Конструктор</p>
            </li>
            <li className={`pl-5 pr-5 ${headerStyle.menu__item}`}>
              <ListIcon type="secondary" />
              <p className="pl-2 text text_type_main-default text_color_inactive">
                Лента заказов
              </p>
            </li>
          </ul>
        </nav>
        <div className={headerStyle.logo}>
          <Logo />
        </div>
        <div className={headerStyle.account}>
          <ProfileIcon type="secondary" />
          <p className="pl-2 text text_type_main-default text_color_inactive">
            Личный кабинет
          </p>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
