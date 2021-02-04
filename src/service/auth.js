import {login} from '../api/login.js'

export async function doLogin(username, password){
    const data = await  login(username,password)
         
    if(data.success){
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('expires', data.expires);
        sessionStorage.setItem('user_id', data.user_id);
            
    }else{
        console.log("error al inciar sesion:" + data.message?data.message:'')
    }
    return data
         
}   