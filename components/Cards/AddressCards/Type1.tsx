import React from "react";
import { addressDT } from "../../../types/user";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import Theme from "../../../helper/Theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

type Props = {
  data: addressDT;
  handleSelectAddress: (addressType: string) => void;
  activeAddress: string;
};

const Type1 = ({ data, activeAddress, handleSelectAddress }: Props) => {
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 20,
      backgroundColor:
        activeAddress === data.type ? "white" : Theme.backgroundColor.secondary,
      flexDirection: "row",
      alignItems: "flex-start",
      borderWidth: 1,
      borderColor:
        activeAddress === data.type
          ? Theme.backgroundColor.darkGreen
          : "transparent",
      position: "relative",
    },
    checkboxContainer: {
      backgroundColor: "transparent",
      borderWidth: 0,
      padding: 0,
    },
    checkboxText: {
      marginLeft: 8,
    },
    heading: {
      fontSize: Theme.fontSize.base,
      fontWeight: Theme.fontWight.bold,
      color: Theme.textColor.primary,
      marginBottom: 4,
      marginTop: 4,
    },
    description: {
      fontSize: Theme.fontSize.xs,
      fontWeight: Theme.fontWight.medium,
      color: Theme.textColor.primary,
      marginTop: 4,
      width: "80%",
    },
    editBtn: {
      position: "absolute",
      right: 12,
      top: 8,
    },
  });

  return (
    <View style={styles.container}>
      <CheckBox
        checked={activeAddress === data.type ? true : false}
        containerStyle={styles.checkboxContainer}
        textStyle={styles.checkboxText}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checkedColor="black"
        uncheckedColor="gray"
        size={22}
        onPress={() => handleSelectAddress(data.type)}
      />
      <View>
        <Text style={styles.heading}>{data.title}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {data.address}
        </Text>
      </View>
      <TouchableOpacity style={styles.editBtn}>
        <MaterialIcons name="mode-edit" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Type1;
