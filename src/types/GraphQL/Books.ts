import { BookResponse } from "../Book";

export type SearchBooksByTermInput = {
  limit?: number;
  startingIndex?: number;
  term: string;
};

export type SearchBooksByTermResponse = {
  searchBooks: { books: BookResponse[]; moreResults: boolean };
};
