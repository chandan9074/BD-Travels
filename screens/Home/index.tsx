import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import Layouts from "../../Layouts";
import Banner from "../../container/Home/Banner";
import BestSelling from "../../container/Home/BestSelling";
import DealsOfTheDay from "../../container/Home/DealsOfTheDay";
import Destinations from "../../container/Home/Destinations";
import Header from "../../container/Home/Header";
import NewArrivals from "../../container/Home/NewArrivals";
import OfferBanner from "../../container/Home/OfferBanner";
import Popular from "../../container/Home/Popular";
import PopularBrands from "../../container/Home/PopularBrands";
import { useHomeContext } from "../../context/HomeProvider";

type RootStackParamList = {
    MyCart: undefined;
  };
  

type Props = StackScreenProps<RootStackParamList, 'MyCart'>;

const Home = ({ navigation }: Props) => {

  const { getProducts, getBrands } = useHomeContext();

  useEffect(() => {
    getProducts();
    getBrands();
  }, [])
  
  return (
    // <SafeAreaView style={{paddingTop: 20, backgroundColor:Theme.backgroundColor.primary}}>
    <Layouts.Primary>

      <Header navigation={navigation} />
      <Banner />
      <Destinations />
      <Popular />
      <BestSelling />
      <OfferBanner />
      <NewArrivals />
      <DealsOfTheDay />
      <PopularBrands />
      </Layouts.Primary>
    // </SafeAreaView>
  );
};

export default Home;    
