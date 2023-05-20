import React from 'react';
import { SafeAreaView, ScrollView, Dimensions } from 'react-native';
import Footer from '../../components/Footer';
import Theme from '../../helper/Theme';
import { useCommonContext } from '../../context/CommonProvider';

type Props = {
    children?: any;
};

const Secondary = ({ children }: Props) => {
    const { isScrollEnabled } = useCommonContext()

    const { height: windowHeight } = Dimensions.get('window');
    const height = isScrollEnabled ? windowHeight : undefined;
    return (
        <SafeAreaView style={{ backgroundColor: Theme.backgroundColor.primary, height }}>
            <ScrollView scrollEnabled={false}>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Secondary