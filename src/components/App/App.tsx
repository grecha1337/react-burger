import AppHeader from "../app-header/app-header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FC, useEffect } from "react";
import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import ForgotPasswordPage from "../../pages/forgot-password";
import ResetPasswordPage from "../../pages/reset-password";
import { useDispatch } from "../../services/hooks";
import { getProfileThunk, refreshTokenThunk } from "../../services/action/user";
import ProfilePage from "../../pages/profile";
import { getIngredientItems } from "../../services/action/burger-ingredients";
import { setInterval } from "timers";
import { getCookie } from "../../services/utils";
import { REFRESH_TOKEN } from "../../services/constant";

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredientItems());
    dispatch(getProfileThunk());

    setInterval(() => {
      dispatch(refreshTokenThunk(getCookie(REFRESH_TOKEN)));
    }, 1000 * 60 * 19);
  }, []);

  return (
    <Router>
      <>
        <AppHeader />
        <Switch>
          <Route path="/" exact={true} component={HomePage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/forgot-password" component={ForgotPasswordPage}></Route>
          <Route path="/reset-password" component={ResetPasswordPage}></Route>
          <Route path="/profile" component={ProfilePage}></Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
