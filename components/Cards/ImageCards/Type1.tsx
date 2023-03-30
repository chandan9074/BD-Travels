import React from 'react'
import { View } from 'react-native'
import { productItemsDT } from '../../../types/home'

type Props = {
    data: productItemsDT
}

const Type1 = ({data}:Props) => {
  return (
    <View>Type1</View>
  )
}

export default Type1