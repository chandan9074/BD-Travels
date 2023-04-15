import React from 'react'
import { Image, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import bn_shampo from "../../assets/images/bn_shampo.jpg"
import Theme from '../../helper/Theme'

const OfferBanner = () => {
    return (
        <View style={styles.container}>
            <Image source={bn_shampo} style={styles.bannerImg} />
            <View style={styles.offerBtn} >
                <TouchableOpacity>
                    <Text style={styles.btnText}>Show offers</Text>
                </TouchableOpacity>
            </View>
      </View>
  )
}

export default OfferBanner;

const styles = StyleSheet.create({
  container: {
        marginTop: 16,
        paddingHorizontal: 16,
        position: "relative",
        width: "100%",
        height: 140,
    },
    bannerImg: {
        width: "100%",
        height: "100%",
        borderRadius: 8
    },
    offerBtn: {
        position: "absolute",
        bottom: 15,
        right: 75,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: "white",
        borderRadius: 4
    },
    btnText: {
        fontSize: Theme.fontSize.xxs,
        color: Theme.textColor.primary,
        fontWeight: Theme.fontWight.semiBold
    }
});