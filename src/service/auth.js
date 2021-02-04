import {login} from '../api/login.js'

export function doLogin(username, password){
    return login(username,password)
        .then(function(data){
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('expires', data.expires);
            sessionStorage.setItem('user_id', data.user_id);
        })
}   