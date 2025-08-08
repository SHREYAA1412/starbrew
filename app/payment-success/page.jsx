'use client';

import Link from 'next/link';

export default function PaymentSuccess() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
      <p className="mb-6">Thank you for your order. Your payment was processed successfully.</p>
      <Link href="/" className="text-[#d4a373] hover:underline">
        Go to Home
      </Link>
    </div>
  );
}
