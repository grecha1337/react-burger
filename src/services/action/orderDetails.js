import { sendOrderRequst } from "../../utils/api";

export const ORDER_REQUEST = "ORDER_REQUEST";
export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_FAILED = "ORDER_FAILED";

export const reqOrder = () => ({
  type: ORDER_REQUEST,
});

export const setInfoOrder = (payload) => ({
  type: ORDER_SUCCESS,
  payload,
});

export const setReqOrderFailed = () => ({
  type: ORDER_FAILED,
});

export function sendOrder(idList) {
  return function (dispatch) {
    dispatch(reqOrder());
    sendOrderRequst(idList)
      .then((res) => {
        dispatch(setInfoOrder(res));
      })
      .catch((e) => {
        console.log(e);
        dispatch(setReqOrderFailed());
      });
  };
}
