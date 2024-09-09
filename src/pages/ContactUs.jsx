// src/ContactUs.js
import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Get in Touch
          </h2>

          <p className="text-gray-700 mb-4">
            We would love to hear from you! Whether you have questions,
            feedback, or need assistance, feel free to reach out to us using the
            contact information below.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Contact Information:
            </h3>
            <ul className="text-gray-700">
              <li>
                <strong>Email:</strong> support@codestrix.com
              </li>
              <li>
                <strong>Phone:</strong> +91 1234567890
              </li>
              <li>
                <strong>Address:</strong> 123, Wagholi, Pune, India
              </li>
            </ul>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
