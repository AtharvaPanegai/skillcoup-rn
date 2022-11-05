import Axios from 'axios';
import { StackActions } from '@react-navigation/native';

const BASE_URL = process.env.BASE_URI;

const axios = Axios.create({
  baseURL: BASE_URL,
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status == 401) {
      removeToken();
      if (typeof window !== 'undefined') {
        StackActions.push('Signin')
      }
    }
    return Promise.reject(error);
  }
);

export default axios;
