import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useProductContext } from '../../context/ProductProvider';
import { useCommonContext } from '../../context/CommonProvider';
import Cards from '../../components/Cards';

const Step1 = () => {
    const { cartItems, getCartItems } = useProductContext();
    const { loginToken } = useCommonContext();

    console.log("cartItems", cartItems)

    useEffect(() => {
        // console.log("call getCartItems")
        getCartItems(loginToken);
    }, [])

    return (
        <View style={styles.container}>
            {cartItems.length > 0 && <Cards.ProductQuantityCards.Type2 data={cartItems[0]} />}
        </View>
    )
}

export default Step1

const styles = StyleSheet.create({
    container: {
        paddingVertical: 28,
    }
})