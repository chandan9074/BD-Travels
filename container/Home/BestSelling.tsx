import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Cards from '../../components/Cards'
import { useProductContext } from '../../context/ProductProvider'
import Theme from '../../helper/Theme'
import { productItemsDT } from '../../types/home'

const BestSelling = () => {

  const { products, currentCategory } = useProductContext();

  // console.log(products.popular && products.popular.find(item => item.category === currentCategory))

  const renderProducts = ({ item }: { item: productItemsDT }) => {
    return (
      <Cards.ImageCards.Type1 data={item} />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Best Selling</Text>
        <TouchableOpacity>
          <Text style={styles.btnText}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.popularCardContainer}>
        <FlatList horizontal showsHorizontalScrollIndicator={false} data={products.popular && products.popular.find(item => item.category === currentCategory)?.items} renderItem={renderProducts} keyExtractor={(item) => item.id} />
      </View>
    </View>
  )
}

export default BestSelling;

const styles = StyleSheet.create({
  title: {
    fontSize: Theme.fontSize.base,
    color: Theme.textColor.primary,
    fontWeight: Theme.fontWight.bold,
  },
  container: {
    marginTop: 16,
    paddingHorizontal: 16
  },
  popularCardContainer: {
    marginTop: 6,
    paddingVertical: 10
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  btnText: {
    fontSize: Theme.fontSize.xs,
    color: Theme.textColor.primary,
    fontWeight: Theme.fontWight.medium
  }
});