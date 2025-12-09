const Urls = {
  GET: 'https://29.javascript.htmlacademy.pro/kekstagram/data',
  POST: 'https://29.javascript.htmlacademy.pro/kekstagram/',
};

const sendRequest = (onSuccess, onError, method, body = null) => {
  fetch(Urls[method], {
    method: method,
    body: body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Не удалось выполнить запрос ${method}`);
      }
      return response.json();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
};

const fetchPhotos = () =>
  new Promise((resolve, reject) => {
    sendRequest(resolve, reject, 'GET');
  })
    .catch(() => {
      throw new Error('Не удалось загрузить фотографии. Попробуйте обновить страницу');
    });

const uploadPhoto = (formData) =>
  new Promise((resolve, reject) => {
    sendRequest(resolve, reject, 'POST', formData);
  })
    .catch(() => {
      throw new Error('Не удалось загрузить фотографию');
    });

export { fetchPhotos, uploadPhoto };
