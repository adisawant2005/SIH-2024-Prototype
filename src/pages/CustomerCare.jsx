// src/CustomerCare.js
import React from "react";

export default function CustomerCare() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Customer Care</h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            How Can We Help You?
          </h2>

          <p className="text-gray-700 mb-4">
            If you need assistance with any of our products or services, you’re
            in the right place. We’re here to help you resolve any issues or
            answer any questions you may have.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Support Resources:
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>FAQs:</strong> Check out our Frequently Asked Questions
                to find quick answers to common inquiries.
              </li>
              <li>
                <strong>Live Chat:</strong> Get real-time support by chatting
                with one of our customer service representatives.
              </li>
              <li>
                <strong>Phone Support:</strong> Call us directly for
                personalized assistance at +1 (555) 765-4321.
              </li>
              <li>
                <strong>Email Support:</strong> Email us at support@example.com
                for detailed queries or issues.
              </li>
            </ul>
          </div>

          <p className="text-gray-700">
            We are committed to providing excellent customer service and will do
            our best to resolve any issues as quickly as possible.
          </p>
        </div>
      </div>
    </div>
  );
}
