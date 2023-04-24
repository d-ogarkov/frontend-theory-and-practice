class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _sendRequest(path, options = {}) {
    // Объект с опциями запроса нужно объединить с _headers для дальнейшей передачи в fetch.
    // По умолчанию он пустой (для обычного GET-запроса без body)
    let optionsWithHeaders = { headers: this._headers };
    optionsWithHeaders = Object.assign(options, optionsWithHeaders);

    return fetch(`${this._baseUrl}/${path}`, optionsWithHeaders)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getPosts() {
    return this._sendRequest('posts');
  }
}
