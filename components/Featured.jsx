import React from 'react';

const coffeeList = [
  { id: 1, name: 'Caramel Macchiato', image: '/coffee1.jpg' },
  { id: 2, name: 'Espresso Shot', image: '/coffee2.jpg', },
  { id: 3, name: 'Iced Latte', image: '/coffee3.jpg', },
  { id: 4, name: 'Mocha Frappe', image: '/coffee4.jpg', },
  { id: 5, name: 'Vanilla Cold Brew', image: '/coffee5.jpg', },
  { id: 6, name: 'Hazelnut Cappuccino', image: '/coffee6.jpg',  },
  { id: 7, name: 'Classic Filter Coffee', image: '/coffee7.jpg',  },
  { id: 8, name: 'Pumpkin Spice Latte', image: '/coffee8.jpg',  },
];
 
// components/FeaturedCoffees.jsx (or wherever you list coffees)


export default function Featured() {
  return (
    <section id="menu" className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-900">Our Coffees</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {coffeeList.map(({ id, name, image, price }) => (
          <div
            key={id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-yellow-700 font-bold text-lg">{price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}