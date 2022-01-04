import phone from "../../assets/phone.png";
import bus from "../../assets/bus.png";
import football from "../../assets/football.png";

const OutputDisplay = ({ weight, output }) => {
  if (output === "Phone") {
    return PhoneDisplay({ weight });
  } else if (output === "Bus") {
    return BusDisplay({ weight });
  } else if (output === "Football") {
    return FootballDisplay({ weight });
  }
  return <div></div>;
};

const PhoneDisplay = ({ weight }) => {
  if (weight > 260 && weight < 799) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={phone} height="50" />
        ))}
      </div>
    );
  } else if (weight > 800 && weight < 1200) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={phone} height="25" />
        ))}
      </div>
    );
  } else if (weight > 1200) {
    return <div>Too large!</div>;
  } else {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={phone} height="60" />
        ))}
      </div>
    );
  }
};

const BusDisplay = ({ weight }) => {
  if (weight > 260 && weight < 799) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={bus} height="50" />
        ))}
      </div>
    );
  } else if (weight > 800 && weight < 1200) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={bus} height="25" />
        ))}
      </div>
    );
  } else if (weight > 1200) {
    return <div>Too large!</div>;
  } else {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={bus} height="60" />
        ))}
      </div>
    );
  }
};

const FootballDisplay = ({ weight }) => {
  if (weight > 260 && weight < 799) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={football} height="50" />
        ))}
      </div>
    );
  } else if (weight > 800 && weight < 1200) {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={football} height="25" />
        ))}
      </div>
    );
  } else if (weight > 1200) {
    return <div>Too large!</div>;
  } else {
    return (
      <div className="justify-content-center">
        {[...Array(Math.round(weight))].map(() => (
          <img src={football} height="60" />
        ))}
      </div>
    );
  }
};

export default OutputDisplay;
