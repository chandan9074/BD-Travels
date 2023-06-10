import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../../helper/Theme';
import SideDrawer from "../../components/SideDrawer";
import { useCommonContext } from '../../context/CommonProvider';
import Layouts from '../../Layouts';
import { NavProps } from '../../types/common';

type Props = {
    isSearchBar?: boolean;
    isBack?: boolean;
    children?: any;
};

const Secondary = ({ navigation, route, isBack, isSearchBar, children }: NavProps & Props) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            search: '',
        }
    });
    const [sideDrawer, setSideDrawer] = React.useState<boolean>(false);
    const { setIsScrollEnabled, isScrollEnabled } = useCommonContext();
    const onSubmit = (data: any) => console.log(data);

    const handleSideDrawer = () => {
        setSideDrawer(!sideDrawer);
        setIsScrollEnabled(!isScrollEnabled);
    }

    return (
        <View style={{ paddingHorizontal: 16, paddingTop: 20, position: "relative", zIndex: 50, }}>
            <View style={styles.container}>
                {isBack ?
                    (<TouchableOpacity onPress={() => navigation.goBack()} style={styles.dashboardIcon}>
                        <Ionicons name="chevron-back-sharp" size={20} color="#6e6b6b" />
                    </TouchableOpacity>) :
                    (<TouchableOpacity style={styles.dashboardIcon}>
                        <FontAwesome5 name="list" size={20} color="#6e6b6b" />
                    </TouchableOpacity>)}
                <View>{children}</View>
                <TouchableOpacity onPress={handleSideDrawer} style={styles.dashboardIcon}>
                    <View style={styles.cartBadgeContainer} >
                        <Text style={styles.badgeText}>10</Text>
                    </View>
                    <MaterialIcons name="shopping-cart" size={20} color="#6e6b6b" />
                </TouchableOpacity>
            </View>
            {isSearchBar && (<View style={styles.searchFilterContainer}>
                <View style={styles.searchBox}>
                    <FontAwesome5 name="search" size={16} color="#B2B2B2" />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Search"
                                placeholderTextColor="#B2B2B2"
                                style={{
                                    color: "black",
                                    marginLeft: 16,
                                    fontWeight: "500",
                                    fontSize: 14,
                                    //@ts-ignore
                                    outline: "none"
                                }}
                            />
                        )}
                        name="search"
                    />
                </View>
                <TouchableOpacity style={styles.filterBtn}>
                    <FontAwesome5 name="filter" size={14} color="white" />
                </TouchableOpacity>
            </View>)}
            <Layouts.SideDrawer.Primary sideDrawer={sideDrawer} align='right'>
                <SideDrawer.Cart.Type1 handleSideDrawer={handleSideDrawer} />
            </Layouts.SideDrawer.Primary>
        </View >
    )
}

export default Secondary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 16,
        // position: "relative",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
    },
    dashboardIcon: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 8,
        position: "relative"
    },
    searchBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: "white"
    },
    filterBtn: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: "black",
        marginLeft: 12
    },
    searchFilterContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12
    },
    cartBadgeContainer: {
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 100,
        backgroundColor: Theme.backgroundColor.lightBlack,
        position: "absolute",
        top: -12,
        right: -8
    },
    badgeText: {
        fontSize: 10,
        color: "white",
        fontWeight: Theme.fontWight.medium
    },
});