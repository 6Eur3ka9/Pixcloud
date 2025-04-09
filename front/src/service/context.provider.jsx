import { createContext, useContext, useState } from "react";
import AxiosClient from "./caller.service";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [connectedUserId, setConnectedUserId] = useState(null);
    const [connectedUserToken, setConnectedUserToken] = useState(null);
    const [connectedUserPassword, setConnectedUserPassword] = useState(null);

  


    return (
        <UserContext.Provider value={{ connectedUserId, setConnectedUserId, connectedUserToken, setConnectedUserToken, connectedUserPassword, setConnectedUserPassword }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
}
