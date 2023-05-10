import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ContextProps {
    loading: boolean;
    isScrollEnabled: boolean;
    setIsScrollEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CommonContext = createContext({} as ContextProps);

export const useCommonContext = () => {
    return useContext(CommonContext);
}

const CommonProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [isScrollEnabled, setIsScrollEnabled] = useState(false);
    return (
        <CommonContext.Provider value={{ loading, isScrollEnabled, setIsScrollEnabled }}>
            {children}
        </CommonContext.Provider>
    )
}

export default CommonProvider