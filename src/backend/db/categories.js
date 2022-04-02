import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Harry Potter",
    description:"Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling."
  },
  {
    _id: uuid(),
    categoryName: "Game Of Thrones",
    description:"Game of Thrones is an American fantasy drama television series." 
	},
  {
    _id: uuid(),
    categoryName: "Avengers",
    description:"The films are based on characters that appear in American comic books published by Marvel Comics" 
	},
	{
    _id: uuid(),
    categoryName: "F.R.I.E.N.D.S.",
    description:"Friends is an American TV show revolves around six friends in their 20s and 30s who live in Manhattan, New York City." 
	}
];
