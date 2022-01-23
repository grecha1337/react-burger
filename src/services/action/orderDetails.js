import { sendOrderRequst } from "../../utils/api";

export const ORDER_REQUEST = "ORDER_REQUEST";
export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_FAILED = "ORDER_FAILED";


export function sendOrder(idList) {
  return function(dispatch) {
    dispatch({ type: ORDER_REQUEST });
    sendOrderRequst(idList).then((res) => {
      if (res.success) {
        dispatch({
          type: ORDER_SUCCESS,
          payload: res,
        });
      } else {
        dispatch({
          type: ORDER_FAILED,
        });
      }
    });

  }
};
