import { ThunkAction } from "redux-thunk";
import { TBurgerConstructorActions } from "../action/burgerConstructor";
import { TBurgerIngredientsActions } from "../action/burgerIngredients";
import { TIngredientDetailsActions } from "../action/ingredientDetails";
import { TOrderDetailsActions } from "../action/orderDetails";
import { ActionCreator, Action } from "redux";
import store from "../store";

type TApplicationActions =
  | TBurgerConstructorActions
  | TIngredientDetailsActions
  | TBurgerIngredientsActions
  | TOrderDetailsActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
