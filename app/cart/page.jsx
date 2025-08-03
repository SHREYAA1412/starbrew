'use client';

import React from 'react';
import { useCart } from '../context/CartContext';  // Adjust path if needed
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (typeof item.price === 'string' ? Number(item.price.replace(/[^\d]/g, '')) : item.price) * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link href="/menu" className="text-[#d4a373] hover:underline">
          Explore Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.name} className="flex justify-between items-center mb-4 border-b pb-2">
            <div>
              <p className="font-semibold">
                {item.name} x {item.qty}
              </p>
              <p>Price: ₹{item.price} each</p>
            </div>
            <button
              onClick={() => removeFromCart(item.name)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mt-6">Total: ₹{totalPrice}</h2>
      <div className="mt-6 flex gap-4">
        <button
          onClick={clearCart}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Clear Cart
        </button>
        <Link
          href="/checkout"
          className="bg-[#d4a373] text-white px-4 py-2 rounded hover:bg-[#b2854a]"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
