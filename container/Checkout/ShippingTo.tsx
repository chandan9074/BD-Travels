import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Theme from "../../helper/Theme";
import { useUserContext } from "../../context/UserProvider";
import Cards from "../../components/Cards";

const ShippingTo = () => {
  const { userInfo, getUserInfo } = useUserContext();
  const [activeAddress, setActiveAddress] = React.useState<string>("primary");

  const handleSelectAddress = (addressType: string) => {
    setActiveAddress(addressType);
  };

  useEffect(() => {
    console.log("userInfo");
    getUserInfo();
  });
  return (
    <>
      <Text style={styles.heading}>Shipping to</Text>
      <View style={styles.addressContainer}>
        {userInfo.address &&
          userInfo.address.map((item, index) => (
            <View style={styles.address} key={index}>
              <Cards.AddressCards.Type1
                data={item}
                handleSelectAddress={handleSelectAddress}
                activeAddress={activeAddress}
              />
            </View>
          ))}
      </View>
    </>
  );
};

export default ShippingTo;

const styles = StyleSheet.create({
  heading: {
    fontSize: Theme.fontSize.base,
    fontWeight: Theme.fontWight.semiBold,
    color: "black",
  },
  addressContainer: {
    marginTop: 16,
  },
  address: {
    marginBottom: 10,
  },
});
