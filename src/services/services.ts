//const
import { CYBER_TOKEN, ACCESS_TOKEN, BASE_URL } from '../constant/constant'
//utils
import { getLocal } from '../utils/index'
//axios
import axios, { AxiosInstance } from 'axios'

const axiosWithCyberToken: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 180_000
})

axiosWithCyberToken.interceptors.request.use((config) => {
    config.headers.TokenCybersoft = CYBER_TOKEN
    return config
}, (error) => {
    return Promise.reject(error)
}
)


const axiosWithAuth: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout:180_000
})

axiosWithAuth.interceptors.request.use((config)=>{
    config.headers.TokenCybersoft = CYBER_TOKEN
    config.headers.Authorization = `Bearer ${getLocal(ACCESS_TOKEN)}`
    return config
},(error)=>{
    return Promise.reject(error)
})

export {axiosWithAuth,axiosWithCyberToken}