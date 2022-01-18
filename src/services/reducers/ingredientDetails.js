import {
  SET_INGREDIENT_DETAIL,
  DELETE_INGREDIENT_DETAIL,
} from "../action/ingredientDetails";

const ingredientDetailState = {
  calories: null,
  carbohydrates: null,
  fat: null,
  image: null,
  image_large: null,
  image_mobile: null,
  name: null,
  price: null,
  proteins: null,
  type: null,
  __v: null,
  _id: null,
};

export const ingredientDetailsReducer = (
  state = ingredientDetailState,
  action
) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAIL: {
      return {
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
