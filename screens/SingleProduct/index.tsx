import React from 'react'
import { Text, View } from 'react-native'
import Layouts from '../../Layouts'
import Headers from '../../components/Headers'
import { NavProps } from '../../types/common'

const SingleProduct = ({ navigation, route }: NavProps) => {
    //@ts-ignore
    // const { proId } = route.params
    // console.log(proId, "proId")
    return (
        <Layouts.Screen.Primary>
            <Headers.Primary navigation={navigation} route={route} title={"Product"} isBack={true} isSearchBar={false} />
        </Layouts.Screen.Primary>
    )
}

export default SingleProduct