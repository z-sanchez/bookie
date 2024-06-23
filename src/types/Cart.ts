import { Book } from "./Book";

export type CartState = {
  booksInCart: Book[];
  numberOfBooksInCart: number;
};
