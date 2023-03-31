import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Banner from "../../container/Home/Banner";
import Destinations from "../../container/Home/Destinations";
import Header from "../../container/Home/Herder";
import Popular from "../../container/Home/Popular";
import { useHomeContext } from "../../context/HomeProvider";
import Theme from "../../helper/Theme";

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
  };
  

type Props = StackScreenProps<RootStackParamList, 'Login', 'Home'>;

const Home = ({ navigation }: Props) => {

  const { getProducts } = useHomeContext();

  useEffect(() => {
    getProducts();
  }, [])
  
  return (
    <SafeAreaView style={{paddingTop: 20, backgroundColor:Theme.backgroundColor.primary}}>
      <Header />
      <Banner />
      <Destinations />
      <Popular />
    </SafeAreaView>
  );
};

export default Home;    
