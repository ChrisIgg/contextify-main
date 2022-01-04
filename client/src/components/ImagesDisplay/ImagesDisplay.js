// import fonts
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
// import Weight from '../../pages/Weight';
import apple from "../../assets/apple.png";
import water from "../../assets/droplet.png";

const OutputDisplay = ({ weight, output }) => {
  if (output === "Apples") {
    return ImageDisplay({ weight });
  } else if (output === "Water") {
    return WaterDisplay({ weight });
  }
  return <div></div>;
};

const ImageDisplay = ({ weight }) => {
  if (weight > 275 && weight < 799) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={apple} height="50" />
        ))}
        {/* {weight} */}
      </div>
    );
  } else if (weight > 800) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={apple} height="25" />
        ))}
        {/* {weight} */}
      </div>
    );
  } else {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={apple} height="75" />
        ))}
        {/* {weight} */}
      </div>
    );
  }
};

const WaterDisplay = ({ weight }) => {
  if (weight > 275 && weight < 799) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={water} height="50" />
        ))}
        {/* {weight} */}
      </div>
    );
  } else if (weight > 800) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={water} height="25" />
        ))}
        {/* {weight} */}
      </div>
    );
  } else {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={water} height="75" />
        ))}
        {/* {weight} */}
      </div>
    );
  }
};
// const createBanana =

export default OutputDisplay;
// \<FontAwesomeIcon icon="fa-duotone fa-banana" />
