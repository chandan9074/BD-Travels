import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import ProviderInjection from "./helper/ProviderInjection";
import GetStarted from "./screens/GetStarted";
import Home from "./screens/Home";
import Login from "./screens/Login";
import MyCart from "./screens/MyCart";
import AllProducts from "./screens/AllProducts";
import SingleProduct from "./screens/SingleProduct";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  GetStarted: undefined;
  MyCart: undefined;
  AllProducts: { type: string, category: string };
  SingleProduct: { id: string };
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ProviderInjection>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="SingleProduct"
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen name="Login" component={Login} />
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="GetStarted" component={GetStarted} />
          <RootStack.Screen name="MyCart" component={MyCart} />
          <RootStack.Screen name="AllProducts" component={AllProducts} />
          <RootStack.Screen name="SingleProduct" component={SingleProduct} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ProviderInjection>
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
