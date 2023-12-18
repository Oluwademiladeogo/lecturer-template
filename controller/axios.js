const axios = require("axios");
function getAxiosInstance(BASE_URI, headers = {}) {
  return {
    get(method, params) {
      return axios.get(`${method}`, {
        baseURI: BASE_URI,
        params,
        headers,
      });
    },
    post(method, data) {
      return axios({
        method: "post",
        baseURI: BASE_URI,
        url: `${method}`,
        data,
        headers,
      });
    },
  };
}
module.exports = { getAxiosInstance };
