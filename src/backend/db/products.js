import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "FRIENDS T-shirt",
    availbility: "In stock",
    price: "499",
    categoryName: "F.R.I.E.N.D.S.",
    photo: "../assets/friends1.jpg",
    fastDelivery: false,
    rating : "3"
  },
  {
    _id: uuid(),
    title: "Captain-America",
    availbility: "Out Of Stock",
    price: "450",
    categoryName: "Avengers",
    photo: "../assets/captain-america.jpg",
    fastDelivery: true,
    rating : "5"
  },
  {
    _id: uuid(),
    title: "Hogwarts",
    availbility: "Out Of Stock",
    price: "400",
    categoryName: "Harry Potter",
    photo: "../assets/hogwarts.jpg",
    fastDelivery: true,
    rating : "4"
  },
  {
    _id: uuid(),
    title: "Dobby",
    availbility: "In stock",
    price: "479",
    categoryName: "Harry Potter",
    photo: "../assets/dobby.jpg",
    fastDelivery: false,
    rating : "3"
  },
  {
    _id: uuid(),
    title: "Floopy",
    availbility: "In stock",
    price: "459",
    categoryName: "F.R.I.E.N.D.S.",
    photo: "../assets/floopy.jpg",
    fastDelivery: true,
    rating : "1"
  },
  {
    _id: uuid(),
    title: "The Trio",
    availbility: "Out Of Stock",
    price: "400",
    categoryName: "Harry Potter",
    photo: "../assets/hogwarts.jpg",
    fastDelivery: true,
    rating : "4"
  },
  {
    _id: uuid(),
    title: "Iron-Man",
    availbility: "In stock",
    price: "439",
    categoryName: "Avengers",
    photo: "../assets/iron-man.jpg",
    fastDelivery: false,
    rating : "5"
  },
  {
    _id: uuid(),
    title: "Marvel",
    availbility: "Out Of Stock",
    price: "400",
    categoryName: "Avengers",
    photo: "../assets/marve2.jpg",
    fastDelivery: true,
    rating : "1"
  },
  {
    _id: uuid(),
    title: "Not Today",
    availbility: "Out Of Stock",
    price: "410",
    categoryName: "Game Of Thrones",
    photo: "../assets/not-today.jpg",
    fastDelivery: true,
    rating : "1"
  },
];
