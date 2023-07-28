import React from "react";
import { StyleSheet, View } from "react-native";
import ShippingTo from "./ShippingTo";
import PaymentMethod from "./PaymentMethod";

const Step2 = () => {
  return (
    <View style={styles.container}>
      <ShippingTo />
      <PaymentMethod />
    </View>
  );
};

export default Step2;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
