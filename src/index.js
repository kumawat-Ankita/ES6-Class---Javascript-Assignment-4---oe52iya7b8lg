//Write your code here
class API {
  #secure;

  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    this.#secure = this.url.startsWith('https');
  }

  isSecure() {
    return this.#secure;
  }

  updateUrl(newUrl) {
    this.url = newUrl;
    this.#secure = this.url.startsWith('https');
  }
}
//Do not remove this code
module.exports = { API }
