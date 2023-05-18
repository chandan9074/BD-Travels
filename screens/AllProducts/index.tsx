import React, { useEffect } from 'react';
import Layouts from '../../Layouts';
import { useProductContext } from '../../context/ProductProvider';
import Products from '../../container/AllProducts/Products';
import Headers from '../../components/Headers';
import { NavProps } from '../../types/common';


const AllProducts = ({ navigation, route }: NavProps) => {
    //@ts-ignore
    // const { type } = route.params
    const { productByCategory, getProductsByCategory } = useProductContext()

    useEffect(() => {
        getProductsByCategory("Popular".toLowerCase(), "Clothing and Apparel")
    }, [])

    return (
        <Layouts.Screen.Primary>
            <Headers.Primary navigation={navigation} route={route} title={"Popular"} isBack={true} isSearchBar={true} />
            <Products navigation={navigation} route={route} productByCategory={productByCategory} />
        </Layouts.Screen.Primary>
    )
}

export default AllProducts