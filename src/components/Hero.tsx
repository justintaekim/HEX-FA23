import React from "react";
import heroStyles from "./Hero.module.css";

// This file will have the navbar and the Hero

const Hero = () => {
  return (
    <div className={heroStyles.hero}>
      {/* NavBar */}
      <p>
        Just fucking come to HEX and find out why the fuck would you want to
        search the website bitch?
      </p>
    </div>
  );
};

export default Hero;
