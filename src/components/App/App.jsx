import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.js";
import appStyle from "./app.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredienItems } from "../../services/action/burgerIngredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();
  const { burgerIngredients } = useSelector((state) => state.burgerIngredients);
  const constructorData = useSelector((state) => state.burgerConstructor);

  useEffect(() => {
    dispatch(getIngredienItems());
  }, []);

  return (
    <>
      <AppHeader />
      <main className={appStyle.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients data={burgerIngredients} />
          <BurgerConstructor data={constructorData.ingridients} />
        </DndProvider>
      </main>
    </>
  );
}

export default App;
