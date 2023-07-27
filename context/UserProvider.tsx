import React, { createContext, ReactNode, useContext, useState } from 'react';
import { userInfoDT } from '../types/user';
import UserService from '../services/UserService';

interface ContextProps {
    loading: boolean;
    userInfo: userInfoDT;
    getUserInfo: () => void;
}

export const UserContext = createContext({} as ContextProps);

export const useUserContext = () => {
    return useContext(UserContext);
}

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({} as userInfoDT)

    const getUserInfo = () => {
        try {
            setLoading(true)
            const res = UserService.userInfo();
            setUserInfo(res);
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }
    return (
        <UserContext.Provider value={{ loading, getUserInfo, userInfo }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider