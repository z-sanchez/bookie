import { create } from "zustand";
import { Book } from "../types/Book";
import { createSelectors } from "./create-selectors";

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
      const newBooksInCart = [...state.booksInCart, book];
      const newState = {
        booksInCart: newBooksInCart,
        numberOfBooksInCart: newBooksInCart.length,
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
