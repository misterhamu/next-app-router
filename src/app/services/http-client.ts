import axios from 'axios';

const baseUrl = process.env.baseUrl

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem('authenToken');
//   if (token) {
//     config.headers['Authorization'] = 'Bearer ' + token;
//   }
//   return config;
// });

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response);
  }
);

export default instance;
