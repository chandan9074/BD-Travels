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
    textColor: textColorDT;
    fontSize: fontSizeDT;
    fontWight: fontWightDT;
    backgroundColor: backgroundColorDT;
}

export type textColorDT = {
    primary: string;
    gray: string;
    darkSilver: string;
}

export type backgroundColorDT = {
    primary: string;
    secondary: string;
    darkGreen: string;
    lightBlack: string;
    darkGray: string;
    darkGray2: string;
}

/**
 * Represents a set of text colors used in the application.
 * @typedef  {Object} fontSizeDT
 * @property {string} xxs - 12px
 * @property {string} xs - 13px
 * @property {string} small - 14px
 * @property {string} base - 16px
 * @property {string} lg - 18px
 * @property {string} xl - 20px
 * @property {string} 2xl - 24px
 * @property {string} 3xl - 28px
 * @property {string} 4xl - 32px
 */
export type fontSizeDT = {
    xxs: number;
    xs: number;
    small: number;
    base: number;
    lg: number;
    xl: number;
    "2xl": number;
    "3xl": number;
    "4xl": number;
}

export type fontWightDT = {
    "thin": "400";
    "medium": "500";
    "semiBold": "600";
    "bold": "700";
    "extraBold": "900";
}

export type footerQuickLinksDT = {
    name: string;
    path: string;
}