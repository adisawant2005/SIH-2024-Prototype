// src/AboutUsPage.js
import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            At [Your Company Name], our mission is to empower individuals to
            unlock their full potential and achieve career fulfillment through
            personalized, data-driven insights. We believe that everyone
            deserves a career path that aligns with their unique strengths,
            passions, and goals. Our AI-Enhanced Career Guidance System is
            designed to provide tailored recommendations that guide users
            towards fulfilling and successful career journeys.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg">
            Our vision is to revolutionize career guidance by leveraging the
            power of artificial intelligence to offer personalized, dynamic, and
            future-oriented career recommendations. We strive to be the leading
            provider of career guidance solutions, helping individuals at all
            stages of their professional lives to make informed decisions and
            achieve their career aspirations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside pl-5 text-lg space-y-2">
            <li>
              <strong>Innovation:</strong> We are committed to using
              cutting-edge technology to provide the most effective and accurate
              career guidance.
            </li>
            <li>
              <strong>Personalization:</strong> We believe in tailoring our
              solutions to each individual’s unique profile and career goals.
            </li>
            <li>
              <strong>Empowerment:</strong> Our goal is to empower users with
              the insights and tools they need to make confident and informed
              career decisions.
            </li>
            <li>
              <strong>Integrity:</strong> We uphold the highest standards of
              integrity and transparency in all our interactions and
              recommendations.
            </li>
            <li>
              <strong>Growth:</strong> We are dedicated to continuous
              improvement and growth, both for our users and our team.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
          <p className="text-lg">
            Our team is composed of experts in career counseling, artificial
            intelligence, and data analytics, all passionate about making a
            positive impact on people’s lives. We bring together diverse
            expertise to develop innovative solutions that address the unique
            needs of each individual. Learn more about our team members and
            their backgrounds on our [Team Page]().
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg">
            We’d love to hear from you! Whether you have questions about our
            services, feedback, or just want to connect, feel free to reach out
            to us. Contact us at [email@example.com] or follow us on [social
            media platforms].
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
