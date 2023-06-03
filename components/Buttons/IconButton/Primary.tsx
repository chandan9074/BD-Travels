import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';

type Props = TouchableOpacityProps & {
    variant: "white" | "black";
    children: React.ReactNode;
};


const variants = {
    white: {
        bgColor: "white",
        borderWidth: 2,
        borderColor: "white",
    },
    black: {
        bgColor: "black",
        borderWidth: 2,
        borderColor: "#1c1c1c",
    }
}

const Primary = ({ variant, children, ...rest }: Props) => {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: variants[variant].bgColor,
            height: 40,
            width: 40,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: variants[variant].borderWidth,
            borderColor: variants[variant].borderColor,
        },
    })
    return (
        <TouchableOpacity {...rest} style={styles.container}>
            {children}
        </TouchableOpacity>
    )
}

export default Primary