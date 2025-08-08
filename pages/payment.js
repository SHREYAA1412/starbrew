'use client'; // Remove this if you use the pages directory (Next.js 13+ app dir)

import { useState } from "react";

export default function PaymentPage() {
  const mockCart = [
    { id: 1, name: "Cappuccino", qty: 1, price: 150 },
    { id: 2, name: "Latte", qty: 1, price: 160 },
    { id: 3, name: "Matcha Latte", qty: 1, price: 200 },
  ];
  const total = mockCart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
    if (paymentMethod === "UPI" && !upiId.trim()) {
      alert("Please enter your UPI ID");
      return;
    }
    if (paymentMethod === "Credit Card" && cardNumber.replace(/\s/g, "").length < 12) {
      alert("Please enter a valid dummy card number");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: mockCart, paymentMethod, upiId, cardNumber, total }),
      });

      if (!res.ok) throw new Error(`Payment failed with status ${res.status}`);

      const data = await res.json();
      if (data.success) {
        setPaymentCompleted(true);
      } else {
        alert("Payment failed");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (paymentCompleted) {
    return (
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="mb-6">Thank you for your order. Your payment was processed successfully.</p>
        <button
          onClick={() => window.location.href = "/"}
          className="text-[#d4a373] hover:underline"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul className="mb-4">
        {mockCart.map(item => (
          <li key={item.id} className="flex justify-between mb-2">
            <span>{item.name} x {item.qty}</span>
            <span>₹{item.price * item.qty}</span>
          </li>
        ))}
      </ul>
      <div className="font-bold mb-6">Total: ₹{total}</div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Select Payment Method:</label>
        <select
          value={paymentMethod}
          onChange={e => setPaymentMethod(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Choose --</option>
          <option value="UPI">UPI</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
      </div>

      {paymentMethod === "UPI" && (
        <div className="mb-4">
          <label>Enter UPI ID:</label>
          <input
            type="text"
            value={upiId}
            onChange={e => setUpiId(e.target.value)}
            placeholder="example@upi"
            className="w-full p-2 border rounded"
          />
        </div>
      )}

      {paymentMethod === "Credit Card" && (
        <div className="mb-4">
          <label>Card Number (dummy):</label>
          <input
            type="text"
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012"
            className="w-full p-2 border rounded"
          />
        </div>
      )}

      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-[#a47149] hover:bg-[#8c5d36] text-white py-2 rounded font-semibold disabled:opacity-70"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}
