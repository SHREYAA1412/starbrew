import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-[#f9f5f0]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-[#6f4e37]">About Starbrew</h2>
          <p className="text-gray-700 text-lg mb-4">
            At Starbrew, we’re more than just coffee. We’re a passionate team
            of coffee lovers crafting the perfect cup using responsibly sourced beans and a whole lot of love.
          </p>
          <p className="text-gray-600 text-md">
            From the first sip to the last, we want every moment with your coffee to feel special.
            Our brews are smooth, rich, and roasted to perfection – just for you!
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/about-coffee.jpg"
            alt="About Coffee"
            className="rounded-xl shadow-xl w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
