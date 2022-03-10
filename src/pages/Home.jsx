import React from "react";
import Footer from "./SliderComp/Footer";
import SecondSlider from "./SliderComp/SecondSlider";
import Slider from "./SliderComp/Slider";
import Slider3 from "./SliderComp/Slider3";

const Home = () => {
  return (
    <div>
      <Slider />
      <SecondSlider />
      <Slider3 />
      <Footer />
    </div>
  );
};

export default Home;
