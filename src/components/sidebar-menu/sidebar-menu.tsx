import { NavLink } from "react-router-dom";
import styles from "./sidebar-menu.module.css";
import { FC } from "react";
import { MouseEventHandler } from "react-dom/node_modules/@types/react";

const setStyleActiveLink = (isActive: boolean) => {
  return !isActive ? styles.link : styles.link__active + " " + styles.link;
};

const SidebarMenu: FC<{
  links: ReadonlyArray<{ readonly path: string; readonly name: string, readonly onClick? : MouseEventHandler}>;
}> = ({ links }) => {
  return (
    <ul className={`${styles.sidebarMenu}`}>
      {links.map((item, index) => (
        <li key={index} className={styles.sidebarMenu__item}>
          <NavLink exact className={setStyleActiveLink} to={item.path} onClick={item.onClick}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SidebarMenu;