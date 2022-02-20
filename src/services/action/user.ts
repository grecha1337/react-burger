import {
  confirmResetPassRequest,
  refreshTokenRequest,
  registerRequest,
  resetPasswordRequest,
} from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import { AppDispatch, AppThunk } from "../types";
import {
  TConfirmResetPassRQ,
  TConfirmResetPassSuccess,
  TGetCodeForResetPassRQ,
  TGetCodeForResetPassSuccess,
  TRefreshTokenBodyResponse,
  TRegisterRequest,
  TRegisterSuccess,
} from "../types/data";
import { setCookie } from "../utils";

export const REGISTER_REQUEST: "REGISTER_REQUEST" = "REGISTER_REQUEST";
export const REGISTER_REQUEST_SUCCESS: "REGISTER_REQUEST_SUCCESS" =
  "REGISTER_REQUEST_SUCCESS";
export const REGISTER_REQUEST_FAILED: "REGISTER_REQUEST_FAILED" =
  "REGISTER_REQUEST_FAILED";
export const GET_CODE_RESET_PASSWORD_REQUEST: "GET_CODE_RESET_PASSWORD_REQUEST" =
  "GET_CODE_RESET_PASSWORD_REQUEST";
export const GET_CODE_RESET_PASSWORD_SUCCESS: "GET_CODE_RESET_PASSWORD_SUCCESS" =
  "GET_CODE_RESET_PASSWORD_SUCCESS";
export const GET_CODE_RESET_PASSWORD_FAILED: "GET_CODE_RESET_PASSWORD_FAILED" =
  "GET_CODE_RESET_PASSWORD_FAILED";
export const CONFIRM_RESET_PASSWORD_REQUEST: "CONFIRM_RESET_PASSWORD_REQUEST" =
  "CONFIRM_RESET_PASSWORD_REQUEST";
export const CONFIRM_RESET_PASSWORD_SUCCESS: "CONFIRM_RESET_PASSWORD_SUCCESS" =
  "CONFIRM_RESET_PASSWORD_SUCCESS";
export const CONFIRM_RESET_PASSWORD_FAILED: "CONFIRM_RESET_PASSWORD_FAILED" =
  "CONFIRM_RESET_PASSWORD_FAILED";

export const REFRESH_TOKEN_REQUEST: "REFRESH_TOKEN_REQUEST" =
  "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_REQUEST_FAILED: "REFRESH_TOKEN_REQUEST_FAILED" =
  "REFRESH_TOKEN_REQUEST_FAILED";
export const REFRESH_TOKEN_REQUEST_SUCCESS: "REFRESH_TOKEN_REQUEST_SUCCESS" =
  "REFRESH_TOKEN_REQUEST_SUCCESS";

/*
  Register 
*/
export interface IRegisterAction {
  readonly type: typeof REGISTER_REQUEST;
}

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_REQUEST_FAILED;
}

export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_REQUEST_SUCCESS;
  readonly payload: TRegisterSuccess;
}

export const sendRqRegister = (): IRegisterAction => ({
  type: REGISTER_REQUEST,
});

export const registerFailed = (): IRegisterFailedAction => ({
  type: REGISTER_REQUEST_FAILED,
});

export const setUserInfo = (
  payload: TRegisterSuccess
): IRegisterSuccessAction => ({
  type: REGISTER_REQUEST_SUCCESS,
  payload,
});

/*
  GetCodeForResetPass
*/
export interface IGetCodeResetPassAction {
  readonly type: typeof GET_CODE_RESET_PASSWORD_REQUEST;
}

export interface IGetCodeResetPassFailedAction {
  readonly type: typeof GET_CODE_RESET_PASSWORD_FAILED;
}

export interface IGetCodeResetPassSuccessAction {
  readonly type: typeof GET_CODE_RESET_PASSWORD_SUCCESS;
  readonly payload: TGetCodeForResetPassSuccess;
}

export const sendRqGetCodeForResetPass = (): IGetCodeResetPassAction => ({
  type: GET_CODE_RESET_PASSWORD_REQUEST,
});

export const getCodeForResetPassFailed = (): IGetCodeResetPassFailedAction => ({
  type: GET_CODE_RESET_PASSWORD_FAILED,
});

export const setResGetCodeForResetPass = (
  payload: TGetCodeForResetPassSuccess
): IGetCodeResetPassSuccessAction => ({
  type: GET_CODE_RESET_PASSWORD_SUCCESS,
  payload,
});

/*
  ConfirmResetPass  
*/
export interface IConfirmResetAction {
  readonly type: typeof CONFIRM_RESET_PASSWORD_REQUEST;
}

export interface IConfirmResetPassActionFailed {
  readonly type: typeof CONFIRM_RESET_PASSWORD_FAILED;
}

export interface IConfirmResetPassActionSuccess {
  readonly type: typeof CONFIRM_RESET_PASSWORD_SUCCESS;
  readonly payload: TConfirmResetPassSuccess;
}

export const confirmResetPassRq = (): IConfirmResetAction => ({
  type: CONFIRM_RESET_PASSWORD_REQUEST,
});

export const confirmResetPassFailed = (): IConfirmResetPassActionFailed => ({
  type: CONFIRM_RESET_PASSWORD_FAILED,
});

export const setResConfirmResetPass = (
  payload: TConfirmResetPassSuccess
): IConfirmResetPassActionSuccess => ({
  type: CONFIRM_RESET_PASSWORD_SUCCESS,
  payload,
});

/*
  refresgToken
*/
export interface IRefreshAction {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}

export interface IRefreshFailedAction {
  readonly type: typeof REFRESH_TOKEN_REQUEST_FAILED;
}

export interface IRefreshSuccessAction {
  readonly type: typeof REFRESH_TOKEN_REQUEST_SUCCESS;
  readonly payload: TRefreshTokenBodyResponse;
}

export const refreshTokenAction = (): IRefreshAction => ({
  type: REFRESH_TOKEN_REQUEST,
});

export const refreshTokenFailedAction = (): IRefreshFailedAction => ({
  type: REFRESH_TOKEN_REQUEST_FAILED,
});

export const refreshTokenSuccessAction = (
  payload: TRefreshTokenBodyResponse
): IRefreshSuccessAction => ({
  type: REFRESH_TOKEN_REQUEST_SUCCESS,
  payload,
});

export const register: AppThunk = (data: TRegisterRequest) => {
  return function (dispatch: AppDispatch) {
    dispatch(sendRqRegister());
    registerRequest(data)
      .then((res) => {
        dispatch(setUserInfo(res));
        if (res.accessToken) {
          setCookie(ACCESS_TOKEN, res.accessToken.split("Bearer ")[1]);
        }
        if (res.refreshToken) {
          setCookie(REFRESH_TOKEN, res.refreshToken);
        }
      })
      .catch((e) => {
        console.log(e);
        dispatch(registerFailed());
      });
  };
};

export const resetPassword: AppThunk = (data: TGetCodeForResetPassRQ) => {
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

export const refreshToken: AppThunk = (data: { token: string }) => {
  return function (dispatch: AppDispatch) {
    dispatch(refreshTokenAction());
    refreshTokenRequest(data)
      .then((res) => {
        dispatch(refreshTokenSuccessAction(res));
        if (res.accessToken) {
          setCookie(ACCESS_TOKEN, res.accessToken.split("Bearer ")[1]);
        }
        if (res.refreshToken) {
          setCookie(REFRESH_TOKEN, res.refreshToken);
        }
      })
      .catch((e) => {
        console.log(e);
        dispatch(refreshTokenFailedAction());
      });
  };
};

export const confirmResetPass: AppThunk = (data: TConfirmResetPassRQ) => {
  return function (dispatch: AppDispatch) {
    dispatch(confirmResetPassRq());
    confirmResetPassRequest(data)
      .then((res) => {
        dispatch(setResConfirmResetPass(res));
      })
      .catch((e) => {
        console.log(e);
        dispatch(confirmResetPassFailed());
      });
  };
};

export type TUserActions =
  | IRegisterAction
  | IRegisterFailedAction
  | IRegisterSuccessAction
  | IGetCodeResetPassAction
  | IGetCodeResetPassSuccessAction
  | IGetCodeResetPassFailedAction
  | IConfirmResetAction
  | IConfirmResetPassActionFailed
  | IConfirmResetPassActionSuccess
  | IRefreshAction
  | IRefreshFailedAction
  | IRefreshSuccessAction;
