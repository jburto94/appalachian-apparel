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

const removeCartItem = (cartItems, itemToRemove) => {
  return cartItems.filter(item => item.id !== itemToRemove.id)
}

const updateItemQuantity = (cartItems, itemToUpdate, direction) => {
  const updatedItems = cartItems.map(item => {
    if (item.id === itemToUpdate.id) {
      direction === 'increase' ? item.quantity++ : item.quantity--
    }
    return item;
  });

  if (checkForNoQuantity(updatedItems.find(item => item.id === itemToUpdate.id))) {
    return removeCartItem(cartItems, itemToUpdate);
  } else {
    return updatedItems;
  }
};

const checkForNoQuantity = item => {
  return item.quantity < 1;
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

  const addItemToCart = product => {
    setCartItems(addCartItem(cartItems, product));
  };

  const removeItemFromCart = item => {
    setCartItems(removeCartItem(cartItems, item));
  }

  const updateItemInCart = (item, direction) => {
    setCartItems(updateItemQuantity(cartItems, item, direction));
  }

  const value = {
    cartDisplay,
    setCartDisplay,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    updateItemInCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};