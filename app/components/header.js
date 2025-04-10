"use client";

import { useUserAuth } from "../_utils/auth-context";

const Header = () => {
  const { user, firebaseSignOut } = useUserAuth();

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center text-white shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        <a href="/" className="hover:text-gray-400 transition">
          Urban Explorer
        </a>
      </h1>

      {/* Navigation Menu */}
      <nav>
        <ul className="flex gap-6 items-center">
          {user ? (
            <>
              <li className="text-sm text-gray-300">
                Signed in as: <span className="font-bold">{user.email}</span>
              </li>
              <li>
                <button
                  onClick={firebaseSignOut}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <li>
              <a
                href="/sign-in"
                className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
              >
                Sign In
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
