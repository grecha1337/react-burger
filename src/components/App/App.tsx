import AppHeader from "../app-header/app-header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FC, useEffect } from "react";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ForgotPasswordPage from "../pages/forgot-password";
import ResetPasswordPage from "../pages/reset-password";
import { getCookie } from "../../services/utils";
import { useDispatch } from "../../services/hooks";
import { refreshToken } from "../../services/action/user";
import { REFRESH_TOKEN } from "../../services/constant";

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getCookie(REFRESH_TOKEN);
    if (token) {
      dispatch(refreshToken(token));
    }
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
        </Switch>
      </>
    </Router>
  );
};

export default App;
