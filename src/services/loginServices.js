import axios from "axios";

const apiUrl = 'http://localhost:3000/login'

const login = async (urs, psw)=>{
    try {
        const resp = await axios.post(apiUrl, { usuario: urs, password: psw });
        return {msj: resp.data , login: true} 
    } catch (error) {
        // console.log(error)
        return {msj: error.response.data.msj , login: false}
    }
   
}

export {login}