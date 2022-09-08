import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
// import loginBg from "../../assets/images/loginBg.jpg";
import loginBg1 from "../../assets/images/loginBg1.jpg";
import loginBg2 from "../../assets/images/loginBg2.jpg";
import { useForm } from "react-hook-form";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const win = Dimensions.get("window");

type Props = StackScreenProps<RootStackParamList, "Login", "Home">;

const Login = ({ navigation }: Props) => {
  const { register, setValue, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <SafeAreaView>
      <View style={{ flex: 1, height: "100%" }}>
        {/* <Image source={loginBg} /> */}
        <Image
          source={loginBg2}
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
          bottom: "5%",
          left: 0,
          width: "100%",
          // height: "100%",
          // backgroundColor: "black",
          // opacity: 0.4,
          zIndex: 50,
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#99424e",
            // paddingHorizontal: 50,
            width: "100%",
            paddingVertical: 15,
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
            Sing In
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{
            backgroundColor: "#99424e",
            // paddingHorizontal: 50,
            width: "100%",
            paddingVertical: 10,
            borderRadius: 50,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
            Create a new account
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={{ marginTop: 15 }}>
          <Text style={{ color: "#ab6d76", fontSize: 16 }}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          top: "15%",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "#262942",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Wild Wonders
        </Text>
        <Text style={{ fontSize: 8, fontWeight: "bold", letterSpacing: 3 }}>
          MAKE YOUR DREAM SUCCESS
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          top: "40%",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextInput
          // style={styles.input}
          onChangeText={(text) => setValue("firstName", text)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
