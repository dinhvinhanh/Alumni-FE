import axios from 'axios';
import config from 'config';

const axiosInstance = axios.create({
  baseURL: `${config.apiEndpoint}/`,
});

axiosInstance.interceptors.request.use(
  function (config) {
    console.log('config', config);
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${authToken}`,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    // const { config, response } = error;
    // const errorMessage = response?.data?.message;
    // const errorCode = response?.data?.errors?.code;
    // const errorCode2 = response?.data?.errors?.errorCode;
    // if (
    //   errorMessage === 'The incoming token has expired' ||
    //   errorCode === 1001
    // ) {
    //
    // }

    // if (errorMessage === 'Unauthorized' || errorCode2 === 'UNAUTHORIZED') {
    //   localStorage.removeItem('authToken');
    //   store.dispatch(replace('/login'));
    // }
    // if (
    //   errorMessage === 'Validation failed error'
    // ) {
    //   window.location.reload();
    // }

    return Promise.reject(null);
  },
);

export default axiosInstance;
