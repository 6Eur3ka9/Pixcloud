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

const deletePicture = (picture) => {
    return AxiosClient.post(`/delete/${picture}`, picture);
}

const uploadPicture = (data) => {
    return AxiosClient.post('/upload', data);
}

const editUsername = (data) => {
    return AxiosClient.put('/edit/username', data);
}

const editEmail = (data) => {
    return AxiosClient.put('/edit/email', data);
}

const editPassword = (data) => {
    return AxiosClient.put('/edit/password', data);
}


export const UserService = {
    resgister,
    login,
    getUserById,
    deletePicture,
    uploadPicture,
    editUsername,
    editEmail,
    editPassword,

}