import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Theme from '../../../helper/Theme'
import { brandDT } from '../../../types/home'

type Props = {
    data: brandDT
}

const Type2 = ({data}: Props) => {
  return (
      <TouchableOpacity style={styles.container}>
          <View>
            <Image
            source={data.img}
            style={styles.bannerImg}
            />
        </View>
    </TouchableOpacity>
  )
}

export default Type2


const styles = StyleSheet.create({
  container: {
    padding:14,
    backgroundColor: Theme.backgroundColor.secondary,
    marginRight: 12,
    marginVertical: 4,
    marginLeft: 4,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 20,
    borderWidth: 2,
    borderColor: "white",
    position: "relative",
    
  },
  bannerImg: {
    width: 40,
    height: 40,
  },
})