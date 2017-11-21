import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://pwcfrontendtest.azurewebsites.net/',
  timeout: 1000000,
  maxContentLength: Math.pow(1024, 2)
})

apiClient.interceptors.request.use(config => {
    if(JSON.parse(localStorage.getItem('user')))
    {
        config.headers['RequestVerificationToken'] = JSON.parse(localStorage.getItem('user')).token;
    }
    return config;
}, error => {
    console.log(error); 
    Promise.reject(error);
})

apiClient.interceptors.response.use(
    response => response,
    error => {
        console.log('err' + error);
        return Promise.reject(error);
    }
)