import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    GetStarted: undefined;
    MyCart: undefined;
    AllProducts: { type: string, category: string };
    SingleProduct: { proId: string };
};

export type NavProps = StackScreenProps<RootStackParamList, "Login" | "Home" | "GetStarted" | "MyCart" | "AllProducts" | "SingleProduct">;

export type ThemeDT = {
    textColor: stringDT;
    fontSize: numberDT;
    fontWight: fontWightDT;
    backgroundColor: stringDT;
}

export type stringDT = {
    [key: string]: string;
}

export type numberDT = {
    [key: string]: number;
}

export type fontWightDT = {
    [key: string]: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
}

export type footerQuickLinksDT = {
    name: string;
    path: string;
}