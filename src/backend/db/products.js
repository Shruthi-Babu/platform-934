import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "FRIENDS t-shirt",
    availbility: "In stock",
    price: "499",
    categoryName: "F.R.I.E.N.D.S.",
    photo: "/friends1.jpg"
  },
  {
    _id: uuid(),
    title: "Captain-America",
    availbility: "Out Of Stock",
    price: "450",
    categoryName: "Avengers",
    photot: "/captain-america.jpg"
  },
  {
    _id: uuid(),
    title: "Hogwarts",
    availbility: "Out Of Stock",
    price: "400",
    categoryName: "Harry Potter",
    photo: "/hogwarts.jpg"
  },
];
