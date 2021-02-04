import axios from 'axios'
  
const api = axios.create({
  baseURL: 'http://admin.localwobiz.com', 
  timeout: 20000  
})

export default api
