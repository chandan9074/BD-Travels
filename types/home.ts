import { ImageSourcePropType } from 'react-native';

export type productDT = {
    popular: {
        id: string;
        category: string;
        items: productItemsDT[];
    }[]
}

export type productItemsDT = {
    id: string;
    type: string;
    brand: string;
    title: string;
    price: number;
    img: ImageSourcePropType;
}