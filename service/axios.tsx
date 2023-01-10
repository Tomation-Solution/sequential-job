import axios from 'axios'
/* @ts-ignore */

import cookieCutter from 'cookie-cutter'


const url = 'https://recruitment-api-production.up.railway.app'
// const url = 'http://localhost:8000'
const api =axios.create({
  baseURL: url,
});

export default api



// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const path = window.location.pathname
  console.log({'cooke':cookieCutter.get('user')})
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});