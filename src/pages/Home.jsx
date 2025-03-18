import React from "react";
import "./home.css";
import "animate.css";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black p-6">
      {/* Navbar */}
      <nav className=" p-4 shadow-md fixed w-full top-0">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">HabitQuest</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="/profilelog" className="text-white ">Profile</a>
            </li>
            <li>
              <button
                type="submit"
                className="custom-button"
              >
                Sign up/Sign in
                <svg
                  className="custom-svg"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="custom-path"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6 py-32">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
          Welcome to <span className="text-blue-600">HabitQuest</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg sm:text-xl max-w-2xl">
          <b>HabitQuest</b> is a gamified habit-tracking web app that transforms daily routines into a fun and rewarding experience. Users can log habits, track progress, and earn points, badges, and streaks for consistency. With an engaging and interactive UI, HabitQuest keeps motivation high by turning self-improvement into a game. Stay on track, level up, and build better habits effortlessly! 🚀🎯
        </p>
        <button className="animate__animated animate__rubberBand mt-6 bg-blue-600 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105 duration-200">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Home;
