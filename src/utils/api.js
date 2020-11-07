class Api {
  constructor({ url, token, groupId }) {
    this._url = url;
    this._token = token;
    this._groupId = groupId;
  }

  _parseResponseFromServer(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}/${this._groupId}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      return this._parseResponseFromServer(res);
    })
  }

  getUserInfo() {
    return fetch(`${this._url}/${this._groupId}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      return this._parseResponseFromServer(res);
    })
  }

  getDataForRendered() {
    return Promise.all([ this.getInitialCards(), this.getUserInfo() ])
  }

  addCard(data) {
    return fetch(`${this._url}/${this._groupId}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
      return this._parseResponseFromServer(res);
    })
  }

  setUserInfo(data) {
    return fetch(`${this._url}/${this._groupId}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
      return this._parseResponseFromServer(res);
    })
  }

  setAvatar(data) {
    return fetch(`${this._url}/${this._groupId}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
      return this._parseResponseFromServer(res);
    })
  }

  deleteCard(id) {
    return fetch(`${this._url}/${this._groupId}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      return this._parseResponseFromServer(res);
    })
  }

  putLike(id) {
    return fetch(`${this._url}/${this._groupId}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      return this._parseResponseFromServer(res);
    })
  }

  deleteLike(id) {
    return fetch(`${this._url}/${this._groupId}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      return this._parseResponseFromServer(res);
    })
  }
}

const api = new Api({
  url: `https://mesto.nomoreparties.co/v1`,
  token: `1282f84b-7da3-48cb-b9e7-a66ba2d4bc54`,
  groupId: `cohort-16`
});

export default api;
