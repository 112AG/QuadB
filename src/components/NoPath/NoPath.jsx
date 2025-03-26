import React from "react";
import { useNavigate } from "react-router-dom";

function NoPath() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">Oops! Page Not Found</h2>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
      >
        Go Back to LogIn
      </button>
    </div>
  );
}

export default NoPath;
