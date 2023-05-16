import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import Layouts from '../../Layouts'
import Header from '../../container/Home/Header'
import { StackScreenProps } from "@react-navigation/stack";
import { useProductContext } from '../../context/ProductProvider';
import Products from '../../container/AllProducts/Products';

type RootStackParamList = {
    MyCart: undefined;
    AllProducts: { type: string, category: string };
};


type Props = StackScreenProps<RootStackParamList, 'MyCart', "AllProducts">;


const AllProducts = ({ navigation, route }: Props) => {
    //@ts-ignore
    // const { type } = route.params
    const { productByCategory, getProductsByCategory } = useProductContext()

    useEffect(() => {
        getProductsByCategory("Popular".toLowerCase(), "Clothing and Apparel")
    }, [])

    return (
        <Layouts.Screen.Primary>
            <Header navigation={navigation} route={route} title={"Popular"} />
            <Products productByCategory={productByCategory} />
        </Layouts.Screen.Primary>
    )
}

export default AllProducts