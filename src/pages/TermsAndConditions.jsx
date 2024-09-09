// src/TermsAndConditions.js
import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Terms & Conditions
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Welcome to Our AI-Enhanced Career Guidance System
          </h2>

          <p className="text-gray-700 mb-4">
            Please read these Terms and Conditions carefully before using our
            website. By accessing or using the site, you agree to be bound by
            these Terms. If you disagree with any part of the terms, then you
            may not access the site.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            1. Introduction
          </h3>
          <p className="text-gray-700 mb-4">
            Our AI-Enhanced Career Guidance System provides personalized career
            pathways for students and professionals. The system uses advanced
            algorithms to consider an individual’s aptitude, aspirations,
            abilities, and work experience to recommend tailored career options.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            2. User Responsibilities
          </h3>
          <p className="text-gray-700 mb-4">
            You agree to use the system for lawful purposes and not to engage in
            any conduct that may disrupt the operation of the system or infringe
            on the rights of others.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            3. Privacy Policy
          </h3>
          <p className="text-gray-700 mb-4">
            We are committed to protecting your privacy. Please refer to our
            Privacy Policy for details on how we collect, use, and safeguard
            your information.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            4. Changes to Terms
          </h3>
          <p className="text-gray-700 mb-4">
            We reserve the right to update or modify these Terms and Conditions
            at any time. Your continued use of the system after any changes
            signifies your acceptance of the new terms.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            5. Contact Us
          </h3>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms and Conditions, please
            contact us at support@example.com.
          </p>
        </div>
      </div>
    </div>
  );
}
