import { Basket } from "@phosphor-icons/react";
import { useCartStoreSelectors } from "../state/cart-store";

const Cart = () => {
  const numberOfBooksInCart = useCartStoreSelectors.use.numberOfBooksInCart();

  return (
    <button>
      <Basket size={32} className="fill-on-hover transition-all" />
      <span className="text-primary">{numberOfBooksInCart}</span>
    </button>
  );
};

export { Cart };
