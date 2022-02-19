import { FC, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { getIngredientItems } from "../../services/action/burger-ingredients";
import { useDispatch, useSelector } from "../../services/hooks";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import ErrorText from "../error-text/error-text";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "./home.module.css";

const HomePage: FC = () => {
  const dispatch = useDispatch();
  const { burgerIngredientsFailed } = useSelector(
    (state) => state.burgerIngredients
  );

  useEffect(() => {
    dispatch(getIngredientItems());
  }, []);

  return (
    <main className={styles.main}>
      <DndProvider backend={HTML5Backend}>
        {burgerIngredientsFailed !== true ? (
          <>
            <BurgerIngredients />
            <BurgerConstructor />
          </>
        ) : (
          <ErrorText text={"Что-то пошло не так"} />
        )}
      </DndProvider>
    </main>
  );
};

export default HomePage;
