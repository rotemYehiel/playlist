import axios from "axios";
import {fetchListResponseInterceptor,fetchListErrorInterceptor} from './axiosInterceptors'

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(fetchListResponseInterceptor,fetchListErrorInterceptor)

export default axiosInstance;
        
