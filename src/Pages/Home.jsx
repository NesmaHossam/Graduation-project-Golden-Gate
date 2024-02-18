import React from "react";
import YourFuture from "../Components/YourFuture/YourFuture";
import MostSearched from "../Components/MostSearched/MostSearched";
import Reviews from "../Components/Reviews/Reviews";
import TopCategories from "../Components/TopCategories/TopCategories";
import BestSeller from "../Components/BestSeller/BestSeller";
const Home = () => {
  return (
    <div>
      <YourFuture />
      <MostSearched />
      <Reviews />
      <BestSeller />
      <TopCategories />
    </div>
  );
};

export default Home;
