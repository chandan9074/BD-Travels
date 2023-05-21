import React, { useRef, useState } from 'react'
import { FlatList, ImageSourcePropType, Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { singleProductDT } from '../../types/home';
import Theme from '../../helper/Theme';
import Cards from '../../components/Cards';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import Buttons from '../../components/Buttons';

type Props = {
    data: singleProductDT;
}

const ProductView = ({ data }: Props) => {
    console.log(data, "data")

    const { width } = Dimensions.get('window');
    const flatListRef = useRef<FlatList<ImageSourcePropType>>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeVariant, setActiveVariant] = useState(0);
    const [quantity, setQuantity] = React.useState(0);

    const handleQuantity = (type: string) => {
        if (type === "plus") {
            setQuantity(quantity + 1);
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    }

    const onScroll = (event: any) => {
        const xOffset = event.nativeEvent.contentOffset.x;
        const index = Math.round(xOffset / width);
        setActiveIndex(index);
    };

    const handleActiveVariant = (index: number) => {
        console.log(index, "index")
        setActiveVariant(index)
    }

    const renderItem = ({ item }: { item: ImageSourcePropType }) => (
        <View style={{ paddingHorizontal: 10 }}>
            <Image source={item} style={[styles.img, { width: width }]} resizeMode='contain' />
        </View>
    )
    return (
        <View style={styles.container}>
            <View>
                <FlatList keyExtractor={(item: ImageSourcePropType, index: number) => index.toString()} showsHorizontalScrollIndicator={false} horizontal data={data.images && data.images[activeVariant].secondaryImg} renderItem={renderItem} onScroll={onScroll} ref={flatListRef}
                    pagingEnabled />
                <View style={styles.dotContainer}>
                    {data.images && data.images[activeVariant].secondaryImg.map((item, index) => (
                        <View key={index} style={[styles.dot, { backgroundColor: activeIndex === index ? Theme.backgroundColor.lightBlack : "silver" }]} />
                    ))}
                </View>
            </View>
            <View style={styles.variantContainer}>
                {data.images && data.images.map((item, index) => (
                    <Cards.ImageCards.Type5 key={index} currIndex={index} data={item} handleActiveVariant={handleActiveVariant} activeVariant={index === activeVariant ? true : false} />
                ))}
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.footerTitle}>{data.title}</Text>
                <Text style={styles.brandTitle}>{data.brand}</Text>
                <Text style={styles.footerDes}>{data.longDescription}</Text>
                <View style={styles.ratingStockContainer}>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingTitle}>Rating: </Text>
                        <MaterialIcons name="star-rate" size={18} color="#ffd700" />
                        <Text style={styles.ratingCount}> ({data.rating})</Text>
                    </View>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingTitle}>Stock: </Text>
                        <Text style={styles.stockCount}>{data.stock}</Text>
                    </View>
                </View>
                <View style={styles.priceCountContainer}>
                    <View style={styles.ratingContainer}>
                        {/* <Text style={styles.ratingTitle}>Rating: </Text> */}
                        <Text style={styles.priceContainer}>
                            <MaterialCommunityIcons name="currency-bdt" size={18} color="silver" />
                            <Text style={styles.price}>{data.price}</Text>
                        </Text>
                        <MaterialCommunityIcons name="currency-bdt" size={18} color={Theme.backgroundColor.darkGray} />
                        <Text style={styles.offerPrice}>{data.price}</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={() => handleQuantity("minus")} >
                            <FontAwesome5 name="minus" size={12} color="gray" />
                        </TouchableOpacity>
                        <View style={styles.quantityContainer}>
                            <Text style={styles.quantity}>{quantity}</Text>
                        </View>
                        <TouchableOpacity style={styles.btn} onPress={() => handleQuantity("plus")} >
                            <FontAwesome5 name="plus" size={12} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cartBtnContainer}>
                    <Buttons.LabelButton.Primary label="Add to cart" variant='black' />
                </View>
            </View>

        </View>
    )
}

export default ProductView

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: `${100 - 11.2}vh`,
    },
    img: {
        height: 250,
    },
    dot: {
        height: 6,
        width: 6,
        borderRadius: 20,
        marginHorizontal: 2
    },
    dotContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    variantContainer: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    variantImgContainer: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    variantImg: {
        height: 40,
        width: 40,
    },
    footerContainer: {
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: "100%",
        padding: 20,
        position: 'absolute',
        bottom: 0,
    },
    footerTitle: {
        fontSize: Theme.fontSize.base,
        fontWeight: Theme.fontWight.bold,
        color: Theme.backgroundColor.lightBlack,
    },
    footerDes: {
        fontSize: Theme.fontSize.xs,
        color: Theme.backgroundColor.darkGray,
        fontWeight: Theme.fontWight.semiBold,
        marginTop: 10
    },
    brandTitle: {
        fontSize: Theme.fontSize.xxs,
        color: "gray",
        fontWeight: Theme.fontWight.semiBold,
        fontStyle: 'italic',
        marginTop: 0
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingTitle: {
        fontSize: Theme.fontSize.xs,
        color: Theme.backgroundColor.darkGray,
        fontWeight: Theme.fontWight.semiBold,
    },
    ratingCount: {
        fontSize: Theme.fontSize.xs,
        color: Theme.backgroundColor.darkGray,
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
        marginTop: 10,
    },
    priceCountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    priceContainer: {
        textDecorationLine: 'line-through',
        flexDirection: 'row',
        alignItems: 'flex-start',
        color: "silver",
    },
    price: {
        fontSize: Theme.fontSize.xs,
        color: "silver",
        fontWeight: Theme.fontWight.semiBold,
        marginRight: 4,
    },
    offerPrice: {
        fontSize: Theme.fontSize.xs,
        color: Theme.backgroundColor.darkGray,
        fontWeight: Theme.fontWight.semiBold,
    },
    btnContainer: {
        // marginTop: 12,
        flexDirection: 'row',
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 10,
        // overflow: 'hidden',
        borderWidth: 0.5,
        borderColor: "#e3e1e1",
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    btn: {
        paddingTop: 4,
        paddingBottom: 3,
        paddingHorizontal: 5,
        // borderWidth: 0.5,
        // borderColor: "gray",
        // borderRadius: 2,
        backgroundColor: "#f0f0f0",
        borderRadius: 20,
    },
    quantity: {
        fontSize: Theme.fontSize.xxs,
        fontWeight: Theme.fontWight.semiBold,
        color: "gray",
        marginHorizontal: 4,
    },
    quantityContainer: {
        paddingTop: 2,
        paddingBottom: 3,
        paddingHorizontal: 10,
    },
    cartBtnContainer: {
        marginTop: 20,
    }
})