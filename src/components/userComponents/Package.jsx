import React from "react";

const Package = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Choose Your Perfect Plan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Plans Array for Reusability */}
          {[
            {
              name: "Starter Plan",
              price: "₹2,999",
              duration: "/3 months",
              features: [
                "Basic Profile Listing",
                "5 Match Suggestions Daily",
                "Limited Chat Access",
              ],
              buttonText: "Get Started",
              highlight: false,
            },
            {
              name: "Premium Plan",
              price: "₹5,999",
              duration: "/6 months",
              features: [
                "Priority Profile Listing",
                "Unlimited Match Suggestions",
                "Full Chat Access",
                "Verified Profile Badge",
              ],
              buttonText: "Choose Premium",
              highlight: true,
            },
            {
              name: "Platinum Plan",
              price: "₹9,999",
              duration: "/12 months",
              features: [
                "VIP Profile Highlighting",
                "Personal Matchmaking Service",
                "24/7 Priority Support",
                "Background Verification",
              ],
              buttonText: "Go Platinum",
              highlight: false,
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow relative ${
                plan.highlight ? "border-2 border-rose-500" : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-rose-500 text-white px-4 py-1 rounded-bl-lg text-sm">
                  Most Popular
                </div>
              )}
              <div className="border-b-2 pb-4">
                <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                <p className="mt-4 text-4xl font-bold text-rose-500">
                  {plan.price}
                  <span className="text-lg text-gray-500">{plan.duration}</span>
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-rose-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 text-sm font-semibold rounded-lg transition-colors ${
                  plan.highlight
                    ? "text-white bg-rose-500 hover:bg-rose-600"
                    : "text-rose-500 border-2 border-rose-500 hover:bg-rose-50"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
