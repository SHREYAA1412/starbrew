import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import OurProcess from '../components/OurProcess';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Home Section */}
      <section id="home">
        <Hero />
        <Featured />
      </section>

      {/* About Section */}
<section id="about" className="min-h-screen bg-[#f9f4ef] px-6 py-16">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Image or Illustration */}
    <div>
      <img
        src="/images/about-coffee.jpg"
        alt="Our Coffee Story"
        className="rounded-xl shadow-lg"
      />
    </div>

    {/* Text Content */}
    <div className="text-center md:text-left">
      <h2 className="text-4xl font-bold mb-6 text-[#5c3d2e]">About Starbrew</h2>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to <span className="font-semibold">Starbrew</span>, where every sip is a journey.
        Our story began with a love for artisan coffee and a dream to create a cozy escape in the chaos of life.
      </p>
      <p className="text-md text-gray-600">
        We believe in sourcing responsibly, brewing passionately, and serving joy — one handcrafted cup at a time.
        Whether you're grabbing a morning pick-me-up or staying for a peaceful chat, Starbrew is your home away from home.
      </p>
    </div>
  </div>
</section>

      {/* Process Section */}
      <section>
        <OurProcess />
      </section>

      {/* Testimonials Section */}
      <section>
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-6">
            We'd love to hear from you! Fill out the form below and we'll get back to you soon.
          </p>
          <form className="space-y-4 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded"
              rows="5"
              required
            />
            <button
              type="submit"
              className="bg-[#d4a373] text-white px-6 py-3 rounded hover:bg-[#b88752]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}