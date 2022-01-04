import bathtub from "../../assets/bath.png";
import popcorn from "../../assets/popcorn.png";
import workday from "../../assets/suitcase.png";

const OutputDisplay = ({ weight, output }) => {
  if (output === "Baths") {
    return BathsDisplay({ weight });
  } else if (output === "Workday") {
    return WorkDisplay({ weight });
  } else if (output === "Popcorn") {
    return PopcornDisplay({ weight });
  }
  return <div></div>;
};

const BathsDisplay = ({ weight }) => {
  if (weight > 260 && weight < 799) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={bathtub} height="50" />
        ))}
      </div>
    );
  } else if (weight > 800 && weight < 1200) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={bathtub} height="25" />
        ))}
      </div>
    );
  } else if (weight > 1200) {
    return <div>Too large!</div>;
  } else {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={bathtub} height="60" />
        ))}
      </div>
    );
  }
};

const PopcornDisplay = ({ weight }) => {
  if (weight > 260 && weight < 799) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={popcorn} height="50" />
        ))}
      </div>
    );
  } else if (weight > 800 && weight < 1200) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={popcorn} height="25" />
        ))}
      </div>
    );
  } else if (weight > 1200) {
    return <div>Too large!</div>;
  } else {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={popcorn} height="60" />
        ))}
      </div>
    );
  }
};

const WorkDisplay = ({ weight }) => {
  if (weight > 260 && weight < 799) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={workday} height="50" />
        ))}
      </div>
    );
  } else if (weight > 800 && weight < 1200) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={workday} height="25" />
        ))}
      </div>
    );
  } else if (weight > 1200) {
    return <div>Too large!</div>;
  } else {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={workday} height="60" />
        ))}
      </div>
    );
  }
};

export default OutputDisplay;
