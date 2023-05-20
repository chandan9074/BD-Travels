import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { imagesDT } from '../../../types/home'
import Theme from '../../../helper/Theme';

type Props = {
    data: imagesDT;
    activeVariant: boolean;
    currIndex: number;
    handleActiveVariant: (index: number) => void;
}

const Type5 = ({ data, activeVariant, currIndex, handleActiveVariant }: Props) => {
    console.log(currIndex, "activeVariant")
    return (
        <TouchableOpacity onPress={() => handleActiveVariant(currIndex)} style={[styles.variantImgContainer, { borderWidth: 1, borderColor: activeVariant ? Theme.backgroundColor.lightBlack : "transparent" }]}>
            <Image source={data.img} style={styles.variantImg} resizeMode='contain' />
        </TouchableOpacity>
    )
}

export default Type5;

const styles = StyleSheet.create({
    variantContainer: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    variantImgContainer: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    variantImg: {
        height: 40,
        width: 40,
    }
})