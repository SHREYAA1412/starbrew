import React from 'react';
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[url('/coffee-bg.jpg')] bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center px-6 md:px-4">
          <h1 className="text-3xl sm:text-5xl md:text-7xl text-white font-bold mb-6">
            Welcome to <span className="text-yellow-300">Starbrew</span>
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-full sm:max-w-xl mx-auto mb-8">
            Your perfect cup of coffee, brewed with love and passion.
          </p>

          <Link href="/menu">
            <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full transition mt-2 sm:mt-0">
              Explore Our Menu
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
