import { StackScreenProps } from "@react-navigation/stack";
import CheckBox from "expo-checkbox";
import React from "react";
import { Dimensions, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
// import loginBg from "../../assets/images/loginBg.jpg";
import { FontAwesome5 } from '@expo/vector-icons';
import { Controller, useForm } from "react-hook-form";
import loginBg2 from "../../assets/images/loginBg2.jpg";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const win = Dimensions.get("window");

type Props = StackScreenProps<RootStackParamList, "Login", "Home">;

const Login = ({ navigation }: Props) => {
  const { control, handleSubmit, formState: { errors } } = useForm({defaultValues: {
      username: '',
      password: '',
      remember:false,
    }});
  const onSubmit = (data: any) => console.log(data);
  return (
    <SafeAreaView style={{ position: "relative", height: "100%" }}>
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
          bottom: 0,
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
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
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
        {/* <TouchableOpacity style={{ marginTop: 10 }}>
          <Text style={{ color: "#ab6d76", fontSize: 12 }}>Don't have an account? <Text style={{textDecorationLine:"underline"}}>Register</Text></Text>
        </TouchableOpacity> */}
      </View>
      <View
        style={{
          position: "absolute",
          top: "15%",
          alignItems: "center",
          width: "100%",
          zIndex:50
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
          bottom: "5%",
          alignItems: "center",
          width: "100%",
          zIndex: 50,
          paddingHorizontal:30
        }}
      >
        <View
          style={{
              borderWidth: 2,
              borderColor: "#FFC4C4",
              width: "100%",
              // padding: 10,
              borderRadius: 10,
              position: "relative",
            justifyContent: "center",
            marginBottom:20
              }}
        >
          <View
            style={{
              position: "relative",
              top: 0,
              left: 0,
              width: "100%",
              // height: "100%",
              backgroundColor: "#FFC4C4",
              padding: 20,
              opacity: 0.2,
              borderRadius: 10,
              // zIndex: 20,
            }}
          />
          
          <View style={{
            position: "absolute",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
            width:"90%"
          }}>
            <FontAwesome5 name="user-alt" size={14} color="#F1EFDC" />
            <Controller
            control={control}
            rules={{
              required: true,
              }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                // style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="abc"
                placeholderTextColor="#F1EFDC"
                style={{
                  color: "white", 
                  marginLeft: 10,
                  //@ts-ignore
                  outline: 'none'
                }}
                  />
              )}
            name="username"
          />
          </View>
        </View>
        

        <View
          style={{
              borderWidth: 2,
              borderColor: "#FFC4C4",
              width: "100%",
              // padding: 10,
              borderRadius: 10,
              position: "relative",
            justifyContent: "center",
              // marginTop:20
              }}
        >
          <View
            style={{
              position: "relative",
              top: 0,
              left: 0,
              width: "100%",
              // height: "100%",
              backgroundColor: "#FFC4C4",
              padding: 20,
              opacity: 0.2,
              borderRadius: 10,
              // zIndex: 20,
            }}
          />
          
          <View style={{
            position: "absolute",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
            width:"90%"
          }}>
            <FontAwesome5 name="user-alt" size={14} color="#F1EFDC" />
            <Controller
            control={control}
            rules={{
              required: true,
              }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                // style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="******"
                placeholderTextColor="#F1EFDC"
                style={{
                  color: "white", 
                  marginLeft: 10,
                  //@ts-ignore
                  outline: 'none'
                }}
                  />
              )}
            name="password"
          />
          </View>
        </View>
        <View style={{ marginTop: 10, width:"100%", flexDirection:"row", justifyContent:"space-between" }}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Controller
            control={control}
            rules={{
              required: false,
              }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CheckBox
                // style={styles.input}
                onValueChange={onChange}
                value={value}
                color="#FFC4C4"
                style={{width:13, height:13}}
                  />
              )}
            name="remember"
            />
            <Text style={{ color: "#F1EFDC", fontSize: 12, textAlign:"right", marginLeft:7 }}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: "#F1EFDC", fontSize: 12, textAlign:"right", textDecorationLine:"underline" }}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            backgroundColor: "#99424e",
            // paddingHorizontal: 50,
            width: "100%",
            paddingVertical: 15,
            borderRadius: 15,
            marginTop:30
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
            Sing In
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: 10, flexDirection:"row", alignItems:"center" }}>
          <Text style={{ color: "#ab6d76", fontSize: 12 }}>Don't have an account?</Text>
          <TouchableOpacity><Text style={{ textDecorationLine: "underline", color: "#ab6d76", fontSize: 12 }}> Register</Text></TouchableOpacity>
        </View>
        <Text style={{ color: "#ab6d76", fontSize: 12, marginTop: 10 }}>or</Text>
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Text style={{ color: "#ab6d76", fontSize: 16 }}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

