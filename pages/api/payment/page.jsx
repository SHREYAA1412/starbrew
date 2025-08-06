'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState('');

  const handlePayment = () => {
    if (!selectedOption) {
      alert('Please select a payment method');
      return;
    }

    // Simulate dummy payment success
    setTimeout(() => {
      router.push('/payment-success');
    }, 1000);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '12px',
      background: '#fff',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      fontFamily: 'Arial'
    }}>
      <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>Choose Payment Method</h1>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          <input
            type="radio"
            name="payment"
            value="upi"
            onChange={() => setSelectedOption('UPI')}
          />{' '}
          UPI
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          <input
            type="radio"
            name="payment"
            value="card"
            onChange={() => setSelectedOption('Credit Card')}
          />{' '}
          Credit Card
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          <input
            type="radio"
            name="payment"
            value="cod"
            onChange={() => setSelectedOption('Cash on Delivery')}
          />{' '}
          Cash on Delivery
        </label>
      </div>

      <button
        onClick={handlePayment}
        style={{
          padding: '12px 24px',
          backgroundColor: '#6f4e37',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Pay Now
      </button>
    </div>
  );
}
