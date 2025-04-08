import AxiosClient from "./caller.service";

const resgister = (data) => {
    return AxiosClient.post('/register', data);
       
}

const login = (data) => {
    return AxiosClient.put('user', data);
       
}

export const UserService = {
    resgister,
    login,
}