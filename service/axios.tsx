import axios from 'axios'
/* @ts-ignore */

import cookieCutter from 'cookie-cutter'



export const url = 'https://sequential-job-backend-production.up.railway.app'

const api =axios.create({
  baseURL: url,
});

export default api



// Add a request interceptor
api.interceptors.request.use(function (config) {
  // Do something before request is sent
  const path = window.location.pathname
  let user = cookieCutter.get('user') 

  // if(!path.includes('/signin')&&!path.includes('/signup')
  // &&!path.includes('/job_seeker_signup')&&!path.includes('/searchpage')
  // &&!path.includes('/blog')
  // ){
  //   user = JSON.parse(user)
  //   config['headers']={ 'Authorization':`Bearer ${user?.access}`}

  // }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  try{
    const code:any = error.response.data.messages[0]
  if(code.token_class === 'AccessToken') {
    if (!window.location.pathname.includes('/expired_token_page' ))
    {

      window.location.reload()
      window.location.href='/expired_token_page'
    }
  } 
  }catch(err){
    //
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});