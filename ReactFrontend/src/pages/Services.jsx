// src/ServicesPage.js
import React from "react";

export default function Services() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8">
          AI-Enhanced Career Guidance System
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Aptitude Assessment
              </h3>
              <p>
                Unlock your strengths with precision. Our system utilizes
                advanced AI algorithms to assess your natural aptitudes and
                strengths, helping you identify where you’re most likely to
                excel and find job satisfaction.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Career Fit Analysis
              </h3>
              <p>
                Discover your ideal career fit. Our service analyzes your
                personal aspirations, interests, and values to ensure that the
                career paths recommended align perfectly with your long-term
                goals and passions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Skills and Experience Alignment
              </h3>
              <p>
                Bridge the gap between your skills and career goals. This
                service evaluates your current abilities and work experience,
                mapping them against potential career paths to identify
                alignment and areas for improvement.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Career Path Forecasting
              </h3>
              <p>
                Plan your future career progression with confidence. We use
                predictive analytics to forecast potential career paths based on
                industry trends and your growth potential, highlighting skill
                gaps and recommending targeted learning opportunities.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Personalized Career Recommendations
              </h3>
              <p>
                Receive career recommendations tailored specifically to your
                unique profile, incorporating your aptitudes, aspirations,
                abilities, and experiences.
              </p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Enhanced Career Satisfaction
              </h3>
              <p>
                Find a career that truly fulfills you. By matching
                recommendations with your personal interests and strengths, our
                system helps you discover more satisfying and meaningful career
                opportunities.
              </p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Improved Career Progression
              </h3>
              <p>
                Navigate your career growth with clarity. Our system provides
                actionable guidance on advancing in your career, identifying
                skill gaps, and recommending targeted learning or development
                opportunities.
              </p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Informed Decision-Making
              </h3>
              <p>
                Make career decisions with confidence. Our comprehensive
                insights and recommendations empower you to understand the
                opportunities available and the steps needed to achieve your
                goals.
              </p>
            </li>
            <li className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                User-Friendly Interface
              </h3>
              <p>
                Experience career guidance like never before. Our intuitive,
                user-friendly interface ensures that the career guidance process
                is accessible and engaging for everyone, from students to
                professionals.
              </p>
            </li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Transform Your Career Path?
          </h2>
          <p>
            Discover the power of AI-driven career guidance. Contact us today to
            learn more about how our system can help you achieve your career
            goals and find your ideal path.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg shadow ml-4 hover:bg-gray-700 transition duration-300"
            >
              Request a Demo
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
