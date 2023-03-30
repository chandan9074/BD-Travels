import React, { createContext, ReactNode, useContext, useState } from 'react';
import HomeService from '../services/HomeService';
import { productDT } from '../types/home';

interface ContextProps {  
    loading: boolean;
    getProducts: () => void;
    products: productDT[];
    currentCategory: string;
    setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const HomeContext = createContext({} as ContextProps);

export const useHomeContext = () => {
    return useContext(HomeContext);
}

const HomeProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<productDT[]>([] as productDT[]);
    const [currentCategory, setCurrentCategory] = useState<string>("Clothing and Apparel")

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
  return (
      <HomeContext.Provider value={{loading, getProducts, products, currentCategory, setCurrentCategory}}>
          {children}
    </HomeContext.Provider>
  )
}

export default HomeProvider