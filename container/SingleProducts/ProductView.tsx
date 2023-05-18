import React from 'react'
import { Text, View } from 'react-native';
import { singleProductDT } from '../../types/home';

type Props = {
    data: singleProductDT;
}

const ProductView = ({ data }: Props) => {
    console.log(data, "data")
    return (
        <View><Text>SingleProduct</Text></View>
    )
}

export default ProductView