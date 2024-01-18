import React from "react";
import burger from "../images/burger.jpg";
import biriyani from "../images/biriyani.jpg";
import pizza from "../images/pizza.jpg";
import chinese from "../images/chinese.png";
import shawarma from "../images/shawarma.png";
import pasta from "../images/pasta.png";
import salad from "../images/salad.png";
import cake from "../images/cake.png";
import pancake from "../images/pancake.png";

const Menu = () => {
  return (
    <div className="flex items-center mt-10">
      <div className="ml-12 cursor-pointer">
        <img
          src={burger}
          className="w-28 h-28 rounded-full shadow-sm shadow-black"
        />
        <p className=" font-semibold text-gray-500 text-xl ml-4">Burger</p>
      </div>
      <div className="ml-12 cursor-pointer">
        <img
          src={biriyani}
          className="w-28 h-28 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl ml-6">Asian</p>
      </div>
      <div className="ml-12 cursor-pointer">
        <img
          src={pizza}
          className="w-28 h-28 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl ml-6">Italian</p>
      </div>
      <div className="ml-12 cursor-pointer">
        <img
          src={chinese}
          className="w-28 h-28 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl ml-6">Chinese</p>
      </div>
      <div className="ml-12 cursor-pointer">
        <img
          src={shawarma}
          className="w-28 h-28 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl ml-6">Asian</p>
      </div>
      <div className="ml-12 cursor-pointer">
        <img
          src={pasta}
          className="w-28 h-28 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl ml-6">Indonesian</p>
      </div>
      <div className="ml-12 cursor-pointer">
        <img
          src={salad}
          className="w-28 h-28 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl ml-6">Vegetarian</p>
      </div>
      <div className="ml-12 cursor-pointer">
        <img
          src={cake}
          className="w-28 h-28 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl ml-6">European</p>
      </div>
      <div className="ml-12 cursor-pointer">
        <img
          src={pancake}
          className="w-28 h-28 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl ml-6">
          International
        </p>
      </div>
    </div>
  );
};

export default Menu;
