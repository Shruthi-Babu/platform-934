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
    photo: "/friends1.jpg",
    fastDelivery: false,
    rating : "3"
  },
  {
    _id: uuid(),
    title: "Captain-America",
    availbility: "Out Of Stock",
    price: "450",
    categoryName: "AVENGERS",
    photo: "/captain-america.jpg",
    fastDelivery: true,
    rating : "5"
  },
  {
    _id: uuid(),
    title: "Hogwarts",
    availbility: "In stock",
    price: "400",
    categoryName: "HARRY POTTER",
    photo: "/hogwarts.jpg",
    fastDelivery: true,
    rating : "4"
  },
  {
    _id: uuid(),
    title: "Dobby",
    availbility: "In stock",
    price: "479",
    categoryName: "HARRY POTTER",
    photo: "/dobby.jpg",
    fastDelivery: false,
    rating : "3"
  },
  {
    _id: uuid(),
    title: "How you doing?",
    availbility: "In stock",
    price: "459",
    categoryName: "F.R.I.E.N.D.S.",
    photo: "/how-you-doing.jpg",
    fastDelivery: true,
    rating : "4"
  },
  {
    _id: uuid(),
    title: "On a break",
    availbility: "In stock",
    price: "459",
    categoryName: "F.R.I.E.N.D.S.",
    photo: "/on-a-break.jpg",
    fastDelivery: true,
    rating : "3"
  },
  {
    _id: uuid(),
    title: "Hugsy",
    availbility: "In stock",
    price: "459",
    categoryName: "F.R.I.E.N.D.S.",
    photo: "/hugsy.jpg",
    fastDelivery: true,
    rating : "3"
  },
  {
    _id: uuid(),
    title: "The Trio",
    availbility: "In stock",
    price: "400",
    categoryName: "HARRY POTTER",
    photo: "/trio.jpg",
    fastDelivery: true,
    rating : "4"
  },
  {
    _id: uuid(),
    title: "Iron-Man",
    availbility: "In stock",
    price: "439",
    categoryName: "AVENGERS",
    photo: "/iron-man.jpg",
    fastDelivery: false,
    rating : "5"
  },
  {
    _id: uuid(),
    title: "Marvel",
    availbility: "In stock",
    price: "400",
    categoryName: "AVENGERS",
    photo: "/marvel2.jpg",
    fastDelivery: true,
    rating : "1"
  },
  {
    _id: uuid(),
    title: "Not Today",
    availbility: "In stock",
    price: "410",
    categoryName: "GAME OF THRONES",
    photo: "/not-today.jpg",
    fastDelivery: true,
    rating : "1"
  },
];
