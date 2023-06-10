import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Layouts from '../../Layouts'
import Headers from '../../components/Headers'
import { NavProps } from '../../types/common'
import ProgressBar from '../../components/ProgressBar'

const Checkout = ({ navigation, route }: NavProps) => {
    const steps = ["1", "2", "3"]
    const [activeStep, setActiveStep] = useState<string>(steps[0]);

    const handleActiveStep = (value: string) => {
        setActiveStep(value);
    }

    return (
        <Layouts.Screen.Secondary>
            <Headers.Secondary navigation={navigation} route={route} isBack={true} isSearchBar={false} >
                <ProgressBar.Type1 steps={steps} activeStep={activeStep} handleActiveStep={handleActiveStep} />
            </Headers.Secondary>
        </Layouts.Screen.Secondary>
    )
}

export default Checkout

const style = StyleSheet.create({

})