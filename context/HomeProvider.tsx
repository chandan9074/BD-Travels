import React, { createContext, ReactNode, useContext, useState } from 'react';
import HomeService from '../services/HomeService';
import { brandDT, productDT } from '../types/home';

interface ContextProps {  
    loading: boolean;
    getProducts: () => void;
    products: productDT;
    currentCategory: string;
    setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
    brands: brandDT[];
    getBrands: () => void;
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
  return (
      <HomeContext.Provider value={{loading, getProducts, products, currentCategory, setCurrentCategory, brands, getBrands}}>
          {children}
    </HomeContext.Provider>
  )
}

export default HomeProvider