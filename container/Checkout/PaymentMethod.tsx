import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Theme from "../../helper/Theme";
import { useCheckoutContext } from "../../context/CheckoutProvider";

const PaymentMethod = () => {
  const { getPaymentType, paymentType } = useCheckoutContext();

  useEffect(() => {
    getPaymentType();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment method</Text>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  heading: {
    fontSize: Theme.fontSize.base,
    fontWeight: Theme.fontWight.semiBold,
    color: "black",
  },
});
