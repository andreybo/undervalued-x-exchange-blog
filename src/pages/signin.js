import React, { useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const SignInPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    // Here you can add your authentication logic
    console.log("Sign in:", { email, password });
    
    // For now, just simulate loading
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to marketplace or show success message
    }, 1000);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const password = formData.get("password");

    // Here you can add your registration logic
    console.log("Sign up:", { fullName, email, password });
    
    // For now, just simulate loading
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to marketplace or show success message
    }, 1000);
  };

  return (
    <Layout>
      <Seo 
        title={isSignUp ? "Sign Up" : "Sign In"} 
        description="Access exclusive real estate leads marketplace" 
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-16 px-4">
        <div className="w-full max-w-lg bg-white rounded-xl shadow-sm border border-gray-200 p-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Welcome to UndervaluedX
            </h1>
            <p className="text-gray-600 text-base">
              Access exclusive real estate leads marketplace
            </p>
          </div>

          <div className="mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-2.5 text-center font-medium rounded-md transition-all ${
                  !isSignUp
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-2.5 text-center font-medium rounded-md transition-all ${
                  isSignUp
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {!isSignUp ? (
            <form onSubmit={handleSignIn} className="space-y-5">
              <div>
                <label htmlFor="signin-email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  id="signin-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:opacity-50 text-base"
                />
              </div>
              <div>
                <label htmlFor="signin-password" className="block text-sm font-medium text-gray-900 mb-2">
                  Password
                </label>
                <input
                  id="signin-password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:opacity-50 text-base"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#0a2540] text-white py-3.5 rounded-lg font-medium hover:bg-[#0d2d4d] transition-all disabled:opacity-50 text-base mt-6"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignUp} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:opacity-50 text-base"
                />
              </div>
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:opacity-50 text-base"
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="block text-sm font-medium text-gray-900 mb-2">
                  Password
                </label>
                <input
                  id="signup-password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:opacity-50 text-base"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#0a2540] text-white py-3.5 rounded-lg font-medium hover:bg-[#0d2d4d] transition-all disabled:opacity-50 text-base mt-6"
              >
                {isLoading ? "Creating account..." : "Sign Up"}
              </button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SignInPage;
