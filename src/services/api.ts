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
} from "./types/data";

const BASE_URL = "https://norma.nomoreparties.space";

const checkResponse = (res: Response): Promise<any> => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
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
      token,
    }),
  }).then(checkResponse);
};
