const BASE_URL = "https://norma.nomoreparties.space";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export { BASE_URL, checkResponse };

export const getIngredienItemsRequst = () => {
  return fetch(`${BASE_URL}/api/ingredients`).then(checkResponse);
};

export const sendOrderRequst = (idList) => {
  return fetch(`${BASE_URL}/api/orders`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ingredients : idList
    })
  }).then(checkResponse);
};
