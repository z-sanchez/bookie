import { create } from "zustand";
import { Book } from "../types/Book";
import { createSelectors } from "./create-selectors";
import { totalBookQuantity } from "../utils/helpers/cart";

interface CartStoreInterface {
  booksInCart: Book[];
  numberOfBooksInCart: number;
  addBookToCart: (book: Book) => void;
  initializeCartData: (cartData: {
    booksInCart: Book[];
    numberOfBooksInCart: number;
  }) => void;
}

export const useCartStore = create<CartStoreInterface>()((set) => ({
  booksInCart: [],
  numberOfBooksInCart: 0,
  addBookToCart: (book: Book) =>
    set((state) => {
      const bookExistInCart = state.booksInCart.some(
        ({ id }) => id === book.id
      );

      let newBooksInCart = [...state.booksInCart];

      if (bookExistInCart) {
        newBooksInCart = newBooksInCart.map((bookInCart) => {
          if (bookInCart.id === book.id) {
            return {
              ...bookInCart,
              quantity: bookInCart.quantity + book.quantity,
            };
          }
          return bookInCart;
        });
      } else {
        newBooksInCart = [...newBooksInCart, book];
      }

      const newState = {
        booksInCart: newBooksInCart,
        numberOfBooksInCart: totalBookQuantity(newBooksInCart),
      };

      localStorage.setItem("store-cart", JSON.stringify(newState));

      return newState;
    }),
  initializeCartData: (cartData) =>
    set(() => ({
      ...cartData,
    })),
}));

export const useCartStoreSelectors = createSelectors(useCartStore);
