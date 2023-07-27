import React from 'react'
import { addressDT } from '../../../types/user'
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Theme from '../../../helper/Theme';

type Props = {
    data: addressDT;
}

const Type1 = ({ data }: Props) => {
    return (
        <View style={styles.container}>
            <CheckBox
                // title="My Checkbox"
                checked={true}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor="black"
                uncheckedColor="gray"
                size={22}
            // onPress={handleSelect}
            />
            <View>
                <Text style={styles.heading}>{data.title}</Text>
                <Text numberOfLines={2} style={styles.description}>{data.address}</Text>
            </View>
        </View>
    )
}

export default Type1

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 20,
        backgroundColor: "white",
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
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
        // marginBottom: 4,
        marginTop: 4,
        width: '80%',
    }

})