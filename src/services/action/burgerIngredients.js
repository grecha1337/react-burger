import { getIngredienItemsRequst } from "../../utils/api";

export const GET_BURGER_INGREDIENTS_REQUEST = "GET_BURGER_INGREDIENTS_REQUEST";
export const GET_BURGER_INGREDIENTS_SUCCESS = "GET_BURGER_INGREDIENTS_SUCCESS";
export const GET_BURGER_INGREDIENTS_FAILED = "GET_BURGER_INGREDIENTS_FAILED";
export const INCREMENT_INGREDIENTS = "INCREMENT_INGREDIENTS";
export const INCREMENT_BUN = "INCREMENT_BUN"
export const DECREMENT_INGREDIENTS = "DECREMENT_INGREDIENTS"

export function getIngredienItems() {
  return function (dispatch) {
    dispatch({ type: GET_BURGER_INGREDIENTS_REQUEST });
    getIngredienItemsRequst().then((res) => {
      if (res.success) {
        dispatch({
          type: GET_BURGER_INGREDIENTS_SUCCESS,
          burgerIngredients: res.data,
        });
      } else {
        dispatch({
          type: GET_BURGER_INGREDIENTS_FAILED,
        });
      }
    });
  };
}
