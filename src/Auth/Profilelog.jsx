import React, { useState } from "react";
import axios from "axios";

const Profile = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activities, setActivities] = useState([]);

  const handleAddActivity = () => {
    setActivities([...activities, { name: "", type: "Select Type", icon: "Select Icon" }]);
  };

  const handleRemoveActivity = (index) => {
    setActivities(activities.filter((_, i) => i !== index));
  };

  const handleActivityChange = (index, field, value) => {
    setActivities(
      activities.map((activity, i) =>
        i === index ? { ...activity, [field]: value } : activity
      )
    );
  };

  const handleSubmit = () => {
    const userData = { gender, age, height, weight, activities };
    axios
      .post("", userData)
      .catch((error) => console.error("Error sending data:", error));

    setGender("");
    setAge("");
    setHeight("");
    setWeight("");
    setActivities([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-8">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          User Profile
        </h2>

        {/* Basic Information Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-medium">Gender</label>
            <select
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 font-medium">Age</label>
            <input
              type="number"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-gray-700 font-medium">Height (cm)</label>
            <input
              type="number"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height"
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-gray-700 font-medium">Weight (kg)</label>
            <input
              type="number"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
            />
          </div>
        </div>

        {/* Activities Section */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">Preferred Activities:</h3>
            <button
              onClick={handleAddActivity}
              className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition duration-200"
            >
              + Add Habit
            </button>
          </div>

          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md mt-3">
              {/* Activity Name */}
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={activity.name}
                onChange={(e) => handleActivityChange(index, "name", e.target.value)}
                placeholder="Habit Name"
              />

              {/* Activity Type and Icon in a Grid */}
              <div className="grid grid-cols-2 gap-4 mt-2">
                {/* Activity Type */}
                <div>
                  <label className="block text-gray-700 font-medium">Type</label>
                  <select
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={activity.type}
                    onChange={(e) => handleActivityChange(index, "type", e.target.value)}
                  >
                    <option value=" ">Select Type</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Icon</label>
                  <select
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={activity.icon}
                    onChange={(e) => handleActivityChange(index, "icon", e.target.value)}
                  >
                    <option value="">Select Icon</option>
                    <option value="Health">Health</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Education">Education</option>
                    <option value="Wellness">Wellness</option>
                  </select>
                </div>
              </div>

              {/* Remove Button */}
              <button
                className="bg-red-600 text-white px-3 py-1 rounded mt-3 w-full hover:bg-red-700 transition duration-200"
                onClick={() => handleRemoveActivity(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 transform hover:scale-105"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
