import { Basket } from "@phosphor-icons/react";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const { getNumberOfBooksInCart } = useCart();

  return (
    <button>
      <Basket size={32} className="fill-on-hover transition-all" />
      <span className="text-primary">{getNumberOfBooksInCart()}</span>
    </button>
  );
};

export { Cart };
