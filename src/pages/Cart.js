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
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="w-10/12 md:w-4/6 lg:w-3/6 bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="text-lg md:text-xl font-semibold text-center mb-6">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-xs sm:text-sm text-gray-600 ">Your cart is empty.</p>
        ) : (
          <>
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-2 sm:gap-6 py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-18 sm:h-18 lg:w-24 lg:h-24 object-cover rounded-md shadow-lg"
                  />

                  <div className="flex-grow">
                    <h4 className="font-semibold text-sm md:text-md text-gray-800">{item.name}</h4>
                    <p className="text-xs md:text-sm text-gray-600">{item.house}</p>
                    <p className="text-xs md:text-sm text-gray-500">Size: {item.size}</p>
                    <p className="text-red-700 font-bold text-xs md:text-sm mt-2">
                      LKR {item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 sm:gap-2">
                    <button
                      onClick={() => addToCart(item, 1)}
                      className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-md"
                    >
                      +
                    </button>
                    <p className="text-gray-800 font-semibold ">{item.quantity}</p>
                    <button
                      onClick={() => removeFromCart(item.id, 1)}
                      className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-md "
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemoveProduct(item.id)}
                    className="text-red-700 hover:text-red-500 text-xs sm:text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-md md:text-lg font-semibold text-gray-800">
                Total Price: <span className="text-red-700">LKR {totalPrice.toLocaleString()}</span>
              </h3>
              <button
                onClick={clearCart}
                className="w-full mt-4 text-sm bg-[#1F3357] hover:bg-[#152B4F] text-white py-3 rounded-md"
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
