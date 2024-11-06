import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_goigagf',
      'template_zud3w7h',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'onaNiVq8UqJLKmLNM'
    )
    .then((response) => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      setStatus('Failed to send the message. Please try again.');
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto mt-10 bg-gray-100 rounded-lg shadow-lg sm:max-w-md sm:px-4 sm:py-6">
      <h1 className="text-2xl font-semibold mb-4 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center text-green-600">{status}</p>}
    </div>
  );
}
