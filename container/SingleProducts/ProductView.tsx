import React, { useRef, useState } from 'react'
import { FlatList, ImageSourcePropType, Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { singleProductDT } from '../../types/home';
import Theme from '../../helper/Theme';
import Cards from '../../components/Cards';

type Props = {
    data: singleProductDT;
}

const ProductView = ({ data }: Props) => {
    console.log(data, "data")

    const { width } = Dimensions.get('window');
    const flatListRef = useRef<FlatList<ImageSourcePropType>>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeVariant, setActiveVariant] = useState(0);

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
        marginTop: 8
    },
    brandTitle: {
        fontSize: Theme.fontSize.xxs,
        color: "gray",
        fontWeight: Theme.fontWight.semiBold,
        fontStyle: 'italic',
        marginTop: 0
    }
})