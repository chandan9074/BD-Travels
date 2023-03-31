import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Cards from '../../components/Cards'
import { useHomeContext } from '../../context/HomeProvider'
import Theme from '../../helper/Theme'
import { productItemsDT } from '../../types/home'

const Popular = () => {

  const { products, currentCategory } = useHomeContext();
  
  const renderProducts = ({item}:{item: productItemsDT}) => {
    return (
      <Cards.ImageCards.Type1 data={item} />
    )
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular</Text>
      <View style={styles.popularCardContainer}>
        <FlatList horizontal showsHorizontalScrollIndicator={false} data={products.find(item => item.category === currentCategory)?.items} renderItem={renderProducts} keyExtractor={(item) => item.id}  />
      </View>
    </View>
  )
}

export default Popular;

const styles = StyleSheet.create({
  title: {
    fontSize: Theme.fontSize.base,
    color: Theme.textColor.primary,
    fontWeight: Theme.fontWight.bold,
  },
  container: {
        marginTop: 20,
        paddingHorizontal: 16
  },
  popularCardContainer: {
    marginTop: 6,
    paddingVertical: 10
  }
});