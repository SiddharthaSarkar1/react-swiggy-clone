import React, { useState } from "react";
import food from "../images/food.jpg";
import swiggy from "../images/swiggy.png";
import Login from "./Login";

const headlineArray = [
  "Late night at office?",
  "Movie marathon?",
  "Unexpected guests?",
  "Game Night?",
  "Hungry?",
  "Late Night Office? ",
];

const Welcome = () => {

    const [loginModal, setLoginModal] = useState(false);

  return (
    <div className="flex">
      <div className="h-screen w-9/12 p-10">
        <div className="flex items-center">
          <img src={swiggy} className="w-48 h-14" alt="logo" />
          <h1 className="font-bold ml-60 cursor-pointer hover:text-orange-500" onClick={() => setLoginModal(true)}>
            Login
          </h1>
          <button className="w-28 bg-black text-white font-bold p-3 ml-7">
            Sign Up
          </button>
        </div>
        <h1 className="font-bold text-4xl text-gray-800 mt-14">
          Late night at office?
        </h1>
        <h1 className="mt-3 text-zinc-600 text-2xl">
          Order food from favourite restaurants near you.
        </h1>
        <input
          type="text"
          className="border border-orange-500 p-4 mt-12 w-8/12"
          placeholder="Enter your delivary location"
        />
        <button className="bg-orange-500 text-white font-bold p-4 w-36">
          Find food
        </button>
        <h1 className="text-zinc-400 text-sm mt-8">POPULAR CITIES IN INDIA</h1>
        <h1 className="font-bold text-zinc-700 mt-4">Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune & more.</h1>
      </div>
      <img src={food} className="h-screen w-5/12" alt="food_image" />
      { loginModal && <Login /> }
    </div>
  );
};

export default Welcome;
