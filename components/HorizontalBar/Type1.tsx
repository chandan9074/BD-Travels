import React from 'react'
import { View, StyleSheet } from 'react-native'

type Props = {
    width: number;
    height: number;
    firstBarColor: string;
    secondBarColor: string;
}

const Type1 = ({ firstBarColor, secondBarColor, width, height }: Props) => {

    const styles = StyleSheet.create({
        container: {
            width: width,
            height: height,
            flexDirection: "row",
            alignItems: "center",
        },
        firstBar: {
            width: "72%",
            height: "100%",
            backgroundColor: firstBarColor,
            borderRadius: 10,
            marginRight: "6%"
        },
        secondBar: {
            width: "22%",
            height: "100%",
            backgroundColor: secondBarColor,
            borderRadius: 10,
        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.firstBar} />
            <View style={styles.secondBar} />
        </View>
    )
}

export default Type1