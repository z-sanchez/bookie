import { SearchBar } from "../components/SearchBar";
import { Page } from "../layouts/Page";
import { useQuery } from "@apollo/client";
import { SEARCH_BOOKS_BY_TERM } from "../connectors/queries/books";
import { Book } from "../types/Book";
import { useState } from "react";
import { SearchBooksByTermResponse } from "../types/GraphQL/Books";
import { BookItem } from "../components/BookItem";

const SearchPage = () => {
  const [results, setResults] = useState<Book[]>([]);

  const { loading } = useQuery(SEARCH_BOOKS_BY_TERM, {
    variables: {
      input: {
        limit: 3,
        term: "",
      },
    },
    onCompleted: (data: SearchBooksByTermResponse) => {
      setResults(data.searchBooks.books);
    },
  });

  return loading ? null : (
    <Page>
      <SearchBar onChange={() => null} />
      {results.map((book) => {
        return <BookItem key={book.id} bookData={book} />;
      })}
    </Page>
  );
};

export { SearchPage };
