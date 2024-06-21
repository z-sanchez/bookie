import { Book } from "../../types/Book";

export const totalBookQuantity = (books: Book[]) => {
  return books.reduce((total, book) => {
    return total + book.quantity;
  }, 0);
};
