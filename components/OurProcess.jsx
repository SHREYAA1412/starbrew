import React from 'react';

const steps = [
  {
    title: 'Select Premium Beans',
    description: 'We source the finest beans from sustainable farms.',
    icon: '🌱',
  },
  {
    title: 'Fresh Roasting',
    description: 'Beans are roasted to perfection daily.',
    icon: '🔥',
  },
  {
    title: 'Perfect Brewing',
    description: 'Each cup is brewed with love and precision.',
    icon: '☕',
  },
];

export default function OurProcess() {
  return (
    <section className="py-16 bg-[#f8f4ef] text-center">
      <h2 className="text-3xl font-bold mb-12 text-brown-800">Our Coffee Making Process</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
