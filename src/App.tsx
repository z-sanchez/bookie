import { ThemeProvider } from "@emotion/react";
import { Container } from "./layouts/Container";
import { SearchPage } from "./pages/SearchPage";
import { theme } from "./Theme";
import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS } from "./connectors/queries/books";

function App() {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);

  console.log({ data });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SearchPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
