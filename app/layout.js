import './globals.css';
import { CartProvider } from './context/CartContext';  // Adjust path if needed

export const metadata = {
  title: 'Starbrew',
  description: 'Your perfect cup of coffee, brewed with love.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
