'use client';

import React from 'react';

export default function PaymentButton({ amount }) {
  const handleDummyPayment = () => {
    alert(`Pretending to pay ₹${amount}... 💸\n\nPayment successful! ✅`);
  };

  return (
    <button
      onClick={handleDummyPayment}
      className="bg-[#d4a373] text-white px-6 py-3 rounded hover:bg-[#b88752]"
    >
      Pay ₹{amount}
    </button>
  );
}
