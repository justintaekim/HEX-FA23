import heroStyles from "./Hero.module.css";

// This file will have the navbar and the Hero

const Hero = () => {
  return (
    <div>
      <p className={heroStyles.innod}>
        Innovative Design
      </p>
      <h1 className={heroStyles.title}>
        HEX
      </h1>
      <p className={heroStyles.caption}>
        Hone & Explore
      </p>
      <p className={heroStyles.subcaption}>
        <pre>October 21-22, 2023      Social Sciences 20</pre>
      </p>
    </div>
  );
};

export default Hero;
