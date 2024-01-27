import axios from 'axios';

const Service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'x-application-header': import.meta.env.VITE_API_HEADER_KEY,
    'x-user-token': 'djskkjsdjksd',
  },
});

// Service.interceptors.request.use(
//   (config: any) => {
//     const token = window.localStorage.getItem('accessToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },`
//   (error: AxiosError) => {
//     return Promise.reject(error);
//   }
// );

export default Service;
