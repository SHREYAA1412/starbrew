import React from 'react';

const reviews = [
  {
    name: 'Ananya M.',
    feedback: 'Absolutely the best coffee I’ve ever had! The aroma, the taste — everything is perfect.',
    image: '/coffee1.jpg',
  },
  {
    name: 'Rohan K.',
    feedback: 'Love the cozy vibe and the smooth blend. Highly recommend to every coffee lover!',
    image: '/coffee2.jpg',
  },
  {
    name: 'Priya S.',
    feedback: 'Tried it once, and now I’m hooked! Feels like a hug in a cup.',
    image: '/coffee3.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f3eee8] py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-brown-800">What Our Customers Say</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-3">"{review.feedback}"</p>
            <h4 className="font-semibold text-brown-700">{review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
