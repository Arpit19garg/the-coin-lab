import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock credentials
const mockCredentials = {
  username: 'testuser',
  password: 'password123',
};

export default function Login({ setIsLoggedIn, setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check if the entered credentials match the mock credentials
    if (username === mockCredentials.username && password === mockCredentials.password) {
      setIsLoggedIn(true);  // Set login state to true
      setUser({ username }); // Set user details
      localStorage.setItem('isLoggedIn', 'true'); // Store login status in localStorage
      navigate('/'); // Redirect to homepage (or any route you like)
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <form className="bg-gray-800 p-8 rounded shadow-md" onSubmit={handleLogin}>
        <h2 className="text-2xl mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 mt-1 text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 mt-1 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && (
          <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
        )}
        <button
          type="submit"
          className="w-full bg-yellow-400 p-2 rounded text-black"
        >
          Login
        </button>
      </form>
    </div>
  );
}
