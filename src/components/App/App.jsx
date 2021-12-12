import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.js";
import appStyle from "./app.module.css";
import burgerArray from "../../utils/data";

function App() {
  return (
    <>
      <AppHeader />
      <main className={appStyle.main}>
        <BurgerIngredients data={burgerArray}/>
        <BurgerConstructor data={burgerArray}/>
      </main>
    </>
  );
}

export default App;
