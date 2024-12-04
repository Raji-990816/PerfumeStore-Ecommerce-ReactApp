import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, totalPrice, addToCart, removeFromCart, clearCart } = useCart();
  const handleRemoveProduct = (id) => {
    const itemToRemove = cartItems.find((item) => item.id === id);
    if (itemToRemove) {
      removeFromCart(id, itemToRemove.quantity); 
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-32 py-32 bg-gray-100">
      <div className="w-full p-10 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <>
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-6 py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md shadow-sm"
                  />

                  <div className="flex-grow">
                    <h4 className="font-semibold text-md text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.house}</p>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="text-red-600 font-bold text-md mt-2">
                      LKR {item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => addToCart(item, 1)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
                    >
                      +
                    </button>
                    <p className="text-gray-800 font-semibold">{item.quantity}</p>
                    <button
                      onClick={() => removeFromCart(item.id, 1)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemoveProduct(item.id)}
                    className="text-red-600 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Total Price: <span className="text-red-600">LKR {totalPrice.toLocaleString()}</span>
              </h3>
              <button
                onClick={clearCart}
                className="w-full mt-4 bg-[#1F3357] hover:bg-[#152B4F] text-white py-3 rounded-md text-lg"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
