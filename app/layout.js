import './globals.css';
import Script from 'next/script';
import { CartProvider } from './context/CartContext'; // ✅ fixed path

export const metadata = {
  title: 'Starbrew',
  description: 'Your perfect cup of coffee awaits.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      </head>
      <body className="bg-white text-gray-800">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
