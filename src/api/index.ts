import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

const http: AxiosInstance = axios.create({
    baseURL: 'undefined',
    timeout: 30000
})

/* 请求拦截器 */
http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        /**  */
        return config;
    },
    (error: AxiosError) => Promise.reject(error)
)

/* 响应拦截器 */
http.interceptors.response.use(
    (response: AxiosResponse) => {
        if (!response.data) {
            return Promise.resolve(response.data);
        }
        // 请求成功
        if (response.data.code === 200) {
            return Promise.resolve(response.data);
        }
        // 请求成功，状态不为成功时
        //   message.error(response.data.msg);
        return Promise.reject(new Error(response.data.message));
    },
    (error: AxiosError) => {
        //   message.error(error.message);
        return Promise.reject(error);
    }
)


export default http
