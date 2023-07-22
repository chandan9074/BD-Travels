import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Theme from '../../helper/Theme'

const Step2 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Shipping to</Text>
        </View>
    )
}

export default Step2

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    heading: {
        fontSize: Theme.fontSize.base,
        fontWeight: Theme.fontWight.semiBold,
        color: "black"
    }

})