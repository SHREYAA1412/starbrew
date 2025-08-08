'use client';

import React from 'react';
import Image from 'next/image';

const menuItems = [
  { src: '/images/menu/Brownie.jpg', alt: 'Brownie' },
  { src: '/images/menu/cappuccino.jpg', alt: 'Cappuccino' },
  { src: '/images/menu/caramel.jpg', alt: 'Caramel' },
  { src: '/images/menu/cinnamon.jpg', alt: 'Cinnamon' },
  { src: '/images/menu/croissant.jpg', alt: 'Croissant' },
  { src: '/images/menu/Donut.jpg', alt: 'Donut' },
  { src: '/images/menu/espresso.jpg', alt: 'Espresso' },
  { src: '/images/menu/FlatWhite.jpg', alt: 'Flat White' },
  { src: '/images/menu/IcedAmericano.jpg', alt: 'Iced Americano' },
  { src: '/images/menu/latte.jpg', alt: 'Latte' },
  { src: '/images/menu/matcha.jpg', alt: 'Matcha' },
  { src: '/images/menu/Mocha.jpg', alt: 'Mocha' },
  { src: '/images/menu/muffin.jpg', alt: 'Muffin' },
  { src: '/images/menu/pumpkin.jpg', alt: 'Pumpkin' },
];

export default function Home() {
  return (
    <div>
      <h1>Welcome to Starbrew</h1>
      <h2>Our Menu</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {menuItems.map((item) => (
          <div key={item.alt} style={{ textAlign: 'center' }}>
            <Image
              src={item.src}
              alt={item.alt}
              width={150}
              height={150}
              style={{ objectFit: 'cover', borderRadius: '10px' }}
            />
            <p>{item.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
