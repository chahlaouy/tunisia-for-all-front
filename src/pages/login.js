import React, { useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen ng-gray-100">
      <div className="p-8 shadow-2xl bg-white rounded">
        <h1 className="text-2xl text-gray-800 text-center">Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 w-64">
            <label htmlFor="birthPlace" className="block mb-1">
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              className="bg-gray-100 border border-blue-300  py-px px-2 focus:outline-none rounded w-full block"
              id="email"
              autoComplete="off"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4 w-64">
            <label htmlFor="birthPlace" className="block mb-1">
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="bg-gray-100 border border-blue-300  py-px px-2 focus:outline-none rounded w-full block"
              id="email"
              autoComplete="off"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="w-full">
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
