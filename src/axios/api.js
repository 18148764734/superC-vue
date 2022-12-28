import axios from "./index";

export const GetCode = (data)=>{
    return axios.post('/send',data)
}

export const signup = (data) =>{
    return axios.post('/signup',data)
}
export const login = (data) =>{
    return axios.post('/login',data)
}
export const logout = (data) =>{
    return axios.post('/logout',data)
}
export const loginsms = (data) =>{
    return axios.post('/loginsms ',data)
}


