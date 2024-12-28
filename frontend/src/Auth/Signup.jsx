import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    othername: '',
    email: '',
    phone: '',
    gender: '',
    homeAddress: '',
    stateOfOrigin: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post('https://edjohn.codeweborganization.com.ng/api/User/NewUser', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="lg:flex min-h-screen bg-gray-100">
      {/* Left Section */}
      <div className="w-1/2 hidden bg-blue-600 text-white p-10 lg:flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
          <p className="text-lg mb-6">
            Be part of an amazing community. Fill in your details and let's get started.
          </p>
          <div className="bg-blue-500 p-6 rounded-lg shadow-lg">
            <p className="italic mb-2">"An easy and smooth registration process"</p>
            <p className="text-sm">
              The process was so seamless and user-friendly. Highly recommend to anyone looking to get started!
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 bg-white flex items-center justify-center p-10">
        <div className="lg:max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Let’s get started</h2>
          <form action="submit" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor='firstname' className="block text-sm font-medium text-gray-700">Firstname</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                className="mt-1 block p-2 border-b w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor='lastname' className="block text-sm font-medium text-gray-700">Lastname</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                className="mt-1 block p-2 border-b w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor='othername' className="block text-sm font-medium text-gray-700">Middlename</label>
              <input
                type="text"
                name="othername"
                value={formData.othername}
                onChange={(e) => setFormData({ ...formData, othername: e.target.value })}
                className="mt-1 block p-2 border-b w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor='email' className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block p-2 border-b w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor='phone' className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1 block p-2 border-b w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor='gender' className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="mt-1 block p-2 border-b w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor='homeAddress' className="block text-sm font-medium text-gray-700">Home Address</label>
              <input
                type="text"
                name="homeAddress"
                value={formData.homeAddress}
                onChange={(e) => setFormData({ ...formData, homeAddress: e.target.value })}
                className="mt-1 block p-2 border-b w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor='stateOfOrigin' className="block text-sm font-medium text-gray-700">State of Origin</label>
              <input
                type="text"
                name="stateOfOrigin"
                value={formData.stateOfOrigin}
                onChange={(e) => setFormData({ ...formData, stateOfOrigin: e.target.value })}
                className="mt-1 block p-2 border-b w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor='password' className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="text"
                name="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="mt-1 block p-2 border-b w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;