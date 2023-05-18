import React, { createContext, ReactNode, useContext, useState } from 'react';
import ProductService from '../services/ProductService';
import { brandDT, cartItemsDT, productCategoryDT, productDT, singleProductDT } from '../types/home';

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
    getProductsByCategory: (type: string, category: string) => void;
    productByCategory: productCategoryDT;
    getProductById: (id: string) => void;
    singleProduct: singleProductDT;
}

export const ProductContext = createContext({} as ContextProps);

export const useProductContext = () => {
    return useContext(ProductContext);
}

const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<productDT>({} as productDT);
    const [singleProduct, setSingleProduct] = useState<singleProductDT>({} as singleProductDT);
    const [productByCategory, setProductByCategory] = useState<productCategoryDT>({} as productCategoryDT);
    const [brands, setBrands] = useState<brandDT[]>([] as brandDT[]);
    const [currentCategory, setCurrentCategory] = useState<string>("Clothing and Apparel");
    const [cartItems, setCartItems] = useState<cartItemsDT[]>([] as cartItemsDT[]);

    const getProducts = async () => {
        try {
            setLoading(true)
            const res = ProductService.getProduct();
            setProducts(res);
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const getBrands = async () => {
        try {
            setLoading(true)
            const res = ProductService.getBrands();
            setBrands(res);
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const getCartItems = async (loginToken: string) => {
        try {
            setLoading(true)
            const res = ProductService.getCartItems(loginToken);
            setCartItems(res);
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const getProductsByCategory = async (type: string, category: string) => {
        try {
            setLoading(true)
            const res = ProductService.getProductsByCategory(type, category);
            if (res) setProductByCategory(res)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const getProductById = async (id: string) => {
        try {
            setLoading(true)
            const res = ProductService.getProductById(id);
            setLoading(false)
            setSingleProduct(res)
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <ProductContext.Provider value={{ loading, getProducts, products, currentCategory, setCurrentCategory, brands, getBrands, cartItems, getCartItems, getProductsByCategory, productByCategory, getProductById, singleProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider