import { useState } from "react";

export default function PaymentPage() {
  // Replace this mock cart with your actual cart state if you have one
  const mockCart = [
    { id: 1, name: "Cappuccino", qty: 1, price: 150 },
    { id: 2, name: "Latte", qty: 1, price: 160 },
    { id: 3, name: "Matcha Latte", qty: 1, price: 200 },
  ];
  const total = mockCart.reduce((s, i) => s + i.price * i.qty, 0);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    // require a method
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    // simple validation for method-specific fields (dummy)
    if (paymentMethod === "UPI" && !upiId.trim()) {
      alert("Please enter your UPI ID");
      return;
    }
    if (paymentMethod === "Credit Card" && cardNumber.replace(/\s/g, "").length < 12) {
      alert("Please enter a valid dummy card number");
      return;
    }

    setLoading(true);
    // Simulate payment processing
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    setPaymentCompleted(true);
  };

  return (
    <div className="min-h-screen bg-[#f9f7f1] px-6 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Cart summary */}
        <h1 className="text-3xl font-bold text-[#222] mb-6">Your Cart</h1>
        <div className="space-y-6 mb-6">
          {mockCart.map((item) => (
            <div key={item.id} className="pb-4 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-lg font-semibold text-[#222]">
                    {item.name} x {item.qty}
                  </div>
                  <div className="text-sm text-[#555]">Price: ₹{item.price} each</div>
                </div>
                {/* You can add Remove button here */}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <div className="text-2xl font-bold text-[#222] mb-4">Total: ₹{total}</div>

          {/* Payment method selection - always visible */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#eee]">
            <h3 className="text-lg font-semibold text-[#5b4a2e] mb-4">Select payment method</h3>

            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  checked={paymentMethod === "UPI"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="text-sm">UPI</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="Credit Card"
                  checked={paymentMethod === "Credit Card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="text-sm">Credit Card</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={paymentMethod === "Cash on Delivery"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="text-sm">Cash on Delivery</span>
              </label>
            </div>

            {/* Show method-specific inputs (dummy) */}
            <div className="mt-4">
              {paymentMethod === "UPI" && (
                <div className="space-y-2">
                  <label className="block text-sm text-[#555]">Enter UPI ID</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="example@upi"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              )}

              {paymentMethod === "Credit Card" && (
                <div className="space-y-2">
                  <label className="block text-sm text-[#555]">Card number (dummy)</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9012"
                    className="w-full p-2 border rounded-md"
                  />
                  <div className="flex gap-3 mt-2">
                    <input type="text" placeholder="MM/YY" className="p-2 border rounded-md w-24" />
                    <input type="text" placeholder="CVV" className="p-2 border rounded-md w-20" />
                  </div>
                </div>
              )}

              {paymentMethod === "Cash on Delivery" && (
                <div className="text-sm text-[#555] mt-2">
                  You will pay in cash when our delivery person brings the order.
                </div>
              )}
            </div>

            {/* Pay button */}
            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={handlePayment}
                disabled={loading}
                className="bg-[#a47149] hover:bg-[#8c5d36] text-white font-semibold py-2 px-5 rounded-lg shadow-sm disabled:opacity-70"
              >
                {loading ? "Processing..." : "Pay Now"}
              </button>

              <button
                onClick={() => {
                  // Clear (example)
                  setPaymentMethod("");
                  setUpiId("");
                  setCardNumber("");
                  setPaymentCompleted(false);
                }}
                className="bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Success message shown below but payment options remain visible above */}
        {paymentCompleted && (
          <div className="mt-6 p-6 rounded-lg border border-[#a47149] bg-[#f0e7d9]">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white">
                {/* simple check icon */}
                <svg className="w-8 h-8 text-[#a47149]" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#a47149" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#5b4a2e]">Payment Successful!</h2>
                <p className="text-[#6b5e49] mt-1">Thank you for your order! Your coffee will be brewed soon ☕️</p>
                <p className="text-sm text-[#6b5e49] mt-2">Payment method: <strong>{paymentMethod}</strong></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
