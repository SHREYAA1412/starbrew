import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#2e2a27] text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Starbrew</h3>
          <p className="text-gray-400">Brewing smiles with every cup ☕</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Menu</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-300">Instagram</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-600">Facebook</a>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-10 text-sm">© 2025 Starbrew. All rights reserved.</p>
    </footer>
  );
}
