import { create } from "zustand";
import { Book } from "../types/Book";
import { createSelectors } from "./create-selectors";
import { CartState } from "../types/Cart";

interface CartStoreInterface {
  booksInCart: Book[];
  numberOfBooksInCart: number;
  updateCart: (newState: CartState) => void;
  initializeCartData: (cartData: {
    booksInCart: Book[];
    numberOfBooksInCart: number;
  }) => void;
}

export const useCartStore = create<CartStoreInterface>()((set) => ({
  booksInCart: [],
  numberOfBooksInCart: 0,
  updateCart: (newState: CartState) =>
    set(() => {
      localStorage.setItem("store-cart", JSON.stringify(newState));

      return newState;
    }),
  initializeCartData: (cartData) =>
    set(() => ({
      ...cartData,
    })),
}));

export const useCartStoreSelectors = createSelectors(useCartStore);
