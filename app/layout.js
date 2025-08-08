import './globals.css';
import Script from 'next/script';
import { CartProvider } from './context/CartContext';

export const metadata = {
  title: 'Starbrew',
  description: 'Your perfect cup of coffee awaits.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add viewport for mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
