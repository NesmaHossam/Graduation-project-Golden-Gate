import React from "react";
import YourFuture from "../Components/YourFuture/YourFuture";
import MostSearched from "../Components/MostSearched/MostSearched";
import Reviews from "../Components/Reviews/Reviews";
import TopCategories from "../Components/TopCategories/TopCategories";

const Home = () => {
  return (
    <div>
      <YourFuture />
      <MostSearched/>
      <Reviews/>
      <TopCategories/>
    </div>
  );
};

export default Home;
