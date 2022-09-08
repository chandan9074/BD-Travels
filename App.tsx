import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import GetStarted from "./screens/GetStarted";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  GetStarted: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="GetStarted"
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="GetStarted" component={GetStarted} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
