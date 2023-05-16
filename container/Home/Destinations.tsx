import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useProductContext } from '../../context/ProductProvider'
import { categories } from '../../data/home'

const Destinations = () => {

  const { currentCategory, setCurrentCategory } = useProductContext();

  const renderCategories = ({ item }: { item: string }) => {
    return (
      <View style={styles.categoriesContainer}>
        <TouchableOpacity onPress={() => setCurrentCategory(item)} style={{ ...styles.countryBtn, padding: 8, borderRadius: 6, backgroundColor: `${item === currentCategory ? "black" : "white"}` }}>
          <Text style={{ ...styles.categoriesLabel, color: `${item === currentCategory ? "white" : "black"}` }}>{item}</Text>
          {/* {item === current ? <View style={styles.bullet} />: null} */}
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={categories} renderItem={renderCategories} keyExtractor={(index) => index} />
    </View>
  )
}

export default Destinations

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 28,
  },
  categoriesLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  dashboardIcon: {
    padding: 10,
    backgroundColor: "#e8e6e6",
    borderRadius: 8
  },
  categoriesContainer: {
    marginEnd: 16
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 100,
    backgroundColor: "green",
    marginTop: 5
  },
  countryBtn: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 20,
    // borderRadius: 4
  }
});