import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { footerQuickLinksData } from '../../data/common'
import Theme from '../../helper/Theme'
import { footerQuickLinksDT } from '../../types/common'

const Primary = () => {

  const renderLinks = ({item}: {item: footerQuickLinksDT}) => {
    return (
      <TouchableOpacity style={styles.links}>{ item.name }</TouchableOpacity>
    )
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About KenaKata</Text>
      <Text style={styles.description}>Welcome to our online marketplace! We offer a wide selection of high-quality products at affordable prices, from the latest fashion trends to cutting-edge electronics. With fast and reliable shipping, easy returns, and excellent customer service, we're committed to providing you with a seamless shopping experience from start to finish. Explore our vast selection today and find the perfect product to fit your needs and style!</Text>
      <Text style={styles.title}>Quick Links</Text>
      <View style={styles.quickLinksContainer}>
        {footerQuickLinksData.map((item, index) => (
          <TouchableOpacity style={styles.links}>{ item.name }</TouchableOpacity>
        ))}
        {/* <FlatList  showsHorizontalScrollIndicator={false} data={footerQuickLinksData} renderItem={renderLinks} keyExtractor={(item) => item.name}  /> */}
      </View>
    </View>
  )
}

export default Primary

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.backgroundColor.lightBlack,
    marginTop: 16,
    paddingVertical: 40,
    paddingHorizontal: 24
  },
  title: {
    fontSize: Theme.fontSize.base,
    fontWeight: Theme.fontWight.semiBold,
    color: "white"
  },
  description: {
    fontSize: Theme.fontSize.xs,
    fontWeight: Theme.fontWight.semiBold,
    color: "gray",
    marginTop: 12,
    marginBottom: 24
  },
  quickLinksContainer: {
    marginTop: 12,
    marginBottom: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  links: {
    flexBasis: "calc(33% - 20px)",
    fontSize: Theme.fontSize.xs,
    fontWeight: Theme.fontWight.semiBold,
    color: "gray",
    marginBottom: 10,
  }

})