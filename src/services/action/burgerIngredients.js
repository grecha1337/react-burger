import { getIngredienItemsRequst } from "../../utils/api";

export const BURGER_INGREDIENTS_REQUEST = "BURGER_INGREDIENTS_REQUEST";
export const BURGER_INGREDIENTS_SUCCESS = "BURGER_INGREDIENTS_SUCCESS";
export const BURGER_INGREDIENTS_FAILED = "BURGER_INGREDIENTS_FAILED";
export const INCREMENT_INGREDIENTS = "INCREMENT_INGREDIENTS";
export const INCREMENT_BUN = "INCREMENT_BUN";
export const DECREMENT_INGREDIENTS = "DECREMENT_INGREDIENTS";
export const RESET_QTY_INGREDIENTS = "RESET_QTY_INGREDIENTS";

export function getIngredienItems() {
  return function (dispatch) {
    dispatch({ type: BURGER_INGREDIENTS_REQUEST });
    getIngredienItemsRequst().then((res) => {
      if (res.success) {
        dispatch({
          type: BURGER_INGREDIENTS_SUCCESS,
          burgerIngredients: res.data,
        });
      } else {
        dispatch({
          type: BURGER_INGREDIENTS_FAILED,
        });
      }
    });
  };
}
