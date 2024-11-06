import React, { useState } from 'react';

export default function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [status, setStatus] = useState('');

  // Handle email and password form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStatus('Signing in...');
    // Add your authentication logic here (e.g., backend API call or Firebase)
    setTimeout(() => {
      setStatus('Successfully signed in!');
      // Optionally, redirect the user after successful sign-in
    }, 1000);
  };

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

        {/* Email/Password Sign-in Form */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Google Sign-In Button (without functionality for now) */}
        <div className="mt-4 text-center">
          <button 
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg mt-4"
            disabled
          >
            Sign in with Google
          </button>
        </div>

        {/* Status Message */}
        {status && <p className="mt-4 text-center text-green-600">{status}</p>}
      </div>
    </div>
  );
}
