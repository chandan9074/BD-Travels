import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useProductContext } from '../../context/ProductProvider';
import { useCommonContext } from '../../context/CommonProvider';
import Cards from '../../components/Cards';
import { cartItemsDT } from '../../types/home';
import Buttons from '../../components/Buttons';
import Theme from '../../helper/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useCheckoutContext } from '../../context/CheckoutProvider';

type Props = {
    steps: string[],
    handleActiveStep: (value: string) => void,
}

const Step1 = ({ handleActiveStep, steps }: Props) => {
    const { cartItems, getCartItems } = useProductContext();
    const { loginToken } = useCommonContext();
    const { selectedProducts } = useCheckoutContext();

    console.log("cartItems", cartItems)

    const handleCheckout = () => {
        if (selectedProducts.length > 0) {
            handleActiveStep(steps[1]);
        }
    }

    useEffect(() => {
        // console.log("call getCartItems")
        getCartItems(loginToken);
    }, [])

    const renderCartItem = ({ item, index }: { item: cartItemsDT, index: number }) => (
        <>
            {/* <Cards.ProductQuantityCards.Type1 key={item.id} data={item} /> */}
            <Cards.ProductQuantityCards.Type2 key={item.id} data={item} />
            {/* {index !== cartItems.length - 1 && <View style={styles.horizontalLine} />} */}
        </>
    )

    return (
        <View style={styles.container}>
            {/* {cartItems.length > 0 && <Cards.ProductQuantityCards.Type2 data={cartItems[0]} />} */}
            <View style={styles.cardContainer}>
                <FlatList data={cartItems} renderItem={renderCartItem} />
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.footerHeaderContainer}>
                    <Text style={styles.title}>Selected items ({selectedProducts.length})</Text>
                    <View style={styles.headerRightContainer}>
                        <View style={styles.totalContainer}>
                            <Text style={styles.title}>Total: </Text>
                            <View style={styles.totalContainer}>
                                <MaterialCommunityIcons name="currency-bdt" size={16} color="silver" />
                                <Text style={styles.total}>{selectedProducts.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)}</Text>
                            </View>
                        </View>
                        <Text style={styles.details}>(WITHOUT SHIPPING COST & VAT)</Text>
                    </View>
                </View>
                <Buttons.LabelButton.Primary label="Checkout" variant='white' onPress={handleCheckout} />
            </View>
        </View>
    )
}

export default Step1

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        position: 'relative',
        height: `${100 - 11.5}vh`,
    },
    cardContainer: {
        paddingHorizontal: 16,
        height: `${100 - 25.5}vh`,
    },
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: "#0d0d0d",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    footerHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    title: {
        color: 'silver',
        fontSize: Theme.fontSize.xs,
        fontWeight: Theme.fontWight.bold,
    },
    totalContainer: {
        flexDirection: 'row',

    },
    total: {
        color: 'silver',
        fontSize: Theme.fontSize.sm,
        fontWeight: Theme.fontWight.bold,
    },
    details: {
        color: 'gray',
        fontSize: 10,
        // fontWeight: Theme.fontWight.bold,
        fontWeight: '500',
        fontStyle: 'italic',
    },
    headerRightContainer: {
        alignItems: "flex-end"
    }
})