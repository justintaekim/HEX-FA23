import heroStyles from "./Hero.module.css";

// This file will have the navbar and the Hero

const Hero = () => {
  return (
    <div>
      <div>
        <p className={heroStyles.innod}>
          <a
            href="https://www.innovativedesign.club/"
            className={`${heroStyles.colorWhite} ${heroStyles.outline}`}
          >
            Innovative Design
          </a>
        </p>
      </div>

      <h1 className={heroStyles.title}>HEX</h1>
      <p className={heroStyles.caption}>Hone & Explore</p>
      <p className={heroStyles.subcaption}>
        <pre>October 21-22, 2023       Social Sciences 20</pre>
      </p>
    </div>
  );
};

export default Hero;
