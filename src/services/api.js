import axios from 'axios';

const api = axios.create({
    baseURL: 'https://kayronwesley.github.io/Api'
})

export default api;