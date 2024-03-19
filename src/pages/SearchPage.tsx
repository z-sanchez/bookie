import { useTheme } from "@mui/material";
import { SearchBar } from "../components/SearchBar";
import { Page } from "../layouts/Page";
import { filterSearchByTerm } from "../utils/helpers/search";
import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS } from "../connectors/queries/books";
import { Book } from "../types/Book";
import { useState } from "react";

const SearchPage = () => {
  const theme = useTheme();
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const { data, loading } = useQuery(GET_ALL_BOOKS);

  const books = loading ? [] : (data.getBooks as Book[]);

  const searchValues = books.map(({ title }) => title);

  return (
    <Page>
      <p style={{ color: theme.palette.primary.main }}>
        Search Page Placeholder
      </p>
      <SearchBar
        onChange={(term) => {
          setSearchResults(filterSearchByTerm(term, searchValues));
        }}
      />
      {searchResults.map((book) => {
        return <p key={book}>{book}</p>;
      })}
    </Page>
  );
};

export { SearchPage };
