import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { productItemsDT } from '../../../types/home'
import Theme from '../../../helper/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
    data: productItemsDT;
}

const Type3 = ({ data }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={data.img} style={styles.image} resizeMode='contain' />
            </View>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.des}>{data.shortDescription}</Text>
            <View style={styles.footerContainer}>
                <View style={styles.priceContainer}>
                    <MaterialCommunityIcons name="currency-bdt" size={15} color="gray" />
                    <Text style={styles.price}>{data.price}</Text>
                </View>
                <TouchableOpacity style={styles.cartBtnContainer}>
                    <MaterialIcons name="favorite" size={10} color="white" />
                </TouchableOpacity>
            </View>
            {/* <TouchableOpacity style={styles.favoriteBtn}>
                <MaterialIcons name="favorite" size={12} color="white" />
            </TouchableOpacity> */}
        </View>
    )
}

export default Type3;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        position: "relative",
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 10,
    },
    imageContainer: {
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    title: {
        fontSize: Theme.fontSize.small,
        fontWeight: Theme.fontWight.bold,
        marginTop: 6,
        color: Theme.textColor.primary,
    },
    des: {
        fontSize: Theme.fontSize.xxs,
        fontWeight: Theme.fontWight.semiBold,
        marginTop: 6,
        color: "gray",
    },
    footerContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    priceContainer: {
        flexDirection: "row",
    },
    price: {
        fontSize: Theme.fontSize.small,
        fontWeight: Theme.fontWight.bold,
        color: Theme.textColor.primary,
    },
    cartBtnContainer: {
        padding: 5,
        backgroundColor: Theme.backgroundColor.lightBlack,
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 2,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 4,
    },
    favoriteBtn: {
        padding: 4,
        backgroundColor: "red",
        borderRadius: 100,
        position: "absolute",
        top: 10,
        right: 10,
    }
})