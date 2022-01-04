import bathtub from "../../assets/bathtub.png";
import day from "../../assets/day.png";
import stopwatch from "../../assets/stopwatch.png";
import microwave from "../../assets/microwave.png";

const OutputDisplay = ({ weight, output }) => {
  if (output === "Day") {
    return DayDisplay({ weight });
  } else if (output === "Baths") {
    return HourDisplay({ weight });
  } else if (output === "Stopwatch") {
    return SecondsDisplay({ weight });
  } else if (output === "Reheating") {
    return MinutesDisplay({ weight });
  }
  return <div></div>;
};

const DayDisplay = ({ weight }) => {
  if (weight > 275 && weight < 799) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={day} height="50" />
        ))}
      </div>
    );
  } else if (weight > 800) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={day} height="25" />
        ))}
      </div>
    );
  } else {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={day} height="75" />
        ))}
      </div>
    );
  }
};

const HourDisplay = ({ weight }) => {
  if (weight > 275 && weight < 799) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={bathtub} height="50" />
        ))}
      </div>
    );
  } else if (weight > 800) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={bathtub} height="25" />
        ))}
      </div>
    );
  } else {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={bathtub} height="75" />
        ))}
      </div>
    );
  }
};

const SecondsDisplay = ({ weight }) => {
  if (weight > 275 && weight < 799) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={stopwatch} height="50" />
        ))}
      </div>
    );
  } else if (weight > 800) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={stopwatch} height="25" />
        ))}
      </div>
    );
  } else {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={stopwatch} height="75" />
        ))}
      </div>
    );
  }
};

const MinutesDisplay = ({ weight }) => {
  if (weight > 275 && weight < 799) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={microwave} height="50" />
        ))}
      </div>
    );
  } else if (weight > 800) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={microwave} height="25" />
        ))}
      </div>
    );
  } else {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={microwave} height="75" />
        ))}
      </div>
    );
  }
};

export default OutputDisplay;
