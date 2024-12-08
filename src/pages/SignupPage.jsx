import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-300">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-800 md:text-3xl">
          Sign Up
        </h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border-2 rounded border-black/40 focus:border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border-2 rounded border-black/40 focus:border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border-2 rounded border-black/40 focus:border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Button className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            Sign Up
          </Button>

          {/* Login Link */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 transition-colors duration-200 hover:text-blue-500"
            >
              Login here
            </Link>
          </p>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-500 bg-white">Or</span>
            </div>
          </div>

          {/* Gmail Signup */}
          <Button className="flex items-center justify-center w-full gap-2 py-2 text-black text-gray-700 transition-colors duration-200 bg-white border border-gray-300 rounded justyw-full ap-2 justifyt-center hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:border-transparent">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            Sign up with Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;