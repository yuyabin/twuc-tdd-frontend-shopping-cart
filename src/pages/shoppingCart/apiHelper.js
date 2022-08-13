import axios from 'axios';
const apiHelper = {
  getProducts : () => {
    const BASE_URL = 'http://localhost:8000';
    return axios.get(BASE_URL);
  },

};
export default apiHelper;
