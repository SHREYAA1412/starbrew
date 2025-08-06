'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useCart } from '../context/CartContext';  // adjust if your context path differs

export default function MenuPage() {
  const { addToCart } = useCart();

  const menuItems = [
    {
      category: 'Coffee',
      items: [
        { name: 'Espresso', desc: 'Strong & bold', price: 120, img: '/images/menu/espresso.jpg' },
        { name: 'Cappuccino', desc: 'With frothy milk', price: 150, img: '/images/menu/cappuccino.jpg' },
        { name: 'Latte', desc: 'Smooth & creamy', price: 160, img: '/images/menu/latte.jpg' },
        { name: 'Mocha', desc: 'Chocolate-flavored delight', price: 170, img: '/images/menu/mocha.jpg' },
        { name: 'Flat white', desc: 'Rich & velvety', price: 165, img: '/images/menu/flatwhite.jpg' },
      ],
    },
    {
      category: 'Pastries',
      items: [
        { name: 'Croissant', desc: 'Buttery & flaky', price: 90, img: '/images/menu/croissant.jpg' },
        { name: 'Muffin', desc: 'Choco chip goodness', price: 100, img: '/images/menu/muffin.jpg' },
        { name: 'Cinnamon Roll', desc: 'Sweet swirl delight', price: 110, img: '/images/menu/cinnamon.jpg' },
        { name: 'Donut', desc: 'Classic glazed', price: 80, img: '/images/menu/donut.jpg' },
        { name: 'Brownie', desc: 'Chocolate overload', price: 120, img: '/images/menu/brownie.jpg' },
      ],
    },
    {
      category: 'Specials',
      items: [
        { name: 'Caramel Cold Brew', desc: 'Chilled & sweet', price: 180, img: '/images/menu/caramel.jpg' },
        { name: 'Pumpkin Spice Latte', desc: 'Seasonal favorite', price: 190, img: '/images/menu/pumpkin.jpg' },
        { name: 'Iced Americano', desc: 'Chilled classic', price: 140, img: '/images/menu/icedamericano.jpg' },
        { name: 'Matcha Latte', desc: 'Earthy & creamy', price: 200, img: '/images/menu/matcha.jpg' },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#2e2a27]">Our Menu</h1>

        {menuItems.map((section) => (
          <section key={section.category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-[#4a3f3a]">{section.category}</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {section.items.map((item) => (
                <div
                  key={`${section.category}-${item.name}`}
                  className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-[#2e2a27]">{item.name}</h3>
                    <p className="text-gray-500 flex-grow">{item.desc}</p>
                    <p className="text-[#a47148] font-bold mt-2">₹{item.price}</p>
                    <button
                      onClick={() => addToCart(item)}
                      className="mt-4 bg-[#d4a373] text-white py-2 rounded hover:bg-[#b2854a] transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
