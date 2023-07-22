import React, { createContext, ReactNode, useContext, useState } from 'react';
import { cartItemsDT } from '../types/home';

interface ContextProps {
    loading: boolean;
    selectedProducts: cartItemsDT[];
    setSelectedProducts: React.Dispatch<React.SetStateAction<cartItemsDT[]>>;
}

export const CheckoutContext = createContext({} as ContextProps);

export const useCheckoutContext = () => {
    return useContext(CheckoutContext);
}

const CheckoutProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState<cartItemsDT[]>([] as cartItemsDT[]);

    return (
        <CheckoutContext.Provider value={{ loading, selectedProducts, setSelectedProducts }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutProvider