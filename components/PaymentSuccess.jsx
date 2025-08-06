import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PaymentSuccess() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-[#f9f7f1] px-4 text-center transition-opacity duration-800 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        className="w-24 h-24 mb-6 stroke-[#a47149] stroke-2"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="26"
          cy="26"
          r="25"
          stroke="#a47149"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 157,
            strokeDashoffset: show ? 0 : 157,
            transition: "stroke-dashoffset 0.8s ease",
          }}
        />
        <path
          d="M14 27L22 35L38 19"
          stroke="#a47149"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 40,
            strokeDashoffset: show ? 0 : 40,
            transition: "stroke-dashoffset 0.8s 0.6s ease",
          }}
        />
      </svg>

      <h1 className="text-4xl font-semibold text-[#5b4a2e] mb-4">
        Payment Successful!
      </h1>
      <p className="text-[#7a6b53] max-w-md mb-8">
        Thank you for your order! Your coffee will be brewed soon ☕️
      </p>

      <button
        onClick={() => router.push("/")}
        className="bg-[#a47149] hover:bg-[#8c5d36] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
}
