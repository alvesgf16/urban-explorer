"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignIn() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      console.log("User is signed in:", user);
    }
  }, [user]);

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      console.log("User signed out successfully.");
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-96 border border-gray-700">
        {!user ? (
          <>
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold mb-2">Urban Explorer</h1>
              <p className="text-gray-400">
                Discover the world, one sign-in at a time.
              </p>
            </div>
            <button
              onClick={handleSignIn}
              className="w-full px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 font-semibold transition duration-200"
            >
              Sign in with GitHub
            </button>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">
              Welcome, {user.displayName}!
            </h1>
            <p className="text-gray-400 mb-4">Email: {user.email}</p>
            <div className="flex flex-col items-center gap-4 mt-4">
              <button
                onClick={() => router.push("/")}
                className="w-full px-4 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 font-semibold transition duration-200"
              >
                Go to Homepage
              </button>
              <button
                onClick={handleSignOut}
                className="w-full px-4 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 font-semibold transition duration-200"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
