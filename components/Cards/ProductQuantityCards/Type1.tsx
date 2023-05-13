import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { cartItemsDT } from '../../../types/home';
import Theme from '../../../helper/Theme';
import { FontAwesome5 } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
    data: cartItemsDT;
}

const Type1 = ({ data }: Props) => {
    const [quantity, setQuantity] = React.useState(data.quantity);

    const handleQuantity = (type: string) => {
        if (type === "plus") {
            setQuantity(quantity + 1);
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.productCardLeftContainer} >
                <View style={styles.productImgContainer}>
                    <Image
                        source={data.img}
                        style={styles.productImg}
                        resizeMode='contain'
                    />
                </View>
            </View>
            <View style={styles.cardDetailsContainer}>
                <Text style={styles.productTitle}>{data.title}</Text>
                <Text style={styles.productDes}>{data.shortDescription}</Text>
                <View style={styles.quantityPriceContainer}>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={() => handleQuantity("minus")} >
                            <FontAwesome5 name="minus" size={12} color="silver" />
                        </TouchableOpacity>
                        <View style={styles.quantityContainer}>
                            <Text style={styles.quantity}>{quantity}</Text>
                        </View>
                        <TouchableOpacity style={styles.btn} onPress={() => handleQuantity("plus")} >
                            <FontAwesome5 name="plus" size={12} color="silver" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.priceContainer}>
                        <MaterialCommunityIcons name="currency-bdt" size={12} color="silver" />
                        <Text style={styles.price}>{data.price}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Type1;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    productImg: {
        width: 60,
        height: 60,
    },
    productImgContainer: {
        padding: 8,
        backgroundColor: Theme.backgroundColor.secondary,
        borderRadius: 4,
        // flex: 0.5,
    },
    productCardLeftContainer: {
        justifyContent: 'flex-start'
    },
    productTitle: {
        fontSize: Theme.fontSize.small,
        fontWeight: Theme.fontWight.semiBold,
        color: "silver",
    },
    cardDetailsContainer: {
        marginHorizontal: 12,
        flex: 1,
    },
    productDes: {
        fontSize: Theme.fontSize.xxs,
        fontWeight: Theme.fontWight.semiBold,
        color: "gray",
        marginTop: 4,
    },
    btnContainer: {
        marginTop: 12,
        flexDirection: 'row',
    },
    btn: {
        paddingTop: 3,
        paddingBottom: 2,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        borderColor: Theme.backgroundColor.darkGray,
        // borderRadius: 2,
    },
    quantity: {
        fontSize: Theme.fontSize.xxs,
        fontWeight: Theme.fontWight.semiBold,
        color: "silver",
    },
    quantityContainer: {
        paddingTop: 2,
        paddingBottom: 3,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: Theme.backgroundColor.darkGray,
        // borderRadius: 2,
    },
    quantityPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flex: 1,
        width: '100%',
    },
    price: {
        fontSize: Theme.fontSize.small,
        fontWeight: Theme.fontWight.semiBold,
        color: "silver",
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    }
})