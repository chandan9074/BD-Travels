import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { productCategoryDT, productItemsDT } from '../../types/home'
import Cards from '../../components/Cards'
import Theme from '../../helper/Theme'
import HorizontalBar from '../../components/HorizontalBar'
import { NavProps } from '../../types/common'

type Props = {
    productByCategory: productCategoryDT
}

const Products = ({ navigation, route, productByCategory }: NavProps & Props) => {

    console.log(productByCategory, "productByCategory")

    const handleSingleProductNavigation = (id: string) => {
        navigation.navigate("SingleProduct", { proId: id })
    }

    const renderProducts = ({ item, index }: { item: productItemsDT, index: number }) => (
        <View style={styles.item}>
            <Cards.ImageCards.Type3 data={item} handleSingleProductNavigation={handleSingleProductNavigation} />
        </View>
    )
    return (
        <View style={styles.container}>
            {/* {productByCategory && <Text style={styles.quantityTitle}>Found {productByCategory?.items?.length} Results</Text>} */}
            <Text style={styles.title}>Trending</Text>
            {/* <View style={styles.horizontalContainer}><HorizontalBar.Type1 width={40} firstBarColor='black' secondBarColor='gray' height={3} /></View> */}
            <View style={styles.trendCartContainer}>{productByCategory.items && <Cards.ImageCards.Type4 data={productByCategory?.items[0]} />}</View>
            <Text style={styles.popularTitle}>Popular</Text>
            {/* <View style={styles.horizontalContainer}><HorizontalBar.Type1 width={40} firstBarColor='black' secondBarColor='gray' height={3} /></View> */}
            <FlatList style={{ width: "100%" }} data={productByCategory.items} renderItem={renderProducts} keyExtractor={(item) => item.id} numColumns={2} contentContainerStyle={styles.productContainer} />
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    productContainer: {
        justifyContent: 'space-between',
    },
    item: {
        flexBasis: '50%',
        padding: 8,
    },
    quantityTitle: {
        fontSize: 20,
        color: Theme.textColor.primary,
        fontWeight: Theme.fontWight.bold,
        marginBottom: 10,
    },
    trendCartContainer: {
        padding: 8,
    },
    title: {
        fontSize: 18,
        color: Theme.textColor.primary,
        fontWeight: Theme.fontWight.bold,
        marginBottom: 12,
    },
    popularTitle: {
        fontSize: 18,
        color: Theme.textColor.primary,
        fontWeight: Theme.fontWight.bold,
        marginTop: 14,
        marginBottom: 12
    },
    horizontalContainer: {
        marginTop: 6,
        marginBottom: 14,
        marginLeft: 4,
    }
})