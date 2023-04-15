import { FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { companyData, footerQuickLinksData } from '../../data/common'
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
      </View>
      <View>
        <Text style={styles.title}>Company</Text>
        <View style={styles.companyDetailsContainer}>
          <View style={styles.detailsContainer}>
            <MaterialIcons name="location-pin" size={14} color={Theme.textColor.darkSilver} />
            <Text style={styles.detailsTitle}>{companyData.address}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <MaterialIcons name="email" size={14} color={Theme.textColor.darkSilver} />
            <Text style={styles.detailsTitle}>{companyData.email}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <MaterialIcons name="phone-in-talk" size={14} color={Theme.textColor.darkSilver} />
            <Text style={styles.detailsTitle}>{companyData.phone}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Get in Touch</Text>
        <Text style={styles.description}>Connect with us on social media to stay in the loop! We're available to answer your questions via DMs.</Text>
        <View style={styles.socialLinksContainer}>
          <FontAwesome5 style={{marginRight: 10}}  name="facebook-square" size={14} color={Theme.textColor.darkSilver} />
          <FontAwesome5 style={{marginRight: 10}} name="twitter" size={14} color={Theme.textColor.darkSilver} />
          <FontAwesome5 name="linkedin" size={14} color={Theme.textColor.darkSilver} />
        </View>
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
    color: Theme.textColor.darkSilver,
    marginBottom: 10,
  },
  companyDetailsContainer: {
    marginTop: 12,
    marginBottom: 10
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8
  },
  detailsTitle: {
    fontSize: Theme.fontSize.xs,
    color: "gray",
    fontWeight: Theme.fontWight.medium,
    marginLeft: 8
  },
  socialLinksContainer: {
    flexDirection: "row",
    alignItems: "center",
  }

})