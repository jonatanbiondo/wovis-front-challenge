import axios from 'axios'
  
const api = axios.create({
  baseURL: 'http://127.0.0.1:3000/', // url = base url + request url
  timeout: 20000 // request timeout
})

export default api
