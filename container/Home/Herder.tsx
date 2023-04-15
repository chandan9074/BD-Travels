import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modals from '../../components/Modals';
import Theme from '../../helper/Theme';



const Herder = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({defaultValues: {
      search: '',
    }});
  const onSubmit = (data: any) => console.log(data);
  return (
    <View style={{paddingHorizontal: 16}}>
      <View style={styles.container}>
          <TouchableOpacity style={styles.dashboardIcon}>
            <FontAwesome5 name="list" size={20} color="#6e6b6b" />
          </TouchableOpacity>
          <Text style={styles.text}>Discover</Text>
        <TouchableOpacity style={styles.dashboardIcon}>
          <View style={styles.cartBadgeContainer} >
            <Text style={styles.badgeText}>10</Text>
          </View>
          <MaterialIcons name="shopping-cart" size={20} color="#6e6b6b" />
        </TouchableOpacity>
        <View>
          <Modals.CartModal.Type1 />
        </View>
      </View>
      <View style={styles.searchFilterContainer}>
        <View style={styles.searchBox}>
          <FontAwesome5 name="search" size={16} color="#B2B2B2" />
          <Controller
            control={control}
            rules={{
              required: true,
              }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Search"
                placeholderTextColor="#B2B2B2"
                style={{
                  color: "black", 
                  marginLeft: 16,
                  fontWeight: "500",
                  fontSize: 14,
                  //@ts-ignore
                  outline: "none"
                }}
                  />
              )}
            name="search"
          />
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <FontAwesome5 name="filter" size={14} color="white" />
        </TouchableOpacity>
      </View>
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
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    },
    dashboardIcon: {
        padding: 10,
        backgroundColor: "white",
      borderRadius: 8,
        position: "relative"
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "white"
  },
  filterBtn: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "black",
    marginLeft: 12
  },
  searchFilterContainer: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12
  },
  cartBadgeContainer: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: Theme.backgroundColor.lightBlack,
    position: "absolute",
    top: -12,
    right: -8
  },
  badgeText: {
    fontSize: 10,
    color: "white",
    fontWeight: Theme.fontWight.medium
  }
    
});