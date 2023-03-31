
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../../helper/Theme';
import { productItemsDT } from '../../../types/home';

type Props = {
    data: productItemsDT
}

const Type1 = ({data}:Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={data.img}
          style={styles.bannerImg}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <MaterialIcons name="favorite-outline" size={16} color="black" />
        </View>
        <Text style={styles.price}><MaterialIcons name="attach-money" size={12} color={Theme.textColor.gray} />{data.price}</Text>
        <TouchableOpacity style={styles.cartBtn}>
          Add to Cart
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Type1

const styles = StyleSheet.create({
  container: {
    padding:4,
    backgroundColor: "white",
    marginRight: 8,
    marginVertical: 4,
    marginLeft: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 20,
    flexDirection: "row",
  },
  imageContainer: {
    padding: 4,
    backgroundColor: Theme.backgroundColor.secondary,
    borderRadius: 6
  },
  bannerImg: {
    width: 70,
    height: 70,
  },
  detailsContainer: {
    padding: 8
  },
  headerContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: Theme.fontSize.small,
    fontWeight: Theme.fontWight.semiBold,
    color: Theme.textColor.primary,
    marginRight:16
  },
  price: {
    fontSize: Theme.fontSize.xxs,
    color: Theme.textColor.gray,
    fontWeight: Theme.fontWight.bold,
    marginTop: 4
  }, 
  cartBtn: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: Theme.backgroundColor.darkGreen,
    color: "white",
    fontSize: Theme.fontSize.xxs,
    fontWeight: Theme.fontWight.medium,
    marginTop: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  }
})