import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { productItemsDT } from '../../../types/home';
import Theme from '../../../helper/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
    data: productItemsDT;
}

const Type4 = ({ data }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={data.img} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.rightSideContainer}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.des}>{data.shortDescription}</Text>
                    <View style={styles.priceContainer}>
                        <MaterialCommunityIcons name="currency-bdt" size={15} color="gray" />
                        <Text style={styles.price}>{data.price}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.rightArrowContainer}>
                    <Ionicons name="arrow-redo-sharp" size={16} color="white" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.cartBtnContainer}>
                <MaterialIcons name="favorite" size={10} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default Type4

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 8,
        justifyContent: "flex-start",
        flexDirection: "row",
        position: "relative",
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 9,
        elevation: 10,
    },
    imageContainer: {
        alignItems: "center",
        backgroundColor: Theme.backgroundColor.primary,
        borderRadius: 8,
        padding: 8,
    },
    image: {
        width: 60,
        height: 60,
    },
    rightSideContainer: {
        marginLeft: 12,
        flexDirection: "row",
        flex: 1,
        alignItems: "center"
    },
    detailsContainer: {
        flex: 1,
    },
    priceContainer: {
        flexDirection: "row",
        marginTop: 8,
    },
    price: {
        fontSize: Theme.fontSize.small,
        fontWeight: Theme.fontWight.bold,
        color: Theme.textColor.primary,
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
    rightArrowContainer: {
        padding: 10,
        backgroundColor: Theme.backgroundColor.lightBlack,
        borderRadius: 8,
        marginHorizontal: 8,
        alignSelf: "center"
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
        position: "absolute",
        left: -3,
        top: -3,
    },
})