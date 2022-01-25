import { type } from "os";
import { getIngredienItemsRequst } from "../../utils/api";

export const BURGER_INGREDIENTS_REQUEST = "BURGER_INGREDIENTS_REQUEST";
export const BURGER_INGREDIENTS_SUCCESS = "BURGER_INGREDIENTS_SUCCESS";
export const BURGER_INGREDIENTS_FAILED = "BURGER_INGREDIENTS_FAILED";
export const INCREMENT_INGREDIENTS = "INCREMENT_INGREDIENTS";
export const INCREMENT_BUN = "INCREMENT_BUN";
export const DECREMENT_INGREDIENTS = "DECREMENT_INGREDIENTS";
export const RESET_QTY_INGREDIENTS = "RESET_QTY_INGREDIENTS";

export const reqIngredient = () => ({
  type: BURGER_INGREDIENTS_REQUEST
});

export const setIngredientsValue = (payload) => ({
  type: BURGER_INGREDIENTS_SUCCESS,
  payload,
});

export const setReqIngredientsFeiled = () => ({
  type: BURGER_INGREDIENTS_FAILED,
});

export const incrementQtyIngredient = (payload) => ({
  type: INCREMENT_INGREDIENTS,
  payload,
});

export const incrementQtyBun = (payload) => ({
  type: INCREMENT_BUN,
  payload,
});

export const decerementQtyIngredients = (payload) => ({
  type: DECREMENT_INGREDIENTS,
  payload,
});

export const resetQtyIngredients = () => ({
  type: RESET_QTY_INGREDIENTS,
});

//Нужно ли использовать генераторы экшенов тут?
export function getIngredienItems() {
  return function (dispatch) {
    dispatch(reqIngredient());
    getIngredienItemsRequst()
      .then((res) => {
        dispatch(setIngredientsValue(res.data));
      })
      .catch((e) => {
        console.log(e);
        dispatch(setReqIngredientsFeiled());
      });
  };
}
