import { createContext, useContext, useState } from "react";

const SelectedProductContext = createContext();

export function useSelectedProduct() {
  return useContext(SelectedProductContext);
}

export function SelectedProductProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const setProductAndQuantity = (product, quantity) => {
    setSelectedProduct(product);
    setSelectedQuantity(quantity);
  };

  return (
    <SelectedProductContext.Provider
      value={{
        selectedProduct,
        selectedQuantity,
        setProductAndQuantity,
      }}
    >
      {children}
    </SelectedProductContext.Provider>
  );
}
