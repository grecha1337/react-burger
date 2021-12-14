const BASE_URL = "https://norma.nomoreparties.space";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export {BASE_URL, checkResponse};