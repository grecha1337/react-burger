
import { rootReducer } from "./reducers/";
import { compose, createStore, applyMiddleware, ActionCreator, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { TBurgerConstructorActions } from "./action/burgerConstructor";
import { TBurgerIngredientsActions } from "./action/burgerIngredients";
import { TIngredientDetailsActions } from "./action/ingredientDetails";
import { TOrderDetailsActions } from "./action/orderDetails";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

type TApplicationActions = TBurgerConstructorActions |TIngredientDetailsActions | TBurgerIngredientsActions | TOrderDetailsActions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;

export default store;
