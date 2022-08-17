import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const itemInCart = cartItems.find(item => item.id === productToAdd.id)

  if (itemInCart) {
    return cartItems.map(item => {
      if (item.id === productToAdd.id) {
        item.quantity++;
      }
      return item;
    });
  } else {
    return [...cartItems, {...productToAdd, quantity: 1}];
  }
}

export const CartContext = createContext({
  cartDisplay: false,
  setCartDisplay: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  setCartCount: () => {}
});

export const CartProvider = ({ children }) => {
  const [cartDisplay, setCartDisplay] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const value = { cartDisplay, setCartDisplay, cartItems, addItemToCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};