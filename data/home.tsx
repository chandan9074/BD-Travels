import { brandDT, cartItemsDT, productDT } from "../types/home";

import adidas from "../assets/images/adidas.png";
import mcdonalds from "../assets/images/mcdonalds.png";
import shoe from "../assets/images/shoe.png";


export const categories = ["Clothing and Apparel", "Electronics and Gadgets", "Beauty and Personal Care", "Sports and Outdoors", "Food and Beverage", "Books and Media", "Toys and Games", "Baby and Kids", "Health and Wellness"];

export const products: productDT = {
    popular: [
        {
            id: "1",
            category: "Clothing and Apparel",
            items: [
                {
                    id: "1",
                    type: "shirt",
                    brand: "Yellow",
                    title: "Smart Shirt",
                    price: 500,
                    img: shoe,
                },
                {
                    id: "2",
                    type: "t-shirt",
                    brand: "Easy",
                    title: "Man Shirt",
                    price: 500,
                    img: shoe,
                },
                {
                    id: "3",
                    type: "shirt",
                    brand: "Yellow",
                    title: "Summer Shirt",
                    price: 500,
                    img: shoe,
                },
                {
                    id: "4",
                    type: "t-shirt",
                    brand: "Easy",
                    title: "Winter Shirt",
                    price: 500,
                    img: shoe,
                },
                {
                    id: "5",
                    type: "t-shirt",
                    brand: "Yellow",
                    title: "Woman Shirt",
                    price: 500,
                    img: shoe,
                },
            ]
        },
        {
            id: "2",
            category: "Electronics and Gadgets",
            items: [
                {
                    id: "1",
                    type: "phone",
                    brand: "Apple",
                    title: "Iphone 14 pro",
                    price: 120000,
                    img: shoe,
                },
                {
                    id: "2",
                    type: "Laptop",
                    brand: "HP",
                    title: "Hp core I-9",
                    price: 500,
                    img: shoe,
                },
                {
                    id: "3",
                    type: "Headphone",
                    brand: "Beats",
                    title: "B-4584b",
                    price: 500,
                    img: shoe,
                },
                {
                    id: "4",
                    type: "smart-watch",
                    brand: "Xiaomi",
                    title: "Xiaomi 4bc",
                    price: 500,
                    img: shoe,
                },
                {
                    id: "5",
                    type: "Laptop",
                    brand: "Apple",
                    title: "Macbook Air",
                    price: 500,
                    img: shoe,
                },
            ]
        },
        {
            id: "3",
            category: "Beauty and Personal Care",
            items: [
                {
                    id: "1",
                    type: "cream",
                    brand: "Navia",
                    title: "Navia man",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "2",
                    type: "cream",
                    brand: "Navia",
                    title: "Navia man",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "3",
                    type: "perfume",
                    brand: "Navia",
                    title: "Navia man",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "4",
                    type: "perfume",
                    brand: "Navia",
                    title: "Navia man",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "5",
                    type: "cream",
                    brand: "Navia",
                    title: "Navia man",
                    price: 1200,
                    img: shoe,
                },
            ]
        },
        {
            id: "4",
            category: "Sports and Outdoors",
            items: [
                {
                    id: "1",
                    type: "shoes",
                    brand: "Nike",
                    title: "Nike gold-45c",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "2",
                    type: "shoes",
                    brand: "Nike",
                    title: "Nike gold-45c",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "3",
                    type: "football",
                    brand: "Nike",
                    title: "Nike gold-45c",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "4",
                    type: "football",
                    brand: "Nike",
                    title: "Nike gold-45c",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "5",
                    type: "shoe",
                    brand: "Nike",
                    title: "Nike gold-45c",
                    price: 1200,
                    img: shoe,
                },
            ]
        },
        {
            id: "5",
            category: "Food and Beverage",
            items: [
                {
                    id: "1",
                    type: "pizza",
                    brand: "Pizza Hut",
                    title: "Gummy Big-12",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "2",
                    type: "pizza",
                    brand: "Pizza Hut",
                    title: "Gummy Big-12",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "3",
                    type: "burger",
                    brand: "Pizza Hut",
                    title: "Gummy Big-12",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "4",
                    type: "pizza",
                    brand: "Pizza Hut",
                    title: "Gummy Big-12",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "5",
                    type: "burger",
                    brand: "Pizza Hut",
                    title: "Gummy Big-12",
                    price: 1200,
                    img: shoe,
                },
            ]
        },
        {
            id: "6",
            category: "Books and Media",
            items: [
                {
                    id: "1",
                    type: "thriller",
                    brand: "ABC Publication",
                    title: "Gummy 12c",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "2",
                    type: "hunted",
                    brand: "ABC Publication",
                    title: "Gummy 12c",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "3",
                    type: "thriller",
                    brand: "ABC Publication",
                    title: "Gummy 12c",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "4",
                    type: "drama",
                    brand: "ABC Publication",
                    title: "Gummy 12c",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "5",
                    type: "history",
                    brand: "ABC Publication",
                    title: "Gummy 12c",
                    price: 1200,
                    img: shoe,
                },
            ]
        },
        {
            id: "7",
            category: "Toys and Games",
            items: [
                {
                    id: "1",
                    type: "games",
                    brand: "FIFA",
                    title: "FIFA-2023",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "2",
                    type: "games",
                    brand: "FIFA",
                    title: "FIFA-2023",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "3",
                    type: "games",
                    brand: "FIFA",
                    title: "FIFA-2023",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "4",
                    type: "games",
                    brand: "FIFA",
                    title: "FIFA-2023",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "5",
                    type: "games",
                    brand: "FIFA",
                    title: "FIFA-2023",
                    price: 1200,
                    img: shoe,
                },
            ]
        },
        {
            id: "8",
            category: "Baby and Kids",
            items: [
                {
                    id: "1",
                    type: "milk",
                    brand: "Nido",
                    title: "Nido 3+",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "2",
                    type: "vitamin",
                    brand: "Nido",
                    title: "Nido 3+",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "3",
                    type: "milk",
                    brand: "Nido",
                    title: "Nido 3+",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "4",
                    type: "vitamin",
                    brand: "Nido",
                    title: "Nido 3+",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "5",
                    type: "milk",
                    brand: "Nido",
                    title: "Nido 3+",
                    price: 1200,
                    img: shoe,
                },
            ]
        },
        {
            id: "9",
            category: "Health and Wellness",
            items: [
                {
                    id: "1",
                    type: "milk",
                    brand: "Nido",
                    title: "Nido 3+",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "2",
                    type: "vitamin",
                    brand: "Nido",
                    title: "Nido 3+",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "3",
                    type: "milk",
                    brand: "Nido",
                    title: "Nido 3+",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "4",
                    type: "vitamin",
                    brand: "Nido",
                    title: "Nido 3+",
                    price: 1200,
                    img: shoe,
                },
                {
                    id: "5",
                    type: "milk",
                    brand: "Nido",
                    title: "Nido 3+",
                    price: 1200,
                    img: shoe,
                },
            ]
        },

    ]
}

export const brands: brandDT[] = [
    {
        name: "Adidas",
        img: adidas
    },
    {
        name: "MCdonalds",
        img: mcdonalds
    },
    {
        name: "Adidas",
        img: adidas
    },
    {
        name: "MCdonalds",
        img: mcdonalds
    },
    {
        name: "Adidas",
        img: adidas
    },
    {
        name: "MCdonalds",
        img: mcdonalds
    }
]

export const cartItems: cartItemsDT[] = [
    {
        userId: "1idf943",
        id: "1",
        type: "milk",
        brand: "Nido",
        title: "Nido 3+",
        shortDescription: "strong and healthy",
        longDescription: "Make your child strong and healthy with Nido 3+",
        price: 1200,
        img: shoe,
        quantity: 3
    },
    {
        userId: "1idd943",
        id: "2",
        type: "milk",
        brand: "Nido",
        title: "Nido 3+",
        shortDescription: "strong and healthy",
        longDescription: "Make your child strong and healthy with Nido 3+",
        price: 1200,
        img: shoe,
        quantity: 2
    },
    {
        userId: "1idf943",
        id: "1",
        type: "milk",
        brand: "Nido",
        title: "Nido 3+",
        shortDescription: "strong and healthy",
        longDescription: "Make your child strong and healthy with Nido 3+",
        price: 1200,
        img: shoe,
        quantity: 3
    },
    {
        userId: "1idd943",
        id: "2",
        type: "milk",
        brand: "Nido",
        title: "Nido 3+",
        shortDescription: "strong and healthy",
        longDescription: "Make your child strong and healthy with Nido 3+",
        price: 1200,
        img: shoe,
        quantity: 2
    },
    {
        userId: "1idf943",
        id: "1",
        type: "milk",
        brand: "Nido",
        title: "Nido 3+",
        shortDescription: "strong and healthy",
        longDescription: "Make your child strong and healthy with Nido 3+",
        price: 1200,
        img: shoe,
        quantity: 3
    },
]