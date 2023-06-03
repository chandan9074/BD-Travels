import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import Buttons from '../../components/Buttons';
import Theme from '../../helper/Theme';
import { singleProductDT } from '../../types/home';

type Props = {
    data: singleProductDT;
}

const Details = ({ data }: Props) => {

    const [quantity, setQuantity] = React.useState(0);
    const [selectedColor, setSelectedColor] = React.useState("");
    const [selectedSize, setSelectedSize] = React.useState("");
    const [favorite, setFavorite] = React.useState(false);

    const handleQuantity = (type: string) => {
        if (type === "plus") {
            if (data.stock > quantity) {
                setQuantity(quantity + 1);
            }
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    }
    return (
        <View>
            <View style={styles.footerHeaderContainer}>
                <View>
                    <Text style={styles.footerTitle}>{data.title}</Text>
                    <Text style={styles.brandTitle}>by {data.brand}</Text>
                </View>
                <View>
                    <View style={styles.priceBodyContainer}>
                        <Text style={styles.priceContainer}>
                            <MaterialCommunityIcons name="currency-bdt" size={16} color="#804000" />
                            <Text style={styles.price}>{data.price}</Text>
                        </Text>
                        <View style={styles.ratingContainer}>
                            <MaterialCommunityIcons name="currency-bdt" size={18} color="#FFA500" />
                            <Text style={styles.offerPrice}>{data.price}</Text>
                        </View>
                    </View>
                    <View style={styles.ratingContainer}>
                        <MaterialIcons name="star-rate" size={14} color="#ECECEC" />
                        <Text style={styles.ratingCount}> ({data.rating})</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.footerDes}>{data.longDescription}</Text>
            <Text style={styles.specificationTitle}>Specification:</Text>
            <Text style={styles.specificationDes}>{data.specifications}</Text>
            <View style={styles.ratingStockContainer}>
                <View style={styles.ratingContainer}>
                    {data.size && data.size.map((item, index) => (
                        <TouchableOpacity onPress={() => setSelectedSize(item)} style={[styles.size, { borderColor: item === selectedSize ? "#FFA500" : "#1c1c1c" }]}>
                            <Text style={styles.sizeTitle}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.ratingContainer}>
                    {data.color && data.color.map((item, index) => (
                        <TouchableOpacity onPress={() => setSelectedColor(item)} key={index} style={[styles.color, { backgroundColor: item, borderColor: item === selectedColor ? "#FFA500" : "transparent" }]} />
                    ))}
                </View>
            </View>
            <View style={styles.priceCountContainer}>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingTitle}>Stock: </Text>
                    <Text style={styles.stockCount}>{data.stock}</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={() => handleQuantity("minus")} >
                        <FontAwesome5 name="minus" size={12} color="gray" />
                    </TouchableOpacity>
                    <View style={styles.quantityContainer}>
                        <Text style={styles.quantity}>{quantity < 10 && quantity !== 0 ? `0${quantity}` : quantity}</Text>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => handleQuantity("plus")} >
                        <FontAwesome5 name="plus" size={12} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cartBtnContainer}>
                <View style={styles.addCartBtnContainer}>
                    <Buttons.LabelButton.Primary label="Add to cart" variant='white' />
                </View>
                <Buttons.IconButton.Primary variant={favorite ? "black" : "white"} onPress={() => setFavorite(!favorite)} >
                    <MaterialIcons name="favorite" size={18} color={favorite ? "red" : "black"} />
                </Buttons.IconButton.Primary>
            </View>
        </View>
    )
}

export default Details


const styles = StyleSheet.create({
    footerHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerTitle: {
        fontSize: Theme.fontSize.lg,
        fontWeight: Theme.fontWight.bold,
        color: "white",
    },
    specificationTitle: {
        fontSize: Theme.fontSize.xs,
        fontWeight: Theme.fontWight.semiBold,
        color: "silver",
        marginTop: 16
    },
    specificationDes: {
        fontSize: Theme.fontSize.xs,
        color: "#888888",
        fontWeight: Theme.fontWight.semiBold,
        marginTop: 6
    },
    footerDes: {
        fontSize: Theme.fontSize.xs,
        color: "#888888",
        fontWeight: Theme.fontWight.semiBold,
        marginTop: 10
    },
    brandTitle: {
        fontSize: Theme.fontSize.xxs,
        color: "#888888",
        fontWeight: Theme.fontWight.semiBold,
        fontStyle: 'italic',
        marginTop: 0
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-end"
    },
    priceBodyContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',

    },
    ratingTitle: {
        fontSize: Theme.fontSize.xs,
        color: "silver",
        fontWeight: Theme.fontWight.semiBold,
    },
    ratingCount: {
        fontSize: Theme.fontSize.xs,
        color: "#888888",
        fontWeight: Theme.fontWight.semiBold,
    },
    stockCount: {
        fontSize: Theme.fontSize.xs,
        color: "orange",
        fontWeight: Theme.fontWight.semiBold,
    },
    ratingStockContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    priceCountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    priceContainer: {
        textDecorationLine: 'line-through',
        textDecorationColor: "#804000",
        flexDirection: 'row',
        alignItems: 'flex-start',
        color: "silver",
        marginBottom: 1,
    },
    price: {
        fontSize: Theme.fontSize.xs,
        color: "#804000",
        fontWeight: Theme.fontWight.bold,
        marginRight: 4,
    },
    offerPrice: {
        fontSize: Theme.fontSize.lg,
        color: "#FFA500",
        fontWeight: Theme.fontWight.bold,
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderRadius: 4,
        paddingVertical: 6,
        marginLeft: 20,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    btn: {
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "black",
        borderRadius: 4,
    },
    quantity: {
        fontSize: 18,
        fontWeight: Theme.fontWight.semiBold,
        color: "gray",
        marginHorizontal: 4,
    },
    quantityContainer: {
        paddingHorizontal: 10,
    },
    cartBtnContainer: {
        marginTop: 20,
        flexDirection: 'row',
    },
    addCartBtnContainer: {
        flex: 1,
        marginRight: 10,
    },
    color: {
        height: 20,
        width: 20,
        borderRadius: 100,
        marginHorizontal: 3,
        borderWidth: 2,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    size: {
        height: 32,
        width: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        backgroundColor: "black",
        borderRadius: 6,
        marginHorizontal: 3,
    },
    sizeTitle: {
        fontSize: 10,
        fontWeight: Theme.fontWight.semiBold,
        color: "white",
    }
})