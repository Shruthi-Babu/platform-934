import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "HARRY POTTER",
    description:"Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.",
    photo:"/hp-category.jpg"
  },
  {
    _id: uuid(),
    categoryName: "GAMES OF THRONES",
    description:"Game of Thrones is an American fantasy drama television series.",
    photo:"/got-category.jpg" 
	},
  {
    _id: uuid(),
    categoryName: "AVENGERS",
    description:"The films are based on characters that appear in American comic books published by Marvel Comics.",
    photo:"/avengers-category.jpg" 
	},
	{
    _id: uuid(),
    categoryName: "F.R.I.E.N.D.S.",
    description:"Friends is an American TV show revolves around six friends in their 20s and 30s who live in Manhattan, New York City.",
    photo:"/friends-category.jpg" 
	}
];
