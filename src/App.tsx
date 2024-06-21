import { ThemeProvider } from "@emotion/react";
import { Container } from "./layouts/Container";
import { SearchPage } from "./pages/SearchPage";
import { theme } from "./Theme";
import { useInitializeState } from "./hooks/useInitializeState";

function App() {
  const { initialize } = useInitializeState();

  initialize();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SearchPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
