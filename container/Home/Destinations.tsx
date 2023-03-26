import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { countries } from "../../data/home"

const Destinations = () => {
    const [current, setCurrent] = useState<string>(countries[0])

    const renderCountries = ({ item }: { item: string }) => {
        return (
            <View style={styles.countriesContainer}>
                <TouchableOpacity onPress={()=> setCurrent(item)} style={styles.countryBtn}>
                    <Text style={{ ...styles.countriesLabel, color: `${item === current ? "green" : "black"}` }}>{item}</Text>
                    {item === current ? <View style={styles.bullet} />: null}
                </TouchableOpacity>
            </View>
        )
    }
    
  return (
      <View style={styles.container}>
          <FlatList horizontal showsHorizontalScrollIndicator={false} data={countries} renderItem={renderCountries} keyExtractor={(index) => index} />
    </View>
  )
}

export default Destinations

const styles = StyleSheet.create({
  container: {
    flex: 1,
        paddingHorizontal: 24,
    marginTop: 28,
  },
  countriesLabel: {
    fontSize: 14,
    fontWeight: "700",
  },
  dashboardIcon: {
    padding: 10,
    backgroundColor: "#e8e6e6",
    borderRadius: 8
    },
    countriesContainer: {
      marginEnd: 16
    },
    bullet: {
        width: 6,
        height: 6,
        borderRadius: 100,
        backgroundColor: "green",
        marginTop:5
    },
    countryBtn: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center"
    }
});