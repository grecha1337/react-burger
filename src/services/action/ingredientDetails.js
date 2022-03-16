import { type } from "os";

export const SET_INGREDIENT_DETAIL = "SET_INGREDIENT_DETAIL";
export const INIT_INGREDIENT_DETAIL = "INIT_INGREDIENT_DETAIL";

export const setDetailInfoIngredient = (payload) => ({
  type: SET_INGREDIENT_DETAIL,
  payload,
});

export const setDefaultValuesIngredientDetail = () => ({
  type: INIT_INGREDIENT_DETAIL,
});
