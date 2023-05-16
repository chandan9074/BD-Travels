import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { Dimensions } from "react-native";

import { StackScreenProps } from "@react-navigation/stack";
import startBg1 from "../../assets/images/startBg1.jpg";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const win = Dimensions.get("window");

type Props = StackScreenProps<RootStackParamList, "Login", "Home">;

const GetStarted = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={{ paddingTop: 50, position: "relative", height: "100%" }}>
      <View style={{ flex: 1, height: "100%" }}>
        {/* <Image source={loginBg} /> */}
        <Image
          source={startBg1}
          resizeMode="cover"
          style={{ width: "100%", height: win.height }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0.2,
          zIndex: 20,
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          // height: "100%",
          // backgroundColor: "black",
          // opacity: 0.4,
          zIndex: 50,
          //   alignItems: "center",
          paddingHorizontal: 25,
        }}
      >
        <Text style={{ color: "#dbd7d8", fontSize: 28, fontWeight: "bold" }}>
          Get ready for your lifetime journey!
        </Text>
        <Text
          style={{
            color: "#c4c2c3",
            fontSize: 14,
            fontWeight: "600",
            marginTop: 10,
            textAlign: "justify",
          }}
        >
          We live in a wonderful world that is full of beauty, charm and
          adventure. There is no end to the adventures we can have if only we
          seek them with our eyes open.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#e8e6e7",
            paddingVertical: 15,
            marginTop: 30,
            // borderTopLeftRadius: 15,
            // borderTopRightRadius: 15,
            borderRadius: 15,
            marginBottom: 15,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              color: "black",
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
