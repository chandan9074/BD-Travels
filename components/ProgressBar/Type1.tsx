import React from 'react'
import { View, StyleSheet, Text, ViewStyle } from "react-native"
import Theme from '../../helper/Theme';

type Props = {
    steps: string[];
    activeStep: string;
    handleActiveStep: (value: string) => void;
}

interface MyStyle extends ViewStyle {
    transitionDuration?: string;
}

const Type1 = ({ steps, activeStep, handleActiveStep }: Props) => {

    return (
        <View style={style.container}>
            {steps.map((item, index) => (
                <View key={index} style={style.barContainer}>
                    <View style={[style.btnContainer, { backgroundColor: activeStep === item ? "black" : "gray", paddingHorizontal: activeStep === item ? 12 : 9, paddingVertical: activeStep === item ? 7 : 4 }]}>
                        <Text style={[style.title, { color: activeStep === item ? "white" : "black" }]}>{item}</Text>
                    </View>
                    {steps.length - 1 > index && <View style={style.line} />}
                </View>
            ))}
        </View>
    )
}

export default Type1


const style = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    barContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    btnContainer: {
        borderRadius: 20,
    },
    title: {
        fontSize: Theme.fontSize.xxs,
        fontWeight: Theme.fontWight.bold,
    },
    line: {
        width: 20,
        borderTopWidth: 1,
        borderColor: "black",
    }
})