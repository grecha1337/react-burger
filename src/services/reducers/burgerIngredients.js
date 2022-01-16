import {
  GET_BURGER_INGREDIENTS_FAILED,
  GET_BURGER_INGREDIENTS_SUCCESS,
  GET_BURGER_INGREDIENTS_REQUEST,
  INCREMENT_INGREDIENTS,
  INCREMENT_BUN,
  DECREMENT_INGREDIENTS,
} from "../action/burgerIngredients";

const ingredientsInitialState = {
  burgerIngredients: [],
  burgerIngredientsRequest: false,
  burgerIngredientsFailed: false,
};

export const burgerIngredientsReducer = (
  state = ingredientsInitialState,
  action
) => {
  switch (action.type) {
    case GET_BURGER_INGREDIENTS_REQUEST: {
      return { ...state, ingredientsInitialState: true };
    }
    case GET_BURGER_INGREDIENTS_SUCCESS: {
      return {
        burgerIngredients: action.burgerIngredients,
        burgerIngredientsRequest: false,
        burgerIngredientsFailed: false,
      };
    }
    case GET_BURGER_INGREDIENTS_FAILED: {
      return {
        ...state,
        burgerIngredientsRequest: false,
        burgerIngredientsFailed: true,
      };
    }
    case INCREMENT_INGREDIENTS: {
      return {
        ...state,
        burgerIngredients: [...state.burgerIngredients].map((element) =>
          element._id === action.payload._id
            ? { ...element, qty: element.qty + 1 || 1 }
            : element
        ),
      };
    }
    case DECREMENT_INGREDIENTS: {
      return {
        ...state,
        burgerIngredients: [...state.burgerIngredients].map((element) =>
          element._id === action.payload._id
            ? { ...element, qty: element.qty - 1 || null }
            : element
        ),
      };
    }
    // Булка может быть одна
    // Если мы перетащили булку, то добавляем ей qty = 1
    // Остальным булкам убираем qty = null
    // Если это не булка, ничего не делаем
    case INCREMENT_BUN: {
      return {
        ...state,
        burgerIngredients: [...state.burgerIngredients].map((element) =>
          element._id === action.payload._id && element.type === "bun"
            ? { ...element, qty: 1 }
            : element.type === "bun"
            ? { ...element, qty: null }
            : element
        ),
      };
    }
    default: {
      return state;
    }
  }
};
