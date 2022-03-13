import AppHeader from "../app-header/app-header";
import { Switch, Route, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FC, useCallback, useEffect, useState } from "react";
import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import ForgotPasswordPage from "../../pages/forgot-password";
import ResetPasswordPage from "../../pages/reset-password";
import { useDispatch, useSelector } from "../../services/hooks";
import { getProfileThunk, refreshTokenThunk } from "../../services/action/user";
import ProfilePage from "../../pages/profile";
import { getIngredientItemsThunk } from "../../services/action/burger-ingredients";
import { setInterval } from "timers";
import { getCookie } from "../../services/utils";
import { REFRESH_TOKEN } from "../../services/constant";
import { ProtectedRoute } from "../protected-route/protected-route";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import IngredientPage from "../../pages/ingredient";
import NotFoundPage from "../../pages/not-found";

const App: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userInfo.user);
  const [isUserLoaded, setUserLoaded] = useState(false);
  const location = useLocation<{
    background?: any;
  }>();
  const history = useHistory();

  const init = async () => {
    await dispatch(getIngredientItemsThunk());
    await dispatch(getProfileThunk());
    setUserLoaded(true);
  };

  useEffect(() => {
    init();
    setInterval(() => {
      dispatch(refreshTokenThunk(getCookie(REFRESH_TOKEN)));
    }, 1000 * 60 * 19);
  }, []);

  const handelCloseModal = useCallback(() => {
    history.goBack();
  }, []);

  const background =
    history.action === "PUSH" && location.state && location.state.background;
  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact={true} component={HomePage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/forgot-password" component={ForgotPasswordPage}></Route>
        <Route path="/reset-password" component={ResetPasswordPage}></Route>
        <ProtectedRoute
          path={`/profile`}
          exact={true}
          user={user}
          isUserLoaded={isUserLoaded}
        >
          <ProfilePage />
        </ProtectedRoute>
        <Route path="/ingredients/:id" component={IngredientPage}></Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>

      {background && (
        <Route path="/ingredients/:id">
          <Modal onClose={handelCloseModal} title="Детали ингредиента">
            <IngredientDetails />
          </Modal>
        </Route>
      )}
    </>
  );
};

export default App;
