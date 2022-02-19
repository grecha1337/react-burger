import AppHeader from "../app-header/app-header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { FC } from "react";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ForgotPasswordPage from "../pages/forgot-password";
import ResetPasswordPage from "../pages/reset-password";

const App: FC = () => {
  return (
    <>
      <AppHeader />
      <Router>
        <Switch>
          <Route path="/" exact={true} component={HomePage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/forgot-password" component={ForgotPasswordPage}></Route>
          <Route path="/reset-password" component={ResetPasswordPage}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
