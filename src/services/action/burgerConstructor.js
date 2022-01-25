export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_BUN = "ADD_BUN";
export const DELETE_ITEM = "DELETE_ITEM";
export const REORDER_INGREDIENTS = "REORDER_INGREDIENTS";
export const SET_DEFAULT_VALUE_INGREDIENTS = "SET_DEFAULT_VALUE_INGREDIENTS";

export const addIngredintToСonstructor = (payload) => ({
  type: ADD_INGREDIENT,
  payload,
});

export const addBunToСonstructor = (payload) => ({
  type: ADD_BUN,
  payload,
});

export const deleteItemById = (id) => ({
  type: DELETE_ITEM,
  id,
});

export const reorderIngredients = (payload) => ({
  type: REORDER_INGREDIENTS,
  payload,
});

export const setDefaultValueIngredients = () => ({
  type: SET_DEFAULT_VALUE_INGREDIENTS,
});
