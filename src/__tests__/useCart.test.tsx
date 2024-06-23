import { useEffect } from "react";
import { useCart } from "../hooks/useCart";
import { act, cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Book } from "../types/Book";

const testBook: Book = {
  id: "123",
  title: "Test Book",
  author: "Test Author",
  description: "Test Description",
  imageURL: "",
  quantity: 1,
  price: 1.23,
  getGenres: [],
};

const TestComponent = ({
  getNumberOfBooks,
}: {
  getNumberOfBooks: (numberOfBooks: number) => void;
}) => {
  const { getNumberOfBooksInCart, addBookToCart } = useCart();

  useEffect(() => {
    getNumberOfBooks(getNumberOfBooksInCart());
  }, [getNumberOfBooks, getNumberOfBooksInCart]);

  return <button onClick={() => addBookToCart(testBook)}></button>;
};

describe("Test useCart Hook", () => {
  afterEach(() => {
    cleanup();
  });

  test("Get number of books when cart has one book", async () => {
    const getNumberOfBooks = vi.fn();
    const user = userEvent.setup();

    render(<TestComponent getNumberOfBooks={getNumberOfBooks} />);

    await act(async () => {
      await user.click(await screen.findByRole("button"));
    });

    expect(getNumberOfBooks).toBeCalledWith(1);
  });

  test("Get number of books when cart is empty", () => {
    const getNumberOfBooks = vi.fn();

    render(<TestComponent getNumberOfBooks={getNumberOfBooks} />);

    expect(getNumberOfBooks).toBeCalledWith(0);
  });
});
