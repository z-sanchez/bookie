import { ThemeProvider } from "@emotion/react";
import { Container } from "./layouts/Container";
import { SearchPage } from "./pages/SearchPage";
import { theme } from "./Theme";
import { useCartStoreSelectors } from "./state/cart-store";

function App() {
  const initializeCartData = useCartStoreSelectors.use.initializeCartData();

  const storeCart = localStorage.getItem("store-cart");
  const cartData = storeCart ? JSON.parse(storeCart) : {};

  initializeCartData(cartData);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SearchPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
