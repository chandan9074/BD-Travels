import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../../helper/Theme'

type Props = {
    handleSideDrawer: () => void;
}

const Type1 = ({ handleSideDrawer }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer} >
                <Text style={styles.heading}>Your cart</Text>
                <TouchableOpacity onPress={handleSideDrawer} style={styles.closeBtn}>
                    <MaterialIcons name="close" size={14} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Type1;

const styles = StyleSheet.create({
    container: {
        height: "100vh",
        paddingHorizontal: 20,
        paddingVertical: 32,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    heading: {
        fontSize: Theme.fontSize.base,
        fontWeight: Theme.fontWight.semiBold,
        color: "white",
    },
    closeBtn: {
        padding: 5,
        borderRadius: 100,
        backgroundColor: "white",
    }
})