import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Layouts from '../../Layouts'
import Headers from '../../components/Headers'
import { NavProps } from '../../types/common'
import { useProductContext } from '../../context/ProductProvider'
import ProductView from '../../container/SingleProducts/ProductView'

const SingleProduct = ({ navigation, route }: NavProps) => {
    const { getProductById, singleProduct } = useProductContext();
    //@ts-ignore
    // const { proId } = route.params
    // console.log(proId, "proId")
    useEffect(() => {
        getProductById("1")
    }, [])
    return (
        <Layouts.Screen.Primary>
            <Headers.Primary navigation={navigation} route={route} title={singleProduct.category} isBack={true} isSearchBar={false} />
            <ProductView data={singleProduct} />
        </Layouts.Screen.Primary>
    )
}

export default SingleProduct