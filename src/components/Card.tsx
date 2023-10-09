import cardStyles from "./Card.module.css";

// Card

const Card = (props) => {
  return (
    <div className={cardStyles.applyPadding}>
      <div className={cardStyles.applyBorder}>
        <h3 className={cardStyles.title}>{props.title}</h3>
        <p className={cardStyles.instructor}>{props.instructor}</p>
        {props.note ? (
          <p className={cardStyles.note}>{props.note}</p>
        ) : (
          <p>
            <br />
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
