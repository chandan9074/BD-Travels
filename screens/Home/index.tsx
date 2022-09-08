import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {StackScreenProps} from "@react-navigation/stack"

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
  };
  

type Props = StackScreenProps<RootStackParamList, 'Login', 'Home'>;

const Home = ({navigation}:Props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={()=> navigation.navigate("Login")}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;    
