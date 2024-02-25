import { useTheme } from "@mui/material";
import { SearchBar } from "../components/SearchBar";
import { Page } from "../layouts/Page";

const SearchPage = () => {
  const theme = useTheme();

  return (
    <Page>
      <p style={{ color: theme.palette.primary.main }}>
        Search Page Placeholder
      </p>
      <SearchBar />
    </Page>
  );
};

export { SearchPage };
