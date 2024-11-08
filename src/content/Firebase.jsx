import React, { useState } from 'react';
import { auth2 } from '../config/Hrfirebabe';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Firebase = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth2, email, password);
      closeModal();  // Close the modal after successful login
      navigate('/employees'); // Navigate after closing modal
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-md mx-auto relative border border-gray-200"
    >
      <button
        onClick={closeModal}
        className="absolute top-3 right-3 text-gray-800 hover:text-gray-900"
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Sign In</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-black"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-black"
        />
      </div>

      <button
        className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors"
        onClick={signIn}
      >
        Log in
      </button>
    </div>
  );
};

export default Firebase;
