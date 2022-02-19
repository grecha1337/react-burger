import { registerRequest, resetPasswordRequest } from "../../utils/api";
import { AppDispatch, AppThunk } from "../types";
import {
  TGetCodeForResetPassSuccess,
  TRegisterRequest,
  TRegisterSuccess,
} from "../types/data";

export const REGISTER_REQUEST: "REGISTER_REQUEST" = "REGISTER_REQUEST";
export const REGISTER_SUCCESS: "REGISTER_SUCCESS" = "REGISTER_SUCCESS";
export const REGISTER_FAILED: "REGISTER_FAILED" = "REGISTER_FAILED";
export const GET_CODE_FOR_RESET_PASSWORD_REQUEST: "GET_CODE_FOR_RESET_PASSWORD_REQUEST" =
  "GET_CODE_FOR_RESET_PASSWORD_REQUEST";
export const GET_CODE_FOR_RESET_PASSWORD_SUCCESS: "GET_CODE_FOR_RESET_PASSWORD_SUCCESS" =
  "GET_CODE_FOR_RESET_PASSWORD_SUCCESS";
export const GET_CODE_FOR_RESET_PASSWORD_FAILED: "GET_CODE_FOR_RESET_PASSWORD_FAILED" =
  "GET_CODE_FOR_RESET_PASSWORD_FAILED";

export interface IRegisterRequest {
  readonly type: typeof REGISTER_REQUEST;
}

export interface IRegisterFailed {
  readonly type: typeof REGISTER_FAILED;
}

export interface IRegisterSuccess {
  readonly type: typeof REGISTER_SUCCESS;
  readonly payload: TRegisterSuccess;
}

export interface IGetCodeForResetPassRQ {
  readonly type: typeof GET_CODE_FOR_RESET_PASSWORD_REQUEST;
}

export interface IGetCodeForResetPassFailed {
  readonly type: typeof GET_CODE_FOR_RESET_PASSWORD_FAILED;
}

export interface IGetCodeForResetPassSuccess {
  readonly type: typeof GET_CODE_FOR_RESET_PASSWORD_SUCCESS;
  readonly payload: TGetCodeForResetPassSuccess;
}

export const sendRqRegister = (): IRegisterRequest => ({
  type: REGISTER_REQUEST,
});

export const registerFailed = (): IRegisterFailed => ({
  type: REGISTER_FAILED,
});

export const setUserInfo = (payload: TRegisterSuccess): IRegisterSuccess => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const sendRqGetCodeForResetPass = (): IGetCodeForResetPassRQ => ({
  type: GET_CODE_FOR_RESET_PASSWORD_REQUEST,
});

export const getCodeForResetPassFailed = (): IGetCodeForResetPassFailed => ({
  type: GET_CODE_FOR_RESET_PASSWORD_FAILED,
});

export const setResGetCodeForResetPass = (
  payload: TGetCodeForResetPassSuccess
): IGetCodeForResetPassSuccess => ({
  type: GET_CODE_FOR_RESET_PASSWORD_SUCCESS,
  payload,
});

export const register: AppThunk = (data: TRegisterRequest) => {
  return function (dispatch: AppDispatch) {
    dispatch(sendRqRegister());
    registerRequest(data)
      .then((res) => {
        dispatch(setUserInfo(res));
      })
      .catch((e) => {
        console.log(e);
        dispatch(registerFailed());
      });
  };
};

export const resetPassword: AppThunk = (data: TRegisterRequest) => {
  return function (dispatch: AppDispatch) {
    dispatch(sendRqGetCodeForResetPass());
    resetPasswordRequest(data)
      .then((res) => {
        dispatch(setResGetCodeForResetPass(res));
      })
      .catch((e) => {
        console.log(e);
        dispatch(getCodeForResetPassFailed());
      });
  };
};

export type TUserActions =
  | IRegisterRequest
  | IRegisterFailed
  | IRegisterSuccess
  | IGetCodeForResetPassRQ
  | IGetCodeForResetPassSuccess
  | IGetCodeForResetPassFailed;
