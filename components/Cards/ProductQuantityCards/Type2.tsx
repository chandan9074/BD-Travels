import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { cartItemsDT } from '../../../types/home'
import { CheckBox } from 'react-native-elements';
import Theme from '../../../helper/Theme';
import { FontAwesome5 } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
    data: cartItemsDT;
}

const Type2 = ({ data }: Props) => {
    const [checked, setChecked] = React.useState(false);
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
            <CheckBox
                // title="My Checkbox"
                checked={checked}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
                checkedIcon="check-square-o"
                uncheckedIcon="square-o"
                checkedColor="black"
                uncheckedColor="gray"
                size={20}
                onPress={() => setChecked(!checked)}
            />
            <View style={styles.productContainer}>
                <View style={styles.productCardLeftContainer}>
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
                        <View style={styles.priceContainer}>
                            <MaterialCommunityIcons name="currency-bdt" size={12} color="#FFA500" />
                            <Text style={styles.price}>{data.price}</Text>
                        </View>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.btn} onPress={() => handleQuantity("minus")} >
                                <FontAwesome5 name="minus" size={12} color={Theme.backgroundColor.darkGray} />
                            </TouchableOpacity>
                            <View style={styles.quantityContainer}>
                                <Text style={styles.quantity}>{quantity}</Text>
                            </View>
                            <TouchableOpacity style={styles.btn} onPress={() => handleQuantity("plus")} >
                                <FontAwesome5 name="plus" size={12} color={Theme.backgroundColor.darkGray} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        width: '100%',
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
    },
    checkboxText: {
        marginLeft: 8,
    },
    productContainer: {
        marginLeft: 12,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1,
    },
    productImgContainer: {
        padding: 8,
        backgroundColor: "#f2f2f2",
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 20,
    },
    productCardLeftContainer: {
        justifyContent: 'flex-start'
    },
    productImg: {
        width: 60,
        height: 60,
    },
    productTitle: {
        fontSize: Theme.fontSize.small,
        fontWeight: Theme.fontWight.bold,
        color: Theme.textColor.primary,
    },
    cardDetailsContainer: {
        marginHorizontal: 12,
        flex: 1,
    },
    productDes: {
        fontSize: Theme.fontSize.xxs,
        fontWeight: Theme.fontWight.semiBold,
        color: Theme.backgroundColor.darkGray,
        marginTop: 4,
    },
    btnContainer: {
        marginTop: 12,
        flexDirection: 'row',
    },
    btn: {
        paddingTop: 5,
        // paddingBottom: 1,
        paddingHorizontal: 8,
        // borderWidth: 0.5,
        // borderColor: Theme.backgroundColor.darkGray,
        backgroundColor: "white",
        borderRadius: 4,
    },
    quantity: {
        fontSize: Theme.fontSize.xs,
        fontWeight: Theme.fontWight.bold,
        color: Theme.textColor.primary,
    },
    quantityContainer: {
        paddingTop: 2,
        paddingBottom: 3,
        paddingHorizontal: 10,
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
        color: "#FFA500",
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    }
});

export default Type2