import React, { ReactNode } from 'react'
import { View, ViewStyle, StyleSheet } from 'react-native'
import Theme from '../../helper/Theme';

interface MyStyle extends ViewStyle {
    transitionDuration?: string;
}

type Props = {
    sideDrawer: boolean;
    children: any;
    align: 'left' | 'right';
}

const Primary = ({ sideDrawer, align, children }: Props) => {

    const style = StyleSheet.create({
        sideDrawerContainer: {
            // transitionProperty: 'opacity',
            transitionDuration: '0.5s',
            opacity: sideDrawer ? 1 : 0,
            position: 'absolute',
            [align === "left" ? "left" : "right"]: sideDrawer ? 0 : '-100%',
            top: 0,
            width: '90%',
            display: 'flex',
            flex: 1,
            backgroundColor: Theme.backgroundColor.lightBlack,
        } as MyStyle,
        outlay: {
            transitionProperty: 'opacity',
            transitionDuration: '0.5s',
            opacity: sideDrawer ? 0.5 : 0,
            position: 'absolute',
            right: sideDrawer ? 0 : '-100%',
            top: 0,
            width: '100%',
            height: '100vh',
            display: 'flex',
            flex: 1,
            backgroundColor: Theme.backgroundColor.lightBlack,
        } as MyStyle,
    })


    return (
        <>
            <View style={style.outlay} />
            <View style={style.sideDrawerContainer}>{children}</View>
        </>
    )
}

export default Primary