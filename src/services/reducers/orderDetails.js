import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILED,
} from "../action/orderDetails";

const orderInitState = {
  orderRequest: false,
  orderFailed: false,
  name: null,
  order: null,
  success: null,
};
export const orderStateReducer = (state = orderInitState, action) => {
  switch (action.type) {
    case ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case ORDER_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
