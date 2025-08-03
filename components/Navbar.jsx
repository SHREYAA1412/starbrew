'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '../app/context/CartContext';  // Adjust path if needed

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { cartItems } = useCart();
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  // Smooth scroll handler for anchor links on the homepage
  const handleScroll = (e, sectionId) => {
    e.preventDefault();

    if (pathname !== '/') {
      router.push('/');

      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#4a3f3a]">Starbrew</h1>
        <ul className="hidden md:flex gap-8 font-medium items-center">
          <li>
            <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="hover:text-[#d4a373]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-[#d4a373]">
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-[#d4a373]">
              Contact
            </a>
          </li>
          <li>
            <Link href="/menu" className="hover:text-[#d4a373]">
              Menu
            </Link>
          </li>
          <li>
            <button
              aria-label="Go to cart"
              onClick={() => router.push('/cart')}
              className="relative text-2xl hover:text-[#d4a373]"
            >
              🛒
              {totalQty > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full px-2 text-xs">
                  {totalQty}
                </span>
              )}
            </button>
          </li>
          {totalQty > 0 && (
            <li>
              <Link href="/checkout" className="font-semibold text-[#d4a373] hover:underline">
                Checkout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
