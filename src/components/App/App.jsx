import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.js";
import appStyle from "./app.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredienItems } from "../../services/action/burgerIngredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ErrorText from "../ErrorText/ErrorText";

function App() {
  const dispatch = useDispatch();
  const { burgerIngredientsFailed } = useSelector(
    (state) => state.burgerIngredients
  );

  useEffect(() => {

    dispatch(getIngredienItems());
  }, []);

  return (
    <>
      <AppHeader />
      <main className={appStyle.main}>
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
    </>
  );
}

export default App;
