import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../../helper/Theme'
import { useHomeContext } from '../../../context/HomeProvider';
import { useCommonContext } from '../../../context/CommonProvider';
import Cards from '../../Cards';
import { cartItemsDT } from '../../../types/home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Buttons from '../../Buttons';

type Props = {
    handleSideDrawer: () => void;
}

const Type1 = ({ handleSideDrawer }: Props) => {
    const { cartItems, getCartItems } = useHomeContext();
    const { loginToken } = useCommonContext();
    useEffect(() => {
        getCartItems(loginToken);
    }, [])

    const renderCartItem = ({ item, index }: { item: cartItemsDT, index: number }) => (
        <>
            <Cards.ProductQuantityCards.Type1 key={item.id} data={item} />
            {index !== cartItems.length - 1 && <View style={styles.horizontalLine} />}
        </>
    )
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer} >
                <Text style={styles.heading}>Your cart</Text>
                <TouchableOpacity onPress={handleSideDrawer} style={styles.closeBtn}>
                    <MaterialIcons name="close" size={14} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.cardContainer}>
                <FlatList data={cartItems} renderItem={renderCartItem} />
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.subTotalContainer}>
                <View style={styles.totalHeaderContainer} >
                    <Text style={styles.subtitle}>Subtotal</Text>
                    <View style={styles.priceContainer}>
                        <MaterialCommunityIcons name="currency-bdt" size={12} color="silver" />
                        <Text style={styles.subtitle}>1234</Text>
                    </View>
                </View>
                <Text style={styles.totalDes}>Sipping & discount calculated at checkout</Text>
                <View>
                    <Buttons.LabelButton.Primary label="Checkout" variant='white' />
                </View>
            </View>
        </View>
    )
}

export default Type1;

const styles = StyleSheet.create({
    container: {
        height: "100vh",
        paddingHorizontal: 20,
        paddingVertical: 32,
        position: "relative",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    heading: {
        fontSize: Theme.fontSize.base,
        fontWeight: Theme.fontWight.semiBold,
        color: "white",
    },
    closeBtn: {
        padding: 5,
        borderRadius: 100,
        backgroundColor: "white",
    },
    horizontalLine: {
        height: 1,
        width: "100%",
        borderBottomWidth: 0.5,
        borderColor: Theme.backgroundColor.darkGray,
        marginTop: 32,
        marginBottom: 24,
    },
    horizontalLine2: {
        height: 1,
        width: "100%",
        borderBottomWidth: 0.5,
        borderColor: Theme.backgroundColor.darkGray,
        marginTop: 24,
        marginBottom: 24,
    },
    cardContainer: {
        height: 550,
    },
    subTotalContainer: {
        paddingHorizontal: 20,
        paddingVertical: 32,
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
    },
    subtitle: {
        fontSize: Theme.fontSize.small,
        fontWeight: Theme.fontWight.semiBold,
        color: "silver",
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    totalHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalDes: {
        fontSize: 11,
        fontWeight: Theme.fontWight.semiBold,
        color: "gray",
        marginTop: 6,
        marginBottom: 24,
    },
})