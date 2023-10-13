import scheduleStyles from "./Schedule.module.css";
import Card from "./Card";
import illustration4 from "../assets/illustration4.png";

// About

const Schedule = () => {
  return (
    <div>
      <h2 className={scheduleStyles.title}>Schedule</h2>
      <div className={scheduleStyles.applyFlex}>
        <div className={scheduleStyles.flexChild}>
          <div className={scheduleStyles.subtitle}>October 21</div>
          <Card
            title="Traditional to Trendy: Adobe Illustrator Artistry - [12PM-1PM]"
            instructor="Bella Kang & Rick Choi"
            note="Materials Needed: Laptop, Adobe Illustrator"
          />
          <Card
            title="A Journey into DIY Bookmaking - [1PM-2PM]"
            instructor="Keira Ho & Audrey Wu"
            note=""
          />
          <Card
            title="Studio Quest: Unleash Your Creativity - [2PM-3PM]"
            instructor="James Nguyen & Sylvie Lam"
            note="Materials Needed: Camera"
          />
          <Card
            title="Intro to 35mm Film Photography - [3PM-4PM]"
            instructor="Alex Oh, JR Garbe, & Lucio Yang"
            note=""
          />
          <Card
            title="Photo Sequencing: The Craft of Visual Flow - [4PM-5PM]"
            instructor="Gisella Chan, Jackie Ma, & Isabelly Duarte"
            note="Materials Needed: Laptop, Adobe Illustrator"
          />
          <Card
            title="Intro to Figma - [5PM-6PM]"
            instructor="Diya Chakraborti & Claire Hsu"
            note="Required Materials: Laptop, Figma for Education"
          />
        </div>
        <div className={scheduleStyles.flexChild}>
          <div className={scheduleStyles.subtitle}>October 22</div>
          <Card
            title="Sakuga Splash: The Art of Impact Frames - [12PM-1PM]"
            instructor="Lucy Yang"
            note="Materials Needed: iPad/laptop, Procreate/Adobe Animate"
          />
          <Card
            title="Intro to Kitsch Design - [1PM-2PM]"
            instructor="Lynn Kim"
            note="Materials Needed: Laptop, Adobe Photoshop, Adobe 
            Illustrator"
          />
          <Card
            title="Snap to Style: Transforming Photographs into Artistic Expressions - [2PM-3PM]"
            instructor="Eric Yang & Audrey Wu"
            note="Materials Needed: Laptop, Adobe Lightroom"
          />
          <Card
            title="Landscape Lens: Capturing Natural
            Beauty - [3PM-4PM]"
            instructor="Lillian Jiang, Jason Su, & Medha Iyer"
            note="Materials Needed: Laptop, Adobe Illustrator"
          />
          <Card
            title="Intro to Web Development - [4PM-5PM]"
            instructor="Sean She"
            note="Required Materials: Laptop"
          />
          <Card
            title="Exploring the Basics of UI/UX Design - [5PM-6PM]"
            instructor="Sekar Setyanto & Melody Miao"
            note=""
          />
        </div>
      </div>
      <img className={scheduleStyles.illustration4} src={illustration4}></img>
    </div>
  );
};

export default Schedule;
