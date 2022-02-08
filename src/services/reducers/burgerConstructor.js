import {
  ADD_INGREDIENT,
  DELETE_ITEM,
  ADD_BUN,
  REORDER_INGREDIENTS,
  SET_DEFAULT_VALUE_INGREDIENTS,
} from "../action/burgerConstructor";

const constructorInitialState = {
  ingridients: [],
};

export const burgerConstucrtorReducer = (
  state = constructorInitialState,
  action
) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingridients: [...state.ingridients, action.payload],
      };
    }
    case ADD_BUN: {
      const indexElement = [...state.ingridients].findIndex((element) => {
        return element.type === "bun";
      });
      // Если булки нет в массиве, то добавляем
      // Если есть, то ищем индекс и меняем
      const res =
        indexElement === -1
          ? [action.payload, ...state.ingridients]
          : [
              ...state.ingridients.slice(0, indexElement),
              action.payload,
              ...state.ingridients.slice(indexElement + 1),
            ];

      return {
        ...state,
        ingridients: res,
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        ingridients: [...state.ingridients].filter((element) => {
          return element.uuid !== action.id;
        }),
      };
    }
    case REORDER_INGREDIENTS: {
      return {
        ...state,
        ingridients: [...action.payload],
      };
    }
    case SET_DEFAULT_VALUE_INGREDIENTS: {
      return {
        ...constructorInitialState,
      };
    }
    default: {
      return state;
    }
  }
};
