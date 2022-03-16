import { FC } from "react";
import styles from "./home.module.css";
import IngredientDetails from "../components/ingredient-details/ingredient-details";

const IngredientPage: FC = () => {
  return (
    <main className={styles.mainColumn}>
      <IngredientDetails />
    </main>
  );
};

export default IngredientPage;
