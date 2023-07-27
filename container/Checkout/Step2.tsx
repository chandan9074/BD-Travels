import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Theme from '../../helper/Theme'
import { useUserContext } from '../../context/UserProvider'
import Cards from '../../components/Cards'

const Step2 = () => {
    const { userInfo, getUserInfo } = useUserContext();

    useEffect(() => {
        getUserInfo();
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Shipping to</Text>
            <View style={styles.addressContainer}>
                {(userInfo.address && userInfo.address.primary) && <Cards.AddressCards.Type1 data={userInfo.address.primary} />}
            </View>
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
    },
    addressContainer: {
        marginTop: 16,
    }

})