import axios from "axios";
import { enviroment } from "../enviroment/enviroment";

const axiosClient = axios.create({
  baseURL: enviroment.apiHost
});

axiosClient.interceptors.request.use(function(config: any){
  const token = localStorage.getItem('apiToken');
  if(token){
    config.headers['authorization'] = `Bearer ${token}`
  }
  return config
}, function (error: any){
  return Promise.reject(error)
});

axiosClient.interceptors.response.use(function(config: any){
  return config.data
}, function(error: any){
  console.error(error);
  return Promise.reject(error)
})

export default axiosClient;