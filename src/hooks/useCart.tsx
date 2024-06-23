import { useCartStoreSelectors } from "../state/cart-store";
import { Book } from "../types/Book";
import { totalBookQuantity } from "../utils/helpers/cart";

const useCart = () => {
  const booksInCart = useCartStoreSelectors.use.booksInCart();
  const numberOfBooksInCart = useCartStoreSelectors.use.numberOfBooksInCart();
  const updateCart = useCartStoreSelectors.use.updateCart();

  const getNumberOfBooksInCart = () => numberOfBooksInCart;

  const addBookToCart = (book: Book) => {
    const bookExistInCart = booksInCart.some(({ id }) => id === book.id);

    let newBooksInCart = [...booksInCart];

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

    updateCart(newState);
  };

  return { addBookToCart, getNumberOfBooksInCart };
};

export { useCart };
