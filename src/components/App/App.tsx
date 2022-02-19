import AppHeader from "../app-header/app-header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { FC } from "react";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";

const App: FC = () => {
  return (
    <>
      <AppHeader />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={HomePage}></Route>
          <Route path="/login" component={LoginPage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
