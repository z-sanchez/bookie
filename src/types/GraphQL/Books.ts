import { Book } from "../Book";

export type SearchBooksByTermInput = {
  limit?: number;
  startingIndex?: number;
  term: string;
};

export type SearchBooksByTermResponse = {
  searchBooks: { books: Book[]; moreResults: boolean };
};
