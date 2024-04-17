import { useTheme } from "@mui/material";
import { SearchBar } from "../components/SearchBar";
import { Page } from "../layouts/Page";
import { useQuery } from "@apollo/client";
import { SEARCH_BOOKS_BY_TERM } from "../connectors/queries/books";
import { Book } from "../types/Book";
import { useState } from "react";

const SearchPage = () => {
  const theme = useTheme();
  const [results, setResults] = useState<Book[]>([]);

  const { loading } = useQuery(SEARCH_BOOKS_BY_TERM, {
    variables: {
      input: {
        limit: 3,
        term: "",
      },
    },
    onCompleted: (data: {
      searchBooks: { books: Book[]; moreResults: boolean };
    }) => {
      setResults(data.searchBooks.books);
    },
  });

  return loading ? null : (
    <Page>
      <p style={{ color: theme.palette.primary.main }}>
        Search Page Placeholder
      </p>
      <SearchBar onChange={() => null} />
      {results.map((book) => {
        return <p key={book.id}>{book.title}</p>;
      })}
    </Page>
  );
};

export { SearchPage };
