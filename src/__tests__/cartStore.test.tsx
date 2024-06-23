import { describe, expect, test } from "vitest";
import { useCartStore } from "../state/cart-store";
import { render } from "@testing-library/react";
import { useEffect } from "react";

const TestComponent = ({
  getNumberOfBooks,
}: {
  getNumberOfBooks: (books: number) => void;
}) => {
  const numberOfBooksInCart = useCartStore(
    (state) => state.numberOfBooksInCart
  );

  useEffect(() => {
    getNumberOfBooks(numberOfBooksInCart);
  }, [getNumberOfBooks, numberOfBooksInCart]);

  return null;
};

describe("Cart Store Test", () => {
  test("Add Book To Store", () => {
    const getNumberOfBooks = vi.fn();

    render(<TestComponent getNumberOfBooks={getNumberOfBooks} />);

    expect(getNumberOfBooks).toBeCalledWith(0);
  });
});
