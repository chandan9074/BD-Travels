import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Theme from "../../helper/Theme";
import { useCheckoutContext } from "../../context/CheckoutProvider";
import { CheckBox } from "react-native-elements";

const PaymentMethod = () => {
  const { getPaymentType, paymentType } = useCheckoutContext();
  const [activePayment, setActivePayment] = React.useState("creditCard");

  useEffect(() => {
    getPaymentType();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment method</Text>
      <View style={styles.paymentContainer}>
        {paymentType &&
          paymentType.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => setActivePayment(item.type)}
              style={[
                styles.paymentCard,
                {
                  borderBottomColor:
                    item.type === activePayment
                      ? Theme.backgroundColor.darkGreen
                      : Theme.backgroundColor.lightGray,
                  backgroundColor:
                    item.type === activePayment
                      ? Theme.backgroundColor.secondary
                      : "transparent",
                },
              ]}
            >
              <View style={styles.paymentTitleContainer}>
                <Image source={item.icon} style={styles.icon} />
                <Text>{item.title}</Text>
              </View>
              <CheckBox
                checked={activePayment === item.type ? true : false}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor="black"
                uncheckedColor="gray"
                size={22}
                onPress={() => setActivePayment(item.type)}
              />
            </TouchableOpacity>
          ))}
      </View>
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
  paymentContainer: {
    marginTop: 16,
  },
  paymentCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: 12,
    borderBottomWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  paymentTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
  },
  checkboxText: {
    marginLeft: 8,
  },
});
