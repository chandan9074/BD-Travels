
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../../helper/Theme';
import { productItemsDT } from '../../../types/home';

type Props = {
  data: productItemsDT
}

const Type1 = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={data.img}
          style={styles.bannerImg}
        />
      </View>
      <View style={styles.cardTopPart}>
        <Text style={styles.price}><MaterialIcons name="attach-money" size={12} color={Theme.textColor.primary} />{data.price}</Text>
        <TouchableOpacity>
          <MaterialIcons name="favorite-outline" size={16} color="black" />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.detailsContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <Text style={styles.price}><MaterialIcons name="attach-money" size={12} color={Theme.textColor.gray} />{data.price}</Text>
        <TouchableOpacity style={styles.cartBtn}>
          Add to Cart
        </TouchableOpacity>
      </View> */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.viewCartContainer}>
          <View style={styles.viewContainer}>
            <MaterialIcons name="remove-red-eye" size={16} color={Theme.textColor.gray} />
            <Text style={styles.viewTitle}>29</Text>
          </View>
          <TouchableOpacity style={styles.cartBtnContainer}>
            <MaterialIcons name="shopping-cart" size={11} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Type1

const styles = StyleSheet.create({
  container: {
    padding: 4,
    backgroundColor: Theme.backgroundColor.secondary,
    marginRight: 8,
    marginVertical: 4,
    marginLeft: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 20,
    width: 155,
    borderWidth: 4,
    borderColor: "white",
    position: "relative",

  },
  imageContainer: {
    padding: 4,
    // backgroundColor: Theme.backgroundColor.secondary,
    borderRadius: 6,
    width: "100%",
    alignItems: "center"
  },
  bannerImg: {
    width: 110,
    height: 90,
  },
  detailsContainer: {
    padding: 8
  },
  headerContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: Theme.fontSize.small,
    fontWeight: Theme.fontWight.bold,
    color: Theme.textColor.primary,
    marginRight: 16
  },
  price: {
    fontSize: Theme.fontSize.xxs,
    color: Theme.textColor.primary,
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
  },
  cardTopPart: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 0,
    padding: 6,

  },
  viewContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewTitle: {
    fontSize: Theme.fontSize.xxs,
    fontWeight: Theme.fontWight.semiBold,
    color: Theme.textColor.primary
  },
  viewCartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8
  },
  cartBtnContainer: {
    padding: 6,
    backgroundColor: Theme.backgroundColor.lightBlack,
    borderRadius: 100,
  }

})