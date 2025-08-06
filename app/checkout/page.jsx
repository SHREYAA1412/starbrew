'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    nameOnCard: '',
  });
  const [upiId, setUpiId] = useState('');

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price) * (item.qty || 1),
    0
  );

  const openPayment = () => setShowPaymentModal(true);
  const closePayment = () => {
    setShowPaymentModal(false);
    setPaymentMethod('');
    setCardDetails({ cardNumber: '', expiry: '', cvv: '', nameOnCard: '' });
    setUpiId('');
  };

  const handleInputChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const validateCardDetails = () => {
    const { cardNumber, expiry, cvv, nameOnCard } = cardDetails;
    if (
      cardNumber.trim().length !== 16 ||
      !/^\d+$/.test(cardNumber) ||
      expiry.trim().length !== 5 || // MM/YY
      !/^\d{2}\/\d{2}$/.test(expiry) ||
      cvv.trim().length !== 3 ||
      !/^\d+$/.test(cvv) ||
      nameOnCard.trim() === ''
    ) {
      return false;
    }
    return true;
  };

  const handlePay = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    if (paymentMethod === 'Card') {
      if (!validateCardDetails()) {
        alert('Please enter valid card details');
        return;
      }
    }

    if (paymentMethod === 'UPI') {
      if (upiId.trim() === '') {
        alert('Please enter your UPI ID');
        return;
      }
    }

    alert(`Order placed successfully using ${paymentMethod}! 🎉`);
    clearCart();
    closePayment();
  };

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">Checkout Page</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">No items in cart.</p>
      ) : (
        <>
          <ul className="space-y-3 mb-6">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row justify-between border-b pb-2"
              >
                <span className="mb-1 sm:mb-0">
                  {item.name} (x{item.qty || 1})
                </span>
                <span>₹{Number(item.price) * (item.qty || 1)}</span>
              </li>
            ))}
          </ul>

          <p className="mb-6 font-semibold text-lg text-center sm:text-right">
            Total: ₹{totalPrice}
          </p>

          <div className="flex justify-center sm:justify-start">
            <button
              onClick={openPayment}
              className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition w-full sm:w-auto"
            >
              Pay Now
            </button>
          </div>

          {/* Payment Modal */}
          {showPaymentModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
              <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-auto">
                <h2 className="text-xl font-bold mb-4 text-center">Payment Details</h2>

                <div className="mb-4 flex flex-col sm:flex-row sm:space-x-6 justify-center">
                  <label className="inline-flex items-center space-x-3 mb-3 sm:mb-0">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Card"
                      checked={paymentMethod === 'Card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                  <label className="inline-flex items-center space-x-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="UPI"
                      checked={paymentMethod === 'UPI'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>UPI</span>
                  </label>
                </div>

                {/* Card Payment Form */}
                {paymentMethod === 'Card' && (
                  <div className="space-y-3 mb-4">
                    <div>
                      <label className="block mb-1 font-medium">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        maxLength={16}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:space-x-3">
                      <div className="flex-1 mb-3 sm:mb-0">
                        <label className="block mb-1 font-medium">Expiry (MM/YY)</label>
                        <input
                          type="text"
                          name="expiry"
                          value={cardDetails.expiry}
                          maxLength={5}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>
                      <div className="w-full sm:w-24">
                        <label className="block mb-1 font-medium">CVV</label>
                        <input
                          type="password"
                          name="cvv"
                          value={cardDetails.cvv}
                          maxLength={3}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">Name on Card</label>
                      <input
                        type="text"
                        name="nameOnCard"
                        value={cardDetails.nameOnCard}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                  </div>
                )}

                {/* UPI Payment Form */}
                {paymentMethod === 'UPI' && (
                  <div className="mb-4">
                    <label className="block mb-1 font-medium">Enter UPI ID</label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="example@upi"
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                )}

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={closePayment}
                    className="py-1 px-4 rounded border border-gray-300 hover:bg-gray-100"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handlePay}
                    className="bg-green-600 text-white py-1 px-4 rounded hover:bg-green-700"
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
