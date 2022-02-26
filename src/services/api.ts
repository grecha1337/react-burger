import { IRefreshSuccessAction, TUserActions } from "./action/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constant";
import {
  TGetCodeForResetPassRQ,
  TIngredient,
  TOrderSuccess,
  TRegisterRequest,
  TRegisterSuccess,
  TGetCodeForResetPassSuccess,
  TConfirmResetPassRQ,
  TConfirmResetPassSuccess,
  TRefreshTokenBodyResponse,
  TLoginResponseBody,
  TGetProfileResponseBody,
} from "./types/data";
import { getCookie, setCookie } from "./utils";

const BASE_URL = "https://norma.nomoreparties.space";

const checkResponse = async (res: Response): Promise<any> => {
  let json = await res.json();

  if (res.ok) {
    return json;
  }
  return json
    ? Promise.reject({ ...json, status: res.status })
    : Promise.reject({ status: res.status });
};

export { BASE_URL, checkResponse };

export const getIngredientItemsRequest = (): Promise<{
  data: ReadonlyArray<TIngredient>;
}> => {
  return fetch(`${BASE_URL}/api/ingredients`).then(checkResponse);
};

export const sendOrderRequest = (
  idList: ReadonlyArray<string>
): Promise<TOrderSuccess> => {
  return fetch(`${BASE_URL}/api/orders`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ingredients: idList,
    }),
  }).then(checkResponse);
};

export const registerRequest = (
  data: Readonly<TRegisterRequest>
): Promise<TRegisterSuccess> => {
  return fetch(`${BASE_URL}/api/auth/register`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
    }),
  }).then(checkResponse);
};

export const resetPasswordRequest = (
  data: Readonly<TGetCodeForResetPassRQ>
): Promise<TGetCodeForResetPassSuccess> => {
  return fetch(`${BASE_URL}/api/password-reset`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
    }),
  }).then(checkResponse);
};

export const confirmResetPassRequest = (
  data: Readonly<TConfirmResetPassRQ>
): Promise<TConfirmResetPassSuccess> => {
  return fetch(`${BASE_URL}/api/password-reset/reset`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
    }),
  }).then(checkResponse);
};

export const refreshTokenRequest = (token: {
  token: string;
}): Promise<TRefreshTokenBodyResponse> => {
  return fetch(`${BASE_URL}/api/auth/token`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...token,
    }),
  }).then(checkResponse);
};

export const loginRequest = (data: {
  email: string;
  password: string;
}): Promise<TLoginResponseBody> => {
  return fetch(`${BASE_URL}/api/auth/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
    }),
  }).then(checkResponse);
};

export const getProfileRequest = (): Promise<TGetProfileResponseBody> => {
  return fetch(`${BASE_URL}/api/auth/user`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie(ACCESS_TOKEN),
    },
  }).then(checkResponse);
};

export const refreshTokenAndFetchRetry = async (callback: any ) => {
  let token = getCookie(REFRESH_TOKEN);
  let responseJsonCallBack = null;
  if (token) {
    try {
      const tokenJson = await refreshTokenRequest({ token });
      if (tokenJson.accessToken) {
        setCookie(ACCESS_TOKEN, tokenJson.accessToken.split("Bearer ")[1]);
      }
      if (tokenJson.refreshToken) {
        setCookie(REFRESH_TOKEN, tokenJson.refreshToken);
      }
      responseJsonCallBack = await callback();
    } catch (err) {
      console.log(err);
    }
  }
  return responseJsonCallBack;
};
