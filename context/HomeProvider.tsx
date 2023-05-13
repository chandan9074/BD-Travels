import React, { createContext, ReactNode, useContext, useState } from 'react';
import HomeService from '../services/HomeService';
import { brandDT, cartItemsDT, productDT } from '../types/home';

interface ContextProps {
    loading: boolean;
    getProducts: () => void;
    products: productDT;
    currentCategory: string;
    setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
    brands: brandDT[];
    getBrands: () => void;
    getCartItems: (loginToken: string) => void;
    cartItems: cartItemsDT[];
}

export const HomeContext = createContext({} as ContextProps);

export const useHomeContext = () => {
    return useContext(HomeContext);
}

const HomeProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<productDT>({} as productDT);
    const [brands, setBrands] = useState<brandDT[]>([] as brandDT[])
    const [currentCategory, setCurrentCategory] = useState<string>("Clothing and Apparel")
    const [cartItems, setCartItems] = useState<cartItemsDT[]>([] as cartItemsDT[])

    const getProducts = async () => {
        try {
            setLoading(true)
            const res = HomeService.getProduct();
            setProducts(res);
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const getBrands = async () => {
        try {
            setLoading(true)
            const res = HomeService.getBrands();
            setBrands(res);
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const getCartItems = async (loginToken: string) => {
        try {
            setLoading(true)
            const res = HomeService.getCartItems(loginToken);
            setCartItems(res);
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }
    return (
        <HomeContext.Provider value={{ loading, getProducts, products, currentCategory, setCurrentCategory, brands, getBrands, cartItems, getCartItems }}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider