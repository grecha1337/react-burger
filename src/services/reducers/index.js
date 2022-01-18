import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "./burgerIngredients";
import { burgerConstucrtorReducer } from "./burgerConstructor";
import { ingredientDetailsReducer } from "./ingredientDetails";

console.log(burgerIngredientsReducer);
export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstucrtorReducer,
  ingredientDetails: ingredientDetailsReducer,
});
