import { useCartStoreSelectors } from "../state/cart-store";

const useInitializeState = () => {
  const initialize = () => {
    const initializeCartData = useCartStoreSelectors.use.initializeCartData();

    const storeCart = localStorage.getItem("store-cart");
    const cartData = storeCart ? JSON.parse(storeCart) : {};

    initializeCartData(cartData);
  };

  return {
    initialize,
  };
};

export { useInitializeState };
