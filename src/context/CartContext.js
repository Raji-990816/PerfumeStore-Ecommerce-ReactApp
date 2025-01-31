import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); 
  const [totalPrice, setTotalPrice] = useState(0); 

  const addToCart = (item, quantity = 1) => {
      const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        const updatedCart = cartItems.map(cartItem => 
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
        );
        setCartItems(updatedCart);
      } else {
        setCartItems([...cartItems, { ...item, quantity }]);
      }

      setTotalPrice(prevPrice => prevPrice + item.price * quantity);
  };

  const removeFromCart = (id, decrementQuantity = 0) => {
      const itemToUpdate = cartItems.find(cartItem => cartItem.id === id);
  
      if (itemToUpdate.quantity > decrementQuantity) {
        setCartItems(
            cartItems.map(cartItem =>
            cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity - decrementQuantity }: cartItem
            )
        );
        setTotalPrice(prevPrice => prevPrice - itemToUpdate.price * decrementQuantity);
      } else {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
        setTotalPrice(prevPrice => prevPrice - itemToUpdate.price * itemToUpdate.quantity);
      }
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  const values = {
    cartItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
