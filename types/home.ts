import { ImageSourcePropType } from 'react-native';

export type productDT = {
    [key: string]: productCategoryDT[]
}

export type productCategoryDT = {
    id: string;
    category: string;
    items: productItemsDT[];
}

export type productItemsDT = {
    id: string;
    type: string;
    brand: string;
    title: string;
    price: number;
    shortDescription: string;
    longDescription: string;
    img: ImageSourcePropType;
}

export type brandDT = {
    name: string;
    img: ImageSourcePropType
}

export type cartItemsDT = {
    userId: string;
    id: string;
    type: string;
    brand: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    price: number;
    img: ImageSourcePropType;
    quantity: number;
}

export type singleProductDT = {
    userId: string;
    id: string;
    type: string;
    brand: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    specifications: string;
    category: string;
    rating: number;
    price: number;
    offerPrice: number;
    images: imagesDT[];
    stock: number;
}

export type imagesDT = {
    id: string;
    img: ImageSourcePropType;
    secondaryImg: ImageSourcePropType[];
}