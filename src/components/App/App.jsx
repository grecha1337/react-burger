import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.js";
import appStyle from "./app.module.css";
import { useEffect, useState } from "react";
import { BASE_URL, checkResponse } from "../../utils/api";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/api/ingredients`)
      .then(checkResponse)
      .then((res) => {
        setIsLoaded(true);
        setData(res.data);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
        <AppHeader />
        <main className={appStyle.main}>
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </main>
      </>
    );
  }
}

export default App;
