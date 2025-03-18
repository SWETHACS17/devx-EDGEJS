import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow-md fixed w-full top-0">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">MyApp</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-white hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6 py-32">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 leading-tight">
          Welcome to <span className="text-blue-600">MyApp</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg sm:text-xl max-w-2xl">
          Build amazing web applications with ease and efficiency.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105 duration-200">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Home;
