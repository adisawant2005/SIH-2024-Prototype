// src/FAQs.js
import React from "react";

export default function FAQs() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Frequently Asked Questions
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Find Answers to Common Questions
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                What is the AI-Enhanced Career Guidance System?
              </h3>
              <p className="text-gray-700">
                The AI-Enhanced Career Guidance System is a platform that uses
                artificial intelligence to provide personalized career
                recommendations based on an individual's aptitudes, aspirations,
                abilities, and work experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                How does the system assess my career path?
              </h3>
              <p className="text-gray-700">
                The system assesses your career path through AI-driven tools
                that evaluate your natural aptitudes, strengths, aspirations,
                and experiences to recommend tailored career options and
                development opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Is my personal information secure?
              </h3>
              <p className="text-gray-700">
                Yes, we prioritize your privacy and data security. Please refer
                to our Privacy Policy for detailed information on how we handle
                and protect your personal data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                How can I get support if I have issues with the system?
              </h3>
              <p className="text-gray-700">
                If you encounter any issues, you can contact our customer
                support team through the Contact Us page or reach out directly
                at support@example.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
