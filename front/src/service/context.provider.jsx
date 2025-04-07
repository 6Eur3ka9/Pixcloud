import { createContext, useContext, useEffect, useState } from "react";
import AxiosClient from "./caller.service";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [connectedUserId, setConnectedUserId] = useState(null);
    const [connectedUserEmail, setConnectedUserEmail] = useState(null);
    const [connectedUserPassword, setConnectedUserPassword] = useState(null);

  


    return (
        <UserContext.Provider value={{ connectedUserId, setConnectedUserId, connectedUserEmail, setConnectedUserEmail, connectedUserPassword, setConnectedUserPassword }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
}
