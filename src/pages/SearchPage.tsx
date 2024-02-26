import { useTheme } from "@mui/material";
import { SearchBar } from "../components/SearchBar";
import { Page } from "../layouts/Page";
import { useState } from "react";
import { Product } from "../types/Product";
import { filterSearchByTerm } from "../utils/helpers/search";
import { possibleSearchValues } from "../__tests__/fixtures/search";

const SearchPage = () => {
  const [searchResults, setSearchResults] =
    useState<Product[]>(possibleSearchValues);
  const theme = useTheme();

  return (
    <Page>
      <p style={{ color: theme.palette.primary.main }}>
        Search Page Placeholder
      </p>
      <SearchBar
        onChange={(term) => {
          setSearchResults(filterSearchByTerm(term, possibleSearchValues));
        }}
      />
      {searchResults.map((product) => {
        return <p key={product}>{product}</p>;
      })}
    </Page>
  );
};

export { SearchPage };
