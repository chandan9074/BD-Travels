import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView } from "react-native";
import Destinations from "../../container/Home/Destinations";
import Header from "../../container/Home/Herder";

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
  };
  

type Props = StackScreenProps<RootStackParamList, 'Login', 'Home'>;

const Home = ({navigation}:Props) => {
  return (
    <SafeAreaView style={{paddingTop: 20}}>
      <Header />
      <Destinations />
    </SafeAreaView>
  );
};

export default Home;    
