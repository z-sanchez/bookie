import { ThemeProvider } from "@emotion/react";
import { Container } from "./layouts/Container";
import { SearchPage } from "./pages/SearchPage";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SearchPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
