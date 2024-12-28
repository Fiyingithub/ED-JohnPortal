import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://edjohn.codeweborganization.com.ng/api/User/Login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="bg-white border shadow-xl rounded-lg w-full max-w-lg p-6">
        <div className="text-center mb-6">
          {/* <img
            src="/logo.png"
            alt="School Logo"
            className="w-20 h-20 "
          /> */}
          <h2 className="text-2xl font-bold text-gray-700 mt-2">
            School Portal
          </h2>
        </div>
        <p>Please sign in to your account below.</p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div className="py-4 mb-4 border-t border-b">
            <p>New Application? <Link className="text-indigo-600 hover:text-indigo-800">Click here to Apply</Link></p>
          </div>

          <div className="flex gap-2 justify-end">
            <Link className="px-3 py-1 border border-indigo-600 rounded-lg hover:bg-indigo-200 transition duration-300 font-medium">Recover Password</Link>
            <button type="submit" className="px-3 py-1 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300 font-medium">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;