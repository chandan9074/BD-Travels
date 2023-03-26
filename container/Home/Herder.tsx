import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Herder = () => {
  return (
      <View style={styles.container}>
            <TouchableOpacity style={styles.dashboardIcon}>
                <FontAwesome5 name="list" size={20} color="#6e6b6b" />
          </TouchableOpacity>
          <Text style={styles.text}>Discover</Text>
          <TouchableOpacity style={styles.dashboardIcon}>
                <FontAwesome5 name="search" size={20} color="#6e6b6b" />
          </TouchableOpacity>
    </View>    
  )
}

export default Herder

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection:"row",
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 24,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    },
    dashboardIcon: {
        padding: 10,
        backgroundColor: "#e8e6e6",
        borderRadius: 8
  }
});