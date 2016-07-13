import axios from 'axios';

export default class ApiServiceClient {
  baseConfig = {};
  baseURL = 'https://qiita.com/api/v2';

  constructor(config) {
    this.baseConfig = Object.assign({
      headers : {},
      timeout : 5000
    }, config);
  }

  get(path, options) {
    const config = Object.assign({
      url    : `${this.baseURL}${path}`,
      method : 'get'
    }, this.baseConfig, options);

    return this.request(config);
  }

  request(config) {
    return axios(config);
  }
}
