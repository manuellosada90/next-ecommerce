import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
  isOpen: false,
  items: [],
  openCart: () => {},
  closeCart: () => {},
  addItemToCart: () => {},
  getNumberOfItems: () => {},
  removeItemFromCart: () => {},
});

export default function StateWrapper({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  // Función para guardar el estado del carrito en el localStorage
  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  // Función para cargar el estado del carrito del localStorage
  const loadCartFromLocalStorage = () => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setItems(JSON.parse(cartItems));
    }
  };

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  function handleOpenCart() {
    setIsOpen(true);
  }

  function handleCloseCart() {
    setIsOpen(false);
  }

  function handleAddItemToCart(item) {
    const temp = [...items];
    const found = temp.find((product) => product.id === item.id);
    if (found) {
      found.qty++;
    } else {
      item.qty = 1;
      temp.push(item);
    }
    setItems([...temp]);
    saveCartToLocalStorage(temp); // guardar el estado del carrito en localStorage
  }

  function handleRemoveItemFromCart(item) {
    const temp = [...items];
    const found = temp.filter((product) => product.id !== item.id);
    setItems([...found]);
    saveCartToLocalStorage(found); // guardar el estado del carrito en localStorage
  }

  function handleNumberOfItems() {
    const total = items.reduce((acc, item) => acc + item.qty, 0);
    return total;
  }

  return (
    <AppContext.Provider
      value={{
        isOpen,
        items,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
        addItemToCart: handleAddItemToCart,
        getNumberOfItems: handleNumberOfItems,
        removeItemFromCart: handleRemoveItemFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
