import React from 'react'
import { View, Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native'
import Theme from '../../../helper/Theme';

type Props = TouchableOpacityProps & {
    label: string;
    variant: "white" | "black";
};


const variants = {
    white: {
        bgColor: "white",
        labelColor: "black"
    },
    black: {
        bgColor: "black",
        labelColor: "white"
    }
}

const Primary = ({ label, variant, ...rest }: Props) => {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: variants[variant].bgColor,
            padding: 10,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
        },
        label: {
            color: variants[variant].labelColor,
            fontSize: Theme.fontSize.small,
            fontWeight: Theme.fontWight.bold,
        }
    })
    return (
        <TouchableOpacity {...rest} style={styles.container}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Primary