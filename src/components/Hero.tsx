import heroStyles from "./Hero.module.css";
import illustration1 from "../assets/illustration1.png";
import illustration2 from "../assets/illustration2.png";


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
      <img className={heroStyles.illustration2} src={illustration2} alt="sattelite illustration"></img>
      <h1 className={heroStyles.title}>HEX</h1>
      <p className={heroStyles.caption}>Hone & Explore</p>
      <img className={heroStyles.illustration1} src={illustration1} alt="bear astronaut illustration"></img>
      <p className={heroStyles.subcaption}>
        <pre>October 21-22, 2023       Social Sciences 20</pre>
      </p>
    </div>
  );
};

export default Hero;
