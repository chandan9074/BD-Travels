import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Layouts from '../../Layouts'
import Headers from '../../components/Headers'
import { NavProps } from '../../types/common'
import ProgressBar from '../../components/ProgressBar'
import Step1 from '../../container/Checkout/Step1'
import Step2 from '../../container/Checkout/Step2'
import Step3 from '../../container/Checkout/Step3'

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
            <View>
                {activeStep === steps[0] ? <Step1 /> : activeStep === steps[1] ? <Step2 /> : <Step3 />}
            </View>
        </Layouts.Screen.Secondary>
    )
}

export default Checkout
