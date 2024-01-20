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
    <div className="flex justify-center items-center mt-10">
      <div className="w-24 h-24 m-4 cursor-pointer">
        <img
          src={burger}
          className="w-20 h-20 rounded-full shadow-sm shadow-black"
        />
        <p className=" font-semibold text-gray-500 text-xl">Burger</p>
      </div>
      <div className="w-24 h-24 m-4 cursor-pointer">
        <img
          src={biriyani}
          className="w-20 h-20 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl text-center">Asian</p>
      </div>
      <div className="w-24 h-24 m-4 cursor-pointer">
        <img
          src={pizza}
          className="w-20 h-20 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl text-center">Italian</p>
      </div>
      <div className="w-24 h-24 m-4 cursor-pointer">
        <img
          src={chinese}
          className="w-20 h-20 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl text-center">Chinese</p>
      </div>
      <div className="w-24 h-24 m-4 cursor-pointer">
        <img
          src={shawarma}
          className="w-20 h-20 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl text-center">Asian</p>
      </div>
      <div className="w-24 h-24 m-4 cursor-pointer">
        <img
          src={pasta}
          className="w-20 h-20 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl text-center">Indonesian</p>
      </div>
      <div className="w-24 h-24 m-4 cursor-pointer">
        <img
          src={salad}
          className="w-20 h-20 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl text-center">Vegetarian</p>
      </div>
      <div className="w-24 h-24 m-4 cursor-pointer">
        <img
          src={cake}
          className="w-20 h-20 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl text-center">European</p>
      </div>
      <div className="w-24 h-24 m-4 cursor-pointer">
        <img
          src={pancake}
          className="w-20 h-20 rounded-full shadow-sm shadow-black"
        />
        <p className="font-semibold text-gray-500 text-xl text-center">
          International
        </p>
      </div>
    </div>
  );
};

export default Menu;
