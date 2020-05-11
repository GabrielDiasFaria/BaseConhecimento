import axios from 'axios'

// const baseURL = 'http://192.168.1.67:21262'
const baseURL = 'http://descomplicandolinguagens.com.br:21262'

const api = axios.create({
    baseURL: baseURL
})

export default api