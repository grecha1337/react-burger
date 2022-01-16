import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "./burgerIngredients";
import { burgerConstucrtorReducer } from "./burgerConstructor";

console.log(burgerIngredientsReducer)
export const rootReducer = combineReducers({
   burgerIngredients : burgerIngredientsReducer,
   burgerConstructor : burgerConstucrtorReducer
})