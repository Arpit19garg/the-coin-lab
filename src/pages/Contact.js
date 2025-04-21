import React from 'react';

export default function Contact() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1611837181464-d6d47b6f9c61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md shadow-xl rounded-2xl p-10 max-w-lg w-full text-center border border-yellow-300 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-8">
          We'd love to hear from you! Whether you have questions, feedback, or just want to say hello—reach out to us.
        </p>

        <div className="space-y-4 text-lg text-gray-700">
          <div className="hover:text-yellow-600 transition duration-300">
            📧 <span className="font-medium">Email:</span> <a href="mailto:support@thecoinlab.in" className="underline">support@thecoinlab.in</a>
          </div>
          <div className="hover:text-yellow-600 transition duration-300">
            📸 <span className="font-medium">Instagram:</span> <a href="https://instagram.com/thecoinlab_tcl" target="_blank" rel="noreferrer" className="underline">@thecoinlab_tcl</a>
          </div>
          <div className="hover:text-yellow-600 transition duration-300">
            📍 <span className="font-medium">Location:</span> Pilani, India
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/grading"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-lg px-6 py-2 rounded-lg shadow-md transition duration-300"
          >
            Grade Your Coin
          </a>
        </div>
      </div>
    </div>
  );
}
