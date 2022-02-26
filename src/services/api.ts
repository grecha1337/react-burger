import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constant";
import {
  TGetCodeForResetPassRQ,
  TIngredient,
  TOrderSuccess,
  TRegisterRequest,
  TRegisterResponse,
  TGetCodeForResetPassResponse,
  TConfirmResetPassRQ,
  TConfirmResetPassResponse,
  TRefreshTokenResponse,
  TLoginResponse,
  TGetProfileResponse,
  TLogoutResponse,
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
): Promise<TRegisterResponse> => {
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
): Promise<TGetCodeForResetPassResponse> => {
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
): Promise<TConfirmResetPassResponse> => {
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
}): Promise<TRefreshTokenResponse> => {
  return fetch(`${BASE_URL}/api/auth/token`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
    }),
  }).then(checkResponse);
};

export const loginRequest = (data: {
  email: string;
  password: string;
}): Promise<TLoginResponse> => {
  return fetch(`${BASE_URL}/api/auth/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
    }),
  }).then(checkResponse);
};

export const getProfileRequest = (): Promise<TGetProfileResponse> => {
  return fetch(`${BASE_URL}/api/auth/user`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie(ACCESS_TOKEN),
    },
  }).then(checkResponse);
};

export const logoutRequest = (token: {
  token: string;
}): Promise<TLogoutResponse> => {
  return fetch(`${BASE_URL}/api/auth/logout`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
    }),
  }).then(checkResponse);
};

export const refreshTokenAndFetchRetry = async (callback: any) => {
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
