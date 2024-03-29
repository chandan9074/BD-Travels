import React, { useEffect } from "react";
import Layouts from "../../Layouts";
import Banner from "../../container/Home/Banner";
import BestSelling from "../../container/Home/BestSelling";
import DealsOfTheDay from "../../container/Home/DealsOfTheDay";
import Destinations from "../../container/Home/Destinations";
import NewArrivals from "../../container/Home/NewArrivals";
import OfferBanner from "../../container/Home/OfferBanner";
import Popular from "../../container/Home/Popular";
import PopularBrands from "../../container/Home/PopularBrands";
import { useProductContext } from "../../context/ProductProvider";
import Headers from "../../components/Headers";
import { NavProps } from "../../types/common";

const Home = ({ navigation, route }: NavProps) => {

  const { getProducts, getBrands } = useProductContext();

  useEffect(() => {
    getProducts();
    getBrands();
  }, [])

  return (
    // <SafeAreaView style={{paddingTop: 20, backgroundColor:Theme.backgroundColor.primary}}>
    <Layouts.Screen.Primary>
      <Headers.Primary navigation={navigation} route={route} title="Home" />
      <Banner />
      <Destinations />
      <Popular navigation={navigation} route={route} />
      <BestSelling />
      <OfferBanner />
      <NewArrivals />
      <DealsOfTheDay />
      <PopularBrands />
    </Layouts.Screen.Primary>
    // </SafeAreaView>
  );
};

export default Home;    
