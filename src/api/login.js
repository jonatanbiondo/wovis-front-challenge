import api from './base'

export async function login(username, password){
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": '*'
    };
    try{
      const response = await api.post('/login', {
        'username': username,
        'password': password
      },{headers}); 
      response.data.success = true
      return {"success":true}
     
        
    } catch(error) {
      return {"success":false, "message": error.response.data.message}
    }
}