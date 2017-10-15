
const request = (url, headers) => {
  return fetch(url, {
    headers: new Headers(headers),
  });
};

export default class BaseService {
  constructor(type) {
    this.type = type;
  }

  get(url, headers) {
    return request(url, {
      method: 'GET',

    });
  }
}
