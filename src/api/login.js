import axios from 'axios'

export function login(username, password){
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": '*'
    };
    //return axios.post('http://admin.localwobiz.com:3000/login', {
    return axios.post('http://127.0.0.1:3000/login', {
        'username': username,
        'password': password
      },{headers})
      .then(function (response) {
        return response.data 
      })
      .catch(function (error) {
        console.log(error);
      });
}