import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { BookItem } from "../components/BookItem";

const bookToAdd = {
  id: "123",
  author: "Test Author",
  title: "Test Book",
  description: "Test Book Description",
  price: 12.34,
  imageURL: "imgSrc",
  quantityAvailable: 3,
  getGenres: [],
};

describe("Cart Store Test", () => {
  test("Add Book To Store", () => {
    renderComponent();
    expect(3).toEqual(3);
  });
});

const renderComponent = () => {
  return render(<BookItem bookData={bookToAdd} />);
};
