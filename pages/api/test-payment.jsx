import { useState } from 'react';

export default function TestPayment() {
  const [method, setMethod] = useState('');

  return (
    <div className="min-h-screen bg-white p-10 text-black">
      <h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>

      <div className="space-y-2">
        <label className="block">
          <input
            type="radio"
            name="payment"
            value="UPI"
            checked={method === 'UPI'}
            onChange={(e) => setMethod(e.target.value)}
          />{' '}
          UPI
        </label>
        <label className="block">
          <input
            type="radio"
            name="payment"
            value="Credit Card"
            checked={method === 'Credit Card'}
            onChange={(e) => setMethod(e.target.value)}
          />{' '}
          Credit Card
        </label>
        <label className="block">
          <input
            type="radio"
            name="payment"
            value="Cash on Delivery"
            checked={method === 'Cash on Delivery'}
            onChange={(e) => setMethod(e.target.value)}
          />{' '}
          Cash on Delivery
        </label>
      </div>

      <p className="mt-4 text-lg">Selected: {method}</p>
    </div>
  );
}
