'use client'

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    emailOrPhone: '',
    message: '',
  });

  const [modal, setModal] = useState({
    isOpen: false,
    success: false,
    message: '',
  });

  const [loading, setLoading] = useState(false); // Loading state for spinner

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading spinner

    const templateParams = {
      name: form.name,
      email: form.emailOrPhone, // Assuming emailOrPhone is for both
      message: form.message,
    };

    emailjs.send('service_jsj2pbh', 'template_yhr3jti', templateParams, '7uyqi_nxvtb_UptMj')
      .then((response) => {
        setModal({
          isOpen: true,
          success: true,
          message: 'Your message was sent successfully!',
        });
        setLoading(false); // Stop loading spinner
      }, (error) => {
        setModal({
          isOpen: true,
          success: false,
          message: 'Failed to send your message. Please try again.',
        });
        setLoading(false); // Stop loading spinner
      });
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-4">
            Feel free to reach out to us with any questions or inquiries.
          </p>
          <ul className="text-gray-600">
            <li className="mb-2">
              <strong>Address:</strong> 123 Woodwork Avenue, Craft City, CC 12345
            </li>
            <li className="mb-2">
              <strong>Phone:</strong> +233 000000000
            </li>
            <li className="mb-2">
              <strong>Email:</strong> contact@dwoodyshop.com
            </li>
            <li>
              <strong>Location:</strong> Accra, Ghana 
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">
                Email or Phone
              </label>
              <input
                type="text"
                name="emailOrPhone"
                id="emailOrPhone"
                value={form.emailOrPhone}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Email or Phone"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={loading} // Disable button when loading
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Loading Spinner Modal */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faSpinner} spin className="text-indigo-600 text-3xl" />
            <span className="ml-3 text-gray-700 text-lg">Sending...</span>
          </div>
        </div>
      )}

      {/* Success/Error Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className={`bg-white p-6 rounded-lg shadow-lg ${modal.success ? 'border-green-500' : 'border-red-500'} border-t-4`}>
            <h2 className={`text-lg font-semibold mb-4 ${modal.success ? 'text-green-500' : 'text-red-500'}`}>
              {modal.success ? 'Success!' : 'Error!'}
            </h2>
            <p className="text-gray-700 mb-4">{modal.message}</p>
            <button
              onClick={closeModal}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
