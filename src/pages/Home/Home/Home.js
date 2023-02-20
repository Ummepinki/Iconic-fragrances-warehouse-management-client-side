import React from "react";
import Banner from "../Banner/Banner";
import ManageItems from "../ManageItems/ManageItems";
import FreshPerfume from "./FreshPerfume";
import InstragramImage from "./InstragramImage";
import LatestNews from "./LatestNews";
import Perfume from "./Perfume";
import Perfume2 from "./Perfume2";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ManageItems></ManageItems>
      <Perfume></Perfume>
      <Perfume2></Perfume2>
      <LatestNews></LatestNews>
      <FreshPerfume></FreshPerfume>
      <Testimonials></Testimonials>
      <InstragramImage></InstragramImage>
    </div>
  );
};

export default Home;
