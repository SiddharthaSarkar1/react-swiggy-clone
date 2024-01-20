import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Restaurants from "./Restaurants";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import Offers from "./Offers";
import TopRated from "./TopRated";

const Main = () => {
  const location = useLocation();
  console.log(location);

  const [restarantsList, setRestaurantsList] = useState<any>([]);
  const [menu, setMenu] = useState("");

  const getRestaurants = async () => {
    const url = "https://restaurants222.p.rapidapi.com/search";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "Your API KEY",
        "X-RapidAPI-Host": "Your API host",
      },
      body: new URLSearchParams({
        location_id: `${location?.state?.data ?? "297701"}`,
        language: "en_US",
        currency: "USD",
        offset: "0",
      }),
    };

    try {
      const response = await fetch(url, options);
      const details = await response.json();
      setRestaurantsList(details?.results?.data);
      console.log(details);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);


  return (
    <>
      <ToastContainer autoClose={3000} />
      <div>
        <Navbar restaurantsList={restarantsList} />
        <div className="ml-44 w-8/12">
          <h1 className="mt-7 font-bold text-2xl">Best offers for you</h1>
          <Offers />
          <div className="flex flex-col justify-center items-center">
            <h1 className="mt-7 font-bold text-2xl">What's on your mind?</h1>
            <Menu />
            <h1 className="mt-7 font-bold text-2xl">
              Top restaurant chains in{" "}
              {restarantsList
                ? restarantsList[0]?.address_obj?.city
                : "Location"}
            </h1>
            <TopRated restaurantsList={restarantsList} />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="mt-7 font-bold text-2xl">
            Restaurants with online food delivery in{" "}
            {restarantsList ? restarantsList[0]?.address_obj?.city : "Location"}
          </h1>
          <Restaurants menu={""} restaurantsList={restarantsList} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
