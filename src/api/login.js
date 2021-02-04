import api from './api'

export async function login(username, password){
    
    try{
        const response = await api.post('/login', 
            {
                'username': username,
                'password': password
            },
            {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": '*'
            }
        );  
        if(response.status == 200){
            response.data.success = true
        }else{
            throw "Error al iniciar sesion"
        }

        return {"success":true}
    } catch(error) { 
        console.log(error);
        return {"success":false, "message": error.message}
    }
}