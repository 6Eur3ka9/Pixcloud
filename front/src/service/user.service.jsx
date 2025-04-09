import AxiosClient from "./caller.service";

const resgister = (data) => {
    return AxiosClient.post('/register', data);
       
}

const login = (data) => {
    return AxiosClient.put('/login', data);
       
}

const getUserById = (userId) => {
    return AxiosClient.get(`/user/${userId}`);
}

export const UserService = {
    resgister,
    login,
    getUserById,
}