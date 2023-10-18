import aboutStyles from "./About.module.css";
import illustration3 from "../assets/illustration3.png";

// About

const About = () => {
  return (
    <div>
      <div className={aboutStyles.text}>
        <h2 className={aboutStyles.title}>About</h2>
        <p className={aboutStyles.intro}>
          Innovative Design presents HEX: Hone & Explore, a weekend of free
          graphic design, photography, and website design workshops where students
          can learn various creative skills!
        </p>
        <p className={aboutStyles.description}>
          The event is open to all students, alumni, friends, and family - with no
          experience necessary.
        </p>
        <p className={aboutStyles.description}>
          Workshops are 1-hour long, running from 12:00 PM - 6:00 PM PST on
          Saturday, October 21 and Sunday, October 22 in Social Sciences 20.
        </p>
    </div>
    <img className={aboutStyles.illustration3} src={illustration3} alt="telescope illustration"></img>
    </div>
    
  );
};

export default About;
